import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Sorry but page is not found...</h2>
      <Link to="/">Home Page</Link>
    </div>
  );
};
export default NotFoundPage;
