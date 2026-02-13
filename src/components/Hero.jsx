import { LinkButton } from "../ui/Button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-4">John Israel</h1>
          <h2 className="text-xl md:text-2xl text-[#717182]  mb-6">
            Frontend Developer
          </h2>

          <p className="text-lg text-[#717182] mb-8 max-w-2xl mx-auto">
            Frontend Developer passionate about building responsive and
            user-friendly web experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <LinkButton
              href="#projects"
              onClick={scrollToProjects}
              size="lg"
              className="bg-black text-white"
            >
              View Projects
            </LinkButton>

            <LinkButton
              href="#contact"
              size="lg"
              onClick={scrollToContact}
              className="border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
            >
              Contact Me
            </LinkButton>
          </div>

          <div className="flex justify-center space-x-4">
            <LinkButton
              href="https://github.com/Israel-O-John"
              className="hover:bg-slate-100"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </LinkButton>

            <LinkButton
              href="https://www.linkedin.com/in/osubor-israel-16708b2a9"
              className="hover:bg-slate-100"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </LinkButton>

            <LinkButton
              href="mailto:osuborisrael3@gmail.com.com"
              className="hover:bg-slate-100"
              size="sm"
            >
              <Mail className="h-5 w-5" />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
