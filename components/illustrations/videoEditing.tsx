import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 421 250"
    className={`overflow-visible min-w-[120%] ${props.className}`}
    fill="none"
    {...props}
  >
    <g clipPath="url(#videoA)">
      <mask
        id="videoB"
        width={9}
        height={13}
        x={135}
        y={17}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m135.209 17.59 3.27 2.07c3.17 2.01 5.04 5.88 4.54 10.32l-3.27-2.07c.5-4.44-1.37-8.3-4.54-10.32Z"
        />
      </mask>
      <g mask="url(#videoB)">
        <path
          fill="#4264A8"
          d="m135.209 17.59 3.27 2.07c3.17 2.01 5.04 5.88 4.54 10.32l-3.27-2.07c.5-4.44-1.37-8.3-4.54-10.32Z"
        />
      </g>
      <mask
        id="videoC"
        width={9}
        height={4}
        x={23}
        y={246}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m26.609 248.32-3.27-2.07c1.39.88 3.05 1.38 4.87 1.38l3.27 2.07c-1.82 0-3.48-.5-4.87-1.38Z"
        />
      </mask>
      <g mask="url(#videoC)">
        <path
          fill="var(--primary-accent)"
          d="m28.209 247.63 3.27 2.07c-1.82 0-3.48-.5-4.87-1.38l-3.27-2.07c1.39.88 3.05 1.38 4.87 1.38Z"
        />
      </g>
      <mask
        id="videoD"
        width={10}
        height={5}
        x={22}
        y={246}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m26.21 248.95-3.27-2.07c1.48.94 3.25 1.47 5.19 1.47l3.27 2.07c-1.94 0-3.71-.54-5.19-1.47Z"
        />
      </mask>
      <g mask="url(#videoD)">
        <path
          fill="#4264A8"
          d="m28.13 248.35 3.27 2.07c-1.94 0-3.71-.54-5.19-1.47l-3.27-2.07c1.48.94 3.25 1.47 5.19 1.47Z"
        />
      </g>
      <path
        fill="var(--primary-accent)"
        d="m103.819 247.63 3.27 2.07h-75.61l-3.27-2.07h75.61Z"
      />
      <path
        fill="#4264A8"
        d="m103.739 248.351 3.26 2.07h-75.6l-3.27-2.07h75.61Z"
      />
      <path
        fill="var(--primary-accent)"
        d="m139.079 27.91 3.26 2.07-23.63 208.67-3.26-2.08 23.63-208.66Z"
      />
      <mask
        id="videoE"
        width={10}
        height={5}
        x={103}
        y={245}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M112.889 247.95c-1.74 1.11-3.74 1.75-5.8 1.75l-3.27-2.07c2.06 0 4.06-.64 5.8-1.75l3.27 2.07Z"
        />
      </mask>
      <g mask="url(#videoE)">
        <path
          fill="var(--primary-accent)"
          d="m115.449 236.57 3.27 2.07c-.69 6.1-5.9 11.06-11.63 11.06l-3.27-2.07c5.73 0 10.94-4.96 11.63-11.06Z"
        />
      </g>
      <path
        fill="#4264A8"
        d="m139.749 27.91 3.27 2.07-23.63 208.67-3.27-2.08 23.63-208.66Z"
      />
      <mask
        id="videoF"
        width={10}
        height={12}
        x={109}
        y={236}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m112.889 247.95-3.27-2.07c3.09-1.97 5.38-5.4 5.82-9.3l3.27 2.07c-.44 3.9-2.73 7.34-5.82 9.3Z"
        />
      </mask>
      <g mask="url(#videoF)">
        <path
          fill="var(--primary-accent)"
          d="m115.449 236.57 3.27 2.07c-.69 6.1-5.9 11.06-11.63 11.06l-3.27-2.07c5.73 0 10.94-4.96 11.63-11.06Z"
        />
      </g>
      <path
        fill="#4264A8"
        d="M130.039 16.12c6.09 0 10.45 5.29 9.72 11.79l-23.63 208.67c-.74 6.49-6.29 11.78-12.39 11.78h-75.61c-6.1 0-10.46-5.29-9.73-11.78L42.04 27.91c.74-6.5 6.29-11.79 12.4-11.79h75.61-.01Zm-14.59 220.45 23.63-208.67c.69-6.11-3.4-11.06-9.12-11.06h-75.61c-5.73 0-10.94 4.95-11.63 11.06L19.09 236.57c-.69 6.1 3.39 11.06 9.12 11.06h75.61c5.73 0 10.94-4.96 11.63-11.06Z"
      />
      <path
        fill="url(#videoG)"
        d="M129.949 16.85c5.73 0 9.82 4.95 9.12 11.06l-23.63 208.671c-.69 6.1-5.9 11.06-11.63 11.06h-75.6c-5.73 0-9.81-4.96-9.12-11.06l23.63-208.67c.69-6.11 5.89-11.06 11.63-11.06h75.61-.01Z"
      />
      <mask
        id="videoH"
        width={17}
        height={15}
        x={103}
        y={236}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m116.119 236.57 3.27 2.07c-.74 6.49-6.29 11.78-12.39 11.78l-3.27-2.07c6.09 0 11.65-5.29 12.39-11.78Z"
        />
      </mask>
      <g mask="url(#videoH)">
        <path
          fill="#4264A8"
          d="m116.119 236.57 3.27 2.07c-.74 6.49-6.29 11.78-12.39 11.78l-3.27-2.07c6.09 0 11.65-5.29 12.39-11.78Z"
        />
      </g>
      <mask
        id="videoI"
        width={9}
        height={5}
        x={138}
        y={246}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m142.08 248.831-3.27-2.07c1.26.8 2.76 1.25 4.41 1.25l3.27 2.07c-1.65 0-3.16-.45-4.41-1.25Z"
        />
      </mask>
      <g mask="url(#videoI)">
        <path
          fill="var(--primary-accent)"
          d="m143.229 248.011 3.27 2.07c-1.65 0-3.16-.45-4.41-1.25l-3.27-2.07c1.26.8 2.76 1.25 4.41 1.25Z"
        />
      </g>
      <mask
        id="videoJ"
        width={9}
        height={4}
        x={138}
        y={247}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m141.69 249.461-3.27-2.07c1.35.86 2.96 1.34 4.73 1.34l3.27 2.07c-1.77 0-3.38-.49-4.73-1.34Z"
        />
      </mask>
      <g mask="url(#videoJ)">
        <path
          fill="#4264A8"
          d="m143.15 248.731 3.27 2.07c-1.77 0-3.38-.49-4.73-1.34l-3.27-2.07c1.35.86 2.96 1.34 4.73 1.34Z"
        />
      </g>
      <mask
        id="videoK"
        width={6}
        height={5}
        x={395}
        y={170}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M398.86 172.591a8.02 8.02 0 0 1 1.9 1.68l-3.27-2.07a8.02 8.02 0 0 0-1.9-1.68l3.27 2.07Z"
        />
      </mask>
      <g mask="url(#videoK)">
        <path
          fill="var(--primary-accent)"
          d="m395.6 170.521 3.27 2.07c2.7 1.71 4.28 4.99 3.85 8.76l-3.27-2.07c.43-3.77-1.16-7.05-3.85-8.76Z"
        />
      </g>
      <mask
        id="videoL"
        width={6}
        height={10}
        x={397}
        y={172}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M400.759 174.271c1.5 1.81 2.27 4.32 1.95 7.08l-3.27-2.07c.31-2.76-.46-5.27-1.95-7.08l3.27 2.07Z"
        />
      </mask>
      <g mask="url(#videoL)">
        <path
          fill="var(--primary-accent)"
          d="m395.6 170.521 3.27 2.07c2.7 1.71 4.28 4.99 3.85 8.76l-3.27-2.07c.43-3.77-1.16-7.05-3.85-8.76Z"
        />
      </g>
      <mask
        id="videoM"
        width={9}
        height={13}
        x={395}
        y={169}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m395.989 169.891 3.27 2.07c2.89 1.83 4.59 5.36 4.14 9.39l-3.27-2.07c.46-4.04-1.24-7.56-4.14-9.39Z"
        />
      </mask>
      <g mask="url(#videoM)">
        <path
          fill="#4264A8"
          d="m395.989 169.891 3.27 2.07c2.89 1.83 4.59 5.36 4.14 9.39l-3.27-2.07c.46-4.04-1.24-7.56-4.14-9.39Z"
        />
      </g>
      <path
        fill="var(--primary-accent)"
        d="m382.26 248.011 3.269 2.07h-239.04l-3.26-2.07H382.26Z"
      />
      <path
        fill="#4264A8"
        d="m382.179 248.731 3.27 2.07h-239.04l-3.26-2.07h239.03Z"
      />
      <path
        fill="var(--primary-accent)"
        d="m399.45 179.281 3.27 2.07-6.65 58.72-3.27-2.07 6.65-58.72Z"
      />
      <path
        fill="#4264A8"
        d="m400.13 179.281 3.259 2.07-6.649 58.72-3.261-2.07 6.651-58.72Z"
      />
      <path
        fill="url(#videoN)"
        d="M391.179 169.271c5.2 0 8.9 4.49 8.27 10.01l-6.65 58.71c-.63 5.53-5.34 10.01-10.54 10.01h-239.03c-5.2 0-8.89-4.49-8.26-10.01l6.65-58.71c.63-5.53 5.33-10.01 10.53-10.01h239.03Z"
      />
      <mask
        id="videoO"
        width={15}
        height={13}
        x={382}
        y={238}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m392.8 238.001 3.27 2.07c-.63 5.53-5.34 10.01-10.54 10.01l-3.27-2.07c5.2 0 9.91-4.49 10.54-10.01Z"
        />
      </mask>
      <g mask="url(#videoO)">
        <path
          fill="var(--primary-accent)"
          d="m392.8 238.001 3.27 2.07c-.63 5.53-5.34 10.01-10.54 10.01l-3.27-2.07c5.2 0 9.91-4.49 10.54-10.01Z"
        />
      </g>
      <mask
        id="videoP"
        width={15}
        height={13}
        x={382}
        y={238}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m393.48 238.001 3.27 2.07c-.67 5.92-5.73 10.74-11.3 10.74l-3.27-2.07c5.56 0 10.63-4.82 11.3-10.74Z"
        />
      </mask>
      <g mask="url(#videoP)">
        <path
          fill="#4264A8"
          d="m393.48 238.001 3.27 2.07c-.67 5.92-5.73 10.74-11.3 10.74l-3.27-2.07c5.56 0 10.63-4.82 11.3-10.74Z"
        />
      </g>
      <path
        fill="#4264A8"
        d="M391.26 168.541c5.56 0 9.54 4.82 8.87 10.74l-6.651 58.71c-.67 5.92-5.73 10.74-11.3 10.74h-239.03c-5.55 0-9.54-4.82-8.87-10.74l6.65-58.71c.67-5.92 5.74-10.74 11.3-10.74H391.26Zm1.539 69.45 6.65-58.71c.63-5.53-3.069-10.01-8.269-10.01H152.149c-5.2 0-9.9 4.49-10.53 10.01l-6.649 58.71c-.63 5.53 3.069 10.01 8.259 10.01H382.26c5.2 0 9.909-4.49 10.539-10.01Z"
      />
      <mask
        id="videoQ"
        width={10}
        height={5}
        x={152}
        y={147}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m155.509 149.83-3.27-2.07c1.8 1.14 3.95 1.79 6.31 1.79l3.27 2.07c-2.36 0-4.51-.65-6.31-1.79Z"
        />
      </mask>
      <g mask="url(#videoQ)">
        <path
          fill="var(--primary-accent)"
          d="m158.549 149.55 3.27 2.07c-2.36 0-4.51-.65-6.31-1.79l-3.27-2.07c1.8 1.14 3.95 1.79 6.31 1.79Z"
        />
      </g>
      <mask
        id="videoR"
        width={11}
        height={5}
        x={151}
        y={148}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m155.12 150.461-3.27-2.07c1.89 1.2 4.14 1.88 6.61 1.88l3.27 2.07c-2.47 0-4.73-.68-6.61-1.88Z"
        />
      </mask>
      <g mask="url(#videoR)">
        <path
          fill="#4264A8"
          d="m158.469 150.271 3.27 2.07c-2.47 0-4.73-.68-6.61-1.88l-3.27-2.07c1.89 1.2 4.14 1.88 6.61 1.88Z"
        />
      </g>
      <mask
        id="videoS"
        width={10}
        height={17}
        x={411}
        y={17}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m411.489 17.87 3.27 2.07c4.05 2.57 6.43 7.5 5.79 13.16l-3.27-2.07c.64-5.66-1.74-10.59-5.79-13.16Z"
        />
      </mask>
      <g mask="url(#videoS)">
        <path
          fill="#4264A8"
          d="m411.489 17.87 3.27 2.07c4.05 2.57 6.43 7.5 5.79 13.16l-3.27-2.07c.64-5.66-1.74-10.59-5.79-13.16Z"
        />
      </g>
      <path
        fill="var(--primary-accent)"
        d="m389.759 149.55 3.26 2.07h-231.2l-3.27-2.07h231.21Z"
      />
      <path
        fill="#4264A8"
        d="m389.67 150.271 3.27 2.07h-231.2l-3.27-2.07h231.2Z"
      />
      <path
        fill="var(--primary-accent)"
        d="m416.61 31.03 3.27 2.07-11.8 104.2-3.27-2.07 11.8-104.2Z"
      />
      <path
        fill="#4264A8"
        d="m417.289 31.02 3.26 2.08-11.8 104.201-3.26-2.07 11.8-104.21Z"
      />
      <path
        fill="url(#videoT)"
        d="M404.799 16.71c7.41 0 12.71 6.42 11.81 14.32l-11.8 104.21c-.9 7.91-7.64 14.32-15.06 14.32h-231.2c-7.42 0-12.71-6.41-11.81-14.32l11.8-104.21c.89-7.9 7.63-14.32 15.06-14.32h231.2Z"
      />
      <mask
        id="videoU"
        width={20}
        height={17}
        x={389}
        y={135}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m404.809 135.23 3.27 2.07c-.9 7.91-7.64 14.32-15.06 14.32l-3.27-2.07c7.41 0 14.16-6.41 15.06-14.32Z"
        />
      </mask>
      <g mask="url(#videoU)">
        <path
          fill="var(--primary-accent)"
          d="m404.809 135.23 3.27 2.07c-.9 7.91-7.64 14.32-15.06 14.32l-3.27-2.07c7.41 0 14.16-6.41 15.06-14.32Z"
        />
      </g>
      <mask
        id="videoV"
        width={20}
        height={18}
        x={389}
        y={135}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m405.49 135.23 3.27 2.07c-.94 8.29-8.03 15.04-15.81 15.04l-3.27-2.07c7.78 0 14.88-6.75 15.81-15.04Z"
        />
      </mask>
      <g mask="url(#videoV)">
        <path
          fill="#4264A8"
          d="m405.49 135.23 3.27 2.07c-.94 8.29-8.03 15.04-15.81 15.04l-3.27-2.07c7.78 0 14.88-6.75 15.81-15.04Z"
        />
      </g>
      <path
        fill="#4264A8"
        d="M404.879 15.99c7.78 0 13.35 6.75 12.41 15.04l-11.8 104.21c-.94 8.29-8.03 15.04-15.81 15.04h-231.2c-7.78 0-13.35-6.75-12.41-15.04l11.8-104.21c.94-8.29 8.03-15.04 15.81-15.04h231.2Zm-.07 119.25 11.8-104.21c.89-7.9-4.4-14.32-11.81-14.32h-231.2c-7.42 0-14.16 6.42-15.06 14.32l-11.8 104.21c-.9 7.91 4.39 14.32 11.81 14.32h231.2c7.41 0 14.16-6.41 15.06-14.32Z"
      />
      <mask
        id="videoW"
        width={172}
        height={131}
        x={166}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m166.079 130.751 14.71-129.9h156.49l-14.71 129.9h-156.49Z"
        />
      </mask>
      <g mask="url(#videoW)">
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.9}
          d="M330.429 1.81h-143.01c-3.22 0-6.15 2.78-6.54 6.22l-12.93 114.221c-.47 4.16 2.32 7.54 6.23 7.54h141.76c3.22 0 6.15-2.78 6.54-6.22l13.08-115.54c.39-3.43-1.91-6.22-5.13-6.22Z"
        />
        <path
          fill="url(#videoX)"
          fillOpacity={0.75}
          d="M174.169 129.791c-3.91 0-6.7-3.37-6.23-7.54l12.93-114.22c.39-3.43 3.31-6.22 6.54-6.22h143.01c3.22 0 5.52 2.78 5.13 6.22l-13.08 115.54c-.39 3.43-3.31 6.22-6.54 6.22h-141.76ZM330.539.851h-143.01c-3.71 0-7.1 3.22-7.55 7.18l-12.93 114.22c-.53 4.69 2.62 8.5 7.02 8.5h141.76c3.72 0 7.1-3.22 7.55-7.18l13.08-115.54c.45-3.96-2.2-7.18-5.92-7.18Z"
        />
      </g>
      <mask
        id="videoY"
        width={64}
        height={131}
        x={338}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m338.389 130.751 14.71-129.9h48.2l-14.71 129.9h-48.2Z"
        />
      </mask>
      <g mask="url(#videoY)">
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.9}
          d="M393.259 1.81h-33.16c-3.43 0-6.53 2.96-6.95 6.61l-7.67 67.72c-.41 3.65 2.03 6.61 5.45 6.61h33.16c3.43 0 6.53-2.96 6.95-6.61l7.67-67.72c.41-3.65-2.03-6.61-5.45-6.61Z"
        />
        <path
          fill="url(#videoZ)"
          fillOpacity={0.75}
          d="M350.929 82.75c-3.43 0-5.86-2.96-5.45-6.61l7.67-67.72c.41-3.65 3.52-6.61 6.95-6.61h33.16c3.43 0 5.86 2.96 5.45 6.61l-7.67 67.72c-.41 3.65-3.52 6.61-6.95 6.61h-33.16Zm42.43-81.9h-33.16c-3.92 0-7.49 3.39-7.96 7.57l-7.67 67.72c-.47 4.18 2.33 7.57 6.25 7.57h33.16c3.92 0 7.49-3.39 7.96-7.57l7.67-67.72c.48-4.18-2.32-7.57-6.25-7.57Z"
        />
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.9}
          d="M383.86 97.55h-34.38c-3.08 0-5.89 2.661-6.26 5.951l-2.3 20.33c-.37 3.29 1.83 5.95 4.91 5.95h34.38c3.09 0 5.89-2.66 6.26-5.95l2.3-20.33c.37-3.29-1.82-5.95-4.91-5.95Z"
        />
        <path
          fill="url(#videoA1)"
          fillOpacity={0.75}
          d="M345.829 129.791c-3.08 0-5.29-2.66-4.91-5.95l2.3-20.33c.37-3.29 3.18-5.95 6.26-5.95h34.38c3.09 0 5.29 2.66 4.91 5.95l-2.3 20.33c-.37 3.29-3.17 5.95-6.26 5.95h-34.38Zm38.14-33.21h-34.38c-3.58 0-6.84 3.1-7.28 6.92l-2.3 20.33c-.43 3.82 2.13 6.92 5.71 6.92h34.38c3.58 0 6.84-3.1 7.28-6.92l2.3-20.33c.43-3.82-2.13-6.92-5.71-6.92Z"
        />
      </g>
      <mask
        id="videoB1"
        width={29}
        height={59}
        x={357}
        y={12}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m357.399 70.51 6.58-58.12h21.75l-6.58 58.12h-21.75Z"
        />
      </mask>
      <g fill="#99F" mask="url(#videoB1)">
        <path d="M378.299 22.19c-.47 0-.919.27-1.199.73-.14.23-.22.45-.28.7h2.43l.209-.08v-.1c.03-.13.02-.24 0-.36-.1-.52-.509-.89-1.029-.89h-.131Zm-8.149-2.22h-.02c-.13.42-.271.83-.451 1.24-.18.47-.379.95-.579 1.43-.17.49-.371.95-.551 1.35h2.31c-.03-.2-.08-.44-.13-.7-.05-.26-.1-.54-.15-.83-.06-.3-.1-.59-.16-.89-.06-.3-.11-.58-.15-.86-.04-.27-.079-.52-.119-.76m7.869 8.56h-.109c-.69 0-1.261-.12-1.711-.34-.42-.21-.769-.52-1.039-.92-.24-.37-.411-.8-.491-1.26-.07-.46-.08-.93-.03-1.42.06-.52.191-1.03.401-1.53.2-.49.48-.93.83-1.33.35-.38.75-.7 1.2-.91.45-.23.959-.3 1.539-.3h.06c.46 0 .91.1 1.31.3.36.17.651.43.871.77.2.32.349.7.419 1.1.07.39.081.78.041 1.18-.03.23-.06.43-.09.62-.05.18-.07.32-.09.41l-.141.12c-.06 0-.159 0-.299.02-.15.03-.32.03-.53.03-.21 0-.43-.04-.66-.04h-2.88c0 .3.06.6.19.86s.34.46.59.58c.32.16.689.24 1.079.24h.051c.32-.02.639-.04.959-.11.28-.03.561-.11.831-.22.01-.01.03-.02.03-.02.02 0 .03.03.02.09l-.171 1.48-.03.11-.069.07c-.3.13-.61.23-.94.29-.4.08-.79.12-1.19.12m-13.051-.2c-.11 0-.12-.05-.09-.17l3.931-8.91c.04-.1.08-.18.12-.3.06-.2.1-.42.13-.63l.09-.1h2.349l.111.08 2.19 9.9c.01.1-.021.15-.111.15h-1.889l-.141-.1-.479-2.31h-3.37l-.94 2.28-.19.13h-1.701m16.9-15.93H367.78c-2.13 0-4.06 1.83-4.31 4.1l-1.63 14.4c-.26 2.27 1.259 4.1 3.389 4.1h14.051c2.13 0 4.06-1.83 4.31-4.1l1.63-14.4c.26-2.27-1.261-4.1-3.391-4.1ZM366.96 55.56c-.24 0-.48 0-.72.02l-.37 3.25.35.02h.48c.35 0 .72-.06 1.06-.17.3-.09.57-.27.8-.51.22-.24.34-.57.39-.99.06-.3.02-.61-.1-.86-.13-.25-.33-.44-.58-.56-.29-.12-.61-.19-.94-.19h-.38m7.12 1.63c.32-.34.68-.62 1.07-.83.45-.25.94-.37 1.42-.37l.12.1v.03l-.22 1.89c0 .08-.06.1-.16.1h-.11c-.56 0-1.13.12-1.67.37-.19.09-.37.2-.51.36l-.56 4.92c-.01.1-.06.14-.14.14h-1.84l-.04-.03-.03-.04v-.04l.6-5.39.07-.73.06-.75c.03-.23.03-.43.04-.66l.02-.07.05-.03h1.62c.09 0 .16.07.16.16.05.29.06.58.01.89m-10.65 6.7-.09-.13 1.13-9.94.1-.1h.51l.69-.03.79-.02h.82c.74 0 1.35.09 1.83.3.44.17.82.43 1.13.79.25.3.44.69.54 1.1.09.41.12.83.07 1.26-.09.83-.36 1.51-.78 2.06-.43.54-.98.94-1.59 1.17-.65.24-1.33.33-2.08.33h-.46l-.38-.02-.35 3.09v.05l-.04.04-.04.03-.05.02h-1.75Zm14.44-15.98h-14.05c-1.02 0-2.05.43-2.85 1.2-.8.77-1.34 1.82-1.46 2.9l-1.63 14.4c-.26 2.27 1.26 4.1 3.39 4.1h14.05c2.13 0 4.06-1.83 4.31-4.1l1.63-14.4c.26-2.27-1.26-4.1-3.39-4.1Z" />
      </g>
      <mask
        id="videoC1"
        width={235}
        height={62}
        x={150}
        y={178}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m150.159 239.74 6.9-60.92h227.32l-6.9 60.92h-227.32Z"
        />
      </mask>
      {/*bottom sliders*/}
      <g mask="url(#videoC1)">
        <path
          fill="#4264A8"
          d="M180.849 184.87h-20.86c-1.5 0-2.86 1.3-3.05 2.9l-.63 5.6c-.18 1.61.89 2.9 2.39 2.9h20.86c1.51 0 2.87-1.3 3.05-2.9l.63-5.6c.18-1.6-.89-2.9-2.4-2.9"
          opacity={0.3}
        />
        <path
          fill="#4264A8"
          d="M254.939 184.87h-60.65c-1.79 0-3.43 1.56-3.65 3.48l-.51 4.46c-.22 1.91 1.07 3.47 2.86 3.47h60.65l1.29-11.41m12.63 0h-11.73l-1.29 11.41h11.73c1.79 0 3.43-1.56 3.65-3.47l.51-4.46c.22-1.92-1.07-3.48-2.86-3.48"
          opacity={0.6}
        />
        <path
          fill="#4264A8"
          d="M286.449 184.87h-5.7c-1.36 0-2.6 1.17-2.76 2.63l-.7 6.15c-.16 1.45.8 2.63 2.17 2.63h5.7c1.36 0 2.6-1.17 2.76-2.63l.7-6.15c.16-1.45-.8-2.63-2.17-2.63ZM323.519 184.87h-23.94c-1.53 0-2.91 1.32-3.1 2.95l-.62 5.51c-.18 1.63.91 2.95 2.43 2.95h23.94c1.53 0 2.91-1.32 3.09-2.95l.62-5.51c.18-1.63-.9-2.95-2.42-2.95ZM380.529 184.87h-42.27c-1.75 0-3.34 1.51-3.55 3.38l-.53 4.65c-.21 1.86 1.04 3.37 2.78 3.37h42.27c1.75 0 3.34-1.51 3.55-3.37l.53-4.65c.21-1.87-1.04-3.38-2.78-3.38Z"
          opacity={0.3}
        />
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.6}
          d="M188.379 222.141h-32.45c-1.59 0-3.03 1.37-3.22 3.06l-.6 5.29c-.19 1.69.93 3.06 2.52 3.06h32.45c1.58 0 3.03-1.37 3.22-3.06l.6-5.29c.19-1.69-.94-3.06-2.52-3.06Z"
        />
        <path
          fill="url(#videoD1)"
          fillOpacity={0.75}
          d="M154.639 233.55c-1.59 0-2.72-1.37-2.52-3.06l.6-5.29c.19-1.69 1.63-3.06 3.22-3.06h32.45c1.58 0 2.72 1.37 2.52 3.06l-.6 5.29c-.19 1.69-1.64 3.06-3.22 3.06h-32.45Zm33.82-12.13h-32.45c-1.96 0-3.75 1.7-3.98 3.78l-.6 5.29c-.24 2.09 1.17 3.78 3.13 3.78h32.45c1.96 0 3.74-1.7 3.98-3.78l.6-5.29c.24-2.09-1.16-3.78-3.12-3.78"
          opacity={0.3}
        />
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.6}
          d="M207.939 222.141h-5.7c-1.36 0-2.6 1.17-2.76 2.63l-.7 6.15c-.16 1.45.8 2.63 2.17 2.63h5.7c1.36 0 2.6-1.17 2.76-2.63l.7-6.15c.16-1.45-.8-2.63-2.17-2.63Z"
        />
        <path
          fill="url(#videoe1)"
          fillOpacity={0.75}
          d="M200.939 233.55c-1.36 0-2.33-1.17-2.17-2.63l.7-6.15c.16-1.45 1.4-2.63 2.76-2.63h5.7c1.36 0 2.33 1.17 2.17 2.63l-.7 6.15c-.16 1.45-1.4 2.63-2.76 2.63h-5.7Zm7.07-12.13h-5.7c-1.74 0-3.31 1.5-3.52 3.35l-.7 6.15c-.21 1.85 1.02 3.35 2.76 3.35h5.7c1.73 0 3.31-1.5 3.52-3.35l.7-6.15c.21-1.84-1.03-3.35-2.76-3.35Z"
          opacity={0.3}
        />
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.6}
          d="M229.849 222.141h-10.02c-1.4 0-2.68 1.22-2.85 2.72l-.68 5.96c-.17 1.5.83 2.72 2.24 2.72h10.02c1.4 0 2.68-1.22 2.85-2.72l.68-5.96c.17-1.5-.83-2.72-2.24-2.72Z"
        />
        <path
          fill="url(#videoF1)"
          fillOpacity={0.75}
          d="M218.549 233.55c-1.4 0-2.41-1.22-2.24-2.72l.68-5.96c.17-1.5 1.45-2.72 2.85-2.72h10.02c1.4 0 2.41 1.22 2.24 2.72l-.68 5.96c-.17 1.5-1.45 2.72-2.85 2.72h-10.02Zm11.39-12.13h-10.02c-1.78 0-3.4 1.54-3.62 3.44l-.68 5.96c-.22 1.9 1.06 3.44 2.84 3.44h10.02c1.78 0 3.4-1.54 3.61-3.44l.68-5.96c.22-1.9-1.05-3.44-2.83-3.44Z"
          opacity={0.3}
        />
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.9}
          d="M250.719 222.141h-8.59c-1.62 0-3.1 1.41-3.3 3.15l-.58 5.11c-.2 1.74.97 3.15 2.59 3.15h8.59l1.29-11.41Zm31.02 0h-30.11l-1.29 11.41h30.11c1.63 0 3.11-1.41 3.31-3.15l.58-5.11c.2-1.74-.97-3.15-2.6-3.15Z"
        />
        <path
          fill="url(#videoG1)"
          fillOpacity={0.75}
          d="M250.799 221.42h-8.59c-2 0-3.83 1.73-4.07 3.87l-.58 5.11c-.24 2.14 1.19 3.87 3.19 3.87h8.59l.08-.72h-8.59c-1.62 0-2.79-1.41-2.59-3.15l.58-5.11c.2-1.74 1.68-3.15 3.3-3.15h8.59l.08-.72m31.02 0h-30.11l-.08.72h30.11c1.63 0 2.79 1.41 2.6 3.15l-.58 5.11c-.2 1.74-1.68 3.15-3.31 3.15h-30.11l-.08.72h30.11c2.01 0 3.83-1.73 4.07-3.87l.58-5.11c.24-2.14-1.19-3.87-3.19-3.87"
        />
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.6}
          d="M335.529 222.141h-39.98c-1.63 0-3.11 1.41-3.31 3.15l-.58 5.11c-.2 1.74.97 3.15 2.6 3.15h39.98c1.63 0 3.11-1.41 3.31-3.15l.58-5.11c.2-1.74-.97-3.15-2.6-3.15Z"
        />
        <path
          fill="url(#videoH1)"
          fillOpacity={0.75}
          d="M294.259 233.55c-1.63 0-2.79-1.41-2.6-3.15l.58-5.11c.2-1.74 1.68-3.15 3.31-3.15h39.98c1.63 0 2.79 1.41 2.6 3.15l-.58 5.11c-.2 1.74-1.68 3.15-3.31 3.15h-39.98Zm41.36-12.13h-39.98c-2 0-3.83 1.74-4.07 3.87l-.58 5.11c-.24 2.13 1.19 3.87 3.19 3.87h39.98c2.01 0 3.83-1.74 4.07-3.87l.58-5.11c.24-2.13-1.19-3.87-3.19-3.87Z"
          opacity={0.3}
        />
        <path
          fill="#4264A8"
          d="M156.979 214.91c-1.71 0-2.93-1.48-2.73-3.3l.54-4.8c.21-1.83 1.76-3.3 3.47-3.3h54.76c1.71 0 2.93 1.48 2.73 3.3l-.54 4.8c-.21 1.83-1.76 3.3-3.47 3.3h-54.76Zm56.16-12.37h-54.76c-2.21 0-4.22 1.91-4.49 4.27l-.54 4.8c-.27 2.36 1.31 4.27 3.52 4.27h54.76c2.21 0 4.22-1.91 4.49-4.27l.54-4.8c.27-2.36-1.31-4.27-3.52-4.27Z"
          opacity={0.15}
        />
        <path
          fill="#4264A8"
          d="M252.939 202.54h-25.06c-2.19 0-4.18 1.9-4.44 4.22l-.55 4.89c-.26 2.33 1.3 4.22 3.49 4.22h25.06l.11-.96h-25.06c-1.69 0-2.89-1.46-2.69-3.26l.55-4.89c.2-1.8 1.74-3.26 3.43-3.26h25.06l.11-.96m25.66 0h-24.76l-.11.96h24.76c1.69 0 2.89 1.46 2.69 3.26l-.55 4.89c-.2 1.8-1.74 3.26-3.43 3.26h-24.76l-.11.96h24.76c2.19 0 4.18-1.9 4.44-4.22l.55-4.89c.26-2.33-1.3-4.22-3.49-4.22"
          opacity={0.6}
        />
        <path
          fill="#4264A8"
          d="M290.759 214.91c-1.73 0-2.97-1.5-2.76-3.35l.53-4.71c.21-1.84 1.79-3.35 3.52-3.35h59.13c1.73 0 2.96 1.5 2.75 3.35l-.53 4.71c-.21 1.85-1.78 3.35-3.51 3.35h-59.13Zm60.53-12.37h-59.13c-2.23 0-4.27 1.94-4.53 4.31l-.53 4.71c-.27 2.38 1.33 4.31 3.56 4.31h59.13c2.23 0 4.26-1.93 4.53-4.31l.53-4.71c.27-2.37-1.32-4.31-3.55-4.31M363.109 214.91c-1.71 0-2.93-1.48-2.73-3.3l.54-4.8c.21-1.82 1.76-3.3 3.47-3.3h12.77c1.71 0 2.93 1.49 2.73 3.3l-.54 4.8c-.21 1.83-1.76 3.3-3.47 3.3h-12.77Zm14.17-12.37h-12.77c-2.21 0-4.22 1.92-4.49 4.27l-.54 4.8c-.27 2.36 1.31 4.27 3.52 4.27h12.77c2.21 0 4.22-1.91 4.49-4.27l.54-4.8c.27-2.35-1.31-4.27-3.52-4.27Z"
          opacity={0.15}
        />
        <path
          fill="#4264A8"
          d="M256.069 178.82c-.24 0-.47.22-.5.49l-.63 5.56-1.29 11.41-.71 6.27-.11.96-1.29 11.41-.11.96-.63 5.55-.08.72-1.29 11.41-.08.72-.57 4.99c-.03.26.15.48.39.48.24 0 .48-.22.51-.48l.57-4.99.08-.72 1.29-11.41.08-.72.63-5.55.11-.96 1.29-11.41.11-.96.71-6.27 1.29-11.41.63-5.56c.03-.27-.15-.49-.4-.49Z"
        />
      </g>
      <mask
        id="videoI1"
        width={120}
        height={156}
        x={9}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M9.4 156.671 26.99 1.301h101.559l-17.6 155.37H9.399Z"
        />
      </mask>
      <g mask="url(#videoI1)">
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.9}
          d="M118.07 2.26H37.24c-5.22 0-9.96 4.51-10.59 10.08L11.56 145.622c-.63 5.56 3.09 10.08 8.31 10.08h80.83c5.23 0 9.97-4.51 10.6-10.08l15.09-133.28c.63-5.56-3.09-10.08-8.32-10.08Z"
        />
        <path
          fill="url(#videoJ1)"
          fillOpacity={0.75}
          d="M19.87 155.691c-5.22 0-8.94-4.51-8.31-10.08l15.09-133.27c.63-5.56 5.37-10.08 10.59-10.08h80.829c5.23 0 8.95 4.51 8.32 10.08l-15.09 133.28c-.63 5.56-5.37 10.08-10.6 10.08h-80.83m98.31-154.4h-80.83c-5.72 0-10.92 4.96-11.61 11.04L10.65 145.62c-.69 6.09 3.39 11.05 9.11 11.05h80.83c5.72 0 10.93-4.96 11.62-11.05l15.08-133.28c.69-6.09-3.4-11.04-9.12-11.04"
        />
      </g>
      <mask
        id="videoK1"
        width={110}
        height={63}
        x={0}
        y={170}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m.87 232.081 6.97-61.54h101.899l-6.97 61.54H.869Z"
        />
      </mask>
      <g mask="url(#videoK1)">
        <path
          fill="var(--primary-accent)"
          fillOpacity={0.9}
          d="M101.279 171.501h-85.2c-4.11 0-7.85 3.56-8.35 7.94l-4.95 43.74c-.5 4.38 2.44 7.94 6.55 7.94h85.2c4.11 0 7.85-3.56 8.35-7.94l4.95-43.74c.5-4.38-2.44-7.94-6.55-7.94Z"
        />
        <path
          fill="url(#videoL1)"
          fillOpacity={0.75}
          d="M9.33 231.111c-4.11 0-7.04-3.56-6.55-7.94l4.95-43.74c.5-4.38 4.23-7.94 8.35-7.94h85.199c4.11 0 7.04 3.56 6.55 7.94l-4.95 43.74c-.5 4.38-4.23 7.94-8.35 7.94H9.33Zm92.059-60.58h-85.2c-4.61 0-8.8 3.99-9.36 8.9l-4.95 43.74c-.56 4.9 2.74 8.9 7.34 8.9h85.2c4.61 0 8.81-4 9.36-8.9l4.95-43.74c.56-4.91-2.74-8.9-7.34-8.9Z"
        />
      </g>
      <mask
        id="videoM1"
        width={97}
        height={134}
        x={20}
        y={12}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m20.74 145.891 15.1-133.34h80.779l-15.1 133.34h-80.78Z"
        />
      </mask>
      <g fill="#4264A8" mask="url(#videoM1)">
        <path
          d="M111.179 12.55h-69.9c-3 0-5.73 2.6-6.1 5.8v.13c-.38 3.21 1.77 5.8 4.77 5.8h69.9c3 0 5.73-2.59 6.1-5.8v-.13c.38-3.2-1.77-5.8-4.77-5.8Z"
          opacity={0.3}
        />
        <path
          d="M59.38 70.27H35.49c-3.42 0-6.52 2.95-6.93 6.58l-2.32 20.51c-.41 3.641 2.02 6.591 5.44 6.591h23.89c3.42 0 6.52-2.95 6.93-6.59l2.32-20.51c.41-3.63-2.02-6.58-5.44-6.58Z"
          opacity={0.6}
        />
        <path
          d="M103.919 70.451h-23.96c-3.39 0-6.47 2.93-6.88 6.55l-2.29 20.21c-.41 3.62 2.01 6.55 5.4 6.55h23.96c3.39 0 6.47-2.93 6.88-6.55l2.29-20.21c.41-3.62-2.01-6.55-5.4-6.55ZM54.63 112.211H30.74c-3.42 0-6.52 2.95-6.93 6.58l-2.32 20.51c-.41 3.64 2.02 6.59 5.44 6.59h23.89c3.42 0 6.52-2.95 6.93-6.59l2.32-20.51c.41-3.63-2.02-6.58-5.44-6.58ZM99.17 112.391H75.21c-3.39 0-6.47 2.93-6.88 6.55l-2.29 20.21c-.41 3.62 2.01 6.55 5.4 6.55H95.4c3.39 0 6.469-2.93 6.879-6.55l2.29-20.21c.41-3.62-2.01-6.55-5.4-6.55ZM88.89 47.06h-52.2c-2.63 0-5.01 2.27-5.33 5.07l-.18 1.59c-.32 2.8 1.55 5.07 4.18 5.07h52.2c2.63 0 5.01-2.27 5.33-5.07l.18-1.59c.32-2.8-1.55-5.07-4.18-5.07Z"
          opacity={0.15}
        />
      </g>

      <mask
        id="videoN1"
        width={90}
        height={53}
        x={10}
        y={179}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="m10.83 231.251 5.89-52H99.7l-5.89 52H10.83Z" />
      </mask>
      <g fill="#4264A8" mask="url(#videoN1)">
        <path
          d="M47.6 179.251H23.06c-3.5 0-6.69 3.03-7.11 6.76l-2.38 21.06c-.42 3.74 2.08 6.76 5.58 6.76h24.54c3.51 0 6.69-3.03 7.11-6.76l2.38-21.06c.42-3.73-2.07-6.76-5.58-6.76Z"
          opacity={0.15}
        />
        <path
          d="M93.38 179.441H68.77c-3.48 0-6.65 3.01-7.07 6.73l-2.35 20.75c-.42 3.71 2.06 6.72 5.54 6.72H89.5c3.48 0 6.65-3.01 7.07-6.72l2.35-20.75c.42-3.72-2.06-6.73-5.54-6.73Z"
          opacity={0.3}
        />
        <path
          d="M42.72 222.311H18.18c-3.51 0-6.68 3.03-7.1 6.76l-.25 2.17h37.22l.25-2.17c.42-3.73-2.07-6.76-5.58-6.76ZM88.499 222.501h-24.61c-3.48 0-6.65 3.02-7.07 6.73l-.23 2.02h37.22l.23-2.02c.42-3.71-2.06-6.73-5.54-6.73Z"
          opacity={0.15}
        />
      </g>
      <mask
        id="videoO1"
        width={149}
        height={107}
        x={177}
        y={11}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="m177.529 117.57 12-106h136.29l-12 106h-136.29Z" />
      </mask>
      <g fill="#4264A8" mask="url(#videoO1)">
        <path
          d="M318.13 11.57H197.22c-4.25 0-8.11 3.68-8.62 8.21l-7.4 65.3c-.51 4.53 2.51 8.2 6.76 8.2h120.91c4.25 0 8.11-3.67 8.62-8.2l7.4-65.3c.51-4.53-2.51-8.21-6.76-8.21Z"
          opacity={0.3}
        />
        <path
          d="M264.81 105.84h-80.45c-3.04 0-5.8 2.63-6.17 5.87-.37 3.24 1.8 5.86 4.84 5.86h80.45c3.04 0 5.8-2.63 6.17-5.86.37-3.23-1.8-5.87-4.84-5.87Z"
          opacity={0.15}
        />
        <path
          d="M309.649 105.84h-21.17c-3.03 0-5.79 2.63-6.16 5.87-.37 3.24 1.8 5.86 4.83 5.86h21.17c3.03 0 5.8-2.63 6.16-5.86.36-3.23-1.8-5.87-4.83-5.87Z"
          opacity={0.6}
        />
      </g>
      <mask
        id="videoP1"
        width={36}
        height={16}
        x={346}
        y={106}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m346.789 121.59 1.71-15.11h32.72l-1.71 15.11h-32.72Z"
        />
      </mask>
      <g fill="#4264A8" mask="url(#videoP1)">
        <path
          d="M359.109 106.66c-.3 0-.63.08-.94.26l-9.41 5.42c-1.32.76-1.53 2.64-.38 3.4l8.18 5.41c.28.18.58.27.89.27.96 0 1.93-.82 2.06-1.96l1.23-10.82c.13-1.15-.66-1.97-1.62-1.97M370.129 106.48c-.84 0-1.7.72-1.81 1.72l-1.32 11.66c-.11 1 .58 1.72 1.42 1.72.27 0 .55-.07.83-.24l10.13-5.82c1.15-.66 1.34-2.32.34-2.98l-8.81-5.82c-.24-.16-.51-.24-.78-.24Z"
          opacity={0.6}
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="videoG"
        x1={139.248}
        x2={-49.818}
        y1={16.851}
        y2={114.851}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary-accent)" stopOpacity={0.25} />
        <stop offset={1} stopColor="var(--primary-accent)" />
      </linearGradient>
      <linearGradient
        id="videoN"
        x1={399.743}
        x2={356.443}
        y1={169.271}
        y2={314.194}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary-accent)" stopOpacity={0.25} />
        <stop offset={1} stopColor="var(--primary-accent)" />
      </linearGradient>
      <linearGradient
        id="videoT"
        x1={416.937}
        x2={311.162}
        y1={16.71}
        y2={230.833}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary-accent)" stopOpacity={0.25} />
        <stop offset={1} stopColor="var(--primary-accent)" />
      </linearGradient>
      <linearGradient
        id="videoX"
        x1={166.991}
        x2={292.877}
        y1={130.751}
        y2={-32.836}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoZ"
        x1={344.518}
        x2={421.022}
        y1={83.711}
        y2={33.01}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoA1"
        x1={339.962}
        x2={371.981}
        y1={130.751}
        y2={84.316}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoD"
        x1={151.402}
        x2={158.898}
        y1={234.27}
        y2={210.91}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoe1"
        x1={198.065}
        x2={210.947}
        y1={234.27}
        y2={221.566}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoF1"
        x1={215.595}
        x2={227.951}
        y1={234.26}
        y2={217.778}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoG1"
        x1={237.532}
        x2={244.051}
        y1={234.27}
        y2={210.275}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoH1"
        x1={290.963}
        x2={297.438}
        y1={234.27}
        y2={210.25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoJ1"
        x1={10.573}
        x2={160.025}
        y1={156.671}
        y2={44.801}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="videoL1"
        x1={1.817}
        x2={55.265}
        y1={232.071}
        y2={139.556}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.25} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <clipPath id="videoA">
        <path fill="#fff" d="M.87.85h419.79V250.8H.87z" />
      </clipPath>
    </defs>
  </svg>
);
export { SvgComponent as VideoEditing };
