import { motion } from 'framer-motion';
import { FileType, RefreshCw, FileWarning } from 'lucide-react';

export function Scene6() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, scale: 0.9, rotateX: 30 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-6xl font-display font-bold text-center mb-24"
      >
        File Extension <span className="text-rose-500">Spoofing</span>
      </motion.h1>

      <div className="flex items-center gap-12 relative">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <div className="bg-slate-800 p-8 rounded-2xl border-2 border-slate-600 mb-4 relative shadow-xl">
            <FileType size={80} className="text-blue-400" />
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white font-bold px-3 py-1 rounded-lg text-lg">
              .PDF
            </div>
          </div>
          <span className="text-xl font-mono text-slate-400">Claimed Extension</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 180 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-slate-500"
        >
          <RefreshCw size={48} />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <div className="bg-red-950/50 p-8 rounded-2xl border-2 border-red-500 mb-4 relative shadow-[0_0_30px_rgba(225,29,72,0.3)]">
            <FileWarning size={80} className="text-red-500" />
            <div className="absolute -top-4 -right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-lg text-lg">
              .EXE
            </div>
          </div>
          <span className="text-xl font-mono text-red-400">Actual File Type</span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-20 text-2xl font-mono text-slate-300 text-center max-w-2xl bg-slate-900/80 py-4 px-8 rounded-full border border-slate-700"
      >
        실제 파일 유형과 확장자 불일치 여부 탐지
      </motion.p>
    </motion.div>
  );
}
