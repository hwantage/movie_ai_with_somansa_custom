import { motion } from 'framer-motion';
import { QrCode, ShieldAlert } from 'lucide-react';

export function Scene1() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative mb-[8vh]">
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 border border-cyan-500 rounded-xl animate-pulse blur-md"></div>
          <QrCode size={140} className="text-cyan-400 relative z-10" strokeWidth={1.5} />
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, type: 'spring', bounce: 0.6 }}
            className="absolute -bottom-[1.5vw] -right-[1.5vw] bg-red-500 rounded-full p-[0.75vw] z-20 shadow-[0_0_30px_rgba(255,0,60,0.6)]"
          >
            <ShieldAlert size={48} className="text-white" />
          </motion.div>
        </motion.div>
      </div>

      <div className="text-center flex flex-col items-center">
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
        >
          <h1 className="text-6xl font-bold mb-4 tracking-tight font-display">
            <span className="text-cyan-400">QR Code</span> Phishing Detection
          </h1>
          <p className="text-2xl text-cyan-200/80 mb-[4vh] font-mono">QR 코드를 통한 Qshing 탐지</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-slate-900/50 border border-slate-800 p-[2vw] rounded-2xl backdrop-blur-sm max-w-4xl"
        >
          <p className="text-3xl font-mono text-slate-300 leading-relaxed">
            QR 코드 내 URL, 리다이렉션, 악성 도메인을 분석하여<br/>
            <span className="text-red-400 font-bold">피싱 여부 탐지</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
