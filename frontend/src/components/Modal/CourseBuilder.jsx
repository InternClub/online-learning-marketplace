import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../Store/API/courseSlice'; // Adjust path

const CourseBuilder = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState({
    id: Date.now(), // simple ID
    title: '',
    description: '',
    price: '',
    category: '',
    lessons: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({ ...prev, [name]: value }));
  };

  const handleLessonUpload = (e) => {
    const files = Array.from(e.target.files);
    setCourseData(prev => ({
      ...prev,
      lessons: [...prev.lessons, ...files.map(file => file.name)] // store file names
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourse(courseData));
    console.log('Course submitted to Redux:', courseData);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create New Course
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-opacity-40 flex items-center justify-center px-4 bg-transparent backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl overflow-y-auto max-h-screen">
            <h2 className="text-2xl font-bold mb-4">Create a New Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="e.g. Advanced React"
                required
              />
              <textarea
                name="description"
                value={courseData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows={4}
                placeholder="Brief overview..."
                required
              />
              <input
                type="number"
                name="price"
                value={courseData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Price (USD)"
                required
              />
              <select
                name="category"
                value={courseData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select category</option>
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>
              <input
                type="file"
                multiple
                onChange={handleLessonUpload}
                className="w-full p-2 border rounded"
                accept=".mp4,.pdf,.docx"
              />

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
