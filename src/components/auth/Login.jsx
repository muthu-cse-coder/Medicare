// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
    
//     if (Object.keys(newErrors).length === 0) {
//       const result = login(formData.email, formData.password);
//       if (result.success) {
//         navigate('/');
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-header">
//           <div className="auth-logo">M</div>
//           <h2 className="auth-title">Welcome Back</h2>
//           <p className="auth-subtitle">Sign in to continue to MediCare</p>
//         </div>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className="form-group">
//             <label className="form-label">Email Address</label>
//             <div style={{ position: 'relative' }}>
//               <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
//               <input
//                 type="email"
//                 className="form-input"
//                 style={{ paddingLeft: '40px',width:"100%" }}
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//             </div>
//             {errors.email && <span className="form-error">{errors.email}</span>}
//           </div>

//           <div className="form-group">
//             <label className="form-label">Password</label>
//             <div style={{ position: 'relative' }}>
//               <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-input"
//                 style={{ paddingLeft: '40px', paddingRight: '40px' ,width:"100%" }}
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//             {errors.password && <span className="form-error">{errors.password}</span>}
//           </div>

//           <button type="submit" className="btn-primary">
//             Sign In
//           </button>
//         </form>

//         <div className="auth-switch">
//           Don't have an account? <Link to="/register">Sign up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
// import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const { login, user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Already logged in-னா home-க்கு redirect
//   if (user) {
//     navigate('/');
//     return null;
//   }

//   // Login முன்னாடி இருந்த page-க்கு redirect
//   const from = location.state?.from?.pathname || '/';

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
    
//     if (Object.keys(newErrors).length === 0) {
//       const result = login(formData.email, formData.password);
//       if (result.success) {
//         navigate(from, { replace: true }); // முன்னாடி இருந்த page-க்கு போ
//       } else {
//         setErrors({ email: 'Invalid credentials' });
//       }
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-header">
//           <div className="auth-logo">M</div>
//           <h2 className="auth-title">Welcome Back</h2>
//           <p className="auth-subtitle">Sign in to continue to MediCare</p>
//         </div>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className="form-group">
//             <label className="form-label">Email Address</label>
//             <div style={{ position: 'relative' }}>
//               <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%',transform: 'translateY(-50%)', color: '#9ca3af' }} />
//               <input
//                 type="email"
//                 className="form-input"
//                 style={{ paddingLeft: '40px' }}
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//             </div>
//             {errors.email && <span className="form-error">{errors.email}</span>}
//           </div>

//           <div className="form-group">
//             <label className="form-label">Password</label>
//             <div style={{ position: 'relative' }}>
//               <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-input"
//                 style={{ paddingLeft: '40px', paddingRight: '40px' }}
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//             {errors.password && <span className="form-error">{errors.password}</span>}
//           </div>

//           <button type="submit" className="btn-primary">
//             Sign In
//           </button>
//         </form>

//         <div className="auth-switch">
//           Don't have an account? <Link to="/register">Sign up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // already logged in => redirect to home
  if (user) {
    navigate("/");
    return null;
  }

  // from page (previous page before login)
  const from = location.state?.from?.pathname || "/";

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await loginMutation({
          variables: {
            email: formData.email,
            password: formData.password,
          },
        });

        const token = res.data.login.token;
        const user = res.data.login.user;

        // save token + user in context
        login(token, user);

        // redirect
        navigate(from, { replace: true });
      } catch (err) {
        setErrors({ email: "Invalid credentials" });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">M</div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to continue to MediCare</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: "relative" }}>
              <Mail
                size={18}
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              />
              <input
                type="email"
                className="form-input"
                style={{ paddingLeft: "40px", width: "100%" }}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: "relative" }}>
              <Lock
                size={18}
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                style={{
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  width: "100%",
                }}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#9ca3af",
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <span className="form-error">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn-primary">
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="auth-switch">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
