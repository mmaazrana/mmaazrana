import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { DotLottieWorker } from '@lottiefiles/dotlottie-web'

interface LottieWorkerAnimationProps {
  src: string
  workerId?: string // Optional worker ID for performance optimization
  width?: number
  height?: number
  isPlaying?: boolean
}

const LottieWorkerAnimation: React.FC<LottieWorkerAnimationProps> = ({
  src,
  workerId = 'default-worker',
  width = 500,
  height = 500,
  isPlaying = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const workerRef = useRef<DotLottieWorker | null>(null)

  const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

  useIsomorphicLayoutEffect(() => {
    if (canvasRef.current?.hasAttribute('animation')) {
      return
    }
    canvasRef.current?.setAttribute('animation', 'true')
    if (canvasRef.current) {
      // Create worker only once or if src/workerId changes
      if (!workerRef.current) {
        workerRef.current = new DotLottieWorker({
          canvas: canvasRef.current,
          src,
          renderConfig: { freezeOnOffscreen: isPlaying },
          autoplay: true, // Use state for initial autoplay
          loop: false,
          // @ts-ignore
          segment: [2, workerRef.current ? workerRef.current?.totalFrames - 1 : 300],
          workerId,
        })
      } else {
        // Potentially update src if needed, but handle worker recreation carefully
        // workerRef.current.load(src); // Example, depends on library API
      }

      return () => {
        // Clean up only when component unmounts
        workerRef.current?.destroy()
        workerRef.current = null // Reset ref on cleanup
      }
    }
  }, [canvasRef.current, src, workerId]) // Keep dependencies minimal for worker creation

  // Effect for controlling play/pause based on isPlaying state
  useIsomorphicLayoutEffect(() => {
    if (workerRef.current) {
      if (isPlaying) {
        workerRef.current.play()
      } else {
        workerRef.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <div>
      <canvas
        ref={canvasRef}
        className='flex w-full h-full md:max-w-full fade-in' // Adjusted width class
        width={width}
        height={height}
      ></canvas>
    </div>
  )
}

export default LottieWorkerAnimation
