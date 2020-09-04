import Link from 'next/link';

/* Components */
// import DarkModeToggle from "../DarkModeToggle";

const User = ({ props }) => {
  const { user } = props;

  return (
    <p className="account">
      {(user && (
        <Link href={{ pathname: '/user/logout' }}>
          <a>Logout</a>
        </Link>
      )) || (
        <>
          Have an Account?
          <Link href={{ pathname: '/user/login' }}>
            <a>Login</a>
          </Link>
          or
          <Link href={{ pathname: '/user/register' }}>
            <a>Register</a>
          </Link>
        </>
      )}
    </p>
  );
};

export default User;
