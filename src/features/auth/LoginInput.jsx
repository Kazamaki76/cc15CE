export default function LoginInput({ onChange, placeholder }) {
    return (
      <input
        type="text"
        placeholder= {placeholder}
        className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:ring-2 to-blue-300"
        onChange={onChange}
      />
    );
  }
  