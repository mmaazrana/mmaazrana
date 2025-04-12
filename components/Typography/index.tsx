import React, { FC } from 'react';
import { archivo, nunito } from '@/helpers/fonts';

import { ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums';

interface TypographyProps {
  children: string;
  type: TextTypes;
  color?: ColorTypes;
  weight?: WeightTypes;
  className?: string;
  underline?: boolean;
}

const Typography: FC<TypographyProps> = ({
  children,
  type,
  color = ColorTypes.primary,
  weight = WeightTypes.regular,
  className,
  underline = false,
}) => {
  const sizeClasses = {
    '9xl': '2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl',
    '8xl': '2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl',
    '7xl': '2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl',
    '6xl': '2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl',
    '5xl': '2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl',
    '4xl': '2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg',
    '3xl': '2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base',
    '2xl': '2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm',
    xl: '2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs',
    lg: '2xl:text-lg xl:text-base lg:text-sm text-xs',
    base: '2xl:text-base xl:text-sm text-xs',
    sm: '2xl:text-sm text-xs',
    xs: 'text-xs',
  };

  // const colorClasses = {
  //   primary: "text-primary",
  //   "primary-accent": "text-primary-accent",
  //   "primary-hover": "text-primary-hover",
  //   secondary: "text-secondary",
  //   "secondary-hover": "text-secondary-hover",
  //   transparent: "text-transparent",
  //   error: "text-error",
  //   golden: "text-golden",
  // };

  const weightClasses = {
    black: `font-black ${archivo.className}`,
    'extra-bold': `font-extrabold ${archivo.className}`,
    bold: `font-bold ${archivo.className}`,
    'semi-bold': `font-semibold ${archivo.className}`,
    medium: `font-medium ${nunito.className}`,
    regular: `font-regular ${nunito.className}`,
    light: `font-light ${nunito.className}`,
    'extra-light': `font-extralight ${nunito.className}`,
  };

  const dynamicClasses = [
    sizeClasses[type],
    weightClasses[weight],
    underline ? 'underline' : '',
    'text-' + color,
    'z-[1]',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={dynamicClasses}>
      {children.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== children.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};

export default Typography;
