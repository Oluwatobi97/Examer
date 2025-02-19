import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Added X icon for closing the menu

interface IProps {
  children: ReactNode;
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Examer</div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-6 h-6 text-blue-600 cursor-pointer" />
          ) : (
            <Menu className="w-6 h-6 text-blue-600 cursor-pointer" />
          )}
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Drawer with Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-100 bg-opacity-90 z-40">
          <div className="relative bg-white p-6 shadow-lg">
            <div className="flex justify-end">
              <X
                className="w-6 h-6 text-blue-600 cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            <div className="space-y-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="block hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block hover:text-blue-500"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const ParticipantLayouts = ({ children }: IProps) => {
  return (
    <div className="max-w-7xl mx-auto px-3 py-5 relative z-10">
      <NavBar />
      {children}
    </div>
  );
};
