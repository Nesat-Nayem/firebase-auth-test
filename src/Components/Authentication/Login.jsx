import React, { useState } from "react";
import { getAuth, signOut, createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGRrcpKFLfNYefhVbVid30u5KS8-qdjfc",
  authDomain: "event-management-5f5f1.firebaseapp.com",
  projectId: "event-management-5f5f1",
  storageBucket: "event-management-5f5f1.appspot.com",
  messagingSenderId: "1022966552935",
  appId: "1:1022966552935:web:5c35aa843be7391d0a77c2"
};

const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);
export { auth };

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Error while logging out:", error);
    });
};




function SignUpWithEmail() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    displayName: "", // Add a new state variable for the display name
  });

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;

        // Update the user's display name
        updateProfile(user, {
          displayName: credentials.displayName,
        })
          .then(() => {
            console.log("User display name updated:", user.displayName);
          })
          .catch((error) => {
            console.error("Error updating display name:", error);
          });

        console.log("User signed up:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div style={{ border: "solid black" }}>
      <h1>Sign Up with Email</h1>
      <label>
        Name
        <input
          type="text"
          onChange={(e) => {
            setCredentials({ ...credentials, displayName: e.target.value });
          }}
        />
      </label>
      <br />
      <label>
        Email
        <input
          type="email"
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
        />
      </label>
      <button onClick={signUpWithEmail}>Sign Up</button>
    </div>
  );
}






function LoginWithEmail() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div style={{ border: "solid black" }}>
      <h1>Login With Email</h1>
      <label>
        Email
        <input
          type="email"
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
        />
      </label>
      <button onClick={loginWithEmail}>Login</button>
    </div>
  );
}


function DashBoard() {
  const [user] = useAuthState(auth);

  return user ? (
    <div style={{ border: "solid black" }}>
      User Dashboard <br />
      Name: {user.displayName} <br /> {/* Display the user's name */}
      Email: {user.email} <br />
      Photo: <img src={user.photoURL} alt="profile pic" /> <br />
    </div>
  ) : (
    <div style={{ border: "solid black" }}>
      Please log in or sign up.
    </div>
  );
}




export default function Auth() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center"
        }}
      >
          <button onClick={handleLogout}>Logout</button>
        <SignUpWithEmail />
        <LoginWithEmail />
      </div>

      <DashBoard />
    </div>
  );
}
