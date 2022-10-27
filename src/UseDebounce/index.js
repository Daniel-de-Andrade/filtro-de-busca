import React, { useRef } from "react";

function useDebounce(fn, delay) {
  const timeoutRef = useRef(null);

  function debounceFn(...args) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFn;
}

export default useDebounce;
