import app from "../../Firebase/firebase";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


const Login = () => {
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () =>{
    console.log("User Login by using google")
    
  }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn">Google Login</button>
        </div>
    );
};

export default Login;