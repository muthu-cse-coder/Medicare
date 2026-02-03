// // import { createContext, useState, useEffect } from "react";

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const savedUser = localStorage.getItem("user");

// //     if (token && savedUser) {
// //       setUser(JSON.parse(savedUser));
// //     }
// //     setLoading(false);
// //   }, []);

// //   // 🟢 This login will be called from Login.jsx
// //   const login = (token, userData) => {
// //     setUser(userData);
// //     localStorage.setItem("token", token);
// //     localStorage.setItem("user", JSON.stringify(userData));
// //   };

// //   const register = (userData) => {
// //     const newUser = {
// //       id: Date.now(),
// //       ...userData,
// //       role: "patient",
// //     };

// //     setUser(newUser);
// //     localStorage.setItem("user", JSON.stringify(newUser));
// //     return { success: true, user: newUser };
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };
// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const savedUser = localStorage.getItem("user");

//     if (token && savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = (token, userData) => {
//     setUser(userData);
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   // 🔥 updated register
//   const register = (token, userData) => {
//     setUser(userData);
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.log("Invalid user data in localStorage", error);
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = (token, userData) => {
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ✅ Correct register function
  const register = (token, userData) => {
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

