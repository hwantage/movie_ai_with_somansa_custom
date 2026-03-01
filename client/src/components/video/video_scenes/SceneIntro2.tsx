import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import aiIcon from '@assets/image_1772379161703.png';
import aiChat from '@assets/image_1772379197403.png';

export function SceneIntro2() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#0f172a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Dashboard Mockup */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* Main Message */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
        className="z-10 text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          AI 기반으로 <span className="text-cyan-400">위험도 판단</span> 및<br/>
          <span className="text-rose-500">이상 징후 탐지</span>를 수행합니다.
        </h1>
      </motion.div>

      {/* Interactive elements simulation */}
      <div className="relative w-full h-[60vh] max-w-6xl z-10 border border-slate-700/50 bg-slate-900/50 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
        
        {/* Placeholder UI for dashboard */}
        <div className="absolute inset-0 p-8 flex flex-wrap gap-6 opacity-30">
           <div className="w-[30%] h-32 bg-slate-800 rounded-xl" />
           <div className="w-[65%] h-32 bg-slate-800 rounded-xl" />
           <div className="w-full h-64 bg-slate-800 rounded-xl" />
        </div>

        {/* AI Notification Icon (Flashing) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
          className="absolute bottom-8 right-8 cursor-pointer z-30"
        >
          <motion.div
            animate={{ 
              boxShadow: ['0 0 0px 0px rgba(99, 102, 241, 0)', '0 0 20px 10px rgba(99, 102, 241, 0.6)', '0 0 0px 0px rgba(99, 102, 241, 0)']
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="rounded-full bg-white flex items-center justify-center p-2"
          >
             <img src={aiIcon} alt="AI Alert" className="w-16 h-16 object-contain" />
          </motion.div>
        </motion.div>

        {/* AI Chat Window */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9, originX: 1, originY: 1 }}
          animate={showChat ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="absolute bottom-28 right-8 z-20 w-[400px] shadow-2xl origin-bottom-right"
        >
          <img src={aiChat} alt="AI Chat Window" className="w-full rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-600" />
        </motion.div>

      </div>
    </motion.div>
  );
}
