import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoutes } from "./context/ProtectedRoutes";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import theme from "./mui-options/theme.ts";
import { Alerts } from "./pages/Alerts/Alerts.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import { Documents } from "./pages/Documents/Documents.tsx";
import { Home } from "./pages/Home/Home.tsx";
import SignIn from "./pages/Login/Login";
import { Messages } from "./pages/Messages/Messages.tsx";
import { Metrics } from "./pages/Metrics/Metrics.tsx";
import { Question } from "./pages/Questions/Question.tsx";
import { ReportDetail } from "./pages/ReportDetail/ReportDetail.tsx";
import { Resume } from "./pages/Resume/Resume.tsx";
import { Setting } from "./pages/Settings/Setting.tsx";
import { UserData } from "./pages/UserData/UserData.tsx";

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
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "resume",
            element: <Resume />,
          },
          {
            path: "alerts",
            element: <Alerts />,
          },
          {
            path: "user-data",
            element: <UserData />,
          },
          {
            path: "chat",
            element: <Messages />,
          },
          {
            path: "documents",
            element: <Documents />,
          },
          {
            path: "metrics",
            element: <Metrics />,
          },
          {
            path: "settings",
            element: <Setting />,
          },
          {
            path: "questions",
            element: <Question />,
          },
          {
            path: "report-detail",
            element: <ReportDetail />,
          },
        ],
      },
      {
        path: "/report/:id",
        element: <ReportDetail />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
