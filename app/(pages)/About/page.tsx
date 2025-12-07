"use client";

import LaserFlow from '@/components/ui/laser';
import { useRef } from 'react';

export default function Page() {
  const revealImgRef = useRef<HTMLImageElement>(null);

  return (
    <div
      style={{
        height: '800px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#060010'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.0}
        verticalBeamOffset={0.0}
        color="#FF79C6"
      />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '86%',
        height: '60%',
        backgroundColor: '#060010',
        borderRadius: '20px',
        border: '2px solid #FF79C6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 6
      }}>
        {/* Your content here */}
      </div>

      <img
        ref={revealImgRef}
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.15,
          pointerEvents: 'none',
          // @ts-ignore - CSS custom properties
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.7) 0px, rgba(255,255,255,0.65) 80px, rgba(255,255,255,0.5) 160px, rgba(255,255,255,0.25) 240px, rgba(255,255,255,0) 320px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.7) 0px, rgba(255,255,255,0.65) 80px, rgba(255,255,255,0.5) 160px, rgba(255,255,255,0.25) 240px, rgba(255,255,255,0) 320px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties}
      />
    </div>
  );
}
