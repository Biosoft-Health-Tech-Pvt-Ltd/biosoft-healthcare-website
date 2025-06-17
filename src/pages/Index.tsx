
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
  Settings,
  Play,
  Heart,
  BarChart3,
  TrendingUp,
  Globe,
  Stethoscope,
  Activity
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

  const userExperienceVideos = [
    { id: "cYVD59tuOLI", title: "Healthcare Provider Experience" },
    { id: "AvARNcMAVYM", title: "Clinical Workflow Enhancement" },
    { id: "4LlIrLdu7PE", title: "Population Health Management" },
    { id: "bPzttnhdQrE", title: "Real-time Analytics" },
    { id: "27TUVrQGa0k", title: "Patient Care Coordination" },
    { id: "wuHF8QXoiro", title: "Healthcare Intelligence Platform" }
  ];

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
              <a href="#about" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">Products</a>
              <a href="#experiences" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">Solutions</a>
              <a href="#contact" className="text-gray-700 hover:text-[#FF7A3D] transition-colors">Contact</a>
            </div>
            <Button className="bg-[#FF7A3D] hover:bg-[#e6692d] text-white">
              Request Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Redefining Healthcare Management */}
      <section id="home" className="bg-gradient-to-br from-[#4A90E2] to-[#2563eb] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/bdddc305-43df-4300-8f15-68a2ee424522.png" 
            alt="Healthcare Technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Redefining Healthcare Management
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Unifying data seamlessly across the healthcare ecosystem, our world-leading platform eBios uncovers valuable insights from health records, empowering individuals and institutions to be accountable for their care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#FF7A3D] hover:bg-[#e6692d] text-white px-8 py-3">
                  Get Started Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#4A90E2] px-8 py-3"
                  onClick={() => window.open('https://youtu.be/JHpFFxnHtzc?si=1ZdFvgAWfIXPiVG9', '_blank')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/bdddc305-43df-4300-8f15-68a2ee424522.png" 
                  alt="Healthcare Professional" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reimagine the CARE in Healthcare Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/9e3d30fa-e4ad-4185-82af-fe8cf3a1273d.png" 
                alt="Healthcare Hands" 
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A3D]/20 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Reimagine the <span className="text-[#FF7A3D]">CARE</span> in Healthcare
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                eBios is a healthcare intelligence platform that gathers and analyzes data for personalized, 
                cohort, and population health management. Experience real-time insights and predictive analytics 
                for enhanced clinical outcomes and improved population health.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive platform transforms how healthcare providers deliver care by providing 
                actionable insights that drive better patient outcomes and operational efficiency.
              </p>
              <Button className="bg-[#FF7A3D] hover:bg-[#e6692d] text-white px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Organizational Benefits
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#FF7A3D]/10 to-[#FF7A3D]/5 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-[#FF7A3D] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ROI</h3>
              <p className="text-gray-600 text-lg">
                Achieve significant return on investment through improved efficiency, reduced costs, 
                and enhanced patient outcomes with our proven healthcare intelligence platform.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#4A90E2]/10 to-[#4A90E2]/5 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth</h3>
              <p className="text-gray-600 text-lg">
                Drive organizational growth through data-driven insights, improved patient satisfaction, 
                and optimized healthcare delivery processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Redefine Section with Three Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#FF7A3D]">Redefine</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-[#4A90E2]" />
                </div>
                <CardTitle className="text-xl">Data Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Transform how you interact with healthcare data through intuitive interfaces 
                  and powerful analytics capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-[#4CAF50]" />
                </div>
                <CardTitle className="text-xl">Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Seamlessly integrate with existing healthcare systems and technologies 
                  for comprehensive data unification.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-[#FF7A3D]/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[#FF7A3D]" />
                </div>
                <CardTitle className="text-xl">Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Foster collaboration across healthcare teams with shared insights 
                  and unified data perspectives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refining Care with Innovation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#FF7A3D]">Refining Care</span> with Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our eBios platform leverages cutting-edge technology to transform healthcare delivery. 
                From predictive analytics to real-time monitoring, we provide the tools healthcare 
                professionals need to deliver exceptional patient care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Experience the future of healthcare with AI-powered insights, seamless data integration, 
                and comprehensive population health management capabilities.
              </p>
              <Button className="bg-[#FF7A3D] hover:bg-[#e6692d] text-white px-8 py-3">
                Explore Innovation
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/bdddc305-43df-4300-8f15-68a2ee424522.png" 
                alt="Healthcare Innovation" 
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrate, Analyze, Predict Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#FF7A3D]">Integrate. Analyze. Predict.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive healthcare intelligence platform provides end-to-end solutions 
                for modern healthcare challenges. From data integration to predictive analytics, 
                eBios empowers healthcare organizations to make informed decisions and improve patient outcomes.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#4A90E2]">85%</div>
                    <div className="text-sm text-gray-600">Data Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#4CAF50]">92%</div>
                    <div className="text-sm text-gray-600">Patient Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Healthier Futures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF7A3D] mb-8">
              Engineering Healthier Futures
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF7A3D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#FF7A3D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Access to Data</h3>
              <p className="text-gray-600">
                Secure and comprehensive access to healthcare data across multiple systems and platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-[#4A90E2]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hybrid Solutions</h3>
              <p className="text-gray-600">
                Flexible deployment options combining cloud and on-premise solutions for optimal performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supporting Excellence</h3>
              <p className="text-gray-600">
                24/7 support and continuous innovation to ensure healthcare excellence and patient care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF7A3D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#FF7A3D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Streamlined Operations</h3>
              <p className="text-gray-600">
                Optimize healthcare operations through intelligent automation and workflow management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A90E2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-[#4A90E2]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics and machine learning for precise healthcare insights and predictions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-600">
                Full compliance with healthcare regulations and standards including HIPAA and HL7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#4A90E2] mb-4">Team</h3>
              <p className="text-gray-600">
                Our experienced team of healthcare technology experts and clinical professionals 
                work together to deliver innovative solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#FF7A3D] mb-4">Support</h3>
              <p className="text-gray-600">
                Comprehensive support and training programs ensure successful implementation 
                and ongoing success with our platform.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Strategy</h3>
              <p className="text-gray-600">
                Strategic partnerships and continuous innovation drive our mission to transform 
                healthcare through intelligent data solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Experiences Section */}
      <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              User Experiences
            </h2>
            <p className="text-xl text-gray-600">
              See how healthcare professionals are transforming patient care with eBios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userExperienceVideos.map((video, index) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="p-0">
                  <div className="relative aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/30 transition-colors cursor-pointer"
                         onClick={() => window.open(`https://youtu.be/${video.id}`, '_blank')}>
                      <div className="w-16 h-16 bg-[#FF7A3D] rounded-full flex items-center justify-center group-hover:bg-[#e6692d] transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg text-gray-900 mb-2">{video.title}</CardTitle>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(`https://youtu.be/${video.id}`, '_blank')}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Experience
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#4A90E2] to-[#FF7A3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl opacity-90">
              Leading provider of healthcare intelligence solutions, transforming patient care through innovative technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+91 9606597766</p>
            </div>
            
            <div>
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">contact@biosoftltd.com</p>
            </div>
            
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="opacity-90">Bangalore, India</p>
            </div>
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
                Leading provider of eBios Healthcare Intelligence Platform and healthcare management solutions. 
                Transforming healthcare facilities across India with innovative data unification technology.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>eBios Platform</li>
                <li>Analytics Dashboard</li>
                <li>Population Health</li>
                <li>Clinical Intelligence</li>
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
            <p>&copy; 2024 Biosoft Ltd. All rights reserved. Healthcare intelligence platform you can trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
