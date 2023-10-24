export default function ProductContent({ message, image }) {
    return (
      <div className="py-2 flex flex-col gap-4">
        {message && <span className="text-sm">{message}</span>}
        {image && (
          <div className="-mx-4">
            <img src={image} alt="post" />
          </div>
        )}
      </div>
    );
  }