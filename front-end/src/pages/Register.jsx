import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/AuthService";

export default function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password || !formData.confirmPassword) {
            setError("All fields are required");
            setTimeout(() => setError(""), 3000);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            setTimeout(() => setError(""), 3000);
            return;
        }

        setError("");
        setLoading(true);

        const payload = {
            username: formData.username,
            password: formData.password,
            role: "INSTRUCTOR",
        };

        if (payload.username.length < 3) {
            setError("Username must be at least 3 characters ");
            setTimeout(() => setError(""), 3000);
            return;
        }

        if (payload.password.length < 6) {
            setError("Password must be at least 6 characters");
            setTimeout(() => setError(""), 3000);
            return;
        }


        console.log("Register payload:", payload);

        try {
            await registerUser(payload);
            navigate("/login");
        } catch (error) {
            console.log("Axios error full object:", error);

            const errMsg = error.message || "Something went wrong";
            setError(errMsg);
            setTimeout(() => setError(""), 4000);
        } finally {
            setLoading(false);
        }

        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Register</h2>

                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
