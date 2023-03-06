import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function Navbar() {
  const [user] = useAuthState(auth);

  const userSignout = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
      </div>

      <div className="user">
        {user && (
          <>
            <p>Welcome, {user?.displayName}</p>
            <img src={user?.photoURL || ''} alt="profile" />
            <button type="button" onClick={userSignout}>
              Log out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
