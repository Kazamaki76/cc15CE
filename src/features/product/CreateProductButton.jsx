import Modal from "../../components/Modal";
import { useState } from "react";
import ProductForm from "./ProductForm";

function Button({ children, onClick }) {
  return (
    <div
      className="bg-gray-200 hover:bg-gray-300 flex-1 rounded-full text-gray-500 px-3 py-1.5 cursor-pointer flex items-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default function CreateProductButton({ createPost }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("createProduct", createPost);
  return (
    <div className="flex w-full justify-center">
      <div className="flex  flex-col items-center justify-center w-5/6 ">
        <Modal
          title="Create post"
          open={isOpen}
          maxWidth={32}
          onClose={() => setIsOpen(false)}
        ></Modal>
        <ProductForm onSuccess={() => {}} />
      </div>
    </div>
  );
}
