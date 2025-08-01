import expenseImg from '../assets/expense.webp';
import diseaseImg from '../assets/disease.webp';
import cropImg from '../assets/crop.webp';
import blogImg from '../assets/blog.webp';
import faceSwapImg from '../assets/face-swap.webp';
import jobPortalImg from '../assets/jobportal.webp';

function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      description: "A web app to manage and track daily expenses  and user authentication.",
      link: "https://github.com/L-Gayathri",
      image: expenseImg,
    },
    {
      title: "Outbreak Disease Prediction System",
      description: "A machine learning-based system to predict disease outbreaks using health  data.",
      link: "https://github.com/L-Gayathri",
      image: diseaseImg,
    },
    {
      title: "Crop Recommendation System",
      description: "An intelligent system that recommends optimal crops based on soil, weather, and region.",
      link: "https://github.com/L-Gayathri",
      image: cropImg,
    },
    {
      title: "Personal Blog Website",
      description: "A sleek blog platform built with React and Markdown for publishing personal articles.",
      link: "https://github.com/L-Gayathri",
      image: blogImg,
    },
    {
      title: "Face Swap App",
      description: "A fun and interactive app to swap faces in images using AI and computer vision.",
      link: "https://github.com/L-Gayathri",
      image: faceSwapImg,
    },
     {
      title: "Job Portal Website",
      description: "A job portal where users can post and apply for jobs with secure login and filtering features.",
      link: "https://github.com/L-Gayathri",
      image: jobPortalImg,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md hover:shadow-xl transition p-4 bg-gray-50 text-left"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
