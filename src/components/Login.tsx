import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../config/firebase';

export default function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result); // added to see properties in console to access for rendering display name, etc.
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}
