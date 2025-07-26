import React, { useState } from "react";

const CourseFeedbackForm = ({ courseTitle }) => {
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [recommend, setRecommend] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API post logic goes here
    console.log({ rating, feedback, recommend });
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        📋 Feedback for {courseTitle}
      </h2>
      {submitted ? (
        <p className="text-green-600 font-medium">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select rating</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
              <option value="4">⭐️⭐️⭐️⭐️</option>
              <option value="3">⭐️⭐️⭐️</option>
              <option value="2">⭐️⭐️</option>
              <option value="1">⭐️</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Your feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="mt-1 block w-full border rounded px-3 py-2"
              placeholder="Share your thoughts..."
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Would you recommend this course?</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={recommend === "yes"}
                  onChange={() => setRecommend("yes")}
                  required
                />
                <span className="ml-2">Yes</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={recommend === "no"}
                  onChange={() => setRecommend("no")}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default CourseFeedbackForm;
