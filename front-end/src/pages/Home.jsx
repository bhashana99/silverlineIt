import { Link } from "react-router-dom"


export default function Home() {
    return (

        <div className="flex flex-col items-center justify-center text-center py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Welcome to Silverline LMS
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
                Upload and manage your course content easily. Instructors can upload PDFs, videos, and images,
                while admins can manage content and users securely.
            </p>
            <div className="flex space-x-4">
                <Link
                    to="/login"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                >
                    Register
                </Link>
            </div>


            <div className="mt-16 grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Easy Uploads</h2>
                    <p>Upload PDFs, videos, and images quickly with metadata tracking.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Secure Access</h2>
                    <p>Only instructors and admins can upload, view, and manage course content.
                        Unauthorized users cannot access the uploaded files.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Manage Files</h2>
                    <p>View, download, or manage uploaded files from your dashboard.</p>
                </div>
            </div>
        </div>

    )
}
