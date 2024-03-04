import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastMessages, setToastMessages] = React.useState([]);

  const clearToasts = React.useCallback(() => {
    setToastMessages([]);
  }, []);

  useKeyDown("Escape", clearToasts);

  const handleAddToast = React.useCallback((message, variant) => {
    setToastMessages((currentToastMessages) => [
      ...currentToastMessages,
      { message, variant, id: crypto.randomUUID() },
    ]);
  });

  const handleDismissToast = React.useCallback((id) => {
    setToastMessages((currentToastMessages) =>
      currentToastMessages.filter((toastMessage) => toastMessage.id !== id)
    );
  });

  return (
    <ToastContext.Provider
      value={{ toastMessages, handleAddToast, handleDismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
