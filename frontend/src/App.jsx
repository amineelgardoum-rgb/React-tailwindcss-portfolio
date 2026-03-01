// App.js

import "./App.css";
import "./index.css";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
// import Chabot from "./components/sections/Chatbot";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NotFound from "./components/sections/NotFound";
import { LoadingRedirect } from "./components/layout/LoadingRedirect";
import { Layout } from "./components/layout/Layout";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/layout/Transition";
// import Chatbot from "./components/sections/Chatbot";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {/* <Chatbot /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LoadingRedirect redirectTo="/home" />} />

          {/* This Layout route now correctly wraps all main pages */}
          <Route element={<Layout />}>
            <Route
              path="/home"
              element={
                <PageTransition>
                  <Home />
                  {/* <Chabot/> */}
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
