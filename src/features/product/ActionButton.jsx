export default function ActionButton({ children, onClick, active }) {
    return (
      <button
        onClick={onClick}
        className={`py-1.5 text-sm font-semibold w-full rounded-md hover:bg-gray-200 ${
          active ? 'text-blue-600' : 'text-gray-500'
        }`}
      >
        {children}
      </button>
    );
  }