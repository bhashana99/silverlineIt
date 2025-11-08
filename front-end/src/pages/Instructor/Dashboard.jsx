import React from "react";
import { Link } from "react-router-dom";
import { Upload, FileText } from "lucide-react"; 

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Instructor Dashboard
                </h1>
                <p className="text-gray-600 mb-8">
                    Manage your uploaded course materials and track your content easily.
                </p>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                        <h2 className="text-gray-700 text-lg font-semibold mb-2">
                            Uploaded Files
                        </h2>
                        <p className="text-3xl font-bold text-indigo-600">12</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                        <h2 className="text-gray-700 text-lg font-semibold mb-2">
                            Total Storage Used
                        </h2>
                        <p className="text-3xl font-bold text-green-600">240 MB</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                        <h2 className="text-gray-700 text-lg font-semibold mb-2">
                            Last Upload
                        </h2>
                        <p className="text-xl font-medium text-gray-800">2 days ago</p>
                    </div>
                </div>

                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to=""
                        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        <Upload size={20} />
                        Upload New Content
                    </Link>

                    <Link
                        to=""
                        className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
                    >
                        <FileText size={20} />
                        View My Files
                    </Link>
                </div>
            </div>
        </div>
    )
}
