import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Typography } from "@material-tailwind/react";

const Home = () => {
  
  const test= useLocation();
  console.log(test);
  
  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Welcome to Shopify squad!
        </Typography>
        <Typography variant="lead" color="blue-gray" className="mb-8">
          Please sign in or create an account to get started.
        </Typography>
        <div className="flex justify-center gap-4">
          <Button size="lg" color="blue">
            <Link to="/login" className="text-white">Sign In</Link>
          </Button>
          <Button size="lg" color="blue" variant="outlined">
            <Link to="/signup" className="text-blue-500">Sign Up</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Home