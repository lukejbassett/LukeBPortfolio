import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Luke Bassett | About Me";
  });
  return (
    <>
      <div>
        <p>about page</p>
      </div>
    </>
  );
}
