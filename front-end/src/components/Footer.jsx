import { Link } from "react-router-dom"

export default function Footer() {
  return (
   <footer className="bg-blue-600 text-white mt-10">
      
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Silverline LMS. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <a href="mailto:bhashanachamodya99@gmail.com" className="hover:underline">
            Contact
          </a>
        </div>

       
        <div className="mt-2 md:mt-0 text-center md:text-right">
        <a href="https://www.linkedin.com/in/bhashana-chamodya/">
          <p className="text-sm">Developed by Bhashana Chamodya</p>
        </a>
          <p className="text-xs text-blue-200">Software Engineering (UG)</p>
        </div>
      </div>

      
      <div className="text-center text-xs text-blue-200 py-2 border-t border-blue-500">
        Built with React, Tailwind CSS, JWT and Java Spring Boot | MySQL
      </div>
    </footer>
  )
}
