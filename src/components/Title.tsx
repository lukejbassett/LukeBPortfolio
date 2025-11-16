interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <h2
        className="text-center text-4xl font-bold
      uppercase tracking-wide text-(--black) dark:text-[var(--white)]
      after:content-[''] after:block after:mx-auto
      after:mt-2 after:h-[3px] after:w-15 after:bg-[var(--accent)]
      after:rounded-full
      mb-16
      "
      >
        {title}
      </h2>
    </>
  );
};

export default Title;
