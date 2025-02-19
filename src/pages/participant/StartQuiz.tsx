import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const NavBar = () => (
//   <header className="bg-white shadow-md">
//     <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//       <div className="text-2xl font-bold text-blue-600">Examer</div>
//       <ul className="flex space-x-6">
//         <li>
//           <Link to="/" className="hover:text-blue-500">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-blue-500">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-blue-500">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );

export const StartQuiz = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-100">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Ultimate Quiz Experience
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Track, analyze, and compete in real-time with advanced monitoring.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg text-lg font-semibold transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start a Quiz
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Live Quiz Tracking",
              desc: "Monitor participants in real-time.",
            },
            {
              title: "User Insights & Analytics",
              desc: "Get detailed quiz reports.",
            },
            {
              title: "Quiz Management",
              desc: "Modify or cancel quizzes instantly.",
            },
            {
              title: "Secure Participation",
              desc: "Track users via IP or ID.",
            },
            {
              title: "Multiple Quiz Categories",
              desc: "Choose from a variety of quiz topics.",
            },
            {
              title: "Leaderboard & Rewards",
              desc: "Compete for rankings and earn rewards.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-200 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Amazing platform for quizzes!",
            "Love the tracking features!",
            "The best quiz experience ever!",
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-700 italic">"{testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Take Your Quiz Experience to the Next Level?
        </motion.h2>
        <motion.div className="mt-6 space-x-4">
          <motion.button
            className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-lg text-lg font-semibold transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white rounded-lg text-lg font-semibold transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
