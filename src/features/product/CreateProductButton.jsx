import Modal from "../../components/Modal";
import { useState } from "react";
import ProductForm from "./ProductForm";



// function Button({ children, onClick }) {
//   return (
//     <div
//       className="bg-gray-200 hover:bg-gray-300 flex-1 rounded-full text-gray-500 px-3 py-1.5 cursor-pointer flex items-center"
//       onClick={onClick}
//     >
//       {children}
//     </div>
//   );
// }

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
