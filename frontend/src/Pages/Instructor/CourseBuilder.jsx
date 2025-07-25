import React, { useState } from 'react';

const CourseBuilder = () => {
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
    // Replace with actual submission logic, e.g., API call
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Course</h2>

      <label className="block mb-2 font-medium">Course Title</label>
      <input
        type="text"
        name="title"
        value={courseData.title}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="e.g. Advanced React"
        required
      />

      <label className="block mb-2 font-medium">Description</label>
      <textarea
        name="description"
        value={courseData.description}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        rows={4}
        placeholder="Brief overview of the course..."
        required
      />

      <label className="block mb-2 font-medium">Price (USD)</label>
      <input
        type="number"
        name="price"
        value={courseData.price}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="e.g. 49.99"
        required
      />

      <label className="block mb-2 font-medium">Category</label>
      <select
        name="category"
        value={courseData.category}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">Select a category</option>
        <option value="Web Development">Web Development</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
        <option value="Other">Other</option>
      </select>

      <label className="block mb-2 font-medium">Upload Lessons</label>
      <input
        type="file"
        multiple
        onChange={handleLessonUpload}
        className="w-full p-2 mb-6 border rounded"
        accept=".mp4,.pdf,.docx"
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Course
      </button>
    </form>
  );
};

export default CourseBuilder;
