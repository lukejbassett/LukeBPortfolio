interface ButtonProps {
  text: string;
  href: string;
}

const Button = ({ text, href }: ButtonProps) => {
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
      dark:text-[var(--black)]
      "
    >
      {text}
    </a>
  );
};

export default Button;
