import React from "react";

const ScheduleModal = ({ isOpen, formData, setFormData, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">
          Add/Edit Schedule
        </h2>
        <form className="space-y-4">
          {["day", "time", "course"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field}
              </label>
              <input
                type="text"
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={`Enter ${field}`}
              />
            </div>
          ))}
          <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSave}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;
