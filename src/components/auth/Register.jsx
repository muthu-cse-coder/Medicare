// // import { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useAuth } from '../../hooks/useAuth';
// // import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     password: '',
// //     confirmPassword: ''
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   const { register } = useAuth();
// //   const navigate = useNavigate();

// //   const validate = () => {
// //     const newErrors = {};
// //     if (!formData.name) newErrors.name = 'Name is required';
// //     if (!formData.email) newErrors.email = 'Email is required';
// //     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
// //     if (!formData.phone) newErrors.phone = 'Phone is required';
// //     else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) newErrors.phone = 'Phone is invalid';
// //     if (!formData.password) newErrors.password = 'Password is required';
// //     else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
// //     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
// //     return newErrors;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const newErrors = validate();
    
// //     if (Object.keys(newErrors).length === 0) {
// //       const result = register(formData);
// //       if (result.success) {
// //         navigate('/');
// //       }
// //     } else {
// //       setErrors(newErrors);
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-card">
// //         <div className="auth-header">
// //           <div className="auth-logo">M</div>
// //           <h2 className="auth-title">Create Account</h2>
// //           <p className="auth-subtitle">Sign up to get started with MediCare</p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="auth-form">
// //           <div className="form-group">
// //             <label className="form-label">Full Name</label>
// //             <div style={{ position: 'relative' }}>
// //               <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
// //               <input
// //                 type="text"
// //                 className="form-input"
// //                 style={{ paddingLeft: '40px'  ,width:"100%"}}
// //                 placeholder="Enter your full name"
// //                 value={formData.name}
// //                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //               />
// //             </div>
// //             {errors.name && <span className="form-error">{errors.name}</span>}
// //           </div>

// //           <div className="form-group">
// //             <label className="form-label">Email Address</label>
// //             <div style={{ position: 'relative' }}>
// //               <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
// //               <input
// //                 type="email"
// //                 className="form-input"
// //                 style={{ paddingLeft: '40px' ,width:"100%" }}
// //                 placeholder="Enter your email"
// //                 value={formData.email}
// //                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //               />
// //             </div>
// //             {errors.email && <span className="form-error">{errors.email}</span>}
// //           </div>

// //           <div className="form-group">
// //             <label className="form-label">Phone Number</label>
// //             <div style={{ position: 'relative' }}>
// //               <Phone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
// //               <input
// //                 type="tel"
// //                 className="form-input"
// //                 style={{ paddingLeft: '40px' ,width:"100%" }}
// //                 placeholder="Enter your phone number"
// //                 value={formData.phone}
// //                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
// //               />
// //             </div>
// //             {errors.phone && <span className="form-error">{errors.phone}</span>}
// //           </div>

// //           <div className="form-group">
// //             <label className="form-label">Password</label>
// //             <div style={{ position: 'relative' }}>
// //               <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 className="form-input"
// //                 style={{ paddingLeft: '40px', paddingRight: '40px' ,width:"100%" }}
// //                 placeholder="Create a password"
// //                 value={formData.password}
// //                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
// //               />
// //               <button
// //                 type="button"
// //                 onClick={() => setShowPassword(!showPassword)}
// //                 style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
// //               >
// //                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //               </button>
// //             </div>
// //             {errors.password && <span className="form-error">{errors.password}</span>}
// //           </div>

// //           <div className="form-group">
// //             <label className="form-label">Confirm Password</label>
// //             <div style={{ position: 'relative' }}>
// //               <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 className="form-input"
// //                 style={{ paddingLeft: '40px' ,width:"100%"}}
// //                 placeholder="Confirm your password"
// //                 value={formData.confirmPassword}
// //                 onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
// //               />
// //             </div>
// //             {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
// //           </div>

// //           <button type="submit" className="btn-primary">
// //             Create Account
// //           </button>
// //         </form>

// //         <div className="auth-switch">
// //           Already have an account? <Link to="/login">Sign in</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { REGISTER_MUTATION } from "../../graphql/mutations";
// import { useMutation } from "@apollo/client/react";
// import { useAuth } from "../../hooks/useAuth";
// import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";

// const Register = () => {
//   const navigate = useNavigate();
//   const { register } = useAuth();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const [registerMutation, { loading }] = useMutation(REGISTER_MUTATION);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Email is invalid";

//     if (!formData.phone) newErrors.phone = "Phone is required";
//     else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone))
//       newErrors.phone = "Phone is invalid";

//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters";

