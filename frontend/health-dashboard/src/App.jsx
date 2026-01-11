// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import Layout from "./components/Layout";

// Importing pages
import Dashboard from "./pages/Dashboard";
import StudyManager from "./pages/StudyManager";
import ConsistencyTracker from "./pages/ConsistencyTracker";
import Workouts from "./pages/Workouts";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LandingPage from "./pages/LandingPage";
import SimonSays from "./pages/simonGame";

// Component to handle landing page redirect if already signed in
const LandingPageWrapper = () => {
  const { isSignedIn } = useAuth();
  
  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <LandingPage />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page - public route */}
        <Route path="/" element={<LandingPageWrapper />} />
        
        {/* Public routes for authentication */}
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />

        {/* Protected routes */}
        <Route
          element={
            <>
              <SignedIn>
                <Layout />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/StudyManager" element={<StudyManager />} />
          <Route path="/ConsistencyTracker" element={<ConsistencyTracker/>} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/simonGame" element={<simonGame/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
