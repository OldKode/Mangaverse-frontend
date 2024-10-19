import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">MangaVerse</Link>
                </div>
                <div className="flex space-x-4 items-center">
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                        Home
                    </Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                        Dashboard
                    </Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                        Login
                    </Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium">
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
