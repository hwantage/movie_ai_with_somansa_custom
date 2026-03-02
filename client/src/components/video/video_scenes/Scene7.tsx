import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import { staggerConfigs } from '@/lib/video/animations';

import logoOpenAI from '@assets/logo_openai.png';
import logoClaude from '@assets/logo_claude.png';
import logoGemini from '@assets/logo_gemini.png';
import logoGrok from '@assets/logo_grok.png';
import logoPerplexity from '@assets/logo_perplexity.png';
import logoCursor from '@assets/logo_cursor.png';
import logoGenspark from '@assets/logo_genspark.png';

const AI_SERVICES = [
  { name: 'OpenAI', logo: logoOpenAI },
  { name: 'Claude', logo: logoClaude },
  { name: 'Gemini', logo: logoGemini },
  { name: 'Grok', logo: logoGrok },
  { name: 'Perplexity', logo: logoPerplexity },
  { name: 'Cursor', logo: logoCursor },
  { name: 'Genspark', logo: logoGenspark },
];

const logoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...staggerConfigs.fast, delayChildren: 0.6 },
  },
};

const logoItemVariants = {
  hidden: { opacity: 0, scale: 0, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 500, damping: 22 },
  },
};

export function Scene7() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* AI Service Logos */}
      <motion.div
        className="flex items-center justify-center gap-[2vw] mb-[1vh]"
        variants={logoContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {AI_SERVICES.map((service) => (
          <motion.div
            key={service.name}
            variants={logoItemVariants}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-[4.5vw] h-[4.5vw] rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              <img
                src={service.logo}
                alt={service.name}
                className="w-[3vw] h-[3vw] object-contain"
              />
            </div>
            <span className="text-[0.7vw] font-mono text-indigo-300/80 tracking-wide">{service.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Connecting arrows from logos to content */}
      <motion.div
        className="flex items-center justify-center mb-[0.5vh]"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: 'circOut' }}
      >
        <svg width="200" height="30" viewBox="0 0 200 30">
          <motion.path
            d="M 100 0 L 100 25 M 92 18 L 100 25 L 108 18"
            fill="transparent"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Main content */}
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

        <div className="relative h-80 flex items-center justify-center">
          {/* Data flow from multiple sources */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring' }}
            className="absolute top-6 left-10 bg-indigo-900/50 border border-indigo-500 p-5 rounded-2xl flex flex-col items-center"
          >
            <div className="flex gap-1 mb-2">
              {AI_SERVICES.slice(0, 3).map((s) => (
                <img key={s.name} src={s.logo} alt={s.name} className="w-6 h-6 rounded" />
              ))}
            </div>
            <span className="font-mono font-bold text-indigo-300 text-sm">LLM Output</span>
          </motion.div>

          {/* Connection line */}
          <motion.svg className="absolute inset-0 w-full h-full z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <motion.path
              d="M 120 110 C 200 110, 200 220, 280 220"
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
            className="absolute bottom-6 right-10 bg-black border-2 border-red-500 p-7 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.4)] z-10"
          >
            <Shield size={56} className="text-red-500" />
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
            style={{ offsetPath: "path('M 120 110 C 200 110, 200 220, 280 220')" }}
            className="absolute w-10 h-10 bg-indigo-400 rounded-full shadow-[0_0_15px_#818cf8] flex items-center justify-center text-xs font-bold text-black"
          >
            PII
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
