import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const Sidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const employerLinks = [
    { to: "/platform", icon: Home, label: "Dashboard" },
    { to: "/platform/workers", icon: Users, label: "My Workers" },
    { to: "/platform/contracts", icon: FileText, label: "Contracts" },
  ];

  const workerLinks = [
    { to: "/platform", icon: Home, label: "Dashboard" },
    { to: "/platform/profile", icon: User, label: "My Profile" },
    { to: "/platform/jobs", icon: FileText, label: "Jobs" },
  ];

  const links = user?.user_metadata.role === "employer" ? employerLinks : workerLinks;

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-800 text-white flex flex-col">
      <div className="h-20 flex items-center px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-bold text-xl">HouseAid</span>
        </Link>
      </div>
      <nav className="flex-grow px-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <Button
          variant="ghost"
          className="w-full justify-start text-left"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

const DashboardHeader = () => {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="w-6 h-6 text-gray-600" />
        </Button>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="font-semibold">{user?.user_metadata.full_name}</div>
            <div className="text-sm text-gray-500 capitalize">{user?.user_metadata.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
