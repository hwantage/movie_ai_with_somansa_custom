import { motion } from 'framer-motion';
import { Image as ImageIcon, Fingerprint } from 'lucide-react';

export function Scene2() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex gap-16 items-center w-full max-w-6xl px-12">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4 tracking-tight font-display leading-tight">
            Image-based <br/><span className="text-emerald-400">PII Detection</span>
          </h1>
          <p className="text-2xl text-emerald-200/80 mb-6 font-mono">이미지내 개인정보, 금융정보 탐지</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-slate-900/80 border-l-4 border-emerald-500 p-6 rounded-r-xl"
          >
            <p className="text-2xl font-mono text-slate-300 leading-relaxed">
              이미지(OCR 포함)에서 주민번호, 계좌번호 등<br/>
              개인정보 식별 및 개수에 따른 위협 탐지
            </p>
          </motion.div>
        </motion.div>

        <div className="flex-1 relative flex justify-center items-center h-96">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute w-64 h-64 border border-slate-700 bg-slate-900/50 rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <ImageIcon size={80} className="text-slate-500" />
            <motion.div 
              className="absolute top-0 left-0 w-full h-2 bg-emerald-400/50 shadow-[0_0_15px_#34d399]"
              animate={{ y: [0, 256, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0, x: 50, y: -50 }}
            animate={{ scale: 1, x: 80, y: -80 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="absolute bg-emerald-500/20 border border-emerald-400 p-4 rounded-full backdrop-blur-md"
          >
            <Fingerprint size={48} className="text-emerald-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
