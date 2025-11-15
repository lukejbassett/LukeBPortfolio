import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [showTip, setTip] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTip(true);
    setTimeout(() => setTip(false), 2000);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={toggleTheme}
          className="text-[var(--black)] dark:text-[var(--white)] outline rounded-full p-2 shadow-md cursor-pointer hover:text-(--accent) transition-all ease-in-out"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
        {showTip && (
          <div
            className="text-white bg-(--black) absolute left-1/2 text-center transform -translate-x-1/2 mt-4 px-3 py-1 rounded-md shadow-lg
          dark:bg-[var(--white)] dark:text-[var(--black)]"
          >
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </div>
        )}
      </div>
    </>
  );
}
