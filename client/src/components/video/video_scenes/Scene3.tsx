import { motion } from 'framer-motion';
import { Code, ShieldAlert } from 'lucide-react';

export function Scene3() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="text-center mb-16">
        <h1 className="text-7xl font-bold mb-4 font-display">
          Source Code <span className="text-purple-400">Leakage</span>
        </h1>
      </div>

      <div className="relative w-full max-w-5xl h-64 bg-[#0d1117] rounded-xl border border-slate-700 p-6 overflow-hidden flex items-center shadow-2xl">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="z-10 flex gap-4 text-purple-400 font-mono text-xl"
        >
          <div>
            <p>1</p><p>2</p><p>3</p>
          </div>
          <div>
            <p><span className="text-pink-400">const</span> AWS_KEY = <span className="text-green-400">'AKIA...'</span>;</p>
            <p><span className="text-pink-400">function</span> <span className="text-blue-400">connectDB</span>() {'{'}</p>
            <p className="ml-4"><span className="text-pink-400">return</span> db.<span className="text-blue-400">auth</span>(AWS_KEY);</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: 'spring', bounce: 0.5 }}
          className="absolute right-12 top-1/2 -translate-y-1/2 text-red-500 flex flex-col items-center bg-black/80 p-6 rounded-2xl border-2 border-red-500 backdrop-blur-md"
        >
          <ShieldAlert size={64} className="mb-2" />
          <span className="font-bold text-xl tracking-widest uppercase">LEAK DETECTED</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-2xl font-mono text-slate-300">
          코드 패턴·언어 특성 기반 소스코드 외부 유출 탐지
        </p>
      </motion.div>
    </motion.div>
  );
}
