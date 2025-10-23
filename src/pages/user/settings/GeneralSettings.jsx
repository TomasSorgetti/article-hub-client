import { useParams } from "react-router-dom";
import SettingsLayout from "../../../layouts/SettingsLayout";
import { useState } from "react";

export default function GeneralSettings() {
  const { workbenchId } = useParams();
  const [form, setForm] = useState({
    name: "My Workspace",
    description: "asdasdasd asd asdasd",
  });

  return (
    <SettingsLayout title="General Settings" description="General Settings">
      <main className="mt-4 container mx-auto px-4 lg:px-16">
        <section>
          <h1 className="sr-only">General Settings {workbenchId}</h1>
          <form className="border border-border rounded max-w-md flex items-center justify-between pr-4">
            <label htmlFor="name" className="sr-only">
              Workspace Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-3 text-font-secondary"
            />
            <button className="px-6 py-1 rounded border border-border bg-border/60 cursor-pointer">
              Rename
            </button>
          </form>

          <form className="border border-border rounded max-w-md flex flex-col gap-2 mt-4">
            <label htmlFor="description" className="sr-only">
              Workspace Description:
            </label>
            <textarea
              name="description"
              id="description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="p-3 text-font-secondary w-full h-full resize-none"
            ></textarea>

            <button className="px-6 py-1 rounded border border-border bg-border/60 cursor-pointer m-4">
              Update
            </button>
          </form>
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-semibold">Danger Zone</h2>
          <div className="w-full mt-6 min-h-60 rounded border border-red-400">
            <div></div>
          </div>
        </section>
      </main>
    </SettingsLayout>
  );
}
