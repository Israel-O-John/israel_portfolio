import { Button, LinkButton } from "../ui/Button";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/Israel-O-John",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://linkedin.com",
      href: "https://www.linkedin.com/in/osubor-israel-16708b2a9",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:osuborisrael3@gmail.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg mb-2">John Israel</h3>
              <p className="text-[#717182] text-sm">Frontend Developer</p>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <LinkButton
                  key={index}
                  className="hover:bg-slate-100"
                  size="sm"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </LinkButton>
              ))}
            </div>

            <Button
              className="border px-2 py-1 hover:bg-slate-100"
              size="sm"
              onClick={scrollToTop}
            >
              Back to Top
            </Button>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-[#717182] text-sm">
              © {currentYear} John Israel. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
