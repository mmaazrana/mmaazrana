import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
// @ts-ignore
import createPersistedState from "use-persisted-state";

const useColorSchemeState = createPersistedState("colorScheme");

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
  );

  const [isDark, setIsDark] = useColorSchemeState();
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark],
  );

  useEffect(() => {
    if (value) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}
