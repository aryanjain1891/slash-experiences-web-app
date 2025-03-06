
import { useState } from 'react';
import { useInView } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { 
  Separator,
  SeparatorProps 
} from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Gift, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  
  const footerLinks = [
    {
      title: "Experiences",
      links: [
        { name: "Adventure", href: "#" },
        { name: "Dining", href: "#" },
        { name: "Wellness", href: "#" },
        { name: "Luxury", href: "#" },
        { name: "Learning", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "How It Works", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Gift Rules", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer 
      ref={ref} 
      className="pt-16 pb-8 bg-secondary/30"
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-6">
              <Gift className="h-6 w-6" />
              <span className="font-medium text-xl">Memento</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Curated experience gifts that create lasting memories. We believe in the power of experiences over material possessions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Memento. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
