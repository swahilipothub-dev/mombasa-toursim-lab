import { useState } from "react";
import {
  Menu,
  X,
  Users,
  ChevronDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { name: "About", href: "/about", type: "route" },
    { name: "Impacts", href: "/impacts", type: "route", icon: TrendingUp },
  ];

  const innovatorItems = [
    { name: "African Food Trail", href: "/innovators/african-food-trail" },
    { name: "Big Ship", href: "/innovators/big-ship" },
    { name: "K-Lenses", href: "/innovators/k-lenses" },
    {
      name: "Mombasa Cultural Village",
      href: "/innovators/mombasa-cultural-village",
    },
    { name: "Studio Bella Bella", href: "/innovators/studio-bella-bella" },
    { name: "Umoja wa Pwani", href: "/innovators/umoja-wa-pwani" },
  ];

  const ourWorkItems = [
    { name: "Incubation", href: "/incubation" },
    { name: "Linkages", href: "/linkages" },
    { name: "Scouting Site Visits", href: "/scouting-site-visits" },
    { name: "Subgranting", href: "/subgranting" },
    { name: "Training & Mentorship", href: "/training-mentorship" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleNavigation = (item: any) => {
    if (item.type === "scroll") {
      scrollToSection(item.href);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent"
              >
                Mombasa Tourism Lab
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/5"
                >
                  {item.name}
                </Link>
              ))}

              {/* Innovators Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/5">
                      Innovators
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border">
                  {innovatorItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="w-full cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Our Work Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/5">
                  Our Work
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border">
                  {ourWorkItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="w-full cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center w-full text-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {Icon && <Icon className="h-5 w-5 mr-3" />}
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Innovators Section */}
            <div className="pt-2">
              <div className="text-foreground px-3 py-2 text-base font-medium flex items-center">
                Innovators
              </div>
              {innovatorItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-foreground hover:text-primary hover:bg-primary/5 px-6 py-2 rounded-md text-sm transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Our Work Section */}
            <div className="pt-2">
              <div className="text-foreground px-3 py-2 text-base font-medium">
                Our Work
              </div>
              {ourWorkItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-foreground hover:text-primary hover:bg-primary/5 px-6 py-2 rounded-md text-sm transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
