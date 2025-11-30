export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

export const fadeUp = (n: number) => ({
  hidden: { opacity: 0, y: n },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: n },
})

export const fadeDown = (n: number) => ({
  hidden: { opacity: 0, y: -n },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -n },
})

export const fadeLeft = (n: number) => ({
  hidden: { opacity: 0, x: n },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: n },
})

export const fadeRight = (n: number) => ({
  hidden: { opacity: 0, x: -n },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -n },
})

export const zoom = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
