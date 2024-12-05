import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="mx-3 px-2">
            <Link to="/" className="mr-3">Home</Link>
            <Link to="/login">Google Login</Link>
            
            
        </div>
    );
};

export default Header;