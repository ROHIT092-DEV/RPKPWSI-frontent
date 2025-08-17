import Project from "./Project"

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
  rating: number;
  createdAt: string;
  updatedAt: string;
}


function Projects() {

  const projects:ProjectType[] = [
  {
    "id": 1,
    "title": "E-Commerce Shoe Store",
    "description": "A full-stack e-commerce platform for shoes with product catalog, shopping cart, order management, and secure checkout. The backend is powered by Node.js and Express with MongoDB, while the frontend is built using Next.js with Tailwind CSS for responsive UI. Features include role-based authentication, admin dashboard for product management, and Cloudinary integration for image uploads.",
    "image": "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=800",
    "link": "https://shoe-shop.vercel.app",
    "techStack": ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    "rating": 4.8,
    "createdAt": "2025-08-17T10:00:00Z",
    "updatedAt": "2025-08-17T10:00:00Z"
  },
  {
    "id": 2,
    "title": "Gym Website Platform",
    "description": "A fitness platform that provides users with online workout classes, trainer booking system, and nutrition tracking. Includes an admin section for trainers to upload workout plans, and a dynamic class schedule. The system also supports JWT authentication with persistent login and user dashboards.",
    "image": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800",
    "link": "https://gym-fitness.vercel.app",
    "techStack": ["Next.js", "Node.js", "MongoDB", "Zustand", "JWT"],
    "rating": 4.7,
    "createdAt": "2025-08-15T12:00:00Z",
    "updatedAt": "2025-08-16T09:00:00Z"
  },
  {
    "id": 3,
    "title": "Portfolio Website",
    "description": "A personal portfolio website showcasing projects, blogs, and achievements. Fully responsive with dark/light mode toggle. Built using Next.js with animations powered by Framer Motion. Includes a contact form integrated with Nodemailer for inquiries.",
    "image": "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800",
    "link": "https://portfolio-rohit.vercel.app",
    "techStack": ["Next.js", "Framer Motion", "Tailwind CSS", "Nodemailer"],
    "rating": 4.6,
    "createdAt": "2025-08-10T14:30:00Z",
    "updatedAt": "2025-08-12T08:00:00Z"
  },
  {
    "id": 4,
    "title": "Blog Platform",
    "description": "A multi-user blogging platform with markdown editor, role-based permissions, and comment system. Admins can manage users and posts. Posts are optimized for SEO and include social media sharing integration.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    "link": "https://myblog-platform.vercel.app",
    "techStack": ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    "rating": 4.5,
    "createdAt": "2025-08-05T11:00:00Z",
    "updatedAt": "2025-08-14T10:30:00Z"
  },
  {
    "id": 5,
    "title": "Online Food Delivery App",
    "description": "A food delivery platform with real-time order tracking, restaurant management system, and payment gateway integration. Customers can browse restaurants, add food to cart, and place orders. Admins can manage menu items and delivery status.",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
    "link": "https://food-delivery.vercel.app",
    "techStack": ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    "rating": 4.9,
    "createdAt": "2025-07-28T09:00:00Z",
    "updatedAt": "2025-08-16T12:00:00Z"
  },
  {
    "id": 6,
    "title": "Learning Management System",
    "description": "An LMS platform for students and teachers with online courses, quizzes, and progress tracking. Teachers can upload video lessons, create quizzes, and manage students. Students can enroll in courses, take tests, and receive certificates.",
    "image": "https://images.unsplash.com/photo-1584697964154-07d4b4f47a76?w=800",
    "link": "https://lms-platform.vercel.app",
    "techStack": ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    "rating": 4.7,
    "createdAt": "2025-07-20T08:00:00Z",
    "updatedAt": "2025-08-10T15:00:00Z"
  },
  {
    "id": 7,
    "title": "Travel Booking App",
    "description": "A platform for booking flights, hotels, and tour packages. Integrated with Stripe for payments. Users can view real-time availability and manage their bookings from the dashboard. Includes review system for trips.",
    "image": "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?w=800",
    "link": "https://travel-booking.vercel.app",
    "techStack": ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe"],
    "rating": 4.8,
    "createdAt": "2025-07-15T12:00:00Z",
    "updatedAt": "2025-08-16T10:00:00Z"
  },
  {
    "id": 8,
    "title": "Social Media App",
    "description": "A social media app with user profiles, posts, likes, comments, and messaging. Includes JWT authentication and role-based access. Built with scalable backend architecture and responsive design.",
    "image": "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800",
    "link": "https://socialmedia-clone.vercel.app",
    "techStack": ["Next.js", "Node.js", "MongoDB", "JWT", "Socket.io"],
    "rating": 4.6,
    "createdAt": "2025-07-10T09:00:00Z",
    "updatedAt": "2025-08-17T09:00:00Z"
  },
  {
    "id": 9,
    "title": "Movie Streaming Platform",
    "description": "A Netflix-like platform with user authentication, movie catalog, and streaming feature. Integrated with payment system for subscriptions. Includes admin dashboard for managing movies and categories.",
    "image": "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800",
    "link": "https://movie-stream.vercel.app",
    "techStack": ["Next.js", "Node.js", "MongoDB", "JWT", "Stripe"],
    "rating": 4.9,
    "createdAt": "2025-07-01T08:00:00Z",
    "updatedAt": "2025-08-15T14:00:00Z"
  },
  {
    "id": 10,
    "title": "Job Portal",
    "description": "A job portal where employers can post jobs and candidates can apply. Includes resume upload, search filters, and real-time notifications. Admins can manage job postings and user accounts.",
    "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    "link": "https://job-portal.vercel.app",
    "techStack": ["Next.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    "rating": 4.5,
    "createdAt": "2025-06-28T11:00:00Z",
    "updatedAt": "2025-08-17T10:00:00Z"
  }
]



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  )
}

export default Projects