import { useState } from "react";

import { LinkedinIcon, MailIcon, MenuIcon, XIcon } from "lucide-react";
import "./App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { GithubIcon } from "./assets/react";

const projects = [
  {
    title: "Entrena+ Atletismo",
    description:
      "Manage training, track results, and schedule events for athletes and coaches.",
    color: "from-green-500 to-blue-500",
    icon: "🏃‍♂️",
    // url: "https://atletismo.tadeorimoli.com.ar",
  },
  {
    title: "Meli Pilates",
    description: "Built a site for Pilates Studio with bookings and purchases.",
    color: "from-yellow-500 to-orange-500",
    icon: "🧘‍♀️",
    // url: "https://pilates.tadeorimoli.com.ar",
  },
  {
    title: "Hotel Estrellas de Mar",
    description:
      "Developed a site for Hotel Estrellas de Mar with room bookings and amenities info.",
    color: "from-green-500 to-teal-500",
    icon: "🛏️",
    // url: "https://estrellasdemar.tadeorimoli.com.ar",
  },
];

const skills = [
  "SQL",
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Nginx",
  "Docker",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function SmoothScrollLink({ href, className, children }: any) {
    const handleClick = (e: any) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    };
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-20 bg-gray-900/80 backdrop-blur-sm overflow-hidden">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500"></span>
          <ul className="text-lg hidden items-center md:flex space-x-6">
            <li>
              <SmoothScrollLink
                href="#projects"
                className="hover:text-violet-400 transition-colors"
              >
                Projects
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#skills"
                className="hover:text-violet-400 transition-colors"
              >
                Skills
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#education"
                className="hover:text-violet-400 transition-colors"
              >
                Education
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#experience"
                className="hover:text-violet-400 transition-colors"
              >
                Experience
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#contact"
                className="hover:text-violet-400 transition-colors"
              >
                Contact
              </SmoothScrollLink>
            </li>
          </ul>
          <div className="relative flex items-center space-x-4">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-100 hover:text-violet-400"
              >
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <ul className="md:hidden items-center flex flex-col space-y-2 p-4 bg-gray-800">
            <li>
              <SmoothScrollLink
                href="#projects"
                className="hover:text-violet-400 transition-colors"
              >
                Projects
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#skills"
                className="hover:text-violet-400 transition-colors"
              >
                Skills
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#education"
                className="hover:text-violet-400 transition-colors"
              >
                Education
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#experience"
                className="hover:text-violet-400 transition-colors"
              >
                Experience
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#contact"
                className="hover:text-violet-400 transition-colors"
              >
                Contact
              </SmoothScrollLink>
            </li>
          </ul>
        )}
      </header>

      <main className="container mx-auto px-4 pt-20">
        <section className="py-20 flex flex-col items-center">
          <div className="mb-8 relative">
            <img
              src="1655748673749.jpeg"
              width={250}
              height={250}
              className="rounded-full border-4 "
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">Tadeo Rimoli</h1>
          <p className="text-xl  mb-8 text-center text-blue-300">
            Full Stack Developer
          </p>
          <p className="max-w-2xl mx-auto text-gray-300 text-center">
            Designing innovative solutions across web and mobile platforms,
            mastering both frontend and backend with a passion for continuous
            learning.
          </p>
        </section>

        <section id="projects" className="py-20 ">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => {
                  // if (project.url) window.location.href = project.url || "";
                }}
              >
                <div className="p-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <div className="relative z-10">
                    <span className="text-4xl mb-4 block">{project.icon}</span>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium animate-pulse"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Freelance Developer</h3>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0">2024 - Present</p>
              </div>
              <p className="text-gray-300">
                I create websites, develop services, and provide technological
                solutions.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Full Stack Junior Developer
                  </h3>
                  <p className="text-gray-400">Advenio Software</p>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0">2022 - 2023</p>
              </div>
              <p className="text-gray-300">
                I managed SQL tables, developed models and APIs with Java and
                Spring, and built frontend interfaces with React.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="py-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Education
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-gray-800 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor's Degree in Information Systems
                </h3>
                <p className="text-gray-400">CAECE University</p>
              </div>
              <p className="text-gray-500 mt-2 md:mt-0">2024 - Present</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-gray-800 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  University Technical Degree in Programming
                </h3>
                <p className="text-gray-400">CAECE University</p>
              </div>
              <p className="text-gray-500 mt-2 md:mt-0">2020 - 2023</p>
            </div>
          </div>
        </section>

        {/* <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Get in Touch
          </h2>
          <div className="flex justify-center space-x-6">
            <Button url="https://www.linkedin.com/in/tadeo-rimoli-9aa24b1a7">
              <LinkedinIcon className="h-6 w-6 transition-transform duration-150 ease-in-out transform hover:scale-110" />
            </Button>
            <Button
              onClick={() => {
                const mailtoLink = `mailto:tadeorimoli@gmail.com?subject=${encodeURIComponent(
                  ""
                )}&body=${encodeURIComponent("")}`;
                window.location.href = mailtoLink;
              }}
              variant="outline"
              className=""
            >
              <MailIcon className="h-6 w-6 transition-transform duration-150 ease-in-out transform hover:scale-110" />
            </Button>

            <span className="sr-only">LinkedIn</span>

            <span className="sr-only">Email</span>
          </div>
        </section> */}

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Contact
          </h2>
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="icon"
              className="border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white transition-colors"
              url="https://github.com/TadeoRimoli"
            >
              <GithubIcon className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
              url="https://www.linkedin.com/in/tadeo-rimoli-9aa24b1a7"
            >
              <LinkedinIcon className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-colors"
              onClick={() => {
                const mailtoLink = `mailto:tadeorimoli@gmail.com?subject=${encodeURIComponent(
                  ""
                )}&body=${encodeURIComponent("")}`;
                window.location.href = mailtoLink;
              }}
            >
              <MailIcon className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          © 2024 Tadeo Rimoli
        </div>
      </footer>
    </div>
  );
}

export default App;
