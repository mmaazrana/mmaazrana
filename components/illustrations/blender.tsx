import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 419 250"
    className={`overflow-visible min-w-[119%] ${props.className}`}
    fill="none"
    {...props}
  >
    <mask
      id="blenderA"
      width={25}
      height={24}
      x={374}
      y={42}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m374.435 43.001.82-.52c11.62 0 22.17 10.04 23.58 22.42l-.82.52c-1.4-12.38-11.95-22.42-23.58-22.42Z"
      />
    </mask>
    <g fill="var(--secondary)" mask="url(#blenderA)">
      <path d="m374.435 43.001.82-.52c4.18 0 8.23 1.3 11.76 3.54l-.82.52c-3.53-2.24-7.57-3.54-11.76-3.54Z" />
      <path d="m386.194 46.541.82-.52c1.33.85 2.59 1.83 3.76 2.92l-.82.52a24.95 24.95 0 0 0-3.76-2.92ZM389.954 49.471l.82-.52c1.04.98 2 2.04 2.87 3.18l-.82.52a26.33 26.33 0 0 0-2.87-3.18Z" />
      <path d="m392.824 52.65.82-.52c.9 1.17 1.7 2.43 2.4 3.75l-.82.52c-.7-1.32-1.5-2.58-2.4-3.75ZM395.225 56.411l.82-.52c.88 1.66 1.58 3.44 2.08 5.28l-.82.52c-.5-1.85-1.2-3.62-2.08-5.28Z" />
      <path d="m397.305 61.69.82-.52c.33 1.21.57 2.46.71 3.73l-.82.52c-.14-1.27-.38-2.52-.71-3.73Z" />
    </g>
    <path
      fill="var(--secondary)"
      d="m398.015 65.42.81-.52 18.04 159.281-.81.52-18.04-159.28Z"
    />
    <mask
      id="blenderB"
      width={11}
      height={21}
      x={407}
      y={224}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m408.255 243.791-.82.52c6.03-3.82 9.57-11.17 8.62-19.61l.82-.52c.96 8.44-2.58 15.78-8.62 19.61Z"
      />
    </mask>
    <g fill="var(--secondary)" mask="url(#blenderB)">
      <path d="m416.054 224.701.82-.52c.37 3.28.06 6.4-.81 9.21l-.82.52c.87-2.81 1.18-5.93.81-9.21ZM415.245 233.921l.82-.52a19.78 19.78 0 0 1-2.19 4.75l-.82.52a19.78 19.78 0 0 0 2.19-4.75Z" />
      <path d="m413.054 238.671.82-.52c-.72 1.13-1.55 2.18-2.48 3.12l-.82.52c.93-.94 1.76-1.98 2.48-3.12Z" />
      <path d="m410.574 241.781.82-.52c-.89.9-1.86 1.7-2.92 2.39l-.82.52c1.05-.69 2.03-1.49 2.92-2.39Z" />
      <path d="m407.655 244.171.82-.52c-.07.05-.15.09-.22.14l-.82.52c.07-.05.15-.09.22-.14Z" />
    </g>
    <mask
      id="blenderC"
      width={12}
      height={5}
      x={397}
      y={243}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="M398.365 246.591c3.7 0 7.06-1.02 9.88-2.8l-.82.52c-2.82 1.79-6.18 2.8-9.88 2.8.24-.16.57-.36.82-.52Z"
      />
    </mask>
    <g mask="url(#blenderC)">
      <path
        fill="var(--primary-accent)"
        d="m397.555 247.111.82-.52c3.7 0 7.06-1.02 9.88-2.8l-.82.52c-2.82 1.79-6.18 2.8-9.88 2.8Z"
      />
    </g>
    <mask
      id="blenderD"
      width={13}
      height={5}
      x={397}
      y={245}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m409.295 245.491-.82.52c-3.06 1.94-6.7 3.04-10.71 3.04l.82-.52c4.01 0 7.65-1.1 10.71-3.04Z"
      />
    </mask>
    <g mask="url(#blenderD)">
      <path
        fill="var(--secondary)"
        d="m397.774 249.051.82-.52c4.01 0 7.65-1.1 10.71-3.04l-.82.52c-3.06 1.94-6.7 3.04-10.71 3.04Z"
      />
    </g>
    <path
      fill="var(--secondary)"
      d="m21.165 43.001.81-.52h353.28l-.82.52H21.165Z"
    />
    <mask
      id="blenderE1"
      width={11}
      height={4}
      x={11}
      y={42}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m11.295 45.801.82-.52c2.82-1.79 6.17-2.8 9.87-2.8l-.82.52c-3.7 0-7.05 1.02-9.87 2.8Z"
      />
    </mask>
    <g mask="url(#blenderE1)">
      <path
        fill="var(--secondary)"
        d="m11.295 45.801.82-.52c2.82-1.79 6.17-2.8 9.87-2.8l-.82.52c-3.7 0-7.05 1.02-9.87 2.8Z"
      />
    </g>
    <mask
      id="blenderF1"
      width={10}
      height={12}
      x={3}
      y={45}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="M12.115 45.28c-3.82 2.42-6.65 6.26-7.96 10.9-.27.17-.54.35-.82.52 1.31-4.64 4.14-8.47 7.96-10.9.24-.16.57-.36.82-.52Z"
      />
    </mask>
    <g fill="var(--primary-accent)" mask="url(#blenderF1)">
      <path d="m11.295 45.8.82-.52c-.07.05-.15.09-.22.14l-.82.52c.07-.05.15-.09.22-.14Z" />
      <path d="m11.075 45.94.82-.52c-1.05.69-2.03 1.49-2.92 2.39l-.82.52c.89-.9 1.86-1.7 2.92-2.39Z" />
      <path d="m8.155 48.33.82-.52c-.93.94-1.76 1.98-2.48 3.12l-.82.52c.72-1.13 1.55-2.18 2.48-3.12ZM5.675 51.45l.82-.52a19.78 19.78 0 0 0-2.19 4.75l-.82.52c.53-1.71 1.27-3.31 2.19-4.75Z" />
      <path d="m3.485 56.2.82-.52c-.87 2.81-1.18 5.93-.81 9.22l-.82.52c-.37-3.29-.06-6.41.81-9.22Z" />
    </g>
    <mask
      id="blenderG1"
      width={3}
      height={5}
      x={2}
      y={56}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="M3.424 60.1c-.27.17-.54.35-.82.52.12-1.36.37-2.67.72-3.92.27-.17.54-.35.82-.52-.36 1.25-.6 2.57-.72 3.92Z"
      />
    </mask>
    <g mask="url(#blenderG1)">
      <path
        fill="var(--primary-accent)"
        d="m3.484 56.2.82-.52c-.87 2.81-1.18 5.93-.81 9.22l-.82.52c-.37-3.29-.06-6.41.81-9.22Z"
      />
    </g>
    <mask
      id="blenderH1"
      width={2}
      height={1}
      x={2}
      y={60}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="M3.425 60.1c0 .09-.02.19-.02.28-.27.17-.54.35-.82.52 0-.1.02-.19.02-.28.27-.17.54-.35.82-.52Z"
      />
    </mask>
    <g mask="url(#blenderH1)">
      <path
        fill="var(--primary-accent)"
        d="m3.485 56.2.82-.52c-.87 2.81-1.18 5.93-.81 9.22l-.82.52c-.37-3.29-.06-6.41.81-9.22Z"
      />
    </g>
    <mask
      id="blenderI1"
      width={2}
      height={6}
      x={2}
      y={60}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="M3.404 60.39c-.11 1.46-.09 2.97.08 4.52l-.82.52c-.18-1.55-.2-3.06-.08-4.52.27-.17.54-.35.82-.52Z"
      />
    </mask>
    <g mask="url(#blenderI1)">
      <path
        fill="var(--primary-accent)"
        d="m3.484 56.2.82-.52c-.87 2.81-1.18 5.93-.81 9.22l-.82.52c-.37-3.29-.06-6.41.81-9.22Z"
      />
    </g>
    <mask
      id="blenderJ1"
      width={12}
      height={23}
      x={0}
      y={43}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m10.235 44.12.82-.52c-6.56 4.15-10.42 12.14-9.39 21.3l-.82.52c-1.04-9.16 2.83-17.15 9.38-21.31l.01.01Z"
      />
    </mask>
    <g fill="var(--secondary)" mask="url(#blenderJ1)">
      <path d="m10.235 44.12.82-.52-.24.15-.82.52.24-.15Z" />
      <path d="m9.995 44.27.82-.52c-1.15.75-2.21 1.62-3.18 2.6l-.82.52c.97-.98 2.03-1.85 3.18-2.6Z" />
      <path d="m6.815 46.87.82-.52a20.206 20.206 0 0 0-2.7 3.39l-.82.52c.78-1.23 1.69-2.37 2.7-3.39Z" />
      <path d="m4.115 50.26.82-.52c-1 1.58-1.81 3.31-2.38 5.17l-.82.52c.58-1.86 1.38-3.59 2.38-5.17Z" />
      <path d="m1.735 55.43.82-.52c-.95 3.05-1.28 6.43-.88 9.99l-.82.52c-.4-3.56-.07-6.94.88-9.99Z" />
    </g>
    <path
      fill="var(--primary-accent)"
      d="m44.274 247.111.82-.52h353.27l-.81.52H44.274Z"
    />
    <path
      fill="var(--secondary)"
      d="m44.495 249.051.82-.52h353.27l-.81.52H44.495Z"
    />
    <path
      fill="var(--primary-accent)"
      d="m2.675 65.42.81-.52 18.04 159.281-.82.52-18.03-159.28Z"
    />
    <path
      fill="var(--secondary)"
      d="m.854 65.42.81-.52 18.04 159.281-.82.52L.854 65.421Z"
    />
    <mask
      id="blenderK1"
      width={26}
      height={24}
      x={20}
      y={224}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m20.705 224.701.82-.52c1.4 12.38 11.95 22.41 23.57 22.41l-.82.52c-11.62 0-22.16-10.03-23.57-22.41Z"
      />
    </mask>
    <g fill="var(--primary-accent)" mask="url(#blenderK1)">
      <path d="m20.705 224.701.82-.52c.14 1.27.38 2.52.71 3.73l-.82.52c-.33-1.21-.57-2.46-.71-3.73ZM21.425 228.431l.82-.52c.5 1.85 1.2 3.62 2.08 5.28l-.82.52c-.87-1.66-1.58-3.43-2.08-5.28Z" />
      <path d="m23.495 233.71.82-.52c.69 1.32 1.5 2.58 2.39 3.75l-.82.52c-.9-1.17-1.7-2.43-2.39-3.75ZM25.895 237.46l.82-.52a26.33 26.33 0 0 0 2.87 3.18l-.82.52c-1.04-.97-2-2.04-2.87-3.18ZM28.765 240.651l.82-.52c1.17 1.1 2.42 2.08 3.76 2.92l-.82.52c-1.33-.85-2.59-1.83-3.76-2.92Z" />
      <path d="m32.525 243.571.82-.52c3.53 2.24 7.57 3.54 11.75 3.54l-.82.52c-4.18 0-8.22-1.3-11.75-3.54Z" />
    </g>
    <path
      fill="var(--secondary)"
      d="M398.585 248.531H45.315c-12.59 0-24.08-10.93-25.6-24.35L1.665 64.901c-1.52-13.43 7.5-24.35 20.09-24.35h353.28c12.6 0 24.08 10.92 25.6 24.35l18.04 159.28c1.52 13.42-7.49 24.35-20.09 24.35Zm.24-183.63c-1.4-12.38-11.95-22.42-23.58-22.42H21.975c-11.62 0-19.89 10.04-18.49 22.42l18.04 159.28c1.4 12.38 11.95 22.41 23.57 22.41h353.28c11.62 0 19.9-10.03 18.5-22.41l-18.04-159.28"
    />
    <path
      fill="url(#blenderL)"
      d="M398.365 246.591H45.095c-11.62 0-22.16-10.03-23.57-22.41L3.485 64.901c-1.4-12.38 6.87-22.42 18.49-22.42h353.28c11.62 0 22.17 10.04 23.58 22.42l18.04 159.28c1.4 12.38-6.88 22.41-18.5 22.41h-.01Z"
    />
    <mask
      id="blenderM1"
      width={28}
      height={26}
      x={18}
      y={224}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m18.885 224.701.82-.52c1.52 13.42 13.01 24.35 25.6 24.35l-.82.52c-12.59 0-24.08-10.93-25.6-24.35Z"
      />
    </mask>
    <g fill="var(--secondary)" mask="url(#blenderM1)">
      <path d="m18.885 224.701.82-.52c.16 1.37.42 2.72.77 4.04l-.82.52a25.74 25.74 0 0 1-.77-4.04ZM19.665 228.741l.82-.52c.54 2 1.3 3.92 2.25 5.73l-.82.52c-.95-1.81-1.71-3.73-2.25-5.73Z" />
      <path d="m21.915 234.471.82-.52c.76 1.44 1.63 2.8 2.61 4.08l-.82.52c-.98-1.28-1.85-2.64-2.61-4.08Z" />
      <path d="m24.524 238.551.82-.52c.95 1.25 2 2.41 3.13 3.47l-.82.52a27.947 27.947 0 0 1-3.13-3.47Z" />
      <path d="m27.654 242.02.82-.52c1.27 1.19 2.64 2.26 4.09 3.19l-.82.52c-1.45-.92-2.82-1.99-4.09-3.19Z" />
      <path d="m31.745 245.201.82-.52c3.83 2.43 8.22 3.85 12.75 3.85l-.82.52c-4.53 0-8.92-1.41-12.75-3.85Z" />
    </g>
    <path
      fill="var(--primary-accent)"
      fillOpacity={0.9}
      d="M385.274 224.971h-243.56c-5.42 0-10.34-4.69-11-10.46l-15.58-137.61c-.65-5.78 3.21-10.46 8.63-10.46h243.56c5.42 0 10.34 4.68 11 10.46l15.58 137.61c.65 5.77-3.21 10.46-8.63 10.46Z"
    />
    <path
      fill="url(#blenderN)"
      fillOpacity={0.75}
      d="M385.424 226.281h-243.56c-6.09 0-11.64-5.29-12.38-11.77l-15.58-137.61c-.74-6.49 3.62-11.77 9.71-11.77h243.56c6.08 0 11.64 5.28 12.38 11.77l15.58 137.61c.73 6.49-3.63 11.77-9.71 11.77Zm-7.1-149.38c-.65-5.78-5.58-10.46-11-10.46h-243.56c-5.42 0-9.28 4.68-8.63 10.46l15.58 137.61c.65 5.77 5.58 10.46 11 10.46h243.56c5.42 0 9.28-4.69 8.63-10.46l-15.58-137.61Z"
    />
    <mask
      id="blenderO"
      width={71}
      height={121}
      x={185}
      y={25}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.625 25.981.4 79.52-69.29 40.19-.39-79.52 69.28-40.19Z"
      />
    </mask>
    <g mask="url(#blenderO)">
      <path
        fill="var(--secondary)"
        d="m253.634 27.71.39 77.211-67.29 39.04-.38-77.22 67.291-39.04m.989-1.73-69.28 40.19.39 79.52 69.291-40.2-.401-79.52v.01Z"
      />
    </g>
    <mask
      id="blenderP"
      width={70}
      height={121}
      x={254}
      y={65}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.295 65.88.4 79.521-69.29 40.2-.4-79.52 69.29-40.2Z"
      />
    </mask>
    <g mask="url(#blenderP)">
      <path
        fill="var(--secondary)"
        d="m322.304 67.621.39 77.21-67.29 39.04-.38-77.22 67.29-39.04m.99-1.73-69.28 40.19.39 79.52 69.29-40.2-.4-79.52v.01Z"
      />
    </g>
    <mask
      id="blenderQ"
      width={70}
      height={121}
      x={254}
      y={25}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.295 65.881.4 79.52-68.67-39.9-.4-79.52 68.67 39.9Z"
      />
    </mask>
    <g mask="url(#blenderQ)">
      <path
        fill="var(--secondary)"
        d="m255.635 27.721 66.66 38.74.39 77.2-66.66-38.74-.39-77.2Zm-1.01-1.74.4 79.52 68.67 39.9-.4-79.52-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderR"
      width={139}
      height={81}
      x={185}
      y={105}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.694 145.401-69.29 40.2-68.67-39.91 69.29-40.19 68.67 39.9Z"
      />
    </mask>
    <g mask="url(#blenderR)">
      <path
        fill="var(--secondary)"
        d="m255.024 106.651 66.68 38.75-67.3 39.04-66.68-38.75 67.3-39.04Zm0-1.16-69.29 40.2 68.67 39.9 69.29-40.2-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderS"
      width={70}
      height={120}
      x={185}
      y={66}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.405 185.601-68.67-39.91-.39-79.52 68.66 39.91.4 79.52Z"
      />
    </mask>
    <g mask="url(#blenderS)">
      <path
        fill="var(--secondary)"
        d="m186.355 67.92 66.66 38.741.38 77.2-66.66-38.74-.38-77.2Zm-1.01-1.74.39 79.521 68.67 39.9-.39-79.52-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderT"
      width={139}
      height={82}
      x={185}
      y={25}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.005 106.081-68.66-39.91 69.28-40.19 68.67 39.9-69.29 40.2Z"
      />
    </mask>
    <g mask="url(#blenderT)">
      <path
        fill="var(--secondary)"
        d="m254.625 27.141 66.68 38.75-67.29 39.04-66.68-38.75 67.29-39.04Zm0-1.16-69.28 40.19 68.67 39.9 69.28-40.19-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderU"
      width={70}
      height={120}
      x={185}
      y={26}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.855 105.601-69.12 39.9-.23-79.42 69.12-39.91.23 79.43Z"
      />
    </mask>
    <g mask="url(#blenderU)">
      <path
        fill="var(--secondary)"
        d="m253.625 27.9.22 77.121-67.12 38.75-.22-77.12 67.12-38.75Zm1-1.73-69.12 39.9.23 79.431 69.12-39.9-.23-79.43Z"
      />
    </g>
    <mask
      id="blenderV"
      width={70}
      height={120}
      x={254}
      y={66}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.515 145.501-69.11 39.91-.23-79.43 69.12-39.9.22 79.42Z"
      />
    </mask>
    <g mask="url(#blenderV)">
      <path
        fill="var(--secondary)"
        d="m322.295 67.811.22 77.12-67.12 38.75-.22-77.12 67.12-38.75Zm1-1.73-69.12 39.9.23 79.43 69.12-39.9-.23-79.43Z"
      />
    </g>
    <mask
      id="blenderW"
      width={139}
      height={81}
      x={185}
      y={105}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.514 145.501-69.11 39.91-68.67-39.91 69.12-39.9 68.66 39.9Z"
      />
    </mask>
    <g mask="url(#blenderW)">
      <path
        fill="var(--secondary)"
        d="m254.845 106.751 66.67 38.75-67.12 38.75-66.67-38.75 67.12-38.75Zm0-1.16-69.12 39.9 68.67 39.9 69.12-39.9-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderX"
      width={70}
      height={120}
      x={185}
      y={66}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.405 185.411-68.67-39.91-.23-79.42 68.67 39.9.23 79.43Z"
      />
    </mask>
    <g mask="url(#blenderX)">
      <path
        fill="var(--secondary)"
        d="m186.515 67.821 66.66 38.74.22 77.11-66.66-38.74-.22-77.11Zm-1-1.74.23 79.43 68.67 39.9-.23-79.43-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderY"
      width={139}
      height={80}
      x={185}
      y={26}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.175 105.981-68.67-39.9 69.12-39.91 68.67 39.91-69.12 39.9Z"
      />
    </mask>
    <g mask="url(#blenderY)">
      <path
        fill="var(--secondary)"
        d="m254.625 27.33 66.67 38.75-67.12 38.751-66.67-38.75 67.12-38.75Zm0-1.16-69.12 39.9 68.67 39.901 69.12-39.9-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderZ"
      width={70}
      height={120}
      x={254}
      y={26}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.295 66.08.22 79.421-68.66-39.9-.23-79.43 68.67 39.91Z"
      />
    </mask>
    <g mask="url(#blenderZ)">
      <path
        stroke="var(--secondary)"
        strokeMiterlimit={10}
        d="m254.625 26.17 68.67 39.91.22 79.421-68.66-39.9"
      />
    </g>
    <path
      fill="var(--cube-right)"
      d="m303.294 78.36.16 55.591-48.38 27.94-.16-55.6 48.38-27.93Z"
    />
    <path
      fill="var(--cube-left)"
      d="m255.074 161.891-49.34-28.67-.16-55.6 49.34 28.67.16 55.6Z"
    />
    <path
      fill="var(--cube-top)"
      d="m254.914 106.291-49.34-28.67 48.39-27.93 49.33 28.67-48.38 27.93Z"
    />
    <path
      stroke="var(--secondary)"
      strokeMiterlimit={10}
      d="m185.735 145.691-.39-79.52 69.28-40.19"
    />
    <mask
      id="blenderA1"
      width={70}
      height={121}
      x={254}
      y={65}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.295 65.88.4 79.521-69.29 40.2-.4-79.52 69.29-40.2Z"
      />
    </mask>
    <g mask="url(#blenderA1)">
      <path
        fill="var(--secondary)"
        d="m322.304 67.621.39 77.21-67.29 39.04-.38-77.22 67.29-39.04m.99-1.73-69.28 40.19.39 79.52 69.29-40.2-.4-79.52v.01Z"
      />
    </g>
    <path
      stroke="var(--secondary)"
      strokeMiterlimit={10}
      d="m254.625 25.981 68.67 39.9.4 79.52M323.694 145.401l-69.29 40.2-68.67-39.91"
    />
    <mask
      id="blenderB1"
      width={70}
      height={120}
      x={185}
      y={66}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.405 185.601-68.67-39.91-.39-79.52 68.66 39.91.4 79.52Z"
      />
    </mask>
    <g mask="url(#blenderB1)">
      <path
        fill="var(--secondary)"
        d="m186.355 67.92 66.66 38.741.38 77.2-66.66-38.74-.38-77.2Zm-1.01-1.74.39 79.521 68.67 39.9-.39-79.52-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderC1"
      width={139}
      height={82}
      x={185}
      y={25}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.005 106.081-68.66-39.91 69.28-40.19 68.67 39.9-69.29 40.2Z"
      />
    </mask>
    <g mask="url(#blenderC1)">
      <path
        fill="var(--secondary)"
        d="m254.625 27.141 66.68 38.75-67.29 39.04-66.68-38.75 67.29-39.04Zm0-1.16-69.28 40.19 68.67 39.9 69.28-40.19-68.67-39.9Z"
      />
    </g>
    <path
      stroke="var(--secondary)"
      strokeMiterlimit={10}
      d="m185.735 145.501-.23-79.42 69.12-39.91"
    />
    <mask
      id="blenderD1"
      width={70}
      height={120}
      x={254}
      y={66}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m323.515 145.501-69.11 39.91-.23-79.43 69.12-39.9.22 79.42Z"
      />
    </mask>
    <g mask="url(#blenderD1)">
      <path
        fill="var(--secondary)"
        d="m322.295 67.811.22 77.12-67.12 38.75-.22-77.12 67.12-38.75Zm1-1.73-69.12 39.9.23 79.43 69.12-39.9-.23-79.43Z"
      />
    </g>
    <path
      stroke="var(--secondary)"
      strokeMiterlimit={10}
      d="m323.514 145.501-69.11 39.91-68.67-39.91"
    />
    <mask
      id="blenderE"
      width={70}
      height={120}
      x={185}
      y={66}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.405 185.411-68.67-39.91-.23-79.42 68.67 39.9.23 79.43Z"
      />
    </mask>
    <g mask="url(#blenderE)">
      <path
        fill="var(--secondary)"
        d="m186.515 67.821 66.66 38.74.22 77.11-66.66-38.74-.22-77.11Zm-1-1.74.23 79.43 68.67 39.9-.23-79.43-68.67-39.9Z"
      />
    </g>
    <mask
      id="blenderF"
      width={139}
      height={80}
      x={185}
      y={26}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m254.175 105.981-68.67-39.9 69.12-39.91 68.67 39.91-69.12 39.9Z"
      />
    </mask>
    <g mask="url(#blenderF)">
      <path
        fill="var(--secondary)"
        d="m254.625 27.33 66.67 38.75-67.12 38.751-66.67-38.75 67.12-38.75Zm0-1.16-69.12 39.9 68.67 39.901 69.12-39.9-68.67-39.9Z"
      />
    </g>
    <path
      stroke="var(--secondary)"
      strokeMiterlimit={10}
      d="m254.625 26.17 68.67 39.91.22 79.421"
    />
    <g filter="url(#blenderG)">
      <path
        fill="url(#blenderH)"
        fillOpacity={0.75}
        d="M93.635 207.041h-37.65c-7.41 0-14.17-6.43-15.07-14.34l-20.16-178.07C19.865 6.72 25.165.3 32.575.3h37.65c7.41 0 14.18 6.42 15.07 14.33l20.17 178.08c.89 7.9-4.41 14.34-11.83 14.34v-.01Zm-9.57-192.41c-.81-7.19-6.94-13.01-13.68-13.01h-37.65c-6.74 0-11.55 5.82-10.74 13.01l20.17 178.08c.81 7.19 6.95 13.01 13.68 13.01h37.65c6.75 0 11.55-5.82 10.74-13.01l-20.17-178.08Z"
      />
      <path
        fill="var(--primary-accent)"
        fillOpacity={0.9}
        d="M93.484 205.721h-37.65c-6.74 0-12.87-5.82-13.68-13.01l-20.17-178.08c-.81-7.19 4-13.01 10.74-13.01h37.65c6.75 0 12.87 5.82 13.68 13.01l20.171 178.08c.81 7.19-3.99 13.01-10.74 13.01Z"
      />
    </g>
    <g opacity={0.75}>
      <mask
        id="blenderI"
        width={40}
        height={32}
        x={33}
        y={18}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="white"
          d="m37.075 49.38-3.51-31.01h35.65l3.51 31.01h-35.65Z"
        />
      </mask>
      <g mask="url(#blenderI)">
        <path
          fill="#E87D0D"
          d="M59.675 43.61c-2.18 0-4.3-.89-5.91-2.45a8.524 8.524 0 0 1-1.84-2.57c-.41-.91-.64-1.89-.67-2.85-.03-.96.12-1.9.46-2.75.35-.84.84-1.58 1.47-2.18 1.26-1.23 2.98-1.89 4.85-1.89 1.87 0 3.74.65 5.29 1.87.79.63 1.45 1.36 1.97 2.17.53.83.9 1.76 1.08 2.71.19.98.18 1.96-.02 2.89-.23.96-.65 1.85-1.26 2.58-1.27 1.57-3.19 2.46-5.38 2.47h-.03m-7.32-25.24c-.5 0-1 .15-1.37.45-.75.61-.72 1.62.08 2.25l5.12 4.05h-14.24c-1.18 0-2.21.83-2.33 1.87-.11 1.05.79 1.93 2.01 1.94h7.21l-11.67 10.51-.05.04c-1.09.99-1.3 2.63-.42 3.68.45.53 1.09.8 1.75.8.66 0 1.35-.26 1.9-.79l6.33-6.12s-.01.83.05 1.32c.06.5.32 1.46.63 2.22.67 1.63 1.65 3.13 2.87 4.39 1.32 1.36 2.85 2.44 4.52 3.18 1.79.8 3.68 1.21 5.54 1.21h.12c1.86 0 3.65-.43 5.26-1.23 1.5-.75 2.79-1.83 3.8-3.2.93-1.26 1.58-2.76 1.88-4.39.29-1.58.23-3.25-.18-4.89-.39-1.56-1.07-3.08-2.02-4.42-.88-1.25-1.94-2.36-3.13-3.25l-12.23-9.15-.03-.03c-.4-.3-.91-.45-1.41-.45"
        />
        <path
          fill="white"
          d="M59.464 40.72c-1.29 0-2.6-.54-3.65-1.49-.98-.9-1.6-2.12-1.68-3.43-.07-1.28.38-2.4 1.18-3.19.82-.82 1.93-1.26 3.12-1.26h.03c1.27 0 2.49.48 3.45 1.26.97.79 1.68 1.91 1.89 3.19.21 1.3-.14 2.52-.9 3.43-.83.95-2.02 1.49-3.32 1.49h-.12Zm-1.44-11.8c-1.87 0-3.59.66-4.85 1.89a6.22 6.22 0 0 0-1.47 2.18c-.34.84-.5 1.78-.46 2.75.04.97.27 1.94.67 2.85.45.96 1.07 1.84 1.84 2.57 1.61 1.57 3.73 2.45 5.91 2.45h.03c2.19 0 4.12-.9 5.38-2.47.6-.73 1.03-1.62 1.26-2.58.21-.92.22-1.9.02-2.89-.18-.95-.56-1.88-1.08-2.71a8.626 8.626 0 0 0-1.97-2.17c-1.54-1.22-3.41-1.87-5.29-1.87"
        />
        <path
          fill="#265787"
          d="M58.435 31.36c-1.19 0-2.3.44-3.12 1.26-.8.79-1.25 1.91-1.18 3.19.08 1.3.71 2.52 1.68 3.43 1.05.95 2.36 1.49 3.65 1.49h.12c1.3 0 2.49-.54 3.32-1.49.76-.9 1.11-2.12.9-3.43-.21-1.28-.92-2.4-1.89-3.19-.95-.78-2.17-1.26-3.45-1.26h-.03Z"
        />
      </g>
    </g>
    <mask
      id="blenderJ"
      width={32}
      height={30}
      x={45}
      y={68}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m49.215 97.93-3.28-28.98h27.18l3.29 28.98h-27.19Z"
      />
    </mask>
    <g mask="url(#blenderJ)">
      <path
        fill="var(--secondary)"
        fillOpacity={0.6}
        d="M67.765 68.95h-16.48c-2.95 0-5.06 2.56-4.7 5.71l1.99 17.56c.36 3.16 3.04 5.71 6 5.71h16.48c2.96 0 5.07-2.56 4.71-5.71l-1.99-17.56c-.36-3.16-3.04-5.71-6.01-5.71Z"
      />
    </g>
    <mask
      id="blenderK"
      width={31}
      height={30}
      x={51}
      y={113}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m54.475 142.551-3.29-28.97h27.19l3.28 28.97h-27.18Z"
      />
    </mask>
    <g mask="url(#blenderK)">
      <path
        fill="var(--secondary)"
        fillOpacity={0.15}
        d="M73.025 113.581h-16.48c-2.96 0-5.07 2.56-4.71 5.7l1.99 17.56c.36 3.16 3.04 5.71 6.01 5.71h16.48c2.95 0 5.06-2.56 4.7-5.71l-1.99-17.56c-.36-3.15-3.04-5.7-6-5.7Z"
      />
    </g>
    <mask
      id="blenderL1"
      width={32}
      height={30}
      x={55}
      y={158}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m59.234 187.181-3.28-28.98h27.19l3.28 28.98h-27.19Z"
      />
    </mask>
    <g mask="url(#blenderL1)">
      <path
        fill="var(--secondary)"
        fillOpacity={0.15}
        d="M77.784 158.201h-16.48c-2.96 0-5.07 2.56-4.71 5.71l1.99 17.56c.36 3.15 3.04 5.7 6 5.7h16.48c2.95 0 5.07-2.56 4.71-5.7l-1.99-17.56c-.36-3.16-3.05-5.71-6.01-5.71"
      />
    </g>
    <path
      stroke="var(--secondary)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M349.505 10.1v26.68M349.505 36.78l23.11-13.34M349.505 36.78l23.11 13.34"
    />
    <path
      fill="var(--primary-accent)"
      d="M372.335 26.66a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      fill="var(--secondary)"
      d="M372.335 20.16c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"
    />
    <path
      fill="var(--primary-accent)"
      d="M372.335 53.46a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      fill="var(--secondary)"
      d="M372.335 46.96c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"
    />
    <path
      fill="var(--primary-accent)"
      d="M349.505 13.6a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      fill="var(--secondary)"
      d="M349.505 7.1c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"
    />
    <g opacity={0.5}>
      <path
        fill="var(--primary-accent)"
        fillOpacity={0.9}
        d="M326.685 53.46a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
      <path
        fill="var(--secondary)"
        d="M326.685 46.96c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"
      />
    </g>
    <g opacity={0.5}>
      <path
        fill="var(--primary-accent)"
        fillOpacity={0.9}
        d="M326.685 26.66a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
      <path
        fill="var(--secondary)"
        d="M326.685 20.16c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"
      />
    </g>
    <g opacity={0.5}>
      <path
        fill="var(--primary-accent)"
        fillOpacity={0.9}
        d="M349.505 66.95a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
      <path
        fill="var(--secondary)"
        d="M349.505 60.45c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Z"
      />
    </g>
    <path
      fill="var(--secondary)"
      fillOpacity={0.15}
      d="M164.885 77.98h-31.93c-3.72 0-7.1-3.22-7.55-7.19l-3.85-34.03c-.45-3.96 2.2-7.18 5.92-7.18h31.93c3.73 0 7.11 3.22 7.56 7.18l3.85 34.03c.45 3.97-2.2 7.19-5.93 7.19Z"
    />
    <g opacity={0.75}>
      <mask
        id="blenderM"
        width={25}
        height={28}
        x={136}
        y={40}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="white"
          d="m139.285 67.321-3.07-27.09h20.86l3.07 27.09h-20.86Z"
        />
      </mask>
      <g mask="url(#blenderM)">
        <path
          fill="var(--secondary)"
          d="m136.215 40.231 5.38 27.09 5.64-10.27 11.61-1.14-22.63-15.68Z"
        />
      </g>
    </g>
    <mask
      id="blenderN1"
      width={50}
      height={23}
      x={142}
      y={188}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="white"
        d="m144.605 210.401-2.47-21.85h47.32l2.48 21.85h-47.33Z"
      />
    </mask>
    <g fill="var(--secondary)" fillOpacity={0.3} mask="url(#blenderN1)">
      <path d="M157.545 188.811c-.44 0-.89.12-1.29.39l-11.83 7.83c-1.66 1.09-1.35 3.82.56 4.91l13.6 7.82c.46.27.93.39 1.38.39 1.39 0 2.53-1.18 2.34-2.84l-1.77-15.66c-.19-1.66-1.6-2.85-2.99-2.85M173.435 188.551c-1.22 0-2.23 1.04-2.06 2.5l1.91 16.86c.16 1.45 1.4 2.49 2.63 2.49.39 0 .78-.11 1.13-.34l12.74-8.43c1.45-.96 1.18-3.36-.49-4.31l-14.65-8.43c-.4-.23-.81-.34-1.2-.34" />
    </g>
    <defs>
      <linearGradient
        id="blenderL"
        x1={417.029}
        x2={254.222}
        y1={246.591}
        y2={-82.001}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary-accent)" />
        <stop offset={1} stopColor="var(--primary-accent)" stopOpacity={0.25} />
      </linearGradient>
      <linearGradient
        id="blenderN"
        x1={395.214}
        x2={255.571}
        y1={226.281}
        y2={-16.528}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--secondary)" stopOpacity={0.25} />
        <stop offset={1} stopColor="var(--secondary)" />
      </linearGradient>
      <linearGradient
        id="blenderH"
        x1={105.562}
        x2={-39.674}
        y1={207.051}
        y2={147.659}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--secondary)" stopOpacity={0.25} />
        <stop offset={1} stopColor="var(--secondary)" />
      </linearGradient>
      <filter
        id="blenderG"
        width={104.905}
        height={226.75}
        x={10.657}
        y={-9.699}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1015_80824"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1015_80824"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export { SvgComponent as Blender };
