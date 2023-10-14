// import React, { useState } from "react";
// import { auth, googleProvider } from "../../config/firebaseConfig";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const signInWithEmailAndPassword = (event) => {
//     event.preventDefault();
//     auth.signInWithEmailAndPassword(email, password)
//     .then((user) => {
//        // Signed in 
//        // Clear form
//         setEmail('');
//         setPassword('');
//         setError('')
//     })
//     .catch((error) => {
//       setError("Error signing in with password and email");
//     });
//   };

//   const signInWithGoogle = () => {
//     auth.signInWithPopup(googleProvider)
//     .then((result) => {
//         console.log(result)
//         console.log("Success.. Google Account Linked")
//     })
//     .catch((error) => {
//         setError('Error linking to Google Account')
//     });
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />
//         <button onClick={signInWithEmailAndPassword} type="submit">Login</button>
//         <br></br>
//         <br></br>
//         <button onClick={signInWithGoogle} type="submit">Login with Google</button>
//         {error !== null && <p>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Login;





import React, { useState } from "react";
import firebase from "firebase/app";
// import firebase from "../../config/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError("Failed to log in. " + error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
