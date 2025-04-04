
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-time-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <img src="/lovable-uploads/ffd963a9-37d7-4941-9ae5-013fbc6d8eab.png" alt="TIME Logo" className="h-16 bg-white rounded p-1 mb-4" />
            </Link>
            <p className="mb-4">
              Triumphant Institute of Management Education Pvt. Ltd., a trusted name in competitive exam coaching for over 32 years.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/courses">Courses Offered</FooterLink>
              <FooterLink to="/success">Success Stories</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-time-yellow mt-1" />
                <p>Dwarakanagar, NAD Junction, and Gajuwaka, Visakhapatnam</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-time-yellow" />
                <p>+91 123 456 7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-time-yellow" />
                <p>info@timevizag.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} TIME Institute Vizag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="bg-white/10 hover:bg-time-yellow hover:text-time-blue p-2 rounded-full transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="hover:text-time-yellow transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
