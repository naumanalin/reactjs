import { motion } from "framer-motion";

const ScrollSvg = () => {
  return (
    <a href="#services" className="scroll flex justify-center">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        {/* Outer circle/container */}
        <path
          d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
          stroke="white"
          strokeWidth="1"
        />

        {/* Animated down arrow */}
        <motion.path
          d="M12 7L12 13M12 13L9 10M12 13L15 10"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </svg>
    </a>
  );
};

export default ScrollSvg;
