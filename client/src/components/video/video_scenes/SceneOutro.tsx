import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import symbolIcon from '@assets/somansa.png';
import textLogo from '@assets/somansatextlogo.png';

// --- Swirling particle rings background ---
function SwirlingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    interface Particle {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      ringIndex: number;
      brightness: number;
      wobble: number;
      wobbleSpeed: number;
    }

    const particles: Particle[] = [];
    const RING_COUNT = 7;
    const PARTICLES_PER_RING = 180;

    function resize() {
      canvas!.width = canvas!.offsetWidth * devicePixelRatio;
      canvas!.height = canvas!.offsetHeight * devicePixelRatio;
    }

    function initParticles() {
      particles.length = 0;
      for (let r = 0; r < RING_COUNT; r++) {
        const baseRadius = 80 + r * 55;
        for (let i = 0; i < PARTICLES_PER_RING; i++) {
          particles.push({
            angle: (Math.PI * 2 * i) / PARTICLES_PER_RING + Math.random() * 0.3,
            radius: baseRadius + (Math.random() - 0.5) * 40,
            speed: (0.15 + Math.random() * 0.15) * (r % 2 === 0 ? 1 : -1),
            size: Math.random() * 1.5 + 0.4,
            ringIndex: r,
            brightness: Math.random() * 0.6 + 0.2,
            wobble: Math.random() * 20,
            wobbleSpeed: Math.random() * 0.02 + 0.005,
          });
        }
      }
    }

    function draw() {
      const cw = canvas!.offsetWidth;
      const ch = canvas!.offsetHeight;
      const dpr = devicePixelRatio;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, cw, ch);

      // Center point — offset left to match image layout
      const cx = cw * 0.35;
      const cy = ch * 0.5;

      time += 0.016;

      // Draw particles
      for (const p of particles) {
        p.angle += p.speed * 0.016;
        const wobbleOffset = Math.sin(time * p.wobbleSpeed * 60 + p.wobble) * p.wobble;
        const r = p.radius + wobbleOffset;
        const x = cx + Math.cos(p.angle) * r * 1.3;
        const y = cy + Math.sin(p.angle) * r * 0.9;

        if (x < -10 || x > cw + 10 || y < -10 || y > ch + 10) continue;

        // Dotted line trail
        const trailLen = 3;
        for (let t = 0; t < trailLen; t++) {
          const ta = p.angle - p.speed * 0.016 * t * 3;
          const tr = p.radius + Math.sin(time * p.wobbleSpeed * 60 + p.wobble - t * 0.1) * p.wobble;
          const tx = cx + Math.cos(ta) * tr * 1.3;
          const ty = cy + Math.sin(ta) * tr * 0.9;
          const alpha = p.brightness * (1 - t / trailLen) * 0.3;
          ctx!.beginPath();
          ctx!.arc(tx, ty, p.size * 0.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(120, 180, 255, ${alpha})`;
          ctx!.fill();
        }

        // Main particle
        ctx!.beginPath();
        ctx!.arc(x, y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(160, 210, 255, ${p.brightness})`;
        ctx!.fill();

        // Glow
        const grad = ctx!.createRadialGradient(x, y, 0, x, y, p.size * 4);
        grad.addColorStop(0, `rgba(100, 180, 255, ${p.brightness * 0.25})`);
        grad.addColorStop(1, 'rgba(100, 180, 255, 0)');
        ctx!.beginPath();
        ctx!.arc(x, y, p.size * 4, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }

      // Central glow
      const cGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 200);
      cGrad.addColorStop(0, 'rgba(80, 120, 255, 0.12)');
      cGrad.addColorStop(0.5, 'rgba(60, 80, 200, 0.05)');
      cGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx!.beginPath();
      ctx!.arc(cx, cy, 200, 0, Math.PI * 2);
      ctx!.fillStyle = cGrad;
      ctx!.fill();

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
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
    />
  );
}

export function SceneOutro() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a2e 0%, #0f1a3a 30%, #1a1040 60%, #2d1050 100%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Swirling particle background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SwirlingBackground />
      </motion.div>

      {/* Content: "AI" on the left, "with SOMANSA" on the right */}
      <div className="relative z-10 flex items-center justify-center w-full px-[5vw]">
        {/* AI text — centered on particle swirl */}
        <motion.div
          className="flex-shrink-0"
          style={{ width: '45%', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: 'circOut' }}
        >
          <span
            className="text-[16vh] font-bold font-display text-white"
            style={{
              textShadow: '0 0 60px rgba(200,220,255,0.6), 0 0 120px rgba(100,150,255,0.3)',
            }}
          >
            AI
          </span>
        </motion.div>

        {/* "with" + SOMANSA logo */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: 'circOut' }}
        >
          <span className="text-4xl font-display text-white/80 font-bold">with</span>
          <div className="flex items-center gap-4">
            <img src={symbolIcon} alt="" className="h-[7vh] object-contain" />
            <img src={textLogo} alt="SOMANSA" className="h-[5vh] object-contain brightness-0 invert" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
