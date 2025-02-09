import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/countries">Countries</Link>
      </h1>
    </nav>
  );
}

export default Navbar;
