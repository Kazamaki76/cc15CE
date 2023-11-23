export default function AdminNavbar() {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <a
          href="/"
          className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
          aria-current="page"
        >
          Create product
        </a>
        <a
          href="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          See All product
        </a>
       
      </div>
    </div>
  );
}