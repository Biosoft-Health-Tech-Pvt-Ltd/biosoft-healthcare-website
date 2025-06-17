
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Users, 
  Shield, 
  Zap, 
  Award,
  Monitor,
  Database,
  Settings
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/3218728f-3748-4813-bb97-79d736e0031c.png" 
                alt="Biosoft Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">Contact</a>
            </div>
            <Button className="bg-[#FF7A3D] hover:bg-[#e6692d] text-white">
              Request Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-[#4A90E2] to-[#FF7A3D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Healthcare Made <span className="text-[#4CAF50]">Simple</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your healthcare facility with Biosoft's comprehensive Hospital Information Systems. 
                Streamline operations, enhance patient care, and boost efficiency with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-3">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4A90E2] px-8 py-3">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4CAF50]">500+</div>
                    <div className="text-sm opacity-80">Healthcare Facilities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4CAF50]">99.9%</div>
                    <div className="text-sm opacity-80">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4CAF50]">24/7</div>
                    <div className="text-sm opacity-80">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#4CAF50]">15+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your healthcare facility with our integrated Hospital Information Systems 
              designed to streamline operations and enhance patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-[#FF7A3D]/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-[#FF7A3D]" />
                </div>
                <CardTitle className="text-xl text-gray-900">Hospital Information Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Complete HIS solutions covering patient management, electronic health records, 
                  billing, and administrative functions in one integrated platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-[#4A90E2]" />
                </div>
                <CardTitle className="text-xl text-gray-900">Data Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Secure, HIPAA-compliant data storage and management systems with advanced 
                  analytics and reporting capabilities for informed decision-making.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <CardTitle className="text-xl text-gray-900">System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Seamless integration with existing healthcare systems, medical devices, 
                  and third-party applications for unified healthcare operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Healthcare Leaders Choose Biosoft
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for innovative healthcare technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-[#FF7A3D]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FF7A3D]/20 transition-colors">
                <CheckCircle className="w-10 h-10 text-[#FF7A3D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Reliability</h3>
              <p className="text-gray-600">
                15+ years of experience serving 500+ healthcare facilities with 99.9% uptime guarantee.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4A90E2]/20 transition-colors">
                <Shield className="w-10 h-10 text-[#4A90E2]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                HIPAA-compliant, encrypted systems with advanced security protocols to protect patient data.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4CAF50]/20 transition-colors">
                <Zap className="w-10 h-10 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Implementation</h3>
              <p className="text-gray-600">
                Rapid deployment with minimal disruption to your existing operations and workflows.
              </p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-20 h-20 bg-[#FF7A3D]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FF7A3D]/20 transition-colors">
                <Users className="w-10 h-10 text-[#FF7A3D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated support team available round-the-clock to ensure smooth operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to transform your healthcare operations? Contact us today for a personalized consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#FF7A3D]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#FF7A3D]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 9606597766</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@biosoftltd.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">Bangalore, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Request a Demo</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll schedule a personalized demo of our healthcare solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Healthcare Facility</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your healthcare facility's needs..."
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#FF7A3D] hover:bg-[#e6692d] text-white">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/3218728f-3748-4813-bb97-79d736e0031c.png" 
                  alt="Biosoft Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Leading provider of Hospital Information Systems and healthcare management solutions. 
                Transforming healthcare facilities across India with innovative technology.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-[#FF7A3D] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#FF7A3D] transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-[#FF7A3D] transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-[#FF7A3D] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Bangalore, India</li>
                <li>+91 9606597766</li>
                <li>contact@biosoftltd.com</li>
                <li>www.biosoftltd.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Biosoft Ltd. All rights reserved. Healthcare technology solutions you can trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
