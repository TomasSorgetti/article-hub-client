import { useState } from "react";
import CustomInput from "../ui/forms/CustomInput";
import {
  workbenchValidators,
  validateWorkbenchForm,
} from "../../lib/validators/workbench.validator";

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

  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const message = workbenchValidators[name]?.(value) || "";

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const handleCreateWorkbench = async (event) => {
    event.preventDefault();

    const { isValid, errors: newErrors } = validateWorkbenchForm(form);

    setErrors(newErrors);

    if (!isValid) return;

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

          <CustomInput
            id="name"
            type="text"
            name="name"
            label="Name:"
            value={form.name}
            placeholder="My Workbench"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
          />

          <CustomInput
            id="description"
            type="textarea"
            name="description"
            label="Description:"
            value={form.description}
            placeholder="Workbench description..."
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.description}
          />

          <span role="heading" className="font-semibold text-2xl">
            Add Colaborators
          </span>

          {/* todo -> add colaborators */}
          <div className="mt-4">
            <label htmlFor="search" className="sr-only">
              search colaborators
            </label>
            <input
              id="search"
              type="text"
              name="search"
              value={""}
              placeholder="Search Colaborators..."
              className="border rounded border-border h-12 w-full p-2 text-font-secondary"
            />
          </div>
        </form>
      </aside>
    </div>
  );
}
