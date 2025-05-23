import * as React from 'react'
import { SVGProps } from 'react'
const EquanimitySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' fill='none' {...props}>
    <path
      fill='#fff'
      d='M29.936 60c16.533 0 29.936-13.431 29.936-30 0-16.568-13.403-30-29.936-30S0 13.432 0 30c0 16.569 13.403 30 29.936 30'
    />
    <mask
      id='Group_3_svg__a'
      width={60}
      height={60}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{ maskType: 'luminance' }}
    >
      <path
        fill='#fff'
        d='M29.936 60c16.533 0 29.936-13.431 29.936-30 0-16.568-13.403-30-29.936-30S0 13.432 0 30c0 16.569 13.403 30 29.936 30'
      />
    </mask>
    <g mask='url(#Group_3_svg__a)'>
      <path
        fill='#1A2768'
        d='M17.25 57.317C7.7 50.814 1.573 39.063 3.1 27.422c.033-.23.18-1.28.213-1.486.412-2.244 1.163-4.421 2.063-6.48C9.836 9.106 19.614 2.54 30.933 3.163c6.332.328 12.692 2.883 16.82 7.883 4.075 4.844 5.936 11.528 2.502 17.282-3.986 6.505-10.99 8.254-18.021 6.12-3.776-1.135-7.248-3.24-10.168-5.802a.96.96 0 0 1-.09-1.354.954.954 0 0 1 1.269-.153c1.99 1.38 4.131 2.51 6.356 3.307 5.663 2.034 12.59 1.88 15.757-3.922 1.733-3.092.965-6.4-1.147-9.125-4.24-5.754-12.785-6.903-19.074-4.165-5.41 2.24-8.698 7.649-9.574 13.286-.053.35-.097.69-.114 1.023.002.159-.006.72-.01.885-.029.389.033.953.052 1.346-.002.203.04.47.07.668.719 5.868 4.713 11.078 9.906 13.767 3.794 1.982 5.265 6.67 3.287 10.47-2.148 4.22-7.737 5.48-11.503 2.636z'
      />
      <path
        fill='#C2D9FE'
        d='M63.748 40.44c-3.394-1.524-8.842-3.525-15.683-3.963-13.248-.85-19.51 4.94-30.916 5.425-6.07.258-15.067-.927-26.383-8.346v30.496h72.676q.154-11.805.306-23.612'
      />
      <path
        fill='#1A2768'
        d='M-1.3 52.547c16.305-5.31 28.905-6.746 37.726-7.001 3.663-.105 8.75-.065 14.07-3.056 7.57-4.257 11.226-12.183 13.11-18.168l-.162 46.23H-1.301z'
      />
      <path
        fill='#3758A3'
        d='M65.652 42.491c-9.218 4.565-16.183 4.673-20.66 4.054-13.646-1.886-18.72-12.53-32.858-14.111-7.137-.799-13.168 1.091-16.833 2.594V68.12h70.248l.105-25.628z'
      />
    </g>
  </svg>
)
export default EquanimitySvg
