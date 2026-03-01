import { motion } from 'framer-motion';
import { Bot, Shield, Database, Lock } from 'lucide-react';

export function Scene7() {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-20"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-2 gap-[4vw] w-full max-w-6xl px-[3vw] items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-5xl font-display font-bold mb-4 leading-tight">
            Generative AI <br/>
            <span className="text-indigo-400">Output Leakage</span>
          </h1>
          <p className="text-2xl text-indigo-200/80 mb-6 font-mono">생성형 AI를 통한 유출 탐지</p>
          <p className="text-2xl font-mono text-slate-400 leading-relaxed border-l-4 border-indigo-500 pl-6">
            LLM 결과물에 기밀 / PII<br/>
            포함 여부 실시간 탐지
          </p>
        </motion.div>

        <div className="relative h-96 flex items-center justify-center">
          {/* LLM Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="absolute top-10 left-10 bg-indigo-900/50 border border-indigo-500 p-6 rounded-2xl flex flex-col items-center"
          >
            <Bot size={64} className="text-indigo-400 mb-2" />
            <span className="font-mono font-bold text-indigo-300">LLM Output</span>
          </motion.div>

          {/* Connection line */}
          <motion.svg className="absolute inset-0 w-full h-full z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <motion.path 
              d="M 120 120 C 200 120, 200 240, 280 240" 
              fill="transparent" 
              stroke="#6366f1" 
              strokeWidth="4"
              strokeDasharray="10 10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </motion.svg>

          {/* Shield/Filter Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6, type: 'spring' }}
            className="absolute bottom-10 right-10 bg-black border-2 border-red-500 p-8 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.4)] z-10"
          >
            <Shield size={64} className="text-red-500" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: 'spring' }}
              className="absolute -top-4 -right-4 bg-red-600 p-2 rounded-full"
            >
              <Lock size={24} className="text-white" />
            </motion.div>
          </motion.div>

          {/* Data packet */}
          <motion.div
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            style={{ offsetPath: "path('M 120 120 C 200 120, 200 240, 280 240')" }}
            className="absolute w-10 h-10 bg-indigo-400 rounded-full shadow-[0_0_15px_#818cf8] flex items-center justify-center text-xs font-bold text-black"
          >
            PII
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
