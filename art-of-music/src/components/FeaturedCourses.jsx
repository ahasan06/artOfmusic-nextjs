'use client'
import CourseData from '../data/music_courses.json'
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

function FeaturedCourses() {
    // Filter for featured courses
    const featuredCourses = CourseData.courses.filter(course => course.isFeatured);

    return (
        <div className='md:min-h-[40rem] w-full rounded-md flex flex-col items-center bg-gray-950 mx-auto'>
            <div className="text-center py-8">
                <h1 className=" text-3xl md:text-5xl font-bold text-white mb-4">Featured Music Courses</h1>
                <p className="text-sm px-4 md:px-0 md:text-lg text-gray-300 max-w-2xl mx-auto">
                    Discover our top-rated music courses that are handpicked for aspiring musicians and enthusiasts.
                    These courses will help you master your skills and explore new musical horizons.
                </p>
            </div>

            {/* Grid for Featured Courses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {featuredCourses.map(course => (
                    <BackgroundGradient key={course.id} className="rounded-[22px] h-full max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-48 w-full object-cover rounded-xl shadow-lg shadow-slate-800 border-r-2 border-b-2"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <p className="font-semibold text-lg text-indigo-600 mb-2">${course.price}</p>
                            <p className="text-gray-500 mb-4">Instructor: {course.instructor}</p>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors duration-200">
                                Explore Course
                            </button>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>
        </div>
    );
}

export default FeaturedCourses;
