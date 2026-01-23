import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/shared/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const EmployerProfileView = () => {
  const { id } = useParams<{ id: string }>(); // Get employer ID from URL params
  const { toast } = useToast();
  const [employerProfile, setEmployerProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployerProfile = async () => {
      if (id) {
        setLoading(true);
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          toast({
            title: "Error fetching employer profile",
            description: error.message,
            variant: "destructive",
          });
          setEmployerProfile(null); // Clear profile if error
        } else if (data) {
          setEmployerProfile(data);
        }
        setLoading(false);
      }
    };

    fetchEmployerProfile();
  }, [id, toast]);

  if (loading) {
    return <DashboardLayout><div>Loading employer profile...</div></DashboardLayout>;
  }

  if (!employerProfile) {
    return <DashboardLayout><div>Employer profile not found.</div></DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <Card className="max-w-4xl mx-auto my-8">
        <CardHeader className="flex flex-col md:flex-row items-center gap-6 pb-6">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 shadow-lg">
            <AvatarImage src={employerProfile.avatar_url || 'https://via.placeholder.com/150'} alt={employerProfile.full_name} />
            <AvatarFallback className="text-4xl">{employerProfile.full_name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <CardTitle className="text-3xl font-bold">{employerProfile.full_name}</CardTitle>
            <CardDescription className="text-lg text-gray-600">Employer Profile</CardDescription>
            <div className="flex justify-center md:justify-start mt-2 space-x-2">
              <Badge variant="secondary">{employerProfile.address}</Badge>
              <Badge variant="secondary">{employerProfile.family_members} Family Members</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {employerProfile.bio && (
            <div>
              <h3 className="text-xl font-semibold mb-2">About Our Household</h3>
              <p className="text-gray-700 leading-relaxed">{employerProfile.bio}</p>
            </div>
          )}

          {employerProfile.expectations && (
            <div>
              <Separator className="my-4" />
              <h3 className="text-xl font-semibold mb-2">Worker Expectations</h3>
              <p className="text-gray-700 leading-relaxed">{employerProfile.expectations}</p>
            </div>
          )}

          {employerProfile.household_rules && (
            <div>
              <Separator className="my-4" />
              <h3 className="text-xl font-semibold mb-2">Household Rules & Guidelines</h3>
              <p className="text-gray-700 leading-relaxed">{employerProfile.household_rules}</p>
            </div>
          )}

          {employerProfile.contact_preferences && (
            <div>
              <Separator className="my-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Preferences</h3>
              <p className="text-gray-700 leading-relaxed">{employerProfile.contact_preferences}</p>
            </div>
          )}

          {employerProfile.benefits_offered && employerProfile.benefits_offered.length > 0 && (
            <div>
              <Separator className="my-4" />
              <h3 className="text-xl font-semibold mb-2">Benefits We Offer</h3>
              <ul className="list-disc list-inside text-gray-700">
                {employerProfile.benefits_offered.map((benefit: string, index: number) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default EmployerProfileView;
