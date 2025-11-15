import { useEffect } from "react";

export default function ProjectPage() {
  useEffect(() => {
    document.title = "Luke Bassett | Projects";
  });
  return (
    <>
      <div>
        <p>project page</p>
      </div>
    </>
  );
}
