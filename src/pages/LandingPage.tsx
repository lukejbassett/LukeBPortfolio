import { useEffect } from "react";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Mail } from "lucide-react";
import Button from "../components/Button";
import Title from "../components/Title";
import ToolsCarousel from "../components/ToolsCarousel";

export default function LandingPage() {
  const images = [
    "/src/components/img/css.png",
    "/src/components/img/html.png",
    "/src/components/img/figma.png",
    "/src/components/img/javascript.png",
    "/src/components/img/nodejs.png",
    "/src/components/img/npm.png",
    "/src/components/img/php.png",
    "/src/components/img/ps.png",
    "/src/components/img/react.png",
    "/src/components/img/vsc.png",
  ];

  useEffect(() => {
    document.title = "Luke Bassett | Homepage";
    const nav = document.getElementById("navbar");
    document.documentElement.style.setProperty(
      "--nav-height",
      nav?.offsetHeight + "px"
    );
  });
  return (
    <>
      <div
        className="min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center 
      dark:bg-[var(--black)] dark:text-[var(--white)] 
      transition-colors duration-250"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="space-y-6 text-[var(--black)] dark:text-[var(--white)]">
            <span className="uppercase tracking-widest text-sm">
              Hello, welcome to my portfolio
            </span>
            <h1 className="text-7xl font-bold leading-tight mb-0">
              I'm{" "}
              <span className="ml-2 text-(--accent) tracking-wide">
                Luke Bassett
              </span>
            </h1>
            <p className="text-6xl font-extrabold">Junior Developer</p>
            <div className="flex gap-6 pt-4">
              <Button text="My Portfolio" href="#project" />
              <Button text="Contact Me" href="/contact" />
            </div>
            <div className="flex gap-12 mt-32">
              <a
                href="https://github.com/lukejbassett"
                target="_blank"
                className="hover:text-[var(--accent)] transition-colors duration-200"
              >
                <GithubLogoIcon size={40} />
              </a>
              <a
                href="https://www.linkedin.com/in/lukejbassett/"
                target="_blank"
                className="hover:text-[var(--accent)] transition-colors duration-200"
              >
                <LinkedinLogoIcon size={40} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--accent)] transition-colors duration-200"
              >
                <Mail size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="dark:bg-[var(--black)] transition-all duration-250 dark:text-[var(--white)]">
        <Title title="About Me" />
        {/* <h2>about me</h2> */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-5xl m-auto place-items-center mb-16">
          <div className="row-span-2 col-start-1 row-start-1 flex gap-4 flex-col">
            <p>
              During my Computing HND in 2022, I developed a fictional company
              administration dashboard using HTML, CSS and PHP as part of an
              assignment. This project sparked my interest in full-stack
              development and solidified my passion for building complete,
              functional applications.
            </p>
            <p>
              As of 2025 I am pursuing a BSc (Hons) in Computing at Greater
              Manchester University. I was encourage to create a professional
              portfolio to showcase my skills - hence, this porfolio you're
              reading!
            </p>
            <p>
              In addition to my academic work, I am a dedicated Formula 1 fan,
              As a personal development project, I am creating an F1 Stats
              application using API's, React and TypeScript. While there is no
              set completion timeline, my primary goal is to deliver a polished,
              professionally devleoped application.
            </p>
            <div className="">
              <Button text="Download CV" href="#project" />
            </div>
          </div>
          <div className="row-span-2 col-start-2 row-start-1">
            <img
              src="./src/pages/img/portrait.jpg"
              alt="Luke Bassett Portrait"
              className="w-100 h-auto rounded-full shadow-xl"
            />
          </div>
        </div>
        <div className="pb-16">
          <ToolsCarousel images={images} />
        </div>
      </div>
      {/* projects */}
      <div className="dark:bg-[var(--black)] transition-all duration-250 dark:text-[var(--white)]">
        <Title title="Projects" />
        <p>fdws</p>
        <p>fdws</p>
        <p>fdws</p>
        <p>fdws</p>
        <p>fdws</p>
        <p>fdws</p>
      </div>
    </>
  );
}
