import { useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const matchStatus = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className="footer-button">
      <Link
        className={
          matchStatus
            ? "footer-button navbar__link selected"
            : "footer-button navbar__link"
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
