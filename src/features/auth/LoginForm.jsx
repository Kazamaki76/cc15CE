import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err) => {
      toast.error(err.response.data.message);
    });
    login(input);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmitForm}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <LoginInput
                placeholder=""
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
              />
            </div>

            <div>
              <div
                className="flex items-center justify-between"
                onSubmit={handleSubmitForm}
              >
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <LoginInput
                  type="password"
                  placeholder=""
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
             <LoginButton/>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            ></a>
          </p>
        </div>
      </div>
    </>
  );
}
