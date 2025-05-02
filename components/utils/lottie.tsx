import React, { useEffect, useRef, useCallback } from 'react'
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
  const isPlayingRef = useRef<boolean>(isPlaying)

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  useEffect(() => {
    let workerInstance: DotLottieWorker | null = null
    if (canvasRef.current) {
      console.log(`Effect: Creating worker for ${src}`)
      workerInstance = new DotLottieWorker({
        canvas: canvasRef.current,
        src,
        autoplay: isPlayingRef.current,
        loop: false,
        workerId,
      })
      workerRef.current = workerInstance
    } else {
      console.warn('Lottie Worker: Canvas ref not available on mount?')
    }

    return () => {
      console.log(`Effect Cleanup: Destroying worker for ${src}`)
      workerRef.current?.destroy()
      workerRef.current = null
    }
  }, [src, workerId])

  useEffect(() => {
    if (workerRef.current) {
      if (isPlaying) {
        console.log(`Effect: Playing worker ${src}`)
        workerRef.current.play()
      } else {
        console.log(`Effect: Pausing worker ${src}`)
        workerRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const handlePageHide = () => {
      if (workerRef.current) {
        workerRef.current.pause()
      }
    }

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted && workerRef.current) {
        if (isPlayingRef.current) {
          workerRef.current.play()
        }
      } else if (!event.persisted) {
        console.log(`BFCache: Page show (normal load): ${src}`)
      }
    }

    window.addEventListener('pagehide', handlePageHide)
    window.addEventListener('pageshow', handlePageShow)

    return () => {
      console.log(`BFCache Cleanup: Removing listeners for ${src}`)
      window.removeEventListener('pagehide', handlePageHide)
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [src])

  return (
    <div>
      <canvas
        ref={canvasRef}
        className='flex w-full h-full md:max-w-full fade-in'
        width={width}
        height={height}
      ></canvas>
    </div>
  )
}

export default LottieWorkerAnimation
