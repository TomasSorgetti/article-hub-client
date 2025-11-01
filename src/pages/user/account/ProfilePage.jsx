import { useState, useRef, useEffect } from "react";
import UserLayout from "../../../layouts/UserLayout";
import { useAuthStore } from "../../../lib/store/auth";
import { UpdateProfile } from "../../../services/user";
import Avatar from "../../../components/ui/Avatar";

export default function ProfilePage() {
  const { user, setUser } = useAuthStore();
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    if (image) {
      const previewUrl = URL.createObjectURL(image);
      setImagePreview(previewUrl);
    }
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [image, imagePreview]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (username && username !== user?.username) {
      formData.append("username", username);
    }
    if (image) {
      formData.append("image", image);
    }

    try {
      const { data, error } = await UpdateProfile(formData);
      if (error) {
        throw new Error(error);
      }

      setUser(data);
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <UserLayout
      title="Profile | Article Hub – Manage your personal account details"
      description="View and edit your personal information, update your email, and manage your profile settings for your Article Hub account."
    >
      <main className="mt-32 container mx-auto">
        <h1>Profile Page</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block mb-1">Imagen de perfil:</label>
            <Avatar
              avatar={imagePreview || user?.avatar}
              alt="Avatar actual"
              handleClick={handleAvatarClick}
              className="size-60"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Nombre de usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded px-2 py-1 w-full"
              placeholder="Nombre de usuario"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Actualizar Perfil
          </button>
        </form>
      </main>
    </UserLayout>
  );
}
