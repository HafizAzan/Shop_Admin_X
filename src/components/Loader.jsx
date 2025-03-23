import React from "react";
import { cn } from "utils/tailwind.merge";

function Loader({ className = "" }) {
  return (
    <main
      className={cn("flex items-center justify-center h-screen", className)}
    >
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </main>
  );
}

export default Loader;
