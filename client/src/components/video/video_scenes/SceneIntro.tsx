import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import symbolIcon from '@assets/somansa.png';
import textLogo from '@assets/somansatextlogo.png';

// --- Network canvas background ---
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  brightness: number;
}

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let w = 0;
    let h = 0;

    const nodes: Node[] = [];
    const NODE_COUNT = 120;
    const CONNECTION_DIST = 180;

    function resize() {
      w = canvas!.width = canvas!.offsetWidth * devicePixelRatio;
      h = canvas!.height = canvas!.offsetHeight * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }

    function initNodes() {
      nodes.length = 0;
      const cw = canvas!.offsetWidth;
      const ch = canvas!.offsetHeight;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * cw,
          y: Math.random() * ch,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.5 + 0.1,
          brightness: Math.random() * 0.5 + 0.1,
        });
      }
    }

    function draw() {
      const cw = canvas!.offsetWidth;
      const ch = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, cw, ch);

      // Update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > cw) n.vx *= -1;
        if (n.y < 0 || n.y > ch) n.vy *= -1;
        n.x = Math.max(0, Math.min(cw, n.x));
        n.y = Math.max(0, Math.min(ch, n.y));
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.6;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(100, 180, 255, ${alpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(150, 210, 255, ${n.brightness})`;
        ctx!.fill();

        // Glow
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.radius * 3, 0, Math.PI * 2);
        const grad = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 3);
        grad.addColorStop(0, `rgba(150, 210, 255, ${n.brightness * 0.3})`);
        grad.addColorStop(1, 'rgba(150, 210, 255, 0)');
        ctx!.fillStyle = grad;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}

// --- Word stagger variant ---
const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'circOut' } },
};

export function SceneIntro() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      {/* Network background — fades in and intensifies */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 1] }}
        transition={{ duration: 3, times: [0, 0.3, 1], ease: 'easeOut' }}
      >
        <NetworkBackground />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl text-center">
        {/* Logo: symbol icon + SOMANSA text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'circOut', delay: 0.2 }}
          className="flex items-center gap-5 mb-2"
        >
          <img src={symbolIcon} alt="" className="h-[10vh] object-contain" />
          <img src={textLogo} alt="SOMANSA" className="h-[7vh] object-contain brightness-0 invert" />
        </motion.div>

        {/* Subtitle — close to logo */}
        <motion.p
          className="text-xl font-mono text-slate-400 mb-[10vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          소프트웨어를 만드는 사람들
        </motion.p>

        {/* "30년 보안 외길" */}
        <motion.p
          className="text-4xl font-bold font-display text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'circOut', delay: 2.0 }}
        >
          30년 보안 외길
        </motion.p>

        {/* Gradient pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="relative rounded-full px-10 py-4"
          style={{
            background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(168,85,247,0.15))',
            border: '1px solid rgba(120,100,255,0.35)',
            boxShadow: '0 0 30px rgba(100,80,240,0.15)',
          }}
        >
          <span
            className="text-3xl font-bold font-display"
            style={{
              background: 'linear-gradient(90deg, #00F0FF, #A855F7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI 시대에도 변함없는 압도적 기술을 선보입니다.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
