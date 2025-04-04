
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/ffd963a9-37d7-4941-9ae5-013fbc6d8eab.png" alt="TIME Logo" className="h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/courses">Courses Offered</NavLink>
            <NavLink to="/success">Success Stories</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-time-blue" />
            ) : (
              <Menu className="h-6 w-6 text-time-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
            <MobileNavLink to="/courses" onClick={toggleMenu}>Courses Offered</MobileNavLink>
            <MobileNavLink to="/success" onClick={toggleMenu}>Success Stories</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact Us</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-time-blue hover:text-time-lightblue font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="text-time-blue hover:text-time-lightblue font-medium py-2 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
