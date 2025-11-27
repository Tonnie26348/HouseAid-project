import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmployerDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Employer Dashboard</h1>
        <Button asChild>
          <Link to="/platform/jobs/new">Create New Job</Link>
        </Button>
      </div>
      <p className="mt-2 text-gray-600">Welcome to your dashboard. Here you can manage your workers, contracts, and more.</p>
    </div>
  );
};

export default EmployerDashboard;
