import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import initApp from '../Firebase/Firebase.init';

initApp()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')


  const Googleprovider = new GoogleAuthProvider
  const auth = getAuth()

  const googleSignIn = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        setAuthError(error.message)
      });

  }
    //register opration
    const registerUser = (email, password ,name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const newUser = {email , displayName: name}
            setUser(newUser)
            updateProfile(auth.currentUser, {
              displayName: name, 
            }).then(() => {
              
            }).catch((error) => {
              
            });
            setAuthError('')
            history?.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message)
          })
          .finally(() => setLoading(false))
      }

        //sign in operation
    const signIn = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
    
            setAuthError('')
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message)
    
          })
          .finally(() => setLoading(false))
      }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
    
            setUser(user)
    
          } else {
            setUser({})
          }
          setLoading(false)
        });
        return () => unsubscribe
      }, [])


      //logout opearation
    const logOut = () => {
        signOut(auth)
          .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setLoading(false));
      }

    return {
        user,
        googleSignIn,
        registerUser,
        signIn,
        logOut,
        loading,
        authError,
    }
};

export default useFirebase;