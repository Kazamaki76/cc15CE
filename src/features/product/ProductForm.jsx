


export default function CreateProduct({ onSuccess, onSubmit }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const fileEl = useRef(null);
    const [allProduct, setAllProduct] = useState([]);
  
    console.log("Teste")
    const createProduct = async (data) => {
      const res = await axios.post("/product", data);
      const newProduct = res.data.post;
      setAllProduct([newProduct, ...allProduct]);
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
        await onSubmit(formData);
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
          <textarea
            placeholder={"Product name "}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
            <textarea
              placeholder={"description"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
              <input
                type="number"
                placeholder={"Product price"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </form>
          </form>
  
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
          <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
            <CreateProductButton createProduct={createProduct} />
            <ProductList allProduct={allProduct}  />
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