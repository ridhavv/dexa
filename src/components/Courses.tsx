import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, BookOpen } from 'lucide-react';

type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  students: number;
  image: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Salesforce Administrator Certification",
    description: "Master Salesforce administration and prepare for the certification exam with hands-on practice.",
    price: 5000,
    duration: "8 weeks",
    category: "Salesforce",
    students: 1234,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "eCommerce Growth Strategies",
    description: "Learn proven strategies to scale your eCommerce business and increase revenue.",
    price: 5000,
    duration: "6 weeks",
    category: "Marketing",
    students: 856,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Professional Website Development",
    description: "Build modern, responsive websites using the latest web technologies and best practices.",
    price: 5000,
    duration: "10 weeks",
    category: "Website Dev",
    students: 967,
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Salesforce Commerce Cloud",
    description: "Master B2C Commerce development and implementation with Salesforce Commerce Cloud.",
    price: 5000,
    duration: "12 weeks",
    category: "Salesforce",
    students: 543,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  }
];

const categories = ["All", "Salesforce", "Website Dev", "Marketing"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Courses
          </motion.h2>
          <p className="text-xl text-gray-600">Enhance your skills with our industry-leading courses</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-200`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock size={18} className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users size={18} className="mr-1" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">₹{course.price}</div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <BookOpen size={18} />
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;