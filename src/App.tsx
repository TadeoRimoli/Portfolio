import { useEffect, useRef, useState } from "react";

import { LinkedinIcon, MailIcon, MenuIcon, XIcon } from "lucide-react";
import "./App.css";
import { Button } from "./components/Button";
import { GithubIcon } from "./assets/react";
import CardProject from "./components/CardProject";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import { useIntl } from "react-intl";
import { useLocale } from "./i18n/LocaleContext";
import { projects } from "./Constants/projects";

const skills = [
  "SQL",
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "TailwindCSS",
  "NativeWind",
  "Nginx",
  "Docker",
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function SmoothScrollLink({
    href,
    className,
    children,
    block = "center",
  }: any) {
    const handleClick = (e: any) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block });
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

  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lang: "es" | "en") => {
    setLocale(lang);
    setIsLanguageMenuOpen(false);
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
  }[] = [];

  const numStars = 50;

  const initStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rootDiv = document.getElementById("root");
    if (!rootDiv) return;

    const documentHeight = rootDiv.offsetHeight; // Usa la altura del div 'root'

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * documentHeight, // Usa la altura total del documento para las estrellas
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 + 0.5,
        speedY: Math.random() * 2 + 0.5,
      });
    }
  };

  const updateStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rootDiv = document.getElementById("root");
    if (!rootDiv) return;
    const documentHeight = rootDiv.offsetHeight; // Usa la altura del div 'root'

    stars.forEach((star) => {
      star.x += star.speedX;
      star.y += star.speedY;

      // Si la estrella sale por abajo del div, la reinicia en la parte superior
      if (star.x > canvas.width) star.x = 0;
      if (star.y > documentHeight) {
        star.y = 0; // Reinicia su posición en la parte superior del div
        star.x = Math.random() * canvas.width; // También reinicia la posición en X
      }
      if (star.x < 0) star.x = canvas.width;
      if (star.y < 0) star.y = 0;

      ctx.fillStyle = "white";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "white";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  const animateStars = () => {
    updateStars();
    requestAnimationFrame(animateStars);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rootDiv = document.getElementById("root"); // Obtiene el div con id 'root'
    if (!rootDiv) return;

    canvas.width = window.innerWidth;
    canvas.height = rootDiv.offsetHeight; // Ajusta la altura al tamaño del div 'root'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    initStars(); // Inicializa las estrellas una sola vez
    window.addEventListener("resize", resizeCanvas);
    animateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const { currentLocale, setLocale } = useLocale();
  const intl = useIntl();
  return (
    <div
      ref={containerRef}
      id="appcontainer"
      className="inset-0 overflow-hidden min-h-screen bg-gradient-to-r bg-gray-800 text-gray-100 antialiased overflow-x-hidden relative"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      ></canvas>

      <header className="fixed top-0 left-0 right-0 z-20 bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500"></span>
          <ul className="text-lg hidden items-center md:flex space-x-6">
            <li>
              <SmoothScrollLink
                href="#projects"
                className="hover:text-violet-400 transition-colors"
                block="start"
              >
                {intl.formatMessage({ id: "Projects" })}
              </SmoothScrollLink>
            </li>
            <SmoothScrollLink
              href="#experience"
              className="hover:text-violet-400 transition-colors"
            >
              {intl.formatMessage({ id: "Experience" })}
            </SmoothScrollLink>
            <li>
              <SmoothScrollLink
                href="#education"
                className="hover:text-violet-400 transition-colors"
              >
                {intl.formatMessage({ id: "Education" })}
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#contact"
                className="hover:text-violet-400 transition-colors"
              >
                {intl.formatMessage({ id: "Contact" })}
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
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                {currentLocale == "en" ? "EN" : "ES"}
              </button>
              {isLanguageMenuOpen && (
                <ul
                  ref={languageMenuRef}
                  className="absolute right-0 top-full mt-2 w-32 bg-white text-black rounded-md  z-30"
                >
                  <li
                    onClick={() => changeLanguage("en")}
                    className="px-4 py-2  cursor-pointer"
                  >
                    English
                  </li>
                  <li
                    onClick={() => changeLanguage("es")}
                    className="px-4 py-2  cursor-pointer"
                  >
                    Español
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <ul className="md:hidden items-center flex flex-col space-y-2 p-4 bg-gray-800">
            <li>
              <SmoothScrollLink
                href="#projects"
                block="start"
                className="hover:text-violet-400 transition-colors"
              >
                {intl.formatMessage({ id: "Projects" })}
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#experience"
                className="hover:text-violet-400 transition-colors"
              >
                {intl.formatMessage({ id: "Experience" })}
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#education"
                className="hover:text-violet-400 transition-colors"
              >
                {intl.formatMessage({ id: "Education" })}
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink
                href="#contact"
                className="hover:text-violet-400 transition-colors"
              >
                {intl.formatMessage({ id: "Contact" })}
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
            {intl.formatMessage({ id: "FullStackDeveloper" })}
          </p>
        </section>
        <section id="skills" className="">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-lg bg-gray-800 rounded-full  font-medium "
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section id="projects" className="py-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            {intl.formatMessage({ id: "FeaturedProjects" })}
          </h2>

          <div className="flex flex-row w-full justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col h-full">
                  <CardProject project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            {intl.formatMessage({ id: "Experience" })}
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              title={intl.formatMessage({ id: "FreelanceDeveloper" })}
              date={"2024 - " + intl.formatMessage({ id: "Present" })}
              description={intl.formatMessage({ id: "FreelanceDescription" })}
            />
            <ExperienceCard
              title={
                intl.formatMessage({ id: "FullStackDeveloper" }) + " Junior"
              }
              company="Advenio Software"
              date="2022 - 2023"
              description={intl.formatMessage({ id: "FullStackDescription" })}
            />
          </div>
        </section>

        <section id="education" className="py-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            {intl.formatMessage({ id: "Education" })}
          </h2>
          <div className="space-y-8">
            <EducationCard
              degree={intl.formatMessage({ id: "BachelorsDegree" })}
              university={intl.formatMessage({ id: "CAECE" })}
              date={"2024 - " + intl.formatMessage({ id: "Present" })}
            />
            <EducationCard
              degree={intl.formatMessage({ id: "TechnicalDegree" })}
              university={intl.formatMessage({ id: "CAECE" })}
              date="2020 - 2023"
            />
          </div>
        </section>

        <section id="contact" className="py-10">
          <h2 className="text-3xl font-semibold mb-10 text-center text-orange-400">
            {intl.formatMessage({ id: "Contact" })}
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
              url="https://www.linkedin.com/in/tadeo-rimoli-9aa24b1a7/"

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
          2025 Tadeo Rimoli
        </div>
      </footer>
    </div>
  );
}

export default App;
