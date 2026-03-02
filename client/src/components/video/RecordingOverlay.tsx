import { motion, AnimatePresence } from 'framer-motion';
import { elementAnimations } from '@/lib/video/animations';
import logo from '@assets/logo_somansa_1772378833267.png';

export type OverlayMode = 'setup' | 'complete' | 'hidden';

interface RecordingOverlayProps {
  mode: OverlayMode;
  onStartWithRecording: () => void;
  onStartWithoutRecording: () => void;
  onDownload: () => void;
  onReplay: () => void;
}

export function RecordingOverlay({
  mode,
  onStartWithRecording,
  onStartWithoutRecording,
  onDownload,
  onReplay,
}: RecordingOverlayProps) {
  return (
    <>
      {/* Setup overlay */}
      <AnimatePresence>
        {mode === 'setup' && (
          <motion.div
            key="setup"
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={logo}
              alt="Somansa"
              className="w-48 mb-10"
              {...elementAnimations.fadeUp}
            />

            <motion.h1
              className="text-3xl font-bold mb-3 font-[Space_Grotesk]"
              style={{ color: '#00F0FF' }}
              {...elementAnimations.fadeUp}
              transition={{ ...elementAnimations.fadeUp.transition, delay: 0.2 }}
            >
              AI Security Presentation
            </motion.h1>

            <motion.p
              className="text-gray-400 mb-10 text-sm font-[JetBrains_Mono]"
              {...elementAnimations.fadeUp}
              transition={{ ...elementAnimations.fadeUp.transition, delay: 0.3 }}
            >
              소만사 AI 기반 위협 탐지 및 데이터 유출 방지
            </motion.p>

            <motion.button
              onClick={onStartWithRecording}
              className="px-8 py-3 rounded-lg text-black font-bold text-lg font-[Space_Grotesk] cursor-pointer"
              style={{ backgroundColor: '#00F0FF' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,240,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              {...elementAnimations.fadeUp}
              transition={{ ...elementAnimations.fadeUp.transition, delay: 0.4 }}
            >
              녹화 &amp; 재생
            </motion.button>

            <motion.button
              onClick={onStartWithoutRecording}
              className="mt-4 text-gray-500 hover:text-gray-300 text-sm underline underline-offset-4 cursor-pointer font-[JetBrains_Mono] transition-colors"
              {...elementAnimations.fadeUp}
              transition={{ ...elementAnimations.fadeUp.transition, delay: 0.5 }}
            >
              녹화 없이 재생
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Complete overlay */}
      <AnimatePresence>
        {mode === 'complete' && (
          <motion.div
            key="complete"
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={logo}
              alt="Somansa"
              className="w-40 mb-8"
              {...elementAnimations.fadeUp}
            />

            <motion.p
              className="text-gray-400 mb-8 text-sm font-[JetBrains_Mono]"
              {...elementAnimations.fadeUp}
              transition={{ ...elementAnimations.fadeUp.transition, delay: 0.1 }}
            >
              녹화가 완료되었습니다
            </motion.p>

            <motion.div
              className="flex gap-4"
              {...elementAnimations.fadeUp}
              transition={{ ...elementAnimations.fadeUp.transition, delay: 0.2 }}
            >
              <motion.button
                onClick={onDownload}
                className="px-6 py-3 rounded-lg text-black font-bold font-[Space_Grotesk] cursor-pointer"
                style={{ backgroundColor: '#00F0FF' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,240,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                WebM 다운로드
              </motion.button>

              <motion.button
                onClick={onReplay}
                className="px-6 py-3 rounded-lg font-bold font-[Space_Grotesk] border cursor-pointer"
                style={{ borderColor: '#00F0FF', color: '#00F0FF' }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,240,255,0.1)' }}
                whileTap={{ scale: 0.97 }}
              >
                다시 재생
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
