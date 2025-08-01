function About() {
  return (
    <section id="about" className="py-20 bg-white max-w-6xl mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-12">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start bg-gray-50 p-8 rounded-xl shadow-lg">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Overview</h3>
          <p className="text-gray-800 leading-relaxed mb-6">
            I'm a dedicated Computer Science student with a strong passion for building engaging and scalable web applications. Known for my collaborative mindset and problem-solving abilities, I’m eager to join an organization where I can contribute meaningfully and continue learning every day.
          </p>
          <p className="text-gray-800 leading-relaxed mb-8">
            I’ve gained practical experience through academic projects and internships, strengthening my skills in Java, Python, C++, and modern web technologies. I'm enthusiastic about contributing to real-world tech solutions and working with forward-thinking teams.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Personal Info</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">Location:</span> Guntur, India</li>
              <li><span className="font-semibold">Email:</span> <a href="mailto:lakkakulagayathrinaidu@gmail.com" className="text-blue-600 hover:underline">lakkakulagayathrinaidu@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {["Web Development", "Programming", "Data Structures", "Problem Solving"].map((item) => (
                <span key={item} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div>
  <h3 className="text-xl font-semibold text-blue-600 mb-3">Strengths</h3>
  <ul className="list-disc list-inside text-gray-700 space-y-1">
    <li>Effective Communication</li>
    <li>Team Collaboration</li>
    <li>Leadership Abilities</li>
    <li>Analytical Problem Solving</li>
    <li>Attention to Detail</li>
    <li>Adaptability & Quick Learning</li>
  </ul>
</div>


          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Education</h3>
            <div className="space-y-4 text-gray-700">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">B.Tech (2022 - 2026)</p>
                <p>Computer Science and Engineering</p>
                <p>Vignan's Lara Institute of Technology and Science</p>
                <p>CGPA: 8.5</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Intermediate (2020 - 2022)</p>
                <p>MPC</p>
                <p>Sri Chaitanya Junior College</p>
                <p>Percentage: 96%</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">10th (2019 - 2020)</p>
                <p>Little Flower E.M School</p>
                <p>Percentage: 79%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
