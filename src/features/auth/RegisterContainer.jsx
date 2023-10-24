import { useState } from "react";
import Modal from "../../components/Modal.jsx";
import RegisterForm from "./RegisterForm.jsx";

export default function RegisterContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setIsOpen(true)}
      >
        {" "}
        Create your account{" "}
      </button>
      <Modal title="Sign up" open={isOpen} onClose={() => setIsOpen(false)}>
        <RegisterForm />
      </Modal>
    </div>
  );
}
