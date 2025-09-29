import { useState } from "react";
import ArticleSelector from "../../../components/ui/forms/ArticleSelector";
import CustomForm from "../../../components/ui/forms/CustomForm";
import UserLayout from "../../../layouts/UserLayout";

export default function CreateArticlePage() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    state: "published",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleState = () => {
    setForm({
      ...form,
      state:
        form.state === "published"
          ? "draft"
          : form.state === "draft"
          ? "archived"
          : "published",
    });
  };
  return (
    <UserLayout title="Create Article Page" description="Create Article Page">
      <main className="mt-32 container mx-auto">
        <form action="#">
          <div className="w-full flex justify-between">
            <h1>Create Article Page</h1>
            <div className="flex gap-4 items-center">
              <ArticleSelector state={form.state} handleChange={toggleState} />
              <button className="bg-white text-black px-6 py-2 rounded font-bold cursor-pointer">
                Save
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <div className="w-full lg:w-2/3">
              <input
                type="text"
                placeholder="Complete the title"
                name="title"
                onChange={handleChange}
                value={form.title}
                className="border-b border-border h-12 w-full"
              />

              <textarea
                name=""
                id=""
                className="border border-border h-96 w-full resize-none mt-4"
              ></textarea>
            </div>
            <div className="w-full lg:w-1/3 lg:px-8">
              <input
                type="text"
                className="border-b border-border h-12 w-full"
              />
            </div>
          </div>
        </form>
      </main>
    </UserLayout>
  );
}
