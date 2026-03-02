import { motion } from 'framer-motion';
import { Image as ImageIcon, Fingerprint } from 'lucide-react';

// Scan bar: 2.5s per cycle (down 1.25s + up 1.25s)
// 2nd down pass: 2.5s–3.75s → show resident number at ~3.2s
// 3rd down pass: 5.0s–6.25s → show account number at ~5.7s
const SSN_DELAY = 2.8;
const ACCOUNT_DELAY = 3.7;

export function Scene2() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex gap-[4vw] items-center w-full max-w-6xl px-[3vw]">
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
            className="bg-slate-900/80 border-l-4 border-emerald-500 p-[1.5vw] rounded-r-xl"
          >
            <p className="text-2xl font-mono text-slate-300 leading-relaxed">
              이미지(OCR 포함)에서 주민번호, 계좌번호 등<br/>
              개인정보 식별 및 개수에 따른 위협 탐지
            </p>
          </motion.div>
        </motion.div>

        <div className="flex-1 relative flex justify-center items-center h-[35vh]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute w-[20vw] h-[20vw] border border-slate-700 bg-slate-900/50 rounded-2xl flex flex-col items-center justify-center overflow-hidden"
          >
            <ImageIcon size={80} className="text-slate-500" />

            {/* Scan bar */}
            <motion.div
              className="absolute left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_15px_2px_#34d399] z-10"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Resident number — appears on 2nd scan down */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: SSN_DELAY, duration: 0.4, ease: 'circOut' }}
              className="absolute top-[15%] left-[8%] right-[8%] z-20"
            >
              <div className="border-2 border-red-500 rounded-lg px-3 py-2 bg-red-500/10 backdrop-blur-sm">
                <span className="text-[0.65vw] font-mono text-red-400 block mb-1">주민등록번호</span>
                <span className="text-[1vw] font-mono font-bold text-white">771224-1234567</span>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: SSN_DELAY + 0.3, type: 'spring' as const, stiffness: 400, damping: 20 }}
                className="absolute -right-3 -top-3 bg-red-600 text-white text-[0.55vw] font-bold px-2 py-1 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.6)]"
              >
                PII
              </motion.div>
            </motion.div>

            {/* Account number — appears on 3rd scan down */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: ACCOUNT_DELAY, duration: 0.4, ease: 'circOut' }}
              className="absolute bottom-[15%] left-[8%] right-[8%] z-20"
            >
              <div className="border-2 border-amber-500 rounded-lg px-3 py-2 bg-amber-500/10 backdrop-blur-sm">
                <span className="text-[0.65vw] font-mono text-amber-400 block mb-1">계좌번호</span>
                <span className="text-[0.85vw] font-mono font-bold text-white">기업 088-010101-01010101-001</span>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ACCOUNT_DELAY + 0.3, type: 'spring' as const, stiffness: 400, damping: 20 }}
                className="absolute -right-3 -top-3 bg-amber-600 text-white text-[0.55vw] font-bold px-2 py-1 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.6)]"
              >
                금융
              </motion.div>
            </motion.div>
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
