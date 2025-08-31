

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 70 : direction === "right" ? -70 : 0,
    y: direction === "up" ? 70 : direction === "down" ? -70 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});