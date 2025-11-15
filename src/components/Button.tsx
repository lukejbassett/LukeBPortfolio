import { Link } from "react-router-dom";

const Button = ({ text, href }) => {
  return (
    <a
      href={href}
      className="
      bg-[var(--accent)] font-semibold 
      py-2 px-6 rounded-full shadow-md 
      transition duration-250 
      inline-block text-center
      hover:-translate-y-0.5 active:translate-y-0.5
      hover:shadow-lg
      hover:opacity-75
      "
    >
      {text}
    </a>
  );
};

export default Button;
