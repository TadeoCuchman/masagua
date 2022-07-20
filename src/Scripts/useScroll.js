import { useEffect, useState } from "react";

const useScrollPosition = () => {

  const main = document.querySelector("html")
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition)
  useEffect(() => {
        const updatePosition = () => {
          setScrollPosition(main.scrollTop);
        };

        main.addEventListener("scroll", updatePosition);
        
        return () => main.removeEventListener("scroll", updatePosition);

    }, []);

  return scrollPosition;
};

export default useScrollPosition;
