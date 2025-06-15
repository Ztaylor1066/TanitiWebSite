import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";

export default function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <CustomLink to="/">Home</CustomLink>

          <CustomLink to="/food">Cuisine</CustomLink>

          <CustomLink to="/lodging">Accommodations</CustomLink>

          <CustomLink to="/entertainment">Activities</CustomLink>

          <CustomLink to="/transportation">Transportation</CustomLink>

          <CustomLink to="/faq">FAQ</CustomLink>

          <CustomLink to="/booking">Book Here!</CustomLink>
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
