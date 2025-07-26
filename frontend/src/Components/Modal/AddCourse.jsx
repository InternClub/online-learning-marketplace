import React, { useState } from 'react';

export default function AddCourseModal({ isOpen, onClose, onAddCourse }) {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    description: '',
    price: '',
    instructor: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(formData);
    setFormData({ title: '', duration: '', description: '', price: '', instructor: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold text-blue-500 mb-4">Add New Course+ </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Course Title"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (e.g. 4 weeks)"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Course Description"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
            rows="3"
            required
          />
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price (₹)"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            placeholder="Instructor Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400"
            required
          />
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-red-500 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-green-500"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
