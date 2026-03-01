import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import bgImage from '@assets/ai_button_1772379874621.png';
import aiChat from '@assets/ai_button_click_1772379944482.png';
import aiIconNew from '@assets/image_1772380184802.png';

export function SceneIntro2() {
  const [showChat, setShowChat] = useState(false);
  const containerControls = useAnimation();

  useEffect(() => {
    // Sequence:
    // 0-2s: Initial view
    // 2-3s: Zoom into bottom right
    // 4s: Click effect on button & show chat
    
    const sequence = async () => {
      // Wait before zoom
      await new Promise(r => setTimeout(r, 2000));
      
      // Zoom to bottom right
      await containerControls.start({
        scale: 1.5,
        x: '-25%',
        y: '-25%',
        transition: { duration: 1.5, ease: 'easeInOut' }
      });
      
      // Wait a moment
      await new Promise(r => setTimeout(r, 500));
      
      // Show chat
      setShowChat(true);
    };
    
    sequence();
  }, [containerControls]);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#0f172a] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Message (Stays on top and centered) */}
      <div className="absolute top-[10vh] z-30 text-center w-full h-[20vh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showChat ? (
            <motion.h1
              key="msg1"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-5xl md:text-6xl font-display font-bold text-white leading-tight drop-shadow-lg absolute"
            >
              AI 기반으로 <span className="text-cyan-400">위험도 판단</span> 및<br/>
              <span className="text-rose-500">이상 징후 탐지</span>를 수행합니다.
            </motion.h1>
          ) : (
            <motion.h1
              key="msg2"
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-tight drop-shadow-[0_0_30px_rgba(192,132,252,0.3)] absolute"
            >
              AI Assistant 를 통한<br/>실시간 위협 알림
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive elements simulation container */}
      <motion.div 
        className="absolute bottom-[10vh] w-[80vw] h-[65vh] z-10 border-2 border-slate-700/50 rounded-xl shadow-2xl overflow-hidden bg-white origin-center"
        animate={containerControls}
      >
        {/* Background Dashboard Mockup using provided image */}
        <img src={bgImage} alt="Dashboard Background" className="absolute inset-0 w-full h-full object-cover" />

        {/* AI Notification Highlight (Flashing effect over the existing button in the image) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-[3%] right-[2%] w-[4.5%] aspect-square rounded-full z-20"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 0px 0px rgba(139, 92, 246, 0)', 
                '0 0 30px 15px rgba(139, 92, 246, 0.8)', 
                '0 0 0px 0px rgba(139, 92, 246, 0)'
              ],
              scale: showChat ? [1, 0.9, 1] : 1 // click simulation
            }}
            transition={{ 
              boxShadow: { duration: 1.5, repeat: Infinity },
              scale: { duration: 0.2 }
            }}
            className="w-full h-full rounded-full border-2 border-purple-400/50 cursor-pointer overflow-hidden flex items-center justify-center bg-white shadow-lg"
          >
            <img src={aiIconNew} alt="AI Button" className="w-[80%] h-[80%] object-contain" />
          </motion.div>
          {/* Simulated Cursor */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={showChat ? { opacity: [0, 1, 1, 0], x: 0, y: 0 } : { opacity: 0, x: 100, y: 100 }}
            transition={{ duration: 1, times: [0, 0.2, 0.8, 1] }}
            className="absolute top-[50%] left-[50%] w-[3vw] h-[3vw] z-50 pointer-events-none"
          >
             <svg viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1" className="w-full h-full drop-shadow-md">
               <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.41 0 .75-.34.75-.75V3.21c0-.41-.34-.75-.75-.75H6.25c-.41 0-.75.34-.75.75Z" />
             </svg>
          </motion.div>
        </motion.div>

        {/* AI Chat Window */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.9, originX: 1, originY: 1 }}
          animate={showChat ? { y: 0, opacity: 1, scale: 1 } : { y: 20, opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="absolute bottom-[10%] right-[3%] w-[40%] max-w-[500px] z-30 shadow-2xl origin-bottom-right"
        >
          <img src={aiChat} alt="AI Chat Window" className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-300" />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
