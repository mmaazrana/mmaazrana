import React, { FC } from 'react'
import { archivo, nunito } from '@/helpers/fonts'

import { ColorTypes, LeadingTypes, TextTypes, WeightTypes } from '@/helpers/enums'

// Define allowed tags explicitly
type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

interface TypographyProps {
  children: React.ReactNode
  type: TextTypes
  color?: ColorTypes
  weight?: WeightTypes
  leading?: LeadingTypes
  className?: string
  underline?: boolean
  tag?: AllowedTags
}

const Typography: FC<TypographyProps> = ({
  children,
  type,
  color = 'primary',
  weight = 'regular',
  leading = 'default',
  className,
  underline = false,
  tag: Tag = 'p',
}) => {
  const sizeClasses = {
    '10xl': 'text-step-10',
    '9xl': 'text-step-9',
    '8xl': 'text-step-8',
    '7xl': 'text-step-7',
    '6xl': 'text-step-6',
    '5xl': 'text-step-5',
    '4xl': 'text-step-4',
    '3xl': 'text-step-3',
    '2xl': 'text-step-2',
    xl: 'text-step-1',
    lg: 'text-step-0',
    base: 'text-step--1',
    sm: 'text-step--2',
    xs: 'text-step--3',
    xxs: 'text-step--4',
  }

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

  const leadingClasses = {
    flat: 'leading-none',
    default: 'leading-[1.25]',
    light: 'leading-[1.35]',
    medium: 'leading-[1.45]',
    prose: 'leading-[1.55]',
    max: 'leading-[1.65]',
  }

  const weightClasses = {
    black: `font-[1000] tracking-[0.035rem] ${archivo.className}`,
    'extra-bold': `font-[825] tracking-[0.03rem] ${archivo.className}`,
    bold: `font-[725] tracking-[0.025rem] ${archivo.className}`,
    'semi-bold': `font-[625] tracking-[0.02rem] ${archivo.className}`,
    medium: `font-[575] tracking-[0.0175rem] ${nunito.className}`,
    regular: `font-[375] sm:font-[325] lg:font-[275] tracking-[0.015rem] ${nunito.className}`,
    light: `font-[275] sm:font-[225] lg:font-[175] tracking-[0.0125rem] ${nunito.className}`,
    'extra-light': `font-[175] sm:font-[125] lg:font-[75] tracking-[0.01rem] ${nunito.className}`,
  }

  const dynamicClasses = [
    sizeClasses[type],
    weightClasses[weight],
    leadingClasses[leading],
    underline ? 'underline' : '',
    'text-' + color,
    'z-1',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const processedChildren =
    typeof children === 'string' ?
      children.split('\n').map((line, index, arr) => (
        <React.Fragment key={index}>
          {line}
          {index !== arr.length - 1 && <br />}
        </React.Fragment>
      ))
    : children

  return <Tag className={dynamicClasses}>{processedChildren}</Tag>
}

export default Typography
