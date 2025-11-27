import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employers from "./pages/Employers";
import Workers from "./pages/Workers";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Platform from "./pages/Platform";
import Profile from "./pages/Profile";
import CreateJob from "./pages/CreateJob";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import MyWorkers from "./pages/MyWorkers";
import Contracts from "./pages/Contracts";
import Unauthorized from "./pages/Unauthorized";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Join from "./pages/Join";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/shared/MainLayout";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import HouseholdProtectedRoute from "./components/shared/HouseholdProtectedRoute";
import WorkerProtectedRoute from "./components/shared/WorkerProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/HouseAid-project">
        <AuthProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/workers" element={<Workers />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partners" element={<Partners />} />
            </Route>
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Generic Protected Routes (accessible to any authenticated user) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/platform" element={<Platform />} />
              <Route path="/platform/profile" element={<Profile />} />
              <Route path="/platform/jobs/new" element={<CreateJob />} />
            </Route>

            {/* Household Protected Routes */}
            <Route element={<HouseholdProtectedRoute />}>
              <Route path="/platform/workers" element={<MyWorkers />} />
              <Route path="/platform/contracts" element={<Contracts />} />
            </Route>

            {/* Worker Protected Routes */}
            <Route element={<WorkerProtectedRoute />}>
              <Route path="/platform/jobs" element={<Jobs />} />
              <Route path="/platform/jobs/:id" element={<JobDetail />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
