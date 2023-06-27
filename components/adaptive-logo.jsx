import { useState, useEffect } from "react";
import Image from "next/image";

function AdaptiveLogo({ height = 180, width = 350 }) {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    const setPreferredColorScheme = (scheme) => {
      setColorScheme(scheme.matches ? "dark" : "light");
    };

    const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setPreferredColorScheme(darkScheme);
    darkScheme.addEventListener("change", setPreferredColorScheme);

    return () => {
      darkScheme.removeEventListener("change", setPreferredColorScheme);
    };
  }, []);

  const svgPath = colorScheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";

  return (
    <div className="h-[200px]">
      <Image
        className="mx-auto"
        src={svgPath}
        alt="OpenMRS logo"
        loading="eager"
        height={height}
        width={width}
      />
    </div>
  );
}

export default AdaptiveLogo;
