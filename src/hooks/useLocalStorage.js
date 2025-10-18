import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Get from localStorage then parse, else use initialValue
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key “" + key + "”: ", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof state === "string") {
        // Store raw string without JSON.stringify
        localStorage.setItem(key, state);
      } else {
        // Store other types as JSON stringified
        localStorage.setItem(key, JSON.stringify(state));
      }
    } catch (error) {
      console.error("Error setting localStorage key “" + key + "”: ", error);
    }
  }, [key, state]);

  return [state, setState];
}
