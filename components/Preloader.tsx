"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Elegant fade out after initial mount
    const timer1 = setTimeout(() => setVisible(false), 800);
    const timer2 = setTimeout(() => setShow(false), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'var(--white)',
        zIndex: 500,
        display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transition: 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), visibility 0.6s',
      }}
    >
      <div 
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          fontWeight: 700,
          color: 'var(--forest)',
          letterSpacing: '0.05em',
          animation: 'pulse 1.5s infinite ease-in-out'
        }}
      >
        Value Talent Advisory
      </div>
      <div 
        style={{
          width: '50px', height: '1px', 
          backgroundColor: 'var(--gold)', 
          marginTop: '1rem',
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.8s ease'
        }}
      ></div>
      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.5; transform: scale(0.98); }
        }
      `}</style>
    </div>
  );
}
