export default function ArticleSelector({ state, handleChange }) {
  return (
    <button
      type="button"
      onClick={handleChange}
      className={`px-3 py-1 text-sm rounded-full cursor-pointer border ${
        state === "published"
          ? "text-green-500 border-green-500"
          : state === "draft"
          ? "text-orange-500 border-orange-500"
          : "text-red-500 border-red-500"
      }`}
    >
      {state}
    </button>
  );
}
