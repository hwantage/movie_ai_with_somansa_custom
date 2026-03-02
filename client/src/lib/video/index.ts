// Video template library - hook, animation presets, and recorder

export { useVideoPlayer, useSceneTimer } from './hooks';
export type { SceneDurations, UseVideoPlayerOptions, UseVideoPlayerReturn } from './hooks';

export { TabRecorder } from './recorder';
export type { RecorderState, StateChangeListener } from './recorder';

export {
  springs,
  easings,
  sceneTransitions,
  elementAnimations,
  charVariants,
  charContainerVariants,
  staggerConfigs,
  containerVariants,
  itemVariants,
  staggerDelay,
  customSpring,
  withDelay,
} from './animations';
