import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Staff from "./pages/Staff";
import StaffDetail from "./pages/StaffDetail";
import Gallery from "./pages/Gallery";
import GalleryMedium from "./pages/GalleryMedium";
import GallerySmall from "./pages/GallerySmall";
import OurCoursesList from "./pages/OurCoursesList";
import BlogSmall from "./pages/BlogSmall";
import BlogDetail from "./pages/BlogDetail";
import BlogMedium from "./pages/BlogMedium";
import CourseDetail from "./pages/CourseDetail";
import CoursesSmall from "./pages/CoursesSmall";
import EventDetail from "./pages/EventDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="iq_wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-small" element={<CoursesSmall />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/our-courses-list" element={<OurCoursesList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-medium" element={<BlogMedium />} />
          <Route path="/blog-small" element={<BlogSmall />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-detail" element={<EventDetail />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff-detail" element={<StaffDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-medium" element={<GalleryMedium />} />
          <Route path="/gallery-small" element={<GallerySmall />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
