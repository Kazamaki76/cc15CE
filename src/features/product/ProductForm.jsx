import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading";

import ProductList from "./ProductList";

export default function Product({ onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);
  const [allProduct, setAllProduct] = useState([]);


  const createProduct = async (data) => {
    const res = await axios.post("/product/createproduct", data);
    const newProduct = res.data.post;
    setAllProduct([newProduct, ...allProduct]);
    window.location.reload();
    console.log("hello")
  };

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        console.log(res.data.products);
        setAllProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (name) {
        formData.append("name", name);
      }
      if (description) {
        formData.append("description", description);
      }

      if (price) {
        formData.append("price", price.toString());
      }

      if (file) {
        formData.append("image", file);
      }

      setLoading(true);
      createProduct(formData);

      // await onSubmit(formData); // await undefined()
      onSuccess();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form className="flex flex-col gap-4 " onSubmit={handleSubmitForm}>
        <textarea
          placeholder={"Product name "}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder={"description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder={"Product price"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {file ? (
          <div
            onClick={() => fileEl.current.click()}
            className="cursor-pointer max-h-52 overflow-hidden"
          >
            <img src={URL.createObjectURL(file)} alt="post" />
          </div>
        ) : (
          <SelectImageButton onClick={() => fileEl.current.click()} />
        )}

        <input
          type="file"
          className="hidden"
          ref={fileEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <button> Submit </button>
        <div className="flex   flex-col gap-4 bg-purple-500 ">
          <ProductList allProduct={allProduct} />
        </div>
      </form>
    </>
  );
}
function SelectImageButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2"
    >
      <div className="bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center"></div>
      <span>Add photo</span>
    </div>
  );
}
