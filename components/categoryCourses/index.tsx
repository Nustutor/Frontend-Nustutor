import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const CategoryCourses = () => {

    const category = usePathname().split('/courses/')[1].replace(/%20/g, '');
    
  interface Course {
    id: number;
    title: string;
    category: string;
  }
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (category) {
      // Get courses from the backend
       //using dummy data for now
      const dummyData = [
        { id: 1, title: 'Course 1', category: 'Category A' },
        { id: 2, title: 'Course 2', category: 'Category A' },
      ];
      const filteredCourses = dummyData.filter((course) => course.category === category);
      setCourses(filteredCourses);
    }
  }, [category]);

  return (
    <div className="category-courses">
      <h2>{`Courses for ${category}`}</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course">
            <h3>{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCourses;
