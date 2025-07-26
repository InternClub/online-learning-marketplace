import React, { useState } from 'react';

const CourseBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    lessons: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({ ...prev, [name]: value }));
  };

  const handleLessonUpload = (e) => {
    const files = Array.from(e.target.files);
    setCourseData(prev => ({
      ...prev,
      lessons: [...prev.lessons, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course submitted:', courseData);
    setIsModalOpen(false);
    // Replace with actual submission logic
  };

  return (
    <div className="p-4">
      {/* Trigger Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create New Course
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl overflow-y-auto max-h-screen">
            <h2 className="text-2xl font-bold mb-4">Create a New Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Course Title</label>
                <input
                  type="text"
                  name="title"
                  value={courseData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g. Advanced React"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  name="description"
                  value={courseData.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows={4}
                  placeholder="Brief overview of the course..."
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Price (USD)</label>
                <input
                  type="number"
                  name="price"
                  value={courseData.price}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g. 49.99"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Category</label>
                <select
                  name="category"
                  value={courseData.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Upload Lessons</label>
                <input
                  type="file"
                  multiple
                  onChange={handleLessonUpload}
                  className="w-full p-2 border rounded"
                  accept=".mp4,.pdf,.docx"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseBuilder;
