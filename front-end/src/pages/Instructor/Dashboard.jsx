import { useState } from "react";
import { Link } from "react-router-dom";
import StatsCard from "../../components/StatsCard";
import UploadModal from "../../components/UploadModal";


export default function Dashboard() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stats, setStats] = useState({
        totalFiles: 12,
        totalSizeMB: 240,
        lastUpload: "2 days ago",
    });

    const handleUpload = (file) => {

        setStats((prev) => ({
            totalFiles: prev.totalFiles + 1,
            totalSizeMB: prev.totalSizeMB + Math.round(file.size / 1024 / 1024),
            lastUpload: "Just now",
        }));
    };

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
                    <StatsCard title="Uploaded Files" value={stats.totalFiles} color="text-indigo-600" />
                    <StatsCard title="Total Storage Used" value={`${stats.totalSizeMB} MB`} color="text-green-600" />
                    <StatsCard title="Last Upload" value={stats.lastUpload} color="text-gray-800" />
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Upload New Content
                    </button>
                    <Link
                        to="/my-files"
                        className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
                    >
                        View My Files
                    </Link>
                </div>

                <UploadModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onUpload={handleUpload}
                />
            </div>
        </div>

    )
}
