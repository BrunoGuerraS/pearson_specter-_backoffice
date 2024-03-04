import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoutes } from "./context/ProtectedRoutes";

import theme from "./mui-options/theme.ts";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import SignIn from "./pages/Login/Login";

const publicRoutes = [
  {
    path: "/",
    element: <SignIn />,
  },
];
const privateRoutes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/report/:id",
        element: <h1>Report</h1>,
      }
    ],
  },
];

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
