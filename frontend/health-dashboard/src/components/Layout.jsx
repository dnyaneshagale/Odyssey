// src/components/Layout.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useStreakService } from "../hooks/useStreakService";
import { useEffect } from "react";

const Layout = () => {
  const { isLoaded, isSignedIn } = useStreakService();

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f5f4f0] dark:bg-[#0f1316]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f4f0] dark:bg-[#0f1316]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">

        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="p-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Layout;
