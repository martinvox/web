export default function WorkPage() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Leading the frontend development team, implementing modern React architectures, and optimizing application performance.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2018 - 2021",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and automated testing.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      period: "2016 - 2018",
      description:
        "Worked on frontend development using JavaScript and CSS. Collaborated with designers to implement responsive UI components.",
    },
  ]

  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "C#"] },
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "CSS/SCSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Django", "ASP.NET Core"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"] },
  ]

  return (
    <div className="space-y-16">
      <section>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">work.sh</div>
          </div>
          <div className="terminal-content">
            <p className="mb-4">
              <span className="text-primary">$</span> cat /var/log/experience.log
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold my-6">Experience Timeline</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">{exp.company}.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-1">
                  <span className="text-primary">$</span> cat job_details.txt
                </p>
                <div className="mb-2">
                  <p>
                    <span className="text-primary">title:</span> {exp.title}
                  </p>
                  <p>
                    <span className="text-primary">period:</span> {exp.period}
                  </p>
                  <p>
                    <span className="text-primary">description:</span> {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">System Specs</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">skills.sh</div>
          </div>
          <div className="terminal-content">
            <p className="mb-4">
              <span className="text-primary">$</span> cat /proc/skills
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <span className="text-primary">-</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
