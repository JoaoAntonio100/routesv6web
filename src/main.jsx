import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page";
import Contact from "./routes/contact.jsx";
import PaginaModal  from './routes/PaginaModal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },

            {
        path: "modal",             // <-- define a rota
        element: <PaginaModal />,    // <-- renderiza essa página
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
