function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 pt-24 px-6"
    >
      {/* Profile Image */}
      <div className="mb-8 md:mb-0 md:mr-12">
        <img
  src="/profile.jpg"
  alt="Gayathri"
  className="w-96 h-96 rounded-full object-cover border-4 border-blue-600 shadow-lg"
/>


      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm Gayathri
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A passionate full-stack web developer focused on building clean, responsive, and user-friendly websites using modern tools like React, Node.js,Express,Mongo Db.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
