import { useState } from "react";

export default function AddNewWorkbenchModal({
  isOpen,
  toggleModal = () => {},
  createWorkbench = () => {},
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    colaborators: [],
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateWorkbench = async (event) => {
    event.preventDefault();
    createWorkbench(form);
  };

  return (
    <div
      onClick={toggleModal}
      className={`bg-black/50 fixed top-0 left-0 z-200 w-full h-screen flex items-start justify-end ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="w-100 h-screen bg-card px-6 py-10 border-l border-border"
      >
        <form onSubmit={handleCreateWorkbench} className="space-y-6">
          <div className="flex items-center justify-between">
            <div></div>
            <button
              type="submit"
              className="px-3 py-1 bg-primary rounded cursor-pointer"
            >
              Create
            </button>
          </div>
          <span role="heading" className="font-semibold text-2xl">
            Create a New Workbench
          </span>
          <p className="text-font-secondary mt-2">
            We´ll get you up and running so you can verify your personal
            information and customize your account
          </p>

          <div>
            <label htmlFor="name" className="font-semibold">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="My Workbench"
              className="border rounded border-border h-12 w-full p-2 text-font-secondary"
            />
          </div>
          <div>
            <label htmlFor="description" className="font-semibold">
              Description:
            </label>
            <textarea
              id="description"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="My Workbench"
              className="border rounded border-border h-32 w-full p-2 text-font-secondary resize-none"
            />
          </div>

          <span role="heading" className="font-semibold text-2xl">
            Add Colaborators
          </span>

          <div className="mt-4">
            <label htmlFor="search" className="sr-only">
              search colaborators
            </label>
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Search Colaborators..."
              className="border rounded border-border h-12 w-full p-2 text-font-secondary"
            />
          </div>
        </form>
      </aside>
    </div>
  );
}
