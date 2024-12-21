import { Navigate } from "react-router-dom";
import BookIndexPage from "../pages/book";
import { Path } from "./pathConstants";
import BookCreatePage from "../pages/book/create";
import BookEditPage from "../pages/book/edit";

export const routes = [
  {
    path: Path.HOME,
    element: <Navigate to={Path.BOOK.INDEX} />,
  },
  { path: Path.BOOK.INDEX, element: <BookIndexPage /> },
  { path: Path.BOOK.CREATE, element: <BookCreatePage /> },
  { path: Path.BOOK.EDIT, element: <BookEditPage /> },
];
