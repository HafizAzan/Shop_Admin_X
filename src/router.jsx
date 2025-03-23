import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FrontendLayout from "layouts/FrontendLayout/FrontendLayout";
import {
  AUTHENTICATED_ROUTES,
  UN_AUTHENTICATED_ROUTES,
} from "utils/routesConstant";
import { useAuthStore } from "./store/zustand-store";
import Loader from "./components/Loader";

const UnAuthenticatedRoute = () => (
  <Routes>
    {UN_AUTHENTICATED_ROUTES.map((route) => (
      <Route path={route.path} element={route.element} key={route.path} />
    ))}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

const AuthenticatedRoute = () => (
  <Routes>
    <Route element={<FrontendLayout />}>
      {AUTHENTICATED_ROUTES.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

function Router() {
  const { token } = useAuthStore();
  const isAuthenticated = token;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [token]);

  if (loading) return <Loader />;

  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <AuthenticatedRoute /> : <UnAuthenticatedRoute />}
      </BrowserRouter>
    </>
  );
}

export default Router;
