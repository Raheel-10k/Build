import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="register-container">
            <div className="main-div">
                {/* Top Right Corner */}
                <div className="welcome-div">
                    <h2>Welcome</h2>
                    <p>Some text</p>
                </div>

                {/* Divided Sections */}
                <div className="sections">
                    {/* Left Section - 60% */}
                    <div className="form-section">
                        <div className="tabs">
                            <button
                                className={
                                    activeTab === "login" ? "active" : ""
                                }
                                onClick={() => setActiveTab("login")}
                            >
                                Login
                            </button>
                            <button
                                className={
                                    activeTab === "signup" ? "active" : ""
                                }
                                onClick={() => setActiveTab("signup")}
                            >
                                Signup
                            </button>
                        </div>

                        {activeTab === "login" && (
                            <div className="login-form">
                                <h3>Login</h3>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button>Login</button>
                            </div>
                        )}

                        {activeTab === "signup" && (
                            <div className="signup-form">
                                <h3>Signup</h3>
                                <input type="text" placeholder="Username" />
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    placeholder="Profile Picture (Optional)"
                                />
                                <button>Signup</button>
                            </div>
                        )}
                    </div>
                    <div className="info-section">
                        <p>
                            This is where you can add an image or any extra
                            content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
