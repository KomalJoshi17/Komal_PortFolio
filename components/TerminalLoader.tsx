"use client";

import { useEffect, useState } from "react";

export default function TerminalLoader({
  url,
  onClose,
}: {
  url: string;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 700),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => {
        window.open(url, "_blank");
        onClose();
      }, 2600),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">

      <div className="w-[90%] max-w-xl rounded-xl border border-neutral-800 bg-black p-5 font-mono text-green-400 shadow-2xl">

        <p>$ npm install</p>

        {step >= 1 && <p>✔ installing dependencies...</p>}
        {step >= 2 && <p>$ npm run dev</p>}
        {step >= 3 && <p>🚀 opening project...</p>}

      </div>

    </div>
  );
}