import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Certificate = ({ student, course }) => {
  const certificateRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => certificateRef.current,
  });

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-md">
      <div ref={certificateRef} className="text-center">
        <h1 className="text-3xl font-bold mb-4">Certificate of Completion 🏆</h1>
        <p className="text-lg">This certifies that</p>
        <h2 className="text-2xl font-semibold my-2">{student.name}</h2>
        <p className="text-lg">has successfully completed the course</p>
        <h2 className="text-xl italic text-blue-600">{course.title}</h2>
        <p className="mt-6 text-gray-600">Issued on: {new Date().toLocaleDateString()}</p>
      </div>

      <button
        onClick={handlePrint}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
