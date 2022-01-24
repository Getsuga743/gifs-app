/* eslint-disable no-unused-expressions */
import { useEffect, useState, useRef } from 'react';

export const useNearScreen = ({ distance = '100px', externalRef = null, once = true } = {}) => {
  const [show, setShow] = useState(false);
  const elementRef = useRef();
  useEffect(() => {
    const element = externalRef ? externalRef.current : elementRef.current;
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [externalRef, elementRef]);
  return { show, elementRef };
};
