import React from "react";

function useKeyDown(key, callbackFn) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        callbackFn();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callbackFn]);
}

export default useKeyDown;
