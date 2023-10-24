import RegisterInput from "./RegisterInput";
import { useState } from "react";
import Joi from "joi";
import InputErrorMessage from "./InputErrorMessge";
import { useAuth } from "../../hooks/use-auth";
import { toast } from "react-toastify";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().trim().required() ,
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  //   console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      toast.error(err.response?.data.message);
    });
  };

  return (
    <form
      className="grid grid-cols-2 gap-x-2 gap-y-3"
      onSubmit={handleSubmitForm}
    >
      <div>
        {" "}
        <RegisterInput
          placeholder="Firstname"
          value={input.firstName}
          onChange={handleChangeInput}
          name="firstName"
          hasError={error.firstName}
        />
        {error.firstName && <InputErrorMessage message={error.firstName} />}
      </div>
      <div>
        {" "}
        <RegisterInput
          placeholder="Lastname"
          value={input.lastName}
          onChange={handleChangeInput}
          name="lastName"
          hasError={error.lastName}
        />
        {error.lastName && <InputErrorMessage message={error.lastName} />}
      </div>
      <div className="col-span-full">
        {" "}
        <RegisterInput
          placeholder="Email "
          value={input.email}
          onChange={handleChangeInput}
          name="email"
          hasError={error.email}
        />
        {error.email && (
          <InputErrorMessage message={error.email} />
        )}
      </div>
      <div className="col-span-full">
        {" "}
        <RegisterInput
          placeholder="Password"
          value={input.password}
          onChange={handleChangeInput}
          name="password"
          hasError={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
      </div>
      <div className="col-span-full">
        {" "}
        <RegisterInput
          placeholder="Confirm Password"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          name="confirmPassword"
          hasError={error.confirmPassword}
        />
      </div>
      <div className="mx-auto col-span-full">
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {" "}
          Sign Up{" "}
        </button>
      </div>
    </form>
  );
}
