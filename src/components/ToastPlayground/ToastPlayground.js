import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastMessages, setToastMessages] = React.useState([]);

  function handleAddToast(event) {
    event.preventDefault();
    setToastMessages([
      ...toastMessages,
      { message, variant, id: crypto.randomUUID() },
    ]);

    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleDismissToast(id) {
    setToastMessages((currentToastMessages) =>
      currentToastMessages.filter((toastMessage) => toastMessage.id !== id)
    );
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf
        toastMessages={toastMessages}
        handleDismissToast={handleDismissToast}
      />

      <form className={styles.controlsWrapper} onSubmit={handleAddToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((currentVariant) => (
              <label htmlFor={`variant-${currentVariant}`} key={currentVariant}>
                <input
                  id={`variant-${currentVariant}`}
                  type="radio"
                  name="variant"
                  value={currentVariant}
                  checked={currentVariant === variant}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {currentVariant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
