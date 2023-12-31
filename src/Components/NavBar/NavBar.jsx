import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="flex justify-center">
            <nav className="mt-4 py-3 px-5 bg-blue-100 rounded-lg shadow-lg">
                <ul className="space-x-4 flex justify-center text-slate-700 font-bold">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/TP1EX1">TP1EX1</Link>
                    </li>
                    <li>
                        <Link to="/TP1EX3">TP1EX3</Link>
                    </li>
                    <li>
                        <Link to="/TP1EX4">TP1EX4</Link>
                    </li>
                    <li>
                        <Link to="/TP2EX1">TP2EX1</Link>
                    </li>
                    <li>
                        <Link to="/TP3EX1">TP3EX1</Link>
                    </li>
                    <li>
                        <Link to="/TP4">TP4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;