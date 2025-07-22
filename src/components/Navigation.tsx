import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, MapPin, Calendar, Users, Lightbulb, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '/about', icon: Users },
    { name: 'Destinations', href: '/destinations', icon: MapPin },
    { name: 'Events', href: '/events', icon: Calendar },
    // { name: 'Incubator', href: '/incubator', icon: Lightbulb },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const workItems = [
    { name: 'Incubation', href: '/work/incubation' },
    { name: 'Linkages', href: '/work/linkages' },
    { name: 'Scouting', href: '/work/scouting' },
    { name: 'Site Visits', href: '/work/site-visits' },
    { name: 'Subgranting', href: '/work/subgranting' },
    { name: 'Training & Mentorship', href: '/work/training-mentorship' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
                  Mombasa Tourism Lab
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Regular menu items */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/5"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Our Work dropdown */}
              <NavigationMenu className="relative">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary/5 bg-transparent">
                      Our Work
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex flex-col w-[200px] gap-2 p-4 max-h-[400px] overflow-y-auto">
                        {workItems.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  "block select-none rounded-md py-3 px-4 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                                )}
                              >
                                <div className="text-sm font-medium">{item.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  className="flex items-center w-full text-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
            
            {/* Our Work section in mobile menu */}
            <div className="pt-4 pb-1">
              <div className="flex items-center px-3 py-2">
                <Briefcase className="h-5 w-5 mr-3 text-primary" />
                <span className="font-medium text-primary">Our Work</span>
              </div>
              <div className="mt-1 pl-11 border-l border-primary/10 ml-3">
                {workItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-foreground hover:text-primary py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;