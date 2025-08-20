import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success",
    });

    const showToast = (message, type = "success", duration = 3000) => {
        setToast({ show: true, message, type });

        setTimeout(() => {
            setToast({ show: false, message: "", type: "success" });
        }, duration);
    };

    const hideToast = () => {
        setToast({ show: false, message: "", type: "success" });
    };

    return (
        <ToastContext.Provider value={{ showToast, hideToast }}>
            {children}

            {/* Toast UI */}
            {toast.show && (
                <div
                    className="toast-container position-fixed bottom-0 end-0 p-3"
                    style={{ zIndex: 9999 }}
                >
                    <div
                        className={`toast align-items-center text-white bg-${toast.type} border-0 show`}
                    >
                        <div className="d-flex">
                            <div className="toast-body">{toast.message}</div>
                            <button
                                type="button"
                                className="btn-close btn-close-white me-2 m-auto"
                                onClick={hideToast}
                            ></button>
                        </div>
                    </div>
                </div>
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
