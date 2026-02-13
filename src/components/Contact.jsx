import { LinkButton } from "../ui/Button";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "osuborisrael3@gmail.com",
      href: "mailto:osuborisrael3@gmail.com",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Israel-O-John",
      href: "https://github.com/Israel-O-John",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/osubor-israel",
      href: "https://www.linkedin.com/in/osubor-israel-16708b2a9",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-200/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Contact Me</h2>
          <p className="text-lg text-[#717182] mb-12 max-w-2xl mx-auto">
            I’m actively seeking frontend development internships where I can
            contribute to real projects while continuing to grow as a developer.
            Feel free to reach out if you have opportunities, want to
            collaborate, or have questions about my work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactLinks.map((contact, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-md border"
              >
                <LinkButton
                  variant="outline"
                  size="lg"
                  className="w-full h-auto flex-col gap-3 py-6"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.icon}

                  <div>
                    <p className="text-sm opacity-70">{contact.label}</p>
                    <p className="text-sm">{contact.value}</p>
                  </div>
                </LinkButton>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <LinkButton
              size="lg"
              href="mailto:osuborisrael3@gmail.com"
              className="bg-black text-white rounded-md hover:bg-black/90"
            >
              Send Me an Email
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
