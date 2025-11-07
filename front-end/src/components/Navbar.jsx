import { Link } from "react-router-dom";


export default function Navbar() {

    // const { user, logout } = useContext(AuthContext);

    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     logout();
    //     navigate("/login");
    // };

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex-shrink-0">
                        <Link to="/" className="font-bold text-xl">
                            Silverline LMS
                        </Link>
                    </div>


                    <div className="hidden md:flex space-x-4 items-center">
                        <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded">
                            Home
                        </Link>

                        <Link to="/login">
                            <button

                                className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded cursor-pointer"
                            >
                                Login
                            </button>
                        </Link>
                    </div>


                </div>
            </div>
        </nav>
    )
}
