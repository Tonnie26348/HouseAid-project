import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Smartphone, Users, TrendingUp, Award, MapPin, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All workers undergo background checks and skills verification for your peace of mind."
    },
    {
      icon: FileText,
      title: "Digital Contracts",
      description: "Clear, legal contracts protect both employers and workers with transparent terms."
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Know when your worker arrives and leaves with real-time location tracking."
    },
    {
      icon: Smartphone,
      title: "Easy Payments",
      description: "Secure digital payment system ensures timely and transparent salary processing."
    },
    {
      icon: Award,
      title: "Training & Certification",
      description: "Workers receive professional training and certification for quality service."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Support workers in building professional careers with development opportunities."
    }
  ];

  const steps = [
    { number: "01", title: "Search & Browse", description: "Find verified workers based on your needs and location." },
    { number: "02", title: "Match & Verify", description: "Review profiles, ratings, and certifications to find the perfect match." },
    { number: "03", title: "Contract & Hire", description: "Create a digital contract with clear terms and conditions." },
    { number: "04", title: "Track & Pay", description: "Monitor attendance and make secure payments through the platform." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming <span className="text-primary">Domestic Work</span> in Kenya
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connecting verified, trained domestic workers with households through professionalism, technology, and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/employers">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto rounded-full px-8">
                  I'm Hiring
                </Button>
              </Link>
              <Link to="/workers">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto rounded-full px-8">
                  I'm Looking for Work
                </Button>
              </Link>
            </div>
            <div className="mt-8">
              <img 
                src={heroImage} 
                alt="Happy family with domestic worker in a modern living room" 
                className="rounded-2xl shadow-large w-full max-w-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">5,000+</h3>
              <p className="text-muted-foreground">Verified Workers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-muted-foreground">Happy Households</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose HouseAid?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing domestic work with technology, transparency, and trust
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from search to hire
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What People Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-primary rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Sarah Mwangi</h4>
                  <p className="text-sm text-muted-foreground">Employer, Nairobi</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "HouseAid helped me find a verified, professional nanny for my kids. The GPS tracking and digital payments make everything so much easier!"
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-secondary rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Jane Wanjiku</h4>
                  <p className="text-sm text-muted-foreground">Domestic Worker</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "The training I received through HouseAid changed my life. I now have a formal contract and earn fair wages with benefits!"
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">David Omondi</h4>
                  <p className="text-sm text-muted-foreground">Family, Mombasa</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">
                "Finding reliable house help was always stressful. HouseAid's verification process gives us complete peace of mind."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of families and workers building better relationships through HouseAid
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/employers">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                I'm an Employer
              </Button>
            </Link>
            <Link to="/workers">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                I'm a Worker
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
