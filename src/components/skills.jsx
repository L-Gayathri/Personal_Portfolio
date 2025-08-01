function Skills() {
  const skills = [
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-400' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Express', color: 'bg-teal-400' },
    { name: 'Mongo DB', color: 'bg-red-500' },
    { name: 'C++', color: 'bg-purple-600' },
    { name: 'Java', color: 'bg-red-600' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'SQL', color: 'bg-voilet-700' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 rounded-lg shadow-md ${skill.color} text-white font-semibold text-lg`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
