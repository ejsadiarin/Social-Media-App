import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

export default function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>navbar</h1>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>

      <div>
        <p>Welcome, {user?.displayName}</p>
        <img src={user?.photoURL || ''} alt="profile" />
      </div>
    </div>
  );
}
