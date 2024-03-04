import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastMessages, setToastMessages] = React.useState([]);

  function handleAddToast(message, variant) {
    setToastMessages([
      ...toastMessages,
      { message, variant, id: crypto.randomUUID() },
    ]);
  }

  function handleDismissToast(id) {
    setToastMessages((currentToastMessages) =>
      currentToastMessages.filter((toastMessage) => toastMessage.id !== id)
    );
  }

  return (
    <ToastContext.Provider
      value={{ toastMessages, handleAddToast, handleDismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
