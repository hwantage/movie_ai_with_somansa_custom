import { motion } from 'framer-motion';
import { Clock, Activity, AlertCircle } from 'lucide-react';

export function Scene10() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1, ease: 'circOut' }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-display font-bold text-white mb-4">
          <span className="text-cyan-400">Anomalous</span> Activity
        </h1>
        <p className="text-2xl text-cyan-200/80 mb-2 font-mono">비업무 시간 이상 행위 탐지</p>
        <p className="text-xl font-mono text-slate-400">근무 외 시간 이상 활동 탐지</p>
      </motion.div>

      <div className="relative w-full max-w-4xl h-64 bg-slate-900 border border-slate-700 rounded-2xl p-8 flex items-end overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

        {/* Normal Activity Graph */}
        <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.path
            d="M 0 90 L 10 85 L 20 88 L 30 40 L 40 45 L 50 30 L 60 85 L 70 88"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
          />
          {/* Anomalous Spike */}
          <motion.path
            d="M 70 88 L 80 10 L 90 85 L 100 90"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "linear", delay: 2 }}
          />
        </svg>

        {/* Time markers */}
        <div className="absolute top-4 left-4 flex gap-4 text-slate-500 font-mono text-sm">
          <div className="flex items-center gap-1"><Clock size={14} /> 09:00 - 18:00 (Normal)</div>
        </div>

        {/* Anomaly marker */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.3, type: 'spring' }}
          className="absolute right-[20%] top-[10%] flex flex-col items-center"
        >
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 mb-2 shadow-[0_0_20px_rgba(239,68,68,0.8)]">
            <AlertCircle size={16} />
            03:42 AM
          </div>
          <div className="w-1 h-16 bg-red-500/50" />
        </motion.div>
      </div>
    </motion.div>
  );
}
