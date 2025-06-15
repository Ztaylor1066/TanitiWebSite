import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";

export default function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <CustomLink to="/">Home</CustomLink>

          <CustomLink to="/Food">Cuisine</CustomLink>

          <CustomLink to="/Lodging">Accommodations</CustomLink>

          <CustomLink to="/Entertainment">Activities</CustomLink>

          <CustomLink to="/Transportation">Transportation</CustomLink>

          <CustomLink to="/FAQ">FAQ</CustomLink>

          <CustomLink to="/Booking">Book Here!</CustomLink>
        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
