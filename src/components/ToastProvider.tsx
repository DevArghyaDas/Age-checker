"use client";

import { useTheme } from "next-themes";
import { Bounce, ToastContainer } from "react-toastify";

const ToastProvider = () => {
  const theme = useTheme();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.theme === "system" ? "colored" : theme.theme}
        transition={Bounce}
      />
    </>
  );
};

export default ToastProvider;
