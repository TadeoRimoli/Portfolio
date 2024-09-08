import { useEffect, useRef, useState } from "react";

import { LinkedinIcon, MailIcon, MenuIcon, XIcon } from "lucide-react";
import "./App.css";
import { Button } from "./components/Button";
import { GithubIcon } from "./assets/react";
import CardProject from "./components/CardProject";
import StarryBackground from "./components/StarryBackground";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
const projects = [
  {
    title: "Entrena+ Atletismo",
    description:
      "Mobile app for manage training, track results, and schedule events for athletes and coaches.",
    color: "from-green-500 to-blue-500",
    icon: "🏃‍♂️",
    technologies: [
      "Docker",
      "Redis",
      "JWT",
      "Firebase",
      "Expo",
      "React-Native",
      "NativeWind",
      "Java",
      "Spring-Boot",
      "Spring-Security",
      "Hibernate",
      "MYSQL",
    ],
    longDescription:
      "Developed a comprehensive app for managing athletic training. The app allows users to handle training groups, schedule sessions, track progress, and analyze performance metrics. It supports coaches in organizing workouts, monitoring athlete development, and optimizing training plans.",
    challenges:
      "Implementing context awareness and handling ambiguous queries were the main challenges overcome in this project.",
  },
  {
    title: "Meli Pilates",
    description: "Built a site for Pilates Studio with bookings and purchases.",
    color: "from-yellow-500 to-orange-500",
    icon: "🧘‍♀️",
    technologies: ["React.js", "TailwindCSS"],
    longDescription:
      "Developed a comprehensive website for a Pilates studio, enabling users to book classes, purchase packages, and learn about the studio's offerings. The site features a user-friendly interface and seamless integration with payment gateways.",
    challenges:
      "Ensuring a smooth user experience during the booking process and integrating secure payment methods were key challenges addressed in this project.",
    link: "https://pilates.tadeorimoli.com.ar",
  },
  {
    title: "Hotel Estrellas de Mar",
    description:
      "Developed a site for Hotel Estrellas de Mar with room bookings and amenities info.",
    color: "from-green-500 to-teal-500",
    icon: "🛏️",
    technologies: ["React.js", "Firebase", "TailwindCSS"],
    longDescription:
      "Created a dynamic website for a hotel, allowing users to book rooms, view amenities, and explore local attractions. The site includes a real-time booking system and a detailed gallery of the hotel's facilities.",
    challenges:
      "Implementing a real-time booking system and ensuring data consistency across multiple users were significant challenges overcome in this project.",
    link: "http://localhost:4000/",
  },
];

const skills = [
  "SQL",
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "TailwindCSS",
  "Nginx",
  "Docker",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const toggleProjectExpansion = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };
  function SmoothScrollLink({ href, className, children }: any) {
    const handleClick = (e: any) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        setIsMenuOpen(false);
      }
    };
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  const containerRef = useRef<HTMLDivElement>(null);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [language, setLanguage] = useState("en");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };
  return (
    <div
      ref={containerRef}
      id="appcontainer"
      className="inset-0 overflow-hidden min-h-screen bg-gradient-to-r bg-gray-800 text-gray-100 antialiased overflow-x-hidden relative"
    >
      <StarryBackground />

      <header className="fixed top-0 left-0 right-0 z-20 bg-gray-900/80 backdrop-blur-sm">
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
            <SmoothScrollLink
              href="#experience"
              className="hover:text-violet-400 transition-colors"
            >
              Experience
            </SmoothScrollLink>
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
            {/* <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                {language === "en" ? "EN" : "ES"}
              </button>
              {isLanguageMenuOpen && (
                <ul
                  ref={languageMenuRef}
                  className="absolute right-0 top-full mt-2 w-32 bg-white text-black rounded-md shadow-lg z-30"
                >
                  <li
                    onClick={() => changeLanguage("en")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    English
                  </li>
                  <li
                    onClick={() => changeLanguage("es")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Español
                  </li>
                </ul>
              )}
            </div> */}
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
                href="#experience"
                className="hover:text-violet-400 transition-colors"
              >
                Experience
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
                href="#contact"
                className="hover:text-violet-400 transition-colors"
              >
                Contact
              </SmoothScrollLink>
            </li>
          </ul>
        )}
      </header>

      <main className=" z-20  items-center w-full px-4 pt-20">
        <section className="pt-20 pb-10 flex flex-col items-center">
          <div className="mb-8 relative">
            <img
              src="1655748673749.jpeg"
              width={250}
              height={250}
              className="rounded-full border-2 "
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">Tadeo Rimoli</h1>
          <p className="text-xl  text-center text-blue-300">
            Full Stack Developer
          </p>
        </section>
        <section id="skills" className="">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium "
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section id="projects" className="py-10 ">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Featured Projects
          </h2>
          <div className="flex flex-row flex-wrap justify-center w-full">
            {projects.map((project, index) => (
              <CardProject key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="experience" className="py-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Experience
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Freelance Developer"
              date="2024 - Present"
              description="I create websites, develop services, and provide technological solutions."
            />
            <ExperienceCard
              title="Full Stack Junior Developer"
              company="Advenio Software"
              date="2022 - 2023"
              description="I managed SQL tables, developed models and APIs with Java and Spring, and built frontend interfaces with React."
            />
          </div>
        </section>

        <section id="education" className="py-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Education
          </h2>
          <div className="space-y-8">
            <EducationCard
              degree="Bachelor's Degree in Information Systems"
              university="CAECE University"
              date="2024 - Present"
            />
            <EducationCard
              degree="University Technical Degree in Programming"
              university="CAECE University"
              date="2020 - 2023"
            />
          </div>
        </section>

        <section id="contact" className="py-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            Contact
          </h2>
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="icon"
              className="border-violet-500 text-violet-500  "
              url="https://github.com/TadeoRimoli"
            >
              <GithubIcon className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Button>

            <Button
              style={{
                border: "1px solid #007BFF",
                color: "#007BFF",
              }}
            >
              <LinkedinIcon className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className=" border-orange-500 text-orange-500 "
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

      <footer className="bg-gray-900 py-6 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          © 2024 Tadeo Rimoli
        </div>
      </footer>
    </div>
  );
}

export default App;
