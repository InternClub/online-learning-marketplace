import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Pages/Utility/NavBar";
import Register from "./Pages/System-level/Register";
import Login from "./Pages/System-level/Login";
import PageNotFound from "./Pages/System-level/404";
import ResetPassword from "./Pages/System-level/ResetPassword";
import Homepage from "./Pages/Learner/Homepage";
import Footer from "./Pages/Utility/Footer";
import Courses from "./Pages/Learner/Courses";
import CourseDetails from "./Pages/Learner/CourseDetails";
import Profile from "./Pages/Learner/Profile";
import Search from "./Components/Search/Search";
import CourseCatalog from "./Pages/Learner/CourseCatalog";
import LearnerCart from "./Pages/Learner/Cart";
import PrivacyPolicy from "./TMC/Privacy";
import TermsAndConditions from "./TMC/TMC";
import CourseLessonView from "./Components/Classroom/ClassSchedule";
import Wishlist from "./Pages/Learner/Wishlist";
import Progress from "./Pages/Learner/Progress";
import MyCourses from "./Pages/Learner/MyCourses";
import DailyGoals from "./Pages/Learner/DailyGoals";
import PublishedCourses from "./Pages/Instructor/Published";
import Dashboard from "./Pages/Instructor/Dashboard";
import EnrolledStudents from "./Pages/Instructor/CourseData";
import InstructorSchedule from "./Pages/Instructor/Schedule";
import AdminDashboard from "./Pages/Admin/DashboardAdmin";

function App() {
  const initialTheme = localStorage.getItem("themeMode") || "light";

  return (
    <div
      className={`primary ${initialTheme === "dark" ? "bg-black" : "light"}`}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />

          <Route index path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/coursecatlog" element={<CourseCatalog />} />
          <Route path="/lernercart" element={<LearnerCart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/tmc" element={<TermsAndConditions />} />
          <Route path="/lernerprofile" element={<Profile />} />
          <Route path="/classSchedule" element={<CourseLessonView />} />
          <Route path="/learnerwishlist" element={<Wishlist />} />
          <Route path="/learnerProgress" element={<Progress />} />
          <Route path="/myCourses" element={<MyCourses />} />
          <Route path="/dailygoals" element={<DailyGoals />} />
          <Route path="/instructorprofile" element={<Dashboard />} />
          <Route path="/published" element={<PublishedCourses />} />
          <Route path="/enrolledstudents" element={<EnrolledStudents />} />
          <Route path="/instructorschedule" element={<InstructorSchedule />} />
          <Route path="/instructorprofile" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
