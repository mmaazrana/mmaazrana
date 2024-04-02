import { useEffect, useState } from "react";

export const usePreferredColorScheme = () => {
  const [preferredScheme, setPreferredScheme] = useState<"dark" | "light">(
    "light",
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    const updateScheme = (e: MediaQueryListEvent) => {
      setPreferredScheme(e.matches ? "dark" : "light");
    };

    // Initial check
    setPreferredScheme(query.matches ? "dark" : "light");

    // Listen for changes
    query.addListener(updateScheme);

    // Cleanup
    return () => query.removeListener(updateScheme);
  }, []);

  return preferredScheme;
};
