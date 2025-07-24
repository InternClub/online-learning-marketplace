import React from 'react';

const lessons = [
  { id: 1, title: "Lesson 01: Introduction about XD", duration: "30 mins" },
  { id: 2, title: "Lesson 02: Artboards & Layers", duration: "25 mins" },
  { id: 3, title: "Lesson 03: Prototyping Basics", duration: "35 mins" },
  // Add more lessons as needed
];

const CourseLessonView = () => {
  return (
    <section className="flex flex-col lg:flex-row px-6 py-10 bg-white gap-6">
      {/* Sidebar */}
      <aside className="lg:w-1/4 bg-gray-50 rounded-lg shadow p-4 space-y-4">
        <h3 className="text-xl font-semibold mb-2">📚 Lessons & Quizzes</h3>
        <ul className="space-y-3">
          {lessons.map((lesson) => (
            <li key={lesson.id} className="flex justify-between text-sm border-b pb-2">
              <span>{lesson.title}</span>
              <span className="text-gray-500">{lesson.duration}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 rounded-lg shadow p-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Learn about Adobe XD & Prototyping</h2>
          <h3 className="text-lg text-gray-700">🧭 Introduction about XD</h3>
          <p className="text-sm text-gray-500">Duration: 1 Hour</p>
        </div>

        {/* Coin Rewards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white p-4 rounded-md shadow flex items-center justify-between">
              <div>
                <h4 className="text-md font-bold">06 Super Coins on the way</h4>
                <p className="text-sm text-gray-600">Complete lesson to earn rewards</p>
              </div>
              <span className="text-yellow-500 text-xl font-bold">🪙</span>
            </div>
          ))}
        </div>

        {/* Share & Refer Section */}
        <div className="bg-white p-4 rounded-md shadow text-sm text-gray-700">
          <h4 className="font-bold mb-2">📤 Share & Refer</h4>
          <p>Invite friends and earn coins when they complete this course with you. Unlock more content and bonus lessons!</p>
        </div>
      </main>
    </section>
  );
};

export default CourseLessonView;
