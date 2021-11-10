const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID
  };
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  console.log(firebaseConfig);
  export default firebaseConfig



  /*apiKey: "AIzaSyDta_p6pGj_Z_z9LlXLSc0LoG6GUAlwRQg",
    authDomain: "juta-collection.firebaseapp.com",
    projectId: "juta-collection",
    storageBucket: "juta-collection.appspot.com",
    messagingSenderId: "333168761326",
    appId: "1:333168761326:web:d0a262185f0274904996ff"*/