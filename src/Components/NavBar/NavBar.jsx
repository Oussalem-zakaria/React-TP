import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa6";

function NavBar() {
    return (
        <div className="flex justify-center">
            <nav className="mt-4 py-3 px-5 bg-blue-100 rounded-lg shadow-lg">
                <ul className="space-x-7 flex justify-center text-slate-700 font-bold">
                    <li className="flex space-x-2 items-center">
                        <FaFolder color="#5e97f7"/>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="flex space-x-2 items-center">
                        <FaFolder color="#5e97f7"/>
                        <Link to="/TP1EX1">TP1EX1</Link>
                    </li>
                    <li className="flex space-x-2 items-center">
                        <FaFolder color="#5e97f7"/>
                        <Link to="/TP1EX3">TP1EX3</Link>
                    </li>
                    <li className="flex space-x-2 items-center">
                        <FaFolder color="#5e97f7"/>
                        <Link to="/TP1EX4">TP1EX4</Link>
                    </li>
                    <li className="flex space-x-2 items-center">
                        <FaFolder color="#5e97f7"/>
                        <Link to="/TP2EX1">TP2EX1</Link>
                    </li>
                    <li className="flex space-x-2 items-center">
                        <FaFolder color="#5e97f7"/>
                        <Link to="/TP3EX1">TP3EX1</Link>
                    </li>
                    <li className="flex space-x-2 items-center">
                        <FaFolder color="#5e97f7"/>
                        <Link to="/TP4">TP4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;