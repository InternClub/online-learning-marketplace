// EditProfileModal.jsx
import { useState } from "react";

const EditProfileModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    onClose(); // close modal after saving
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Edit Profile 🐬</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full border px-3 py-2 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border px-3 py-2 rounded" />
          <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" className="w-full border px-3 py-2 rounded resize-none" />
          <input name="interests" value={formData.interests} onChange={handleChange} placeholder="Interests" className="w-full border px-3 py-2 rounded" />
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
