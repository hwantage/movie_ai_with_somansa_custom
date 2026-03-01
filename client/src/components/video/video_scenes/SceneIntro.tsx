import { motion } from 'framer-motion';
import logo from '@assets/logo_somansa_1772378409619.png';

export function SceneIntro() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
          className="mb-[6vh] bg-white/10 p-[1.5vw] rounded-2xl backdrop-blur-md border border-white/20"
        >
          <img src={logo} alt="Somansa Logo" className="h-[12vh] object-contain brightness-0 invert" />
        </motion.div>

        <motion.div 
          className="flex gap-[1vw] mb-[8vh] text-5xl font-bold font-display text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3, delayChildren: 0.8 }
            }
          }}
        >
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>소프트웨어를</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>만드는</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>사람들</motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col gap-[1vw]"
        >
          <p className="text-3xl font-mono text-slate-300">
            오직 보안 업계에서만 30년
          </p>
          <p className="text-4xl font-bold font-display text-cyan-400 bg-cyan-500/10 py-[0.5vw] px-[1.5vw] rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            AI 시대에서도 압도합니다!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
