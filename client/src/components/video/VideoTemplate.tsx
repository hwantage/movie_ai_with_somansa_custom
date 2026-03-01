import { AnimatePresence, motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { 
  SceneIntro, SceneIntro2, Scene1, Scene2, Scene3, Scene4, Scene5, 
  Scene6, Scene7, Scene8, Scene9, Scene10 
} from './video_scenes';

const SCENE_DURATIONS = {
  sceneIntro: 4000,
  sceneIntro2: 8000,
  scene1: 8000,
  scene2: 8000,
  scene3: 8000,
  scene4: 8000,
  scene5: 8000,
  scene6: 8000,
  scene7: 8000,
  scene8: 8000,
  scene9: 8000,
  scene10: 8000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative text-white bg-black"
    >
      {/* Persistent Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 z-0" />
      
      {/* Scanning effect that persists and changes color based on scene */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 z-10"
        animate={{ 
          backgroundColor: currentScene % 2 === 0 ? '#00F0FF' : '#10B981',
          boxShadow: currentScene % 2 === 0 ? '0 0 20px #00F0FF' : '0 0 20px #10B981',
          y: ['-10vh', '110vh']
        }}
        transition={{ 
          y: { duration: 3, ease: 'linear', repeat: Infinity },
          backgroundColor: { duration: 1 }
        }}
      />

      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <SceneIntro key="sceneIntro" />}
        {currentScene === 1 && <SceneIntro2 key="sceneIntro2" />}
        {currentScene === 2 && <Scene1 key="scene1" />}
        {currentScene === 3 && <Scene2 key="scene2" />}
        {currentScene === 4 && <Scene3 key="scene3" />}
        {currentScene === 5 && <Scene4 key="scene4" />}
        {currentScene === 6 && <Scene5 key="scene5" />}
        {currentScene === 7 && <Scene6 key="scene6" />}
        {currentScene === 8 && <Scene7 key="scene7" />}
        {currentScene === 9 && <Scene8 key="scene8" />}
        {currentScene === 10 && <Scene9 key="scene9" />}
        {currentScene === 11 && <Scene10 key="scene10" />}
      </AnimatePresence>
    </div>
  );
}
