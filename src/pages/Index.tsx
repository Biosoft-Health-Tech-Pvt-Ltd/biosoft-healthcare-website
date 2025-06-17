import { useState, useEffect, useRef } from "react";
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
  Activity,
  Menu,
  X,
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Trap focus inside menu
  useEffect(() => {
    if (!mobileMenuOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) (focusable[0] as HTMLElement).focus();
    function handleTab(e: KeyboardEvent) {
      if (!focusable.length) return;
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
      if (e.key === "Escape") setMobileMenuOpen(false);
    }
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [mobileMenuOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const userExperienceVideos = [
    { id: "cYVD59tuOLI", title: "Healthcare Provider Experience" },
    { id: "AvARNcMAVYM", title: "Clinical Workflow Enhancement" },
    { id: "4LlIrLdu7PE", title: "Population Health Management" },
    { id: "bPzttnhdQrE", title: "Real-time Analytics" },
    { id: "27TUVrQGa0k", title: "Patient Care Coordination" },
    { id: "wuHF8QXoiro", title: "Healthcare Intelligence Platform" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/lovable-uploads/Image3.png" alt="Biosoft Logo" className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-biosoft-orange transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-biosoft-orange transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-biosoft-orange transition-colors">
                Products
              </a>
              <a href="#experiences" className="text-gray-700 hover:text-biosoft-orange transition-colors">
                Solutions
              </a>
              <a href="#contact" className="text-gray-700 hover:text-biosoft-orange transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-biosoft-orange hover:bg-biosoft-orange/80 text-white hidden md:inline-block">Request Demo</Button>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-biosoft-orange"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-haspopup="true"
              aria-controls="mobile-menu"
            >
              <Menu className="h-7 w-7 text-biosoft-orange" />
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex" aria-modal="true" role="dialog" tabIndex={-1}>
            {/* Backdrop with blur */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
            {/* Slide-in menu */}
            <div
              ref={menuRef}
              id="mobile-menu"
              className="ml-auto w-4/5 max-w-xs h-full bg-white shadow-2xl p-0 flex flex-col relative transform translate-x-0 transition-transform duration-300 animate-slide-in-right focus:outline-none"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <img src="/lovable-uploads/3218728f-3748-4813-bb97-79d736e0031c.png" alt="Biosoft Logo" className="h-8 w-auto" />
                <button
                  className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-biosoft-orange"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7 text-gray-700" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-2 px-6 py-8" aria-label="Mobile Navigation">
                <a
                  href="#home"
                  className="block py-3 px-2 rounded text-gray-800 text-lg font-medium hover:bg-biosoft-orange/10 focus:bg-biosoft-orange/20 focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block py-3 px-2 rounded text-gray-800 text-lg font-medium hover:bg-biosoft-orange/10 focus:bg-biosoft-orange/20 focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block py-3 px-2 rounded text-gray-800 text-lg font-medium hover:bg-biosoft-orange/10 focus:bg-biosoft-orange/20 focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#experiences"
                  className="block py-3 px-2 rounded text-gray-800 text-lg font-medium hover:bg-biosoft-orange/10 focus:bg-biosoft-orange/20 focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </a>
                <a
                  href="#contact"
                  className="block py-3 px-2 rounded text-gray-800 text-lg font-medium hover:bg-biosoft-orange/10 focus:bg-biosoft-orange/20 focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button className="bg-biosoft-orange hover:bg-biosoft-orange/80 text-white mt-6 py-3 text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Request Demo
                </Button>
              </nav>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redefining Healthcare Management */}
      <section id="home" className="bg-gradient-to-br from-biosoft-blue to-biosoft-blue-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/lovable-uploads/Image2.png" alt="Healthcare Technology" className="w-full h-full object-cover" />
        </div>
        <div className="w-full px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-slide-up delay-100">Redefining Healthcare Management</h1>
              <p className="text-xl mb-8 opacity-90 animate-fade-slide-up delay-200">
                Unifying data seamlessly across the healthcare ecosystem, our world-leading platform eBios uncovers valuable insights from health records, empowering individuals
                and institutions to be accountable for their care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-slide-up delay-300">
                <Button size="lg" className="bg-biosoft-orange hover:bg-biosoft-orange/80 text-white px-8 py-3">
                  Get Started Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-biosoft-blue border-2 border-biosoft-blue shadow-lg hover:bg-biosoft-orange hover:text-white hover:border-biosoft-orange px-8 py-3 font-semibold transition-colors"
                  onClick={() => setVideoModalOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in delay-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img src="/lovable-uploads/Image2.png" alt="Healthcare Professional" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="absolute inset-0" onClick={() => setVideoModalOpen(false)} aria-label="Close video modal" />
            <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-[90vw] p-0 animate-fade-slide-up">
              <button
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-biosoft-orange"
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/JHpFFxnHtzc?autoplay=1&rel=0"
                  title="Biosoft Demo Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-xl border-0"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Reimagine the CARE in Healthcare Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/lovable-uploads/Image1.png" alt="Healthcare Hands" className="w-full h-96 object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-biosoft-orange/20 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Reimagine the <span className="text-biosoft-orange">CARE</span> in Healthcare
              </h2>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in delay-100">
                eBios is a healthcare intelligence platform that gathers and analyzes data for personalized, cohort, and population health management. Experience real-time insights
                and predictive analytics for enhanced clinical outcomes and improved population health.
              </p>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-200">
                Our comprehensive platform transforms how healthcare providers deliver care by providing actionable insights that drive better patient outcomes and operational
                efficiency.
              </p>
              <Button className="bg-biosoft-orange hover:bg-biosoft-orange/80 text-white px-8 py-3 animate-fade-in delay-300">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Benefits Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Organizational Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-biosoft-orange/10 to-biosoft-orange/5 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-biosoft-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in delay-100">ROI</h3>
              <p className="text-gray-600 text-lg animate-fade-in delay-200">
                Achieve significant return on investment through improved efficiency, reduced costs, and enhanced patient outcomes with our proven healthcare intelligence platform.
              </p>
            </div>

            <div className="bg-gradient-to-br from-biosoft-blue/10 to-biosoft-blue/5 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-biosoft-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in delay-100">Growth</h3>
              <p className="text-gray-600 text-lg animate-fade-in delay-200">
                Drive organizational growth through data-driven insights, improved patient satisfaction, and optimized healthcare delivery processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Redefine Section with Three Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-biosoft-orange">Redefine</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-biosoft-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-biosoft-blue" />
                </div>
                <CardTitle className="text-xl animate-fade-in delay-100">Data Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 animate-fade-in delay-200">
                  Transform how you interact with healthcare data through intuitive interfaces and powerful analytics capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-biosoft-green/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-biosoft-green" />
                </div>
                <CardTitle className="text-xl animate-fade-in delay-100">Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 animate-fade-in delay-200">
                  Seamlessly integrate with existing healthcare systems and technologies for comprehensive data unification.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-transform duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-biosoft-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-biosoft-orange" />
                </div>
                <CardTitle className="text-xl animate-fade-in delay-100">Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 animate-fade-in delay-200">
                  Foster collaboration across healthcare teams with shared insights and unified data perspectives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refining Care with Innovation */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                <span className="text-biosoft-orange">Refining Care</span> with Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6 animate-fade-in delay-100">
                Our eBios platform leverages cutting-edge technology to transform healthcare delivery. From predictive analytics to real-time monitoring, we provide the tools
                healthcare professionals need to deliver exceptional patient care.
              </p>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-200">
                Experience the future of healthcare with AI-powered insights, seamless data integration, and comprehensive population health management capabilities.
              </p>
              <Button className="bg-biosoft-orange hover:bg-biosoft-orange/80 text-white px-8 py-3 animate-fade-in delay-300">Explore Innovation</Button>
            </div>
            <div className="relative animate-fade-in delay-200">
              <img src="/lovable-uploads/Image2.png" alt="Healthcare Innovation" className="w-full h-96 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Integrate, Analyze, Predict Section */}
      <section className="py-20 bg-gradient-to-br from-biosoft-yellow/100 to-biosoft-orange/5">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                <span className="text-biosoft-orange">Integrate. Analyze. Predict.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-100">
                Our comprehensive healthcare intelligence platform provides end-to-end solutions for modern healthcare challenges. From data integration to predictive analytics,
                eBios empowers healthcare organizations to make informed decisions and improve patient outcomes.
              </p>
            </div>
            <div className="relative animate-fade-in delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-biosoft-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-biosoft-blue animate-fade-in delay-100">85%</div>
                    <div className="text-sm text-gray-600 animate-fade-in delay-200">Data Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-biosoft-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <Activity className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-biosoft-green animate-fade-in delay-100">92%</div>
                    <div className="text-sm text-gray-600 animate-fade-in delay-200">Patient Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Healthier Futures */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-biosoft-orange mb-8 animate-fade-in">Engineering Healthier Futures</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-biosoft-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-biosoft-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in delay-100">Access to Data</h3>
              <p className="text-gray-600 animate-fade-in delay-200">Secure and comprehensive access to healthcare data across multiple systems and platforms.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-biosoft-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-biosoft-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in delay-100">Hybrid Solutions</h3>
              <p className="text-gray-600 animate-fade-in delay-200">Flexible deployment options combining cloud and on-premise solutions for optimal performance.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-biosoft-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-biosoft-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in delay-100">Supporting Excellence</h3>
              <p className="text-gray-600 animate-fade-in delay-200">24/7 support and continuous innovation to ensure healthcare excellence and patient care.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-biosoft-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-biosoft-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in delay-100">Streamlined Operations</h3>
              <p className="text-gray-600 animate-fade-in delay-200">Optimize healthcare operations through intelligent automation and workflow management.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-biosoft-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-biosoft-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in delay-100">Precision Analytics</h3>
              <p className="text-gray-600 animate-fade-in delay-200">Advanced analytics and machine learning for precise healthcare insights and predictions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-biosoft-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-biosoft-green" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in delay-100">Compliance</h3>
              <p className="text-gray-600 animate-fade-in delay-200">Full compliance with healthcare regulations and standards including HIPAA and HL7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-r from-biosoft-blue/10 to-biosoft-green/10">
        {" "}
        {/* Updated for subtlety */}
        <div className="w-full px-2 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Teams</h2>
            <p className="text-xl md:text-2xl text-gray-700 animate-fade-in delay-100">Meet the dedicated teams driving innovation and excellence at Biosoft.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Team 1 */}
            <div className="bg-white rounded-xl p-10 md:p-14 shadow-2xl flex flex-col items-center transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/Team1.jpeg"
                alt="Healthcare Technology Team"
                className="w-full h-80 md:h-[28rem] object-cover rounded-md border-8 border-biosoft-blue shadow-md mb-8"
              />
              <h3 className="text-xl md:text-xl font-bold text-biosoft-blue mb-3 animate-fade-in delay-100">Healthcare Technology Team</h3>
              <p className="text-lg md:text-md text-gray-600 animate-fade-in delay-200">Experts in developing and implementing advanced healthcare solutions.</p>
            </div>
            {/* Team 2 */}
            <div className="bg-white rounded-xl p-10 md:p-14 shadow-2xl flex flex-col items-center transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/Team2.jpeg"
                alt="Support & Implementation Team"
                className="w-full h-80 md:h-[28rem] object-cover rounded-md border-8 border-biosoft-orange shadow-md mb-8"
              />
              <h3 className="text-xl md:text-xl font-bold text-biosoft-orange mb-3 animate-fade-in delay-100">Support & Implementation Team</h3>
              <p className="text-lg md:text-md text-gray-600 animate-fade-in delay-200">Dedicated to ensuring smooth onboarding and ongoing client success.</p>
            </div>
            {/* Team 3 */}
            <div className="bg-white rounded-xl p-10 md:p-14 shadow-2xl flex flex-col items-center transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/Team3.jpeg"
                alt="Strategy & Innovation Team"
                className="w-full h-80 md:h-[28rem] object-cover rounded-md border-8 border-biosoft-green shadow-md mb-8"
              />
              <h3 className="text-xl md:text-xl font-bold text-biosoft-green mb-3 animate-fade-in delay-100">Strategy & Innovation Team</h3>
              <p className="text-lg md:text-md text-gray-600 animate-fade-in delay-200">Driving growth and new initiatives for a healthier future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Experiences Section */}
      <section id="experiences" className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">User Experiences</h2>
            <p className="text-xl text-gray-600 animate-fade-in delay-100">See how healthcare professionals are transforming patient care with eBios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userExperienceVideos.map((video, index) => (
              <Card key={video.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="p-0">
                  <div className="relative aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/30 transition-colors cursor-pointer"
                      onClick={() => window.open(`https://youtu.be/${video.id}`, "_blank")}
                    >
                      <div className="w-16 h-16 bg-biosoft-orange rounded-full flex items-center justify-center group-hover:bg-biosoft-orange/80 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg text-gray-900 mb-2 animate-fade-in delay-100">{video.title}</CardTitle>
                  <Button variant="outline" className="w-full animate-fade-in delay-200" onClick={() => window.open(`https://youtu.be/${video.id}`, "_blank")}>
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
      <section id="contact" className="py-20 bg-gradient-to-r from-biosoft-blue to-biosoft-orange text-white">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">About Us</h2>
            <p className="text-xl opacity-90 animate-fade-in delay-100">
              Leading provider of healthcare intelligence solutions, transforming patient care through innovative technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 animate-fade-in delay-100">Call Us</h3>
              <p className="opacity-90 animate-fade-in delay-200">+91 9606597766</p>
            </div>

            <div>
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 animate-fade-in delay-100">Email Us</h3>
              <p className="opacity-90 animate-fade-in delay-200">contact@biosoftltd.com</p>
            </div>

            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 animate-fade-in delay-100">Visit Us</h3>
              <p className="opacity-90 animate-fade-in delay-200">Bangalore, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/Image3.png" alt="Biosoft Logo" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 mb-4 animate-fade-in delay-100">
                Leading provider of eBios Healthcare Intelligence Platform and healthcare management solutions. Transforming healthcare facilities across India with innovative data
                unification technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 animate-fade-in delay-100">Products</h3>
              <ul className="space-y-2 text-gray-400 animate-fade-in delay-200">
                <li>eBios Platform</li>
                <li>Analytics Dashboard</li>
                <li>Population Health</li>
                <li>Clinical Intelligence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 animate-fade-in delay-100">Contact Info</h3>
              <ul className="space-y-2 text-gray-400 animate-fade-in delay-200">
                <li>Bangalore, India</li>
                <li>+91 9606597766</li>
                <li>contact@biosoftltd.com</li>
                <li>www.biosoftltd.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in delay-300">
            <p>© 2024 Biosoft Ltd. All rights reserved. Healthcare intelligence platform you can trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
