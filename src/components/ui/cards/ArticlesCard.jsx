import { formatDate } from "../../../utils/formatDate";

export default function ArticlesCard({ title, summary, date, author }) {
  return (
    <div className="w-full max-w-[22.5rem] flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-xs text-font-secondary italic">{formatDate(date)}</p>
        {/* <p>{author}</p> */}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{summary}</p>
    </div>
  );
}
