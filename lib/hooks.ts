import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { sectionName } from "./types";

export const useSectionInView = (section: sectionName) => {
  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView]);
  return { ref };
};

// export const useThemeToggle = () => {
//   const [theme, setTheme] = useState<Theme>("light");
//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//       window.localStorage.setItem("theme", "dark");
//       return;
//     }
//     setTheme("light");
//     window.localStorage.setItem("theme", "light");
//   };
// }
