import React, { useState } from "react";
import ScheduleModal from "../../Components/Modal/ScheduleModal";

const initialSchedule = [
  { day: "Monday", time: "10:00 AM - 11:30 AM", course: "Tailwind CSS" },
  { day: "Tuesday", time: "2:00 PM - 3:30 PM", course: "React Basics" },
];

export default function InstructorSchedule() {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    day: "",
    time: "",
    course: "",
    location: "",
  });
  const [notification, setNotification] = useState("");

  const handleAddEdit = () => {
    setSchedule([...schedule, formData]);
    setFormData({ day: "", time: "", course: "", location: "" });
    setIsModalOpen(false);
  };

  const handleCancelLecture = (index) => {
    const canceled = schedule[index];
    const updatedSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(updatedSchedule);
    setNotification(
      `Lecture on ${canceled.day} for ${canceled.course} has been canceled. Students notified.`
    );
    setTimeout(() => setNotification(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-4 sm:p-6 rounded-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-4 sm:mb-6">
        Instructor Schedule
      </h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
      >
        Add Schedule
      </button>
      <ScheduleModal
        isOpen={isModalOpen}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setIsModalOpen(false)}
        // onSave={handleSave}
      />

      {notification && (
        <div className="mb-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded text-sm sm:text-base">
          📢 {notification}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md text-sm sm:text-base">
          <thead>
            <tr className="bg-indigo-200 text-indigo-800">
              <th className="text-left px-2 sm:px-4 py-2">Day</th>
              <th className="text-left px-2 sm:px-4 py-2">Time</th>
              <th className="text-left px-2 sm:px-4 py-2">Course</th>
              <th className="text-left px-2 sm:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((session, index) => (
              <tr key={index} className="hover:bg-indigo-100 transition">
                <td className="px-2 sm:px-4 py-2 font-medium text-indigo-700">
                  {session.day}
                </td>
                <td className="px-2 sm:px-4 py-2 text-gray-700">
                  {session.time}
                </td>
                <td className="px-2 sm:px-4 py-2 text-gray-700">
                  {session.course}
                </td>
                <td className="px-2 sm:px-4 py-2 space-x-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                  >
                    Edit
                  </button>
                  <ScheduleModal
                    isOpen={isModalOpen}
                    formData={formData}
                    setFormData={setFormData}
                    onClose={() => setIsModalOpen(false)}
                    // onSave={handleSave}
                  />
                  <button
                    onClick={() => handleCancelLecture(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Add/Edit Schedule</h2>
            <form className="space-y-4">
              {['day', 'time', 'course'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                  <input
                    type="text"
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder={`Enter ${field}`}
                  />
                </div>
              ))}
              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddEdit}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}

      <footer className="mt-10 text-center text-xs sm:text-sm text-gray-500">
        🧭 A well-planned schedule is the compass of great teaching.
      </footer>
    </div>
  );
}
