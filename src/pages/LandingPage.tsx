import { useEffect } from "react";
import { GithubLogoIcon } from "@phosphor-icons/react";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import Button from "../components/button";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Luke Bassett | Homepage";
    const nav = document.getElementById("navbar");
    document.documentElement.style.setProperty(
      "--nav-height",
      nav.offsetHeight + "px"
    );
  });
  return (
    <>
      <div className="min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center dark:bg-[var(--black)] dark:text-[var(--white)] transition-colors duration-250">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/lukejbassett"
                className="hover:text-[var(--accent)] transition-colors duration-200"
              >
                <GithubLogoIcon size={40} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--accent)] transition-colors duration-200"
              >
                <LinkedinLogoIcon size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
