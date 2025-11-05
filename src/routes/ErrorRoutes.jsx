import { Routes, Route } from "react-router-dom";

import ServerDownPage from "../pages/error/ServerDownPage";
import UnauthorizedPage from "../pages/error/UnauthorizedPage";

const errorRoutes = [
  { path: "403", element: <UnauthorizedPage /> },
  { path: "500", element: <ServerDownPage /> },
];

export default function ErrorRoutes() {
  return (
    <Routes>
      {errorRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
