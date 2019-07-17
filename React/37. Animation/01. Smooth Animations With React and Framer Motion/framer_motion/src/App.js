import React, { useState } from 'react';
import { motion } from "framer-motion";

const styles01 = {
  background: "blue",
  borderRadius: 30,
  display: 'inline-block',
  width: 150,
  height: 150,
  marginRight: 100,
  marginTop: 100
};

const styles02 = {
  background: "red",
  borderRadius: 30,
  display: 'inline-block',
  width: 50,
  height: 50,
  marginRight: 100
};

const styles03 = {
  background: "#035ee8",
  borderRadius: 30,
  display: 'inline-block',
  width: 100,
  height: 100,
  marginRight: 100
};

const styles04 = {
  background: "#7fffd4",
  borderRadius: 30,
  display: 'inline-block',
  width: 150,
  padding: "10px 20px",
  margin: "auto",
  color: "#333",
  outline: "none",
  border: "none",
  cursor: "pointer",
  marginRight: 100
};

const styles05 = {
  borderRadius: 30,
  width: 100,
  height: 100,
  marginLeft: 100,
  marginTop: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  cursor: "pointer",
  marginRight: 100
};

const variants = {
  active: {
    opacity: 1,
    background: "#7fffd4",
    x: "-50px",
    scale: 1.5,
    color: "#333"
  },
  inActive: {
    opacity: 1,
    background: "#f95c5c",
    x: "50px",
    scale: 1,
    color: "white"
  }
};

export const App = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div>
      <motion.div
        style={styles01}
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        style={styles02}
        animate={{ scale: 3 }}
        transition={{ duration: 0.25 }}
      />

      <motion.div
          style={styles03}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 160, 270, 360, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],
          }}
          transition={{ duration: 2 }}
      />

      <motion.button
          style={styles04}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
        >
          Button
      </motion.button>

      <motion.div
        onClick={() => setToggle(!isToggled)}
        style={styles05}
        animate={isToggled ? "active" : "inActive"}
        variants={variants}
      >
        <span>{isToggled ? "on" : "off"}</span>
      </motion.div>
    </div>
  );
};

export default App;
