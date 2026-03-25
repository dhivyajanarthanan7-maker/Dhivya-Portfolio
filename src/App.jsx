import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white px-6 py-10">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Dhivya Janarthanan
        </h1>

        <TypeAnimation
          sequence={[
            "Machine Learning Engineer",
            2000,
            "Computer Vision Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-blue-400 text-xl block mt-2"
          repeat={Infinity}
        />

        <p className="text-sm mt-2">
          📍 Chennai | 📧 dhivyajanarthanan7@gmail.com
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block mt-4 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Download Resume
        </a>
      </div>

      {/* ================= PROFILE IMAGE ================= */}
      <div className="flex justify-center mb-10">
        <img
          src="/publicprofile.png"
          alt="profile"
          className="w-40 rounded-full border-4 border-blue-500 shadow-[0_0_40px_#3b82f6] hover:scale-110 transition duration-300"
        />
      </div>

      {/* ================= ABOUT ================= */}
      <motion.section
        className="mb-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-3 text-blue-300">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Data Science and Machine Learning professional with strong expertise in Python, SQL,
          and predictive analytics. Experienced in building end-to-end ML pipelines and
          computer vision solutions using YOLOv8, along with data preprocessing, EDA,
          and model development.
        </p>
      </motion.section>

      {/* ================= SKILLS ================= */}
      <motion.section
        className="mb-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-3 text-blue-300">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python", "SQL", "Machine Learning", "Deep Learning",
            "YOLOv8", "Computer Vision", "Pandas", "NumPy",
            "Scikit-learn", "Streamlit", "AWS EC2", "AWS RDS"
          ].map((skill, i) => (
            <span
              key={i}
              className="bg-blue-600 px-3 py-1 rounded-full text-sm hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        className="mb-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-300">
            <h3 className="text-xl font-bold text-blue-400">
              UrbanBot – Smart City Analytics
            </h3>
            <p className="text-gray-300 mt-2">
              AI-based smart city monitoring system using YOLOv8 for traffic,
              accident detection, and road damage analysis with AWS integration.
            </p>

            {/* STEP 5 → GitHub Link */}
            <a
              href="https://github.com/dhivyajanarthanan7-maker"
              target="_blank"
              className="inline-block mt-3 text-blue-400 hover:underline"
            >
              View Code →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-300">
            <h3 className="text-xl font-bold text-blue-400">
              Multiple Disease Prediction
            </h3>
            <p className="text-gray-300 mt-2">
              Machine learning model to predict diseases using patient data with
              real-time Streamlit interface.
            </p>

            {/* STEP 5 → GitHub Link */}
            <a
              href="https://github.com/dhivyajanarthanan7-maker"
              target="_blank"
              className="inline-block mt-3 text-blue-400 hover:underline"
            >
              View Code →
            </a>
          </div>

        </div>
      </motion.section>

      {/* ================= EXPERIENCE ================= */}
      <motion.section
        className="mb-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-2xl font-semibold mb-3 text-blue-300">Experience</h2>
        <p className="text-gray-300">
          Assistant Professor – ECE (2012–2019)  
          <br />
          Worked on data analysis, MATLAB simulations, and technical training.
        </p>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-3 text-blue-300">Contact</h2>

        <p className="text-gray-300">📧 dhivyajanarthanan7@gmail.com</p>
        <p className="text-gray-300">📱 +91 9566388322</p>

        <div className="mt-3 space-x-4">
          <a
            href="https://www.linkedin.com/in/dhivya-janarthanan-283a37321/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/dhivyajanarthanan7-maker"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </motion.section>

    </div>
  );
}

export default App;