import { motion } from 'framer-motion';
import { Key, Search } from 'lucide-react';

export function Scene4() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-20 bg-slate-950/40"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-2 gap-12 max-w-6xl w-full items-center">
        <div className="relative h-80 flex items-center justify-center">
          <motion.div
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute w-48 h-48 bg-amber-500/10 border-2 border-amber-500 rounded-full flex items-center justify-center"
          >
            <Key size={80} className="text-amber-400" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, type: 'spring' }}
            className="absolute w-64 h-64 border border-amber-500/30 rounded-full flex items-start justify-end"
          >
            <div className="bg-amber-500 text-black px-4 py-1 rounded-full font-bold text-sm mt-8 mr-4 shadow-[0_0_15px_#f59e0b]">
              API KEY
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, type: 'spring' }}
            className="absolute -right-8 bottom-12 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-2xl flex items-center gap-3"
          >
            <Search className="text-blue-400" />
            <span className="font-mono text-sm text-slate-300">RegEx + AI Analysis</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6 font-display text-white leading-tight">
            <span className="text-amber-400">Credential</span><br/>Leakage Detection
          </h1>
          <p className="text-2xl font-mono text-slate-400 border-l-2 border-amber-500 pl-6 py-2">
            API Key, 토큰, 비밀번호<br/>
            정규식 + AI 혼합 탐지
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
