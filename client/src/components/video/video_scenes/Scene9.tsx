import { motion } from 'framer-motion';
import { FileLock, Search, ShieldAlert } from 'lucide-react';

export function Scene9() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-row items-center gap-16 max-w-6xl w-full px-8">
        <div className="flex-1 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-72 h-80 bg-slate-900 border-2 border-slate-700 rounded-2xl flex flex-col items-center justify-center mx-auto shadow-2xl relative"
          >
            <FileLock size={100} className="text-slate-400 mb-6" />
            <div className="flex gap-2">
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded font-bold">.ZIP</span>
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded font-bold">.PDF</span>
            </div>
          </motion.div>

          {/* Scanner beam blocked */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-1/2 -right-8 h-2 bg-blue-500 shadow-[0_0_10px_#3b82f6] -translate-y-1/2 z-0"
          />
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            className="absolute top-1/2 -right-8 -translate-y-1/2 bg-red-500 p-3 rounded-full z-10"
          >
            <ShieldAlert size={32} className="text-white" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-display font-bold leading-tight mb-4">
            Unanalyzable <br/>
            <span className="text-slate-400">Encrypted File</span>
          </h1>
          <p className="text-2xl text-slate-400/80 mb-6 font-mono">분석불가 암호화 파일 탐지</p>
          <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-xl backdrop-blur-sm">
            <p className="text-2xl font-mono text-red-200">
              zip, pdf, xls 파일 암호 설정으로<br/>분석 불가 유출 시도 파일 탐지
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
