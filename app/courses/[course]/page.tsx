"use client"
import CategoryCourses from '@/components/categoryCourses';
import Navbar from '@/components/navbar';
import Footer
 from '@/components/footer';
export default function CoursesPage(){
  return (
    <div className="flex flex-col justify-start bg-white">
    
        <Navbar />
      <CategoryCourses />
        <Footer />
    </div>
  );
};