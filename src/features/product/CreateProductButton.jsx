import Modal from "../../components/Modal";
import { useState } from "react";
import ProductForm from "./ProductForm";

export default function CreateProductButton({ createPost }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("createProduct", createPost);
  return (
    <div className="bg-white border rounded-lg px-4 py-3 shadow flex gap-2">
      product
      <Modal
        title="Create post"
        open={isOpen}
        maxWidth={32}
        onClose={() => setIsOpen(false)}
      ></Modal>
      <ProductForm onSuccess={() => {}} />
    </div>
  );
}
