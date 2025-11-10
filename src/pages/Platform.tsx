import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, CheckCircle, Apple } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Platform = () => {
  const features = [
    "Easy profile creation and verification",
    "GPS-enabled clock in/out system",
    "Real-time attendance tracking",
    "Secure digital payments",
    "Digital contract management",
    "In-app messaging and support",
    "Performance ratings and reviews",
    "Training and certification access"
  ];

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "The app makes managing my workers so easy! GPS tracking gives me peace of mind."
    },
    {
      name: "Jane W.",
      rating: 5,
      comment: "Finally, a platform that respects domestic workers. I love the professional contracts and on-time payments!"
    },
    {
      name: "David O.",
      rating: 5,
      comment: "Best decision we made for our household. Finding verified workers has never been easier."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The HouseAid Platform
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Everything you need to hire, manage, and pay domestic workers – 
                all in one beautiful, easy-to-use mobile app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  Coming Soon
                </Button>
                <Button size="lg" variant="outline" className="flex items-center bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Apple className="h-5 w-5 mr-2" />
                  iOS Coming Soon
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-white">
                <div className="aspect-[9/16] bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-48 w-48 text-white opacity-50" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for both employers and workers with intuitive design and powerful functionality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="font-medium">{feature}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">App Screenshots</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how simple and intuitive the HouseAid platform is
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="p-6 bg-card">
                <div className="aspect-[9/16] bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-32 w-32 text-primary-foreground opacity-30" />
                </div>
                <h3 className="font-semibold text-center">Coming Soon</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers & Workers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">For Employers</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Browse verified worker profiles with ratings and reviews</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Track attendance with real-time GPS notifications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Manage contracts and payments in one place</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Get monthly reports and analytics</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">For Workers</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Create a professional profile showcasing your skills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Clock in/out easily with GPS verification</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Receive guaranteed payments on time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Access training and build your career</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">User Reviews</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <span className="text-lg font-semibold ml-2">4.9 out of 5</span>
            </div>
            <p className="text-muted-foreground">Based on 500+ reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download the HouseAid app and join thousands of families and workers building better relationships
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Android App Coming Soon
            </Button>
            <Button size="lg" variant="outline" className="flex items-center bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Apple className="h-5 w-5 mr-2" />
              iOS App Coming Soon
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
