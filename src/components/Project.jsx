import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { LinkButton } from "../ui/Button";

import { ExternalLink, Github } from "lucide-react";

function Project() {
  const projects = [
    {
      title: "To-Do",
      description: "A simple Todo app built with React & Tailwind",
      image: "To Do.png",
      technologies: ["React", "Tailwind"],
      liveUrl: "https://todo3rd.netlify.app/",
      githubUrl: "https://github.com/Israel-O-John/To-Do",
    },
    {
      title: "Task Minder ",
      description: "Task Minder is a production management app",
      image: "Task Minder.png",
      technologies: ["Javascript", "CSS", "HTML"],
      liveUrl: "https://taskmindrrer.netlify.app/",
      githubUrl: "https://github.com/Israel-O-John/taskMinder",
    },
    {
      title: "W. News",
      description:
        "W.news is a news app homepage. I took the design from Frontend mentor challenges.",
      image: "W.news.png",
      technologies: ["Javascript", "React", "Tailwind"],
      liveUrl: "https://w-news-home-page.netlify.app/",
      githubUrl: "https://github.com/Israel-O-John/W.news",
    },
    {
      title: "Foodl",
      description: "A food recipe site",
      image: "Foodl.png",
      technologies: ["React", "Tailwind"],
      liveUrl: "https://food-l.netlify.app/",
      githubUrl: "https://github.com/Israel-O-John/Foodl-with-react-tailwind",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Projects</h2>
            <p className="text-lg text-[#717182] max-w-2xl mx-auto">
              Selected projects demonstrating my technical skills and
              problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mt-4">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-[#717182] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-xs font-bold border rounded-md py-1 px-1"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <LinkButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-black py-1 px-2"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </LinkButton>

                    <LinkButton
                      href={project.githubUrl}
                      className="border py-1 px-2 hover:bg-slate-100"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </LinkButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
