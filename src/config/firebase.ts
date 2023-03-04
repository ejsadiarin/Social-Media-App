// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD_kiWTnPbs5IrKOSYNBRsiMb1QM5TU9zg',
  authDomain: 'social-media-app-13666.firebaseapp.com',
  projectId: 'social-media-app-13666',
  storageBucket: 'social-media-app-13666.appspot.com',
  messagingSenderId: '49851856842',
  appId: '1:49851856842:web:2edcb256fc151684bc4133',
  measurementId: 'G-KQMKLGL6S8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
