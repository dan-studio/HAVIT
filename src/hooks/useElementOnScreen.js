import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const target = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsLoaded(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (target.current) 
    setTimeout(()=>{
      observer.observe(target.current);
    },1500)
    return () => {
      if (target.current) observer.unobserve(target.current);
    };
  }, [target, options]);

  return [target, isLoaded]

};
export default useElementOnScreen;
