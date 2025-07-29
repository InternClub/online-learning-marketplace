import React, { useState } from "react";
import image8 from "/Images/image8.png";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "../../Components/Modal/EditProfileModal";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleLearnerCart = () => navigate("/lernercart");
  const handleClassSchedule = () => navigate("/classSchedule");
  const handleWishlist = () => navigate("/learnerwishlist");
  const handleLearnerProgress = () => navigate("/learnerProgress");
  const handleMyCourses = () => navigate("/myCourses");
  const handleDailyGoals = () => navigate("/dailygoals");
  const handleInstructor = () => navigate("/instructorprofile");
  const handleAdmin = () => navigate("/admin");

  const certificates = [
    {
      id: 1,
      title: "Certificate of Completion",
      date: "2023-01-15",
      description: "Completed the React Basics course.",
    },
    {
      id: 2,
      title: "Certificate of Excellence",
      date: "2023-02-20",
      description: "Achieved excellence in the JavaScript Advanced course.",
    },
    {
      id: 3,
      title: "Certificate of Participation",
      date: "2023-03-10",
      description: "Participated in the Full Stack Development workshop.",
    },
    {
      id: 4,
      title: "Certificate of Participation",
      date: "2023-03-10",
      description: "Participated in the Full Stack Development workshop.",
    },
    {
      id: 5,
      title: "Certificate of Participation",
      date: "2023-03-10",
      description: "Participated in the Full Stack Development workshop.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[100vh] bg-[#0756a9] p-2 overflow-x-hidden">
      {/* Sidebar */}
      <div className="flex flex-col w-full lg:w-[25%] bg-[#ffffff] rounded-2xl py-10 px-4 gap-5 mb-5 lg:mb-0">
        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleMyCourses}
        >
          My Courses
        </button>
        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleWishlist}
        >
          Wishlist
        </button>
        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleLearnerCart}
        >
          Cart
        </button>

        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleClassSchedule}
        >
          Schedule
        </button>
        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleLearnerProgress}
        >
          Progress
        </button>
        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleDailyGoals}
        >
          Daily Goals
        </button>
        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleInstructor}
        >
          Instructor
        </button>
        <button
          className="btn-sidebar flex item-center justify-center w-full py-3 px-4 text-left rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-blue-100 hover:text-blue-600 transition duration-200 shadow-sm"
          onClick={handleAdmin}
        >
          Admin
        </button>
        <button
          className="w-full h-[50px] mt-auto rounded-2xl bg-red-500 text-white font-bold hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem("username"); // Or any auth key
            navigate("/login"); // Redirect after logout
          }}
        >
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full lg:w-[75%] h-full px-4">
        <div className="flex flex-col items-center gap-5">
          <p className="text-3xl sm:text-4xl font-bold text-[#d1d7fc]">
            Profile
          </p>

          <div className="flex flex-col md:flex-row w-full h-full gap-8 md:gap-20">
            <div className="flex w-full md:w-[60%] flex-col justify-start items-start gap-2">
              <p className="text-lg text-[#d1d7fc]">Name: John Doe</p>
              <p className="text-lg text-[#d1d7fc]">
                Email: john.doe@example.com
              </p>
              <p className="text-lg text-[#d1d7fc]">Phone: (123) 456-7890</p>
              <p className="text-lg text-[#d1d7fc]">
                Address: 123 Main St, City, Country
              </p>
              <p className="text-lg text-[#d1d7fc]">
                Bio: Passionate about learning and teaching.
              </p>

              <div>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-teal-600 text-white px-4 py-2 rounded"
                >
                  Edit Profile
                </button>
                <EditProfileModal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                />
              </div>
            </div>

            <div className="flex w-full md:w-[40%] justify-center md:justify-end items-center">
              <img
                src={image8}
                alt="Profile"
                className="w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* certificates */}

        <p className="text-lg text-[#d1d7fc] mt-5">Certificates:</p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-2 w-full px-5 overflow-y-scroll pt-5"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#9DCCFF transparent",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col w-full h-auto p-5 bg-white rounded-lg shadow-xl"
            >
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.date}</p>
              <p className="text-base mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
