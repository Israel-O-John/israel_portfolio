import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

function Skills() {
  const coreSkills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "Tailwind CSS" },
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "React Router",
    "REST APIs",
    "Netlify",
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Enyata",
      period: "June 2024 - Sept 2024",
      description:
        "Participated in structured frontend training focused on React and modern JavaScript. Completed hands-on projects and technical assignments involving API integration, routing, and responsive UI development under mentorship.",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-200/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Technical Skills & Experience
            </h2>
            <p className="text-lg text-[#717182] max-w-2xl mx-auto">
              A snapshot of my technical stack and hands-on experience.
            </p>
          </div>

          {/* Core Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ">
            {coreSkills.map((skill, index) => (
              <Card key={index} className="text-center bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-2">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 text-center">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle>{job.title}</CardTitle>
                      <div className="text-xs border w-max rounded-md py-1 px-1">
                        {job.period}
                      </div>
                    </div>
                    <p className="text-primary">{job.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#717182]">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Technologies */}
          <div className="text-center">
            <h3 className="text-2xl mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="text-xs py-2 px-3 bg-slate-200 text-black rounded-md"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
