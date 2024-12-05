import app from "../../Firebase/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const Login = () => {
  const auth = getAuth(app)
  const GoogleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () =>{
    console.log("User Login by using google")
    signInWithPopup(auth,GoogleProvider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error =>{
        console.log("error", error.message)
    })
    
  }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn">Google Login</button>
        </div>
    );
};

export default Login;