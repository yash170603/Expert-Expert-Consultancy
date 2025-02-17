import { motion } from "framer-motion"
import { GraduationCap, BookOpen, LucideFileQuestion } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const ServiceList = () => {
  const services = [
    {
      title: "UG Service List",
      icon: GraduationCap,
      pdfUrl: "/newUGservices.pdf",
    },
    {
      title: "PG Service List",
      icon: BookOpen,
      pdfUrl: "/newPGservices.pdf",
    },
    {
      title: "FAQ's",
      icon: LucideFileQuestion,
      pdfUrl: "/faq"
    },
  ]

  return (
    <div className="bg-blue-950 p-8 w-full max-w-6xl mx-auto font-sans rounded-3xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col sm:flex-row justify-center items-stretch gap-4"
      >
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-visible flex-1 min-w-[200px]"
            >
              <motion.a
                href={service.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full relative block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-blue-900/50 rounded-lg border border-blue-800/50 transition-all duration-300 group-hover:bg-blue-900/80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-4 h-full">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600">
                    <Icon className="w-8 h-8 text-blue-950" />
                  </div>
                  <h3 className="text-white font-medium text-lg text-center">{service.title}</h3>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/50 to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-yellow-400/50 to-yellow-400 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-yellow-400/50 to-yellow-400 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-t from-yellow-400/50 to-yellow-400 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              </motion.a>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default ServiceList

