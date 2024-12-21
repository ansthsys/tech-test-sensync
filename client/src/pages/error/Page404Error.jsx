import { Link } from "react-router-dom";
import { Path } from "../../routes/pathConstants";

export default function Page404Error({ error }) {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center gap-3 flex-column">
      <img src="/vite.svg" alt="Logo" height={75} />

      {!!error && <h3>{error.message}</h3>}

      <Link to={Path.HOME} className="h5">
        Back to page
      </Link>
    </div>
  );
}
