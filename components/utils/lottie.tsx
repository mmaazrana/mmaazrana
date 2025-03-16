import React, { useEffect, useRef } from "react";
import { DotLottieWorker } from "@lottiefiles/dotlottie-web";

interface LottieWorkerAnimationProps {
  src: string;
  workerId?: string; // Optional worker ID for performance optimization
  width?: number;
  height?: number;
}

const LottieWorkerAnimation: React.FC<LottieWorkerAnimationProps> = ({
  src,
  workerId = "default-worker",
  width = 500,
  height = 500,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const workerRef = useRef<DotLottieWorker | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      workerRef.current = new DotLottieWorker({
        canvas: canvasRef.current,
        src,
        autoplay: true,
        loop: false,
        segment: [
          5,
          workerRef.current ? workerRef.current?.totalFrames - 1 : 300,
        ],
        workerId,
      });

      return () => {
        workerRef.current?.destroy();
      };
    }
  }, [src, workerId]);

  return (
    <canvas
      ref={canvasRef}
      className={"flex -w-full h-full md:max-w-full fade-in"}
      width={width}
      height={height}
    ></canvas>
  );
};

export default LottieWorkerAnimation;
