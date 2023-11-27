import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/RegisterContainer";


export default function LoginPage() {
  return (
    
    <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
      <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
        <LoginForm />
        <hr className="border-gray-300 my-4"></hr>
        <RegisterContainer/>       
      </div>
    </div>
  
  );
}