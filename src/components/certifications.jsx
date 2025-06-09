import udemyImg from '../assets/fullstack.jpg';
import nptelPythonImg from '../assets/python.jpg';
import nptelJavaImg from '../assets/java.jpg';
import aicteMicrosoftImg from '../assets/microsoft.jpg';
import aicteGreenAIImg from '../assets/aigreen.jpg';
import serviceNowImg from '../assets/servicenow.jpg'; 
function Certifications() {
  const certifications = [
    {
      title: "Udemy: Full Stack Development",
      img: udemyImg,
      alt: "Udemy Logo",
    },
    {
      title: "NPTEL: Python Programming",
      img: nptelPythonImg,
      alt: "NPTEL Python Logo",
    },
    {
      title: "NPTEL: Java Programming",
      img: nptelJavaImg,
      alt: "NPTEL Java Logo",
    },
    {
      title: "AICTE: Microsoft Internship Certification",
      img: aicteMicrosoftImg,
      alt: "AICTE Microsoft Logo",
    },
    {
      title: "AICTE: Green Technologies in AI",
      img: aicteGreenAIImg,
      alt: "AICTE Green AI Logo",
    },
    {
      title: "ServiceNow Internship Certification",
      img: serviceNowImg,
      alt: "ServiceNow Logo",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certifications.map(({ title, img, alt }) => (
          <div
            key={title}
            className="bg-gray-100 p-6 rounded-lg shadow text-center hover:shadow-md transition"
          >
            <img
  src={img}
  alt={alt}
  className="mx-auto mb-4 w-[350px] h-[200px] object-cover rounded"
/>
            <p className="text-lg font-medium text-gray-800">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
