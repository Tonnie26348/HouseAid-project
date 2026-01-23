import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/shared/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AllWorkers = () => {
  const { user } = useAuth(); // Although not strictly needed for fetching all workers, good for consistency
  const { toast } = useToast();
  const [workers, setWorkers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllWorkers = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("role", "worker"); // Filter to only show profiles with role 'worker'

      if (error) {
        toast({
          title: "Error fetching workers",
          description: error.message,
          variant: "destructive",
        });
      } else if (data) {
        setWorkers(data);
      }
      setLoading(false);
    };

    fetchAllWorkers();
  }, [toast]);

  if (loading) {
    return <DashboardLayout><div>Loading all workers...</div></DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">All Available Workers</h1>
      </div>

      {workers.length === 0 ? (
        <Card>
          <CardContent className="py-6 text-center">
            <p className="text-lg text-gray-600">No workers found at the moment.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workers.map((worker: any) => (
            <Card key={worker.id}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={worker.avatar_url || 'https://via.placeholder.com/150'} />
                  <AvatarFallback>{worker.full_name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{worker.full_name}</CardTitle>
                  <CardDescription className="capitalize">Worker</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Skills: {worker.skills?.join(', ') || 'N/A'}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Experience: {worker.experience || 'N/A'}
                </p>
                {/* Potentially add a button to view worker details or hire them */}
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/platform/profile/${worker.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default AllWorkers;
