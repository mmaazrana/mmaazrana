import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 441 250"
    className={`overflow-visible min-w-[125%] ${props.className}`}
    fill="none"
    {...props}
  >
    <mask
      id="mobileA"
      width={172}
      height={82}
      x={0}
      y={165}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="m.255 246.9 9.23-81.51h161.53l-9.23 81.51H.255Z" />
    </mask>
    <g mask="url(#mobileA)">
      <path
        fill="url(#mobileB)"
        d="M132.655 166.35h-85.04c-20.61 0-39.35 17.82-41.84 39.79-2.49 21.98 12.22 39.79 32.83 39.79h85.04c20.62 0 39.35-17.81 41.84-39.79 2.49-21.97-12.21-39.79-32.83-39.79Z"
      />
      <path
        fill="url(#mobileC)"
        fillOpacity={0.75}
        d="M38.605 245.93c-20.61 0-35.32-17.81-32.83-39.79 2.49-21.97 21.23-39.79 41.84-39.79h85.04c20.62 0 35.32 17.82 32.83 39.79-2.49 21.98-21.22 39.79-41.84 39.79h-85.04Zm94.16-80.54h-85.04c-21.09 0-40.31 18.28-42.85 40.75-2.54 22.47 12.54 40.76 33.62 40.76h85.04c21.09 0 40.32-18.29 42.86-40.76 2.54-22.47-12.55-40.75-33.63-40.75Z"
      />
    </g>
    <mask
      id="mobileD"
      width={172}
      height={82}
      x={12}
      y={63}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m12.895 144.55 9.23-81.5h161.53l-9.23 81.5H12.895Z"
      />
    </mask>
    <g mask="url(#mobileD)">
      <path
        fill="url(#mobileE)"
        d="M145.294 64.01h-85.04c-20.61 0-39.35 17.81-41.84 39.79-2.49 21.98 12.22 39.79 32.83 39.79h85.04c20.62 0 39.36-17.81 41.85-39.79 2.49-21.98-12.22-39.79-32.84-39.79Z"
      />
      <path
        fill="url(#mobileF)"
        fillOpacity={0.75}
        d="M51.234 143.59c-20.61 0-35.32-17.81-32.83-39.79 2.49-21.98 21.23-39.79 41.84-39.79h85.04c20.62 0 35.32 17.81 32.84 39.79-2.49 21.98-21.23 39.79-41.85 39.79h-85.04Zm94.16-80.54h-85.03c-21.09 0-40.31 18.28-42.85 40.75-2.54 22.47 12.54 40.75 33.62 40.75h85.04c21.09 0 40.32-18.28 42.86-40.75 2.54-22.47-12.54-40.75-33.63-40.75"
      />
    </g>
    <g filter="url(#mobileG)">
      <mask
        id="mobileH"
        width={8}
        height={6}
        x={405}
        y={18}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M412.887 23.39c-1.36-.86-2.72-1.73-4.08-2.59-.92-1.05-1.97-1.95-3.14-2.7l4.08 2.59c1.17.74 2.23 1.65 3.14 2.7Z"
        />
      </mask>
      <g mask="url(#mobileH)">
        <path
          fill="var(--primary-accent)"
          d="m405.667 18.11 4.08 2.59c4.85 3.07 7.7 8.98 6.93 15.76l-4.08-2.59c.77-6.78-2.08-12.69-6.93-15.76Z"
        />
      </g>
      <mask
        id="mobileI"
        width={9}
        height={17}
        x={408}
        y={20}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M412.887 23.39c2.87 3.28 4.37 7.92 3.79 13.07l-4.08-2.59c.58-5.14-.92-9.78-3.79-13.07 1.36.86 2.72 1.73 4.08 2.59Z"
        />
      </mask>
      <g mask="url(#mobileI)">
        <path
          fill="var(--primary-accent)"
          d="m405.667 18.11 4.08 2.59c4.85 3.07 7.7 8.98 6.93 15.76l-4.08-2.59c.77-6.78-2.08-12.69-6.93-15.76Z"
        />
      </g>
      <mask
        id="mobileJ"
        width={13}
        height={21}
        x={406}
        y={16}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m406.717 16.42 4.08 2.59c5.37 3.4 8.53 9.95 7.68 17.45l-4.08-2.59c.85-7.5-2.31-14.05-7.68-17.45Z"
        />
      </mask>
      <g mask="url(#mobileJ)">
        <path
          fill="#4264A8"
          d="m406.717 16.42 4.08 2.59c5.37 3.4 8.53 9.95 7.68 17.45l-4.08-2.59c.85-7.5-2.31-14.05-7.68-17.45Z"
        />
      </g>
      <mask
        id="mobileK"
        width={13}
        height={6}
        x={291}
        y={239}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m295.957 242.38-4.08-2.59c2.26 1.43 4.96 2.25 7.93 2.25l4.08 2.59c-2.97 0-5.67-.82-7.93-2.25Z"
        />
      </mask>
      <g mask="url(#mobileK)">
        <path
          fill="var(--primary-accent)"
          d="m299.807 242.04 4.08 2.59c-2.97 0-5.67-.82-7.93-2.25l-4.08-2.59c2.26 1.43 4.96 2.25 7.93 2.25Z"
        />
      </g>
      <mask
        id="mobileL"
        width={14}
        height={6}
        x={290}
        y={241}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m294.897 244.07-4.08-2.59c2.5 1.59 5.49 2.49 8.77 2.49l4.08 2.59c-3.28 0-6.27-.9-8.77-2.49Z"
        />
      </mask>
      <g mask="url(#mobileL)">
        <path
          fill="#4264A8"
          d="m299.587 243.97 4.08 2.59c-3.28 0-6.27-.9-8.77-2.49l-4.08-2.59c2.5 1.59 5.49 2.49 8.77 2.49Z"
        />
      </g>
      <path
        fill="var(--primary-accent)"
        d="m372.117 242.04 4.08 2.59h-72.31l-4.08-2.59h72.31Z"
      />
      <path
        fill="#4264A8"
        d="m371.897 243.97 4.08 2.59h-72.31l-4.08-2.59h72.31Z"
      />
      <path
        fill="var(--primary-accent)"
        d="m412.587 33.87 4.09 2.59-21.54 190.16-4.08-2.59 21.53-190.16Z"
      />
      <path
        fill="#4264A8"
        d="m414.397 33.87 4.09 2.59-21.54 190.16-4.08-2.59 21.53-190.16Z"
      />
      <path
        fill="url(#mobileM)"
        d="M397.727 15.86c9.33 0 15.99 8.07 14.86 18.01l-21.53 190.16c-1.13 9.95-9.61 18.01-18.94 18.01h-72.31c-9.33 0-15.99-8.07-14.86-18.01l21.53-190.16c1.13-9.95 9.61-18.01 18.94-18.01h72.31Z"
      />
      <mask
        id="mobileN"
        width={24}
        height={21}
        x={372}
        y={224}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m391.057 224.03 4.08 2.59c-1.13 9.95-9.61 18.01-18.94 18.01l-4.08-2.59c9.33 0 17.81-8.07 18.94-18.01Z"
        />
      </mask>
      <g mask="url(#mobileN)">
        <path
          fill="var(--primary-accent)"
          d="m391.057 224.03 4.08 2.59c-1.13 9.95-9.61 18.01-18.94 18.01l-4.08-2.59c9.33 0 17.81-8.07 18.94-18.01Z"
        />
      </g>
      <mask
        id="mobileO"
        width={26}
        height={23}
        x={371}
        y={224}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m392.867 224.03 4.08 2.59c-1.25 11-10.65 19.94-20.97 19.94l-4.08-2.59c10.32 0 19.72-8.95 20.97-19.94Z"
        />
      </mask>
      <g mask="url(#mobileO)">
        <path
          fill="#4264A8"
          d="m392.867 224.03 4.08 2.59c-1.25 11-10.65 19.94-20.97 19.94l-4.08-2.59c10.32 0 19.72-8.95 20.97-19.94Z"
        />
      </g>
      <path
        fill="#4264A8"
        d="M397.947 13.93c10.32 0 17.7 8.95 16.45 19.94l-21.53 190.16c-1.25 11-10.65 19.94-20.97 19.94h-72.31c-10.32 0-17.7-8.95-16.45-19.94l21.53-190.16c1.25-11 10.65-19.94 20.97-19.94h72.31Zm-6.89 210.1 21.53-190.16c1.13-9.95-5.53-18.01-14.86-18.01h-72.31c-9.33 0-17.81 8.07-18.94 18.01l-21.53 190.16c-1.13 9.95 5.53 18.01 14.86 18.01h72.31c9.33 0 17.81-8.07 18.94-18.01Z"
      />
    </g>
    <mask
      id="mobileP"
      width={134}
      height={229}
      x={195}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="M195.155 228.61 220.995.49h107.93l-25.84 228.12h-107.93Z"
      />
    </mask>
    <g mask="url(#mobileP)">
      <path
        fill="var(--primary-accent)"
        fillOpacity={0.9}
        d="M259.815 17.83c-1.8 0-3.64-1.46-3.9-3.3-.23-1.76.46-3.41 1.61-4.51.88-.83 2.01-1.35 3.19-1.35h26.5c1.75 0 3.3 1.04 3.77 2.76.52 1.91-.21 3.84-1.49 5.06-.88.83-2.01 1.34-3.2 1.34h-26.48Zm51.19-16.38h-72.33c-9.33 0-17.81 8.06-18.93 18l-21.54 190.19c-1.13 9.95 5.52 18 14.85 18h72.33c9.33 0 17.81-8.07 18.94-18.02l21.53-190.15c1.13-9.95-5.53-18.02-14.86-18.02"
      />
      <path
        fill="url(#mobileQ)"
        fillOpacity={0.75}
        d="M259.925 16.87c-1.45 0-2.9-1.22-3.1-2.6-.19-1.3.29-2.64 1.27-3.56.72-.7 1.61-1.07 2.51-1.07h26.5c1.44 0 2.64.87 3 2.16.46 1.7-.3 3.18-1.18 4.01-.72.69-1.62 1.06-2.53 1.06h-26.48m27.29-8.2h-26.5c-1.17 0-2.31.51-3.19 1.35-1.15 1.1-1.85 2.76-1.61 4.51.26 1.84 2.1 3.3 3.9 3.3h26.48c1.19 0 2.32-.51 3.2-1.34 1.29-1.22 2.01-3.15 1.49-5.06-.47-1.72-2.03-2.76-3.77-2.76Zm-74.15 218.98c-9.33 0-15.98-8.05-14.85-18l21.54-190.19c1.13-9.95 9.6-18 18.93-18h72.33c9.33 0 15.99 8.07 14.86 18.02l-21.53 190.15c-1.13 9.95-9.61 18.02-18.94 18.02h-72.33M311.115.49h-72.33c-9.81 0-18.76 8.51-19.95 18.97l-21.54 190.19c-1.18 10.46 5.84 18.96 15.65 18.96h72.33c9.82 0 18.77-8.52 19.96-18.99l21.53-190.15c1.19-10.46-5.83-18.98-15.65-18.98Z"
      />
    </g>
    <mask
      id="mobileR"
      width={93}
      height={29}
      x={184}
      y={170}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m184.064 198.01 3.16-27.93h88.89l-3.16 27.93h-88.89Z"
      />
    </mask>
    <g mask="url(#mobileR)">
      <path
        fill="var(--primary-accent)"
        fillOpacity={0.9}
        d="M266.855 171.05h-70.59c-4.55 0-8.69 3.94-9.24 8.79l-.95 8.42c-.55 4.85 2.7 8.78 7.25 8.78h70.59c4.55 0 8.69-3.93 9.24-8.78l.95-8.42c.55-4.85-2.7-8.79-7.25-8.79Z"
      />
      <path
        fill="url(#mobileS)"
        fillOpacity={0.75}
        d="M193.325 197.04c-4.55 0-7.8-3.93-7.25-8.78l.95-8.42c.55-4.85 4.69-8.79 9.24-8.79h70.59c4.55 0 7.8 3.94 7.25 8.79l-.95 8.42c-.55 4.85-4.69 8.78-9.24 8.78h-70.59Zm73.64-26.96h-70.59c-5.05 0-9.65 4.37-10.26 9.75l-.95 8.42c-.61 5.37 3 9.75 8.05 9.75h70.59c5.05 0 9.65-4.37 10.26-9.75l.95-8.42c.61-5.38-3-9.75-8.05-9.75Z"
      />
    </g>
    <mask
      id="mobileT"
      width={99}
      height={94}
      x={193}
      y={32}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m193.475 125.26 10.51-92.81h87.08l-10.51 92.81h-87.08Z"
      />
    </mask>
    <g mask="url(#mobileT)">
      <path
        fill="#4264A8"
        fillOpacity={0.3}
        d="M275.484 32.45h-55.92c-8.61 0-16.42 7.43-17.46 16.6l-6.75 59.6c-1.04 9.17 5.09 16.6 13.7 16.6h55.92c8.61 0 16.42-7.43 17.46-16.6l6.75-59.6c1.04-9.17-5.09-16.6-13.7-16.6Z"
      />
    </g>
    <mask
      id="mobileU"
      width={16}
      height={15}
      x={192}
      y={176}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m192.354 190.95 1.63-14.42h13.53l-1.63 14.42h-13.53Z"
      />
    </mask>
    <g mask="url(#mobileU)">
      <path
        fill="#4264A8"
        fillOpacity={0.6}
        d="M202.764 176.53h-4.02c-2.63 0-5.01 2.27-5.33 5.07l-.48 4.28c-.32 2.8 1.55 5.08 4.18 5.08h4.02c2.63 0 5.01-2.28 5.33-5.08l.48-4.28c.32-2.8-1.55-5.07-4.18-5.07Z"
      />
    </g>
    <mask
      id="mobileV"
      width={16}
      height={15}
      x={212}
      y={176}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m212.455 190.95 1.64-14.42h13.53l-1.63 14.42h-13.54Z"
      />
    </mask>
    <g mask="url(#mobileV)">
      <path
        fill="#4264A8"
        fillOpacity={0.6}
        d="M222.865 176.53h-4.02c-2.63 0-5.01 2.27-5.33 5.07l-.48 4.28c-.32 2.8 1.55 5.08 4.18 5.08h4.02c2.63 0 5.01-2.28 5.33-5.08l.48-4.28c.32-2.8-1.55-5.07-4.18-5.07Z"
      />
    </g>
    <mask
      id="mobileW"
      width={16}
      height={15}
      x={232}
      y={176}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m232.555 190.95 1.63-14.42h13.54l-1.64 14.42h-13.53Z"
      />
    </mask>
    <g mask="url(#mobileW)">
      <path
        fill="#4264A8"
        fillOpacity={0.6}
        d="M242.964 176.53h-4.02c-2.63 0-5.01 2.27-5.33 5.07l-.48 4.28c-.32 2.8 1.55 5.08 4.18 5.08h4.02c2.63 0 5.01-2.28 5.33-5.08l.48-4.28c.32-2.8-1.55-5.07-4.18-5.07Z"
      />
    </g>
    <mask
      id="mobileX"
      width={16}
      height={15}
      x={252}
      y={176}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="m252.665 190.95 1.63-14.42h13.53l-1.63 14.42h-13.53Z"
      />
    </mask>
    <g mask="url(#mobileX)">
      <path
        fill="#4264A8"
        fillOpacity={0.6}
        d="M263.075 176.53h-4.02c-2.63 0-5.01 2.27-5.33 5.07l-.48 4.28c-.32 2.8 1.55 5.08 4.18 5.08h4.02c2.63 0 5.01-2.28 5.33-5.08l.48-4.28c.32-2.8-1.55-5.07-4.18-5.07Z"
      />
    </g>
    <g opacity={0.75}>
      <mask
        id="mobileY"
        width={35}
        height={39}
        x={45}
        y={83}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m45.845 121.22 4.32-38.18h28.96l-4.33 38.18h-28.95Z"
        />
      </mask>
      <g mask="url(#mobileY)">
        <path
          fill="#02569B"
          d="M77.125 100.65h-11l-10.82 10.28 8.49 10.29h11l-8.48-10.29 10.8-10.28m-9.03-17.61-20.09 19.09 4.86 5.89 26.24-24.95h-10.98l-.02-.03"
        />
      </g>
    </g>
    <g opacity={0.75}>
      <mask
        id="mobileZ"
        width={42}
        height={40}
        x={103}
        y={82}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m103.725 121.44 4.37-38.63h36.24l-4.37 38.63h-36.24Z"
        />
      </mask>
      <g mask="url(#mobileZ)">
        <path
          fill="#0175C2"
          d="m119.314 119.83-6.53-7.92c-.63-.78-.57-1.56-.47-2.43l2.15-18.97 18.53 22.45-.78 6.87h-12.89m-2.39-30.41 9.32-4.69s.79-.29 1.35-.31h.03c.74 0 1.1.32 1.5.75 1.25 1.38 2.46 2.81 3.65 4.25h-15.85Zm10.86-6.61c-.71 0-1.43.17-2.1.51-4.05 2.03-12.14 6.1-12.14 6.1l-7.16 12.7c-.26.46-.62 1.27-.68 1.78-.13 1.1.2 2.24.85 3.05l11.95 14.48h15.02l.78-6.87h6.44l1.78-15.75-12.16-14.74s-1.24-1.19-2.39-1.27h-.19"
        />
      </g>
    </g>
    <g opacity={0.75}>
      <mask
        id="mobileA1"
        width={40}
        height={23}
        x={35}
        y={191}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m35.585 213.16 2.47-21.76h36.24l-2.47 21.76h-36.24Z"
        />
      </mask>
      <g mask="url(#mobileA1)">
        <path
          fill="#34A853"
          d="M45.995 207.66c-.83 0-1.43-.72-1.33-1.61.1-.89.86-1.61 1.69-1.61s1.43.72 1.33 1.61c-.1.89-.86 1.61-1.69 1.61Zm16.68 0c-.83 0-1.43-.72-1.33-1.61.1-.89.86-1.61 1.69-1.61s1.43.72 1.33 1.61c-.1.89-.86 1.61-1.69 1.61Zm4.85-16.26c-.05 0-.11 0-.16.02-.17.04-.32.16-.42.31l-3.69 5.63c-2.2-1.13-4.76-1.76-7.56-1.76s-5.5.63-7.96 1.76l-2.41-5.63a.536.536 0 0 0-.35-.31c-.05-.01-.1-.02-.16-.02-.11 0-.23.03-.33.09-.15.09-.27.23-.33.4a.69.69 0 0 0 0 .51l2.39 5.56c-5.52 3.01-9.69 8.59-10.96 15.2h36.24c.23-6.61-2.67-12.19-7.51-15.2l3.64-5.56c.11-.16.14-.34.12-.51a.541.541 0 0 0-.25-.4.538.538 0 0 0-.31-.09"
        />
      </g>
    </g>
    <g opacity={0.75}>
      <mask
        id="mobileB1"
        width={34}
        height={39}
        x={99}
        y={184}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="m99.105 222.75 4.369-38.63h29.51l-4.38 38.63h-29.5Z"
        />
      </mask>
      <g mask="url(#mobileB1)">
        <path
          fill="#fff"
          d="M123.824 193.44c-2.78 0-5.31 1.78-6.64 1.78-1.4 0-3.38-1.67-5.67-1.67h-.12c-3.08.04-6.12 1.9-8.04 4.85-3.87 5.91-2.48 14.65.09 19.46 1.25 2.3 2.73 4.9 5.07 4.9h.1c2.3-.1 3.34-1.59 6.12-1.59 2.78 0 3.35 1.52 5.66 1.52h.15c2.48-.03 4.31-2.38 6.08-4.74 2.05-2.72 3.08-5.36 3.14-5.5-.06-.02-4.58-1.96-3.98-7.82.51-4.89 4.56-7.23 4.75-7.34-1.77-3.36-5.04-3.74-6.19-3.83-.18-.01-.35-.02-.53-.02m1.6-9.31c-1.83.08-4.17 1.3-5.67 2.92-1.34 1.44-2.62 3.76-2.59 5.98.12 0 .23.01.35.01 1.9 0 3.95-1.22 5.33-2.75 1.46-1.63 2.56-3.91 2.57-6.16"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="mobileB"
        x1={165.76}
        x2={102.036}
        y1={166.35}
        y2={294.137}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary-accent)" />
        <stop offset={1} stopColor="var(--primary-accent)" stopOpacity={0.25} />
      </linearGradient>
      <linearGradient
        id="mobileC"
        x1={166.674}
        x2={100.908}
        y1={165.39}
        y2={295.61}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.1} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="mobileE"
        x1={178.409}
        x2={114.688}
        y1={64.01}
        y2={191.801}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary-accent)" />
        <stop offset={1} stopColor="var(--primary-accent)" stopOpacity={0.25} />
      </linearGradient>
      <linearGradient
        id="mobileF"
        x1={179.314}
        x2={113.561}
        y1={63.05}
        y2={193.261}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.1} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="mobileM"
        x1={412.712}
        x2={218.829}
        y1={15.86}
        y2={125.026}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary-accent)" />
        <stop offset={1} stopColor="var(--primary-accent)" stopOpacity={0.25} />
      </linearGradient>
      <linearGradient
        id="mobileQ"
        x1={326.897}
        x2={130.769}
        y1={0.49}
        y2={111.557}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.1} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <linearGradient
        id="mobileS"
        x1={275.082}
        x2={259.182}
        y1={170.08}
        y2={221.108}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4264A8" stopOpacity={0.1} />
        <stop offset={1} stopColor="#4264A8" />
      </linearGradient>
      <filter
        id="mobileG"
        width={271.615}
        height={368.63}
        x={271.999}
        y={2.93}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1015_80358"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={5} dy={5} />
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix values="0 0 0 0 0.239216 0 0 0 0 0.356863 0 0 0 0 0.6 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_backgroundBlur_1015_80358"
          result="effect2_dropShadow_1015_80358"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={20} dy={20} />
        <feGaussianBlur stdDeviation={14} />
        <feColorMatrix values="0 0 0 0 0.239216 0 0 0 0 0.356863 0 0 0 0 0.6 0 0 0 0.09 0" />
        <feBlend
          in2="effect2_dropShadow_1015_80358"
          result="effect3_dropShadow_1015_80358"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={45} dy={45} />
        <feGaussianBlur stdDeviation={19} />
        <feColorMatrix values="0 0 0 0 0.239216 0 0 0 0 0.356863 0 0 0 0 0.6 0 0 0 0.05 0" />
        <feBlend
          in2="effect3_dropShadow_1015_80358"
          result="effect4_dropShadow_1015_80358"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={80} dy={80} />
        <feGaussianBlur stdDeviation={22.5} />
        <feColorMatrix values="0 0 0 0 0.239216 0 0 0 0 0.356863 0 0 0 0 0.6 0 0 0 0.01 0" />
        <feBlend
          in2="effect4_dropShadow_1015_80358"
          result="effect5_dropShadow_1015_80358"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect5_dropShadow_1015_80358"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export { SvgComponent as MobileAppDevelopment };
