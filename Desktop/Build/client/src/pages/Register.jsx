import React, { useState } from 'react';
import styles from './Register.module.css'; // Import the CSS module

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  // Handle login
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both email and password");
    } else {
      console.log("Login with", email);
      // Add login logic here
    }
  };

  // Handle signup
  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log("Signup with", email);
      // Add signup logic here
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.leftSide}>
          <div className={styles.welcomeText}>
            <h1>Welcome</h1>
            <p>Fill in the details to get started with the best chat app!</p>
          </div>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${isLogin ? styles.active : ''}`} onClick={() => setIsLogin(true)}>
              Login
            </button>
            <button className={`${styles.button} ${!isLogin ? styles.active : ''}`} onClick={() => setIsLogin(false)}>
              Signup
            </button>
          </div>
          {isLogin ? (
            <div className={styles.form}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.submitButton} onClick={handleLogin}>
                Login
              </button>
            </div>
          ) : (
            <div className={styles.form}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className={styles.submitButton} onClick={handleSignup}>
                Signup
              </button>
            </div>
          )}
        </div>
        <div className={styles.rightSide}>
          {/* You can add an image or any other content here */}
        </div>
      </div>
    </div>
  );
}

export default Register;
