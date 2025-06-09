function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <a
          href="mailto:lakkakulagayathrinaidu@gmail.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Email Me
        </a>

        <div className="mt-10 flex justify-center space-x-6 text-gray-700">
          <a href="https://github.com/L-Gayathri" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-black">
            {/* GitHub SVG Icon */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.403c1.018.005 2.045.138 3.003.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.1.823 2.22v3.293c0 .32.216.694.825.576C20.565 21.795 24 17.3 24 12c0-6.628-5.372-12-12-12z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/lakkakulagayathri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
            {/* LinkedIn SVG Icon */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.036-1.849-3.036-1.849 0-2.132 1.445-2.132 2.94v5.665h-3.553V9h3.413v1.561h.049c.475-.899 1.636-1.848 3.367-1.848 3.602 0 4.267 2.368 4.267 5.451v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.139 2.07 2.07 0 010 4.139zM7.12 20.452H3.555V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.224.792 24 1.771 24h20.451c.98 0 1.778-.776 1.778-1.729V1.728C24 .774 23.203 0 22.225 0z" /></svg>
          </a>
          {/* Add more social icons if you want */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
