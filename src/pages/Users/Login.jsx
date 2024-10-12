import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Input, Button, Typography } from "@material-tailwind/react";
import { User, Lock } from 'lucide-react';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length === 0) {
      try {
        // Post lel api 
        const response = await axios.post('https://Rana-backend-api/login', {
          username,
          password,
        });

    // law eshta8al
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back!',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            // roo7 3la eldashboard
            navigate('/');
          });
        }
      } catch (error) {
      // hena apo error
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.response?.data?.message || 'An error occurred. Please try again.',
        });
      }
    } else {
      setErrors(newErrors);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please correct the errors in the form.',
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Typography variant="h4" color="blue" className="text-center mb-6">
          Sign In
        </Typography>
        <form onSubmit={handleLogin} className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Input
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              icon={<User />}
              error={errors.username}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock />}
              error={errors.password}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" fullWidth className="mt-4">
              Sign In
            </Button>
          </motion.div>
        </form>
        <Typography variant="small" className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold text-blue-500 hover:underline">
            Sign up
          </Link>
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export default Login;
