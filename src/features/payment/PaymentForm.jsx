import { useRef, useState } from "react";
import Loading from "../../components/Loading";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useCart } from "../../hooks/use-cart";

export default function Payment({ onSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileEl = useRef(null);

  const navigate = useNavigate();
  let createPayment = async (data) => {
    const res = await axios.post("/order/payment", data);
    console.log(res);

    return res.data.orderId;
  };
  const { authUser } = useAuth();
  
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("userId", authUser.id);
      if (file) {
        formData.append("image", file);
      }

      setLoading(true);
      const orderId = await createPayment(formData)
      console.log("test:", orderId);

      onSuccess(orderId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      navigate("/paymenyconfirm");
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
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
        <button type="submit">Submit</button>
      </form>
      <></>
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
