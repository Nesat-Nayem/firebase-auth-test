import React, { useState } from "react";
import { getAuth, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
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
// export { auth };

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Error while logging out:", error);
    });
};

export { auth, handleLogout };


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
    <div className="border border-black p-8 rounded-lg w-1/4 mx-auto my-4 shadow-md">
    <h1 className="text-xl font-bold mb-4">Please Sing Up!</h1>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Name</label>
      <input
        type="text"
        onChange={(e) => {
          setCredentials({ ...credentials, displayName: e.target.value });
        }}
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Email</label>
      <input
        type="email"
        onChange={(e) => {
          setCredentials({ ...credentials, email: e.target.value });
        }}
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Password</label>
      <input
        type="password"
        onChange={(e) => {
          setCredentials({ ...credentials, password: e.target.value });
        }}
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>
    <button onClick={signUpWithEmail} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Sign Up
    </button>
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
    <div className="border border-black p-8 rounded-lg w-1/4 mx-auto my-4 shadow-md">
      <h1 className="text-xl font-bold mb-4">Please Sing In!</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value });
          }}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value });
          }}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <button onClick={loginWithEmail} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Login
      </button>
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
       
        <SignUpWithEmail />
        <LoginWithEmail />
      </div>

      {/* <DashBoard /> */}
    </div>
  );
}
