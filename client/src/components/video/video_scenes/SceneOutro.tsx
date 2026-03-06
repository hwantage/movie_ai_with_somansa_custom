import { motion } from 'framer-motion';
import logo from '@assets/logo_somansa_1772378833267.png';
import character from '@assets/1-2.png';

export function SceneOutro() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-row items-center justify-center mb-10"
        >
          {/* Character */}
          <motion.img
            src={character}
            alt="Somansa Character"
            className="h-[14vh] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mr-6"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Logo container */}
          <motion.div
            className="bg-white/10 p-[1.5vw] rounded-2xl backdrop-blur-md border border-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          >
            <img src={logo} alt="Somansa Logo" className="h-[10vh] object-contain" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <h1 className="text-7xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            AI with 소만사
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
