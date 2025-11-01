import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";

export default function ArticlePrivateCard({
  title,
  // summary,
  date,
  // author,
  categories,
  slug,
  views,
  status,
}) {
  return (
    <div className="w-full max-w-90 flex flex-col border border-border rounded-xl p-6">
      <div className="flex justify-between items-center">
        <p className="text-xs text-font-secondary italic">{formatDate(date)}</p>
        {/* <p>{author}</p> */}
      </div>

      {/* title */}
      <h2 className="text-2xl font-bold">{title}</h2>

      {/* summary */}
      {/* <p className="text-font-secondary mt-2">{summary}</p> */}

      <div className="w-full bg-border/30 h-px my-4"></div>

      {/* categories */}
      <ul className="flex items-center justify-start flex-wrap">
        <li className="mr-2 text-font-secondary">Categories:</li>
        {categories.map((category) => (
          <li key={category.slug} className="mr-2 text-font-primary">
            {category.name}
            {categories.length > 1 && category.id !== categories.length && ","}
          </li>
        ))}
      </ul>

      <div className="my-2 flex items-center gap-4">
        <p className="text-font-secondary">Status: </p>
        <span className="bg-secondary/50 rounded px-2 py-1 lowercase">
          {status}
        </span>
      </div>

      <div className="flex flex-col items-start">
        <p>Total Views:</p>
        <span className="font-bold text-success text-shadow-2xs text-shadow-white">
          {views}
        </span>
      </div>

      <div className="w-full bg-border/60 relative h-px mb-4 mt-6">
        <div className="w-1 h-1 absolute left-0 bg-white bottom-0"></div>
        <div className="w-1 h-1 absolute right-0 bg-white bottom-0"></div>
      </div>

      <div className="flex flex-col items-start w-full">
        <span>Api Consumptions:</span>
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center gap-2 text-sm">
            <span className="font-bold text-xl">3,150</span>
            requests
          </p>

          <div className=" border border-border/30 flex items-end p-1 gap-1">
            <div className="bg-secondary h-5 w-3"></div>
            <div className="bg-secondary h-10 w-3"></div>
            <div className="bg-secondary h-3 w-3"></div>
            <div className="bg-secondary h-8 w-3"></div>
            <div className="bg-secondary h-7 w-3"></div>
            <div className="bg-secondary h-1 w-3"></div>
            <div className="bg-secondary h-12 w-3"></div>
          </div>
        </div>
      </div>

      <Link
        to={`/articles/${slug}`}
        className="relative mt-4 w-full flex flex-col items-center justify-center font-semibold border border-secondary bg-secondary-bis/10 py-2 overflow-hidden group"
      >
        <span className="group-hover:sr-only">SEO Score: [A+ (92%)]</span>
        <span className="sr-only group-hover:not-sr-only">Update post</span>
        <span className="text-xs font-light">Suggestions: +2 Keywords</span>

        <div className="absolute bottom-1 rounded-full bg-secondary-bis w-2/3 h-3 blur-lg"></div>
      </Link>
    </div>
  );
}
