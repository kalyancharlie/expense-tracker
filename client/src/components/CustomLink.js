import { useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to)
  const matchStatus = useMatch({ path: resolvedPath.pathname, end: true })

  return <div className={matchStatus ? 'footer-button selected' : 'footer-button'}>
    <Link to={to} {...props}>
      {children}
    </Link>
  </div>
}

export default CustomLink;