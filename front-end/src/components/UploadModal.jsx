import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadModal({ isOpen, onClose, onUpload }) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const MAX_SIZE_MB = 50;
    const ALLOWED_TYPES = ["application/pdf", "video/mp4", "image/jpeg", "image/png"];

    const handleFileChange = (e) => {
        setError("");
        const selected = e.target.files[0];
        if (!selected) return;

        if (!ALLOWED_TYPES.includes(selected.type)) {
            setError("Invalid file type! Only PDF, MP4, JPG, PNG allowed.");
            setFile(null);
            return;
        }

        if (selected.size / 1024 / 1024 > MAX_SIZE_MB) {
            setError(`File too large! Max size is ${MAX_SIZE_MB}MB.`);
            setFile(null);
            return;
        }

        setFile(selected);
    };

    const handleUploadClick = async () => {
        if (!file) {
            setError("Please select a file first.");
            return;
        }

        setUploading(true);
        setProgress(0);
        setError("");

        try {

            await new Promise((resolve) => {
                let loaded = 0;
                const interval = setInterval(() => {
                    loaded += 10;
                    setProgress((loaded / 100) * 100);
                    if (loaded >= 100) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 200);
            });

            alert(`File "${file.name}" uploaded successfully!`);
            onUpload(file);
            setFile(null);
            onClose();
            
        } catch (err) {
            setError("Upload failed. Check console for details.");
        } finally {
            setUploading(false);
            setProgress(0);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
                <h2 className="text-xl font-semibold mb-4">Upload New Content</h2>
                <input type="file" onChange={handleFileChange} disabled={uploading} />
                {error && <p className="text-red-600 mt-2">{error}</p>}
                {uploading && <ProgressBar progress={progress} />}
                <div className="mt-4 flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
                        disabled={uploading}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUploadClick}
                        className={`px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition ${uploading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {uploading ? "Uploading..." : "Upload"}
                    </button>
                </div>
            </div>
        </div>
    )
}
