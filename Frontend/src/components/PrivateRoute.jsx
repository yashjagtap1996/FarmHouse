// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "../ToastProvider";

const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { showToast } = useToast();

    useEffect(() => {
        axios
            .get("http://localhost:3000/auth/check", { withCredentials: true })
            .then((res) => {
                setIsLoggedIn(res.data.loggedIn);
                setLoading(false);
                if (!res.data.loggedIn) {
                    showToast("Please login first to book your stay", "danger");
                }
            })
            .catch(() => {
                setIsLoggedIn(false);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
