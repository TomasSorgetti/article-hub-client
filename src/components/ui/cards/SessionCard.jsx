export default function SesisonCard({ userAgent, ip, handleDelete }) {
  return (
    <div className="flex justify-between items-center p-4 border border-border rounded-xl">
      <div>
        <h3>{userAgent}</h3>
        <p className="text-font-secondary">{ip}</p>
      </div>
      <button type="button" onClick={handleDelete} className="text-red-600">
        X
      </button>
    </div>
  );
}
