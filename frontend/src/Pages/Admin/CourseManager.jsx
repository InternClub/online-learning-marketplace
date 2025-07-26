import React from "react";

const categories = [
  { id: 1, name: "Web Development", courses: 12, status: "visible" },
  { id: 2, name: "Design & Animation", courses: 8, status: "visible" },
  { id: 3, name: "AI & Machine Learning", courses: 5, status: "hidden" },
];

const CourseManager = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">🗂️ Course Manager</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Category Name</th>
              <th className="text-center px-4 py-2">Courses</th>
              <th className="text-center px-4 py-2">Status</th>
              <th className="text-center px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t">
                <td className="px-4 py-2">{cat.name}</td>
                <td className="text-center px-4 py-2">{cat.courses}</td>
                <td className="text-center px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      cat.status === "visible"
                        ? "bg-green-200 text-green-700"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {cat.status}
                  </span>
                </td>
                <td className="text-center px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="New Category Name"
          className="px-4 py-2 border rounded w-1/2"
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Add Category
        </button>
      </div>
    </div>
  );
};

export default CourseManager;
