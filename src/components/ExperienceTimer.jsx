import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const ExperienceTimer = () => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const animateCount = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const currentCount = Math.floor(progress * 29)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }

    animateCount()
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="inline-flex items-baseline justify-center relative px-6 py-3"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-yellow-500/30 to-yellow-600/30 rounded-full blur-2xl -z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ delay: 0.3, duration: 1 }}
      />
      <span className="text-lg md:text-xl text-yellow-200 mr-2">An experience of</span>
      <motion.span
        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200"
        style={{ WebkitBackgroundClip: "text" }}
      >
        {count}
      </motion.span>
      <span className="text-xl md:text-2xl font-bold text-yellow-400 ml-2">years</span>
    </motion.div>
  )
}

export default ExperienceTimer

