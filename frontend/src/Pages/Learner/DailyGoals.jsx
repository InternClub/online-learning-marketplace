import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import format from "date-fns/format";

const taskData = {
  "2025-07-25": [
    { id: 1, goal: "Finish jellyfish animation", done: false },
    { id: 2, goal: "Test responsive layout", done: true },
  ],
  "2025-07-26": [{ id: 3, goal: "Refine underwater bartender", done: false }],
};

const DailyGoals = () => {
  const [tasksByDate, setTasksByDate] = useState(taskData);
  const [date, setDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState("");

  const formattedDate = format(date, "yyyy-MM-dd");
  // Removed duplicate goals, toggleGoal, and addNewGoal using taskData.
  const goals = tasksByDate[formattedDate] || [];
  const completionRate = Math.round(
    (goals.filter((g) => g.done).length / goals.length || 1) * 100
  );

  const toggleGoal = (id) => {
    const updatedGoals = goals.map((g) =>
      g.id === id ? { ...g, done: !g.done } : g
    );
    setTasksByDate({ ...tasksByDate, [formattedDate]: updatedGoals });
  };

  const addNewGoal = () => {
    if (!newTask.trim()) return;
    const newGoal = { id: Date.now(), goal: newTask, done: false };
    const existing = tasksByDate[formattedDate] || [];
    setTasksByDate({
      ...tasksByDate,
      [formattedDate]: [...existing, newGoal],
    });
    setNewTask("");
    setShowForm(false);
  };

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-700 dark:text-white">
        🧭 Daily Goals Navigator
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Calendar on the Left */}
        <div className="lg:w-1/3">
          <Calendar
            onChange={setDate}
            value={date}
            className="rounded-lg shadow-md p-4 w-full"
          />
          <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
            Selected: {formattedDate}
          </p>

          {/* Add Task Button */}
          <div className="text-center mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow"
              onClick={() => setShowForm(!showForm)}
            >
              ➕ Add Task
            </button>
          </div>

          {/* New Task Form */}
          {showForm && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter new goal..."
                className="px-4 py-2 w-72 rounded-lg border dark:bg-gray-900 dark:text-white"
              />
              <button
                onClick={addNewGoal}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Add for {formattedDate}
              </button>
            </div>
          )}
        </div>

        {/* Goals + Progress */}
        <div className="lg:w-2/3 space-y-8">
          {/* Completion Bar */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-white text-center mb-4">
              📊 Completion Progress
            </h3>
            <div className="w-full bg-gray-300 h-4 rounded-full">
              <div
                className="h-4 bg-green-500 rounded-full transition-all"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
            <p className="text-right mt-2 text-gray-600 dark:text-gray-300">
              {completionRate}% Complete
            </p>
          </div>

          {/* Goals List */}
          <div className="space-y-6">
            {goals.length ? (
              goals.map((goal) => (
                <div
                  key={goal.id}
                  className={`flex items-center justify-between px-5 py-4 rounded-lg shadow-md ${
                    goal.done
                      ? "bg-green-100 dark:bg-green-800 opacity-70"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  <span
                    className={`text-lg font-medium ${
                      goal.done
                        ? "line-through text-gray-500 dark:text-gray-300"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {goal.goal}
                  </span>
                  <button
                    onClick={() => toggleGoal(goal.id)}
                    className={`px-3 py-1 text-sm rounded ${
                      goal.done
                        ? "bg-gray-400 text-white hover:bg-gray-500"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                  >
                    {goal.done ? "Undo" : "Mark Done"}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-gray-400">
                No goals added for this date.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyGoals;