//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match";

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validate();

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         const res = await registerMutation({
//           variables: {
//             name: formData.name,
//             email: formData.email,
//             password: formData.password,
//             phone: formData.phone,
//           },
//         });
//         console.log("Register response:", res);

//         const token = res.data.register.token;
//         const user = res.data.register.user;

//         // Save token + user in context
//         register(token, user);

//         // Redirect
//         navigate("/", { replace: true });
//       } catch (err) {
//         console.log("Register error:", err);
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
//           <h2 className="auth-title">Create Account</h2>
//           <p className="auth-subtitle">Sign up to get started with MediCare</p>
//         </div>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className="form-group">
//             <label className="form-label">Full Name</label>
//             <div style={{ position: "relative" }}>
//               <User
//                 size={18}
//                 style={{
//                   position: "absolute",
//                   left: "12px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   color: "#9ca3af",
//                 }}
//               />
//               <input
//                 type="text"
//                 className="form-input"
//                 style={{ paddingLeft: "40px", width: "100%" }}
//                 placeholder="Enter your full name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               />
//             </div>
//             {errors.name && <span className="form-error">{errors.name}</span>}
//           </div>

//           <div className="form-group">
//             <label className="form-label">Email Address</label>
//             <div style={{ position: "relative" }}>
//               <Mail
//                 size={18}
//                 style={{
//                   position: "absolute",
//                   left: "12px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   color: "#9ca3af",
//                 }}
//               />
//               <input
//                 type="email"
//                 className="form-input"
//                 style={{ paddingLeft: "40px", width: "100%" }}
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//             </div>
//             {errors.email && <span className="form-error">{errors.email}</span>}
//           </div>

//           <div className="form-group">
//             <label className="form-label">Phone Number</label>
//             <div style={{ position: "relative" }}>
//               <Phone
//                 size={18}
//                 style={{
//                   position: "absolute",
//                   left: "12px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   color: "#9ca3af",
//                 }}
//               />
//               <input
//                 type="tel"
//                 className="form-input"
//                 style={{ paddingLeft: "40px", width: "100%" }}
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               />
//             </div>
//             {errors.phone && <span className="form-error">{errors.phone}</span>}
//           </div>

//           <div className="form-group">
//             <label className="form-label">Password</label>
//             <div style={{ position: "relative" }}>
//               <Lock
//                 size={18}
//                 style={{
//                   position: "absolute",
//                   left: "12px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   color: "#9ca3af",
//                 }}
//               />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="form-input"
//                 style={{ paddingLeft: "40px", paddingRight: "40px", width: "100%" }}
//                 placeholder="Create a password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={{
//                   position: "absolute",
//                   right: "12px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   color: "#9ca3af",
//                 }}
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//             {errors.password && <span className="form-error">{errors.password}</span>}
//           </div>

//           <div className="form-group">
//             <label className="form-label">Confirm Password</label>
//             <div style={{ position: "relative" }}>
//               <Lock
//                 size={18}
//                 style={{
//                   position: "absolute",
//                   left: "12px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   color: "#9ca3af",
//                 }}
//               />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="form-input"
//                 style={{ paddingLeft: "40px", width: "100%" }}
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={(e) =>
//                   setFormData({ ...formData, confirmPassword: e.target.value })
//                 }
//               />
//             </div>
//             {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
//           </div>

//           <button type="submit" className="btn-primary">
//             {loading ? "Registering..." : "Create Account"}
//           </button>
//         </form>

//         <div className="auth-switch">
//           Already have an account? <Link to="/login">Sign in</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { REGISTER_MUTATION } from "../../graphql/mutations";
import { useMutation } from "@apollo/client/react";
import publicClient from "../../apolloClient";

import { useAuth } from "../../hooks/useAuth";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [registerMutation, { loading }] = useMutation(REGISTER_MUTATION, {
    client: publicClient,
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone))
      newErrors.phone = "Phone is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await registerMutation({
          variables: {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
          },
        });

        const token = res.data.register.token;
        const user = res.data.register.user;

        register(token, user);
        navigate("/", { replace: true });
      } catch (err) {
        console.log("Register error:", err);
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
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Sign up to get started with MediCare</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">

          {/* Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div style={{ position: "relative" }}>
              <User size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: "40px", width: "100%" }}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: "relative" }}>
              <Mail size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
              <input
                type="email"
                className="form-input"
                style={{ paddingLeft: "40px", width: "100%" }}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <div style={{ position: "relative" }}>
              <Phone size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
              <input
                type="tel"
                className="form-input"
                style={{ paddingLeft: "40px", width: "100%" }}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: "relative" }}>
              <Lock size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                style={{ paddingLeft: "40px", paddingRight: "40px", width: "100%" }}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div style={{ position: "relative" }}>
              <Lock size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                style={{ paddingLeft: "40px", width: "100%" }}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
          </div>

          <button type="submit" className="btn-primary">
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>

        <div className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
