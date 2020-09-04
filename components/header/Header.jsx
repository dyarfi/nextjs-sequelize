import Link from 'next/link';

/* Components */
// import DarkModeToggle from "../DarkModeToggle";

const Header = ({ props }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-2">
        <Link href="/">
          <a className="nav-item nav-link">Home</a>
        </Link>
        {/* <Link href="/about">
          <a className="nav-item nav-link">About</a>
        </Link> */}
        {/* <Link href="/forever">
          <a className="nav-item nav-link">Forever</a>
        </Link> */}
        {/* <a href="/non-existing" className="nav-item nav-link">
          Non Existing Page
        </a> */}
        {/* <span className="align-self-center ml-auto">
          <DarkModeToggle />
        </span> */}
      </nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
    </>
  );
};

export default Header;
