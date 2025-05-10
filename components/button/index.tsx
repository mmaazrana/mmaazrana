'use client'

import React, { cloneElement, FC, ReactElement } from 'react'
import Typography from '@/components/Typography'

import { ButtonTypes, ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums'

interface ButtonProps {
  type: ButtonTypes
  text: string
  textSize?: TextTypes
  textColor?: ColorTypes
  borderColor?: ColorTypes
  textWeight?: WeightTypes
  size?: 'large' | 'medium' | 'small'
  loading?: boolean
  width?: string
  height?: string
  borderWidth?: number
  rightIcon?: ReactElement<{ className?: string }>
  leftIcon?: ReactElement<{ className?: string }>
  onClick?: () => void
  className?: string
  textClassName?: string
  disabled?: boolean
  defaultIconColor?: boolean
}

const Button: FC<ButtonProps> = ({
  type = 'primary',
  textColor = type === 'primary' ? 'primary-accent' : 'primary',
  text,
  textSize = 'xl',
  leftIcon,
  rightIcon,
  borderColor = 'transparent',
  borderWidth = 0,
  textWeight = 'light',
  onClick,
  className,
  textClassName,
  disabled = false,
  defaultIconColor = false,
}) => {
  const typeClasses: { [index: string]: any } = {
    primary: `flex py-xs px-m gap-2xs items-center rounded-full bg-primary hover:bg-primary-hover ${
      leftIcon ? 'justify-start'
      : rightIcon ? 'justify-end'
      : 'justify-center'
    } ${disabled && ''}`,
    secondary: `flex py-xs px-m gap-2xs items-center rounded-full hover:bg-secondary-hover ${
      leftIcon ? 'justify-start pr-m pl-xs'
      : rightIcon ? 'justify-end pl-m pr-xs'
      : 'justify-center'
    } ${disabled && ''}`,
    tertiary: `flex gap-2xs rounded-full !text-error hover:text-primary-hover items-center ${
      leftIcon ? 'justify-start'
      : rightIcon ? 'justify-end'
      : 'justify-center'
    } ${disabled && ''}`,
    error: `bg-error ${disabled && ''}`,
  }

  const textClasses: { [index: string]: any } = {
    primary: `mt-[0.05em]`,
    secondary: `mt-[0.025em]`,
    tertiary: `hover:text-primary-hover transition-colors duration-250`,
    error: `mt-[0.025em]`,
  }

  const borderColorClasses = {
    primary: 'border-primary hover:border-primary-hover',
    'primary-accent': 'border-primary-accent',
    'primary-hover': 'border-primary-hover',
    secondary: 'border-secondary hover:border-secondary-hover',
    'secondary-hover': 'border-secondary-hover',
    transparent: 'border-transparent',
    error: 'border-error',
    golden: 'border-golden',
  }

  const dynamicClasses = [
    typeClasses[type],
    borderColorClasses[borderColor],
    `border-[${borderWidth}]`,
    'transition-all duration-250 relative',
    disabled ? 'cursor-disabled'
    : onClick ? 'cursor-pointer'
    : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={dynamicClasses} onClick={() => onClick && onClick()}>
      {leftIcon && (
        <div>
          {cloneElement(leftIcon, {
            className: `${
              !defaultIconColor ?
                type === 'primary' ?
                  'fill-primary-accent'
                : 'fill-primary'
              : ''
            } ${leftIcon.props.className} w-s h-s mb-[0.025em]`,
          })}
        </div>
      )}
      <Typography
        type={textSize}
        weight={textWeight}
        color={textColor}
        className={`!leading-tight ${textClasses[type]} ${textClassName}`}
      >
        {text}
      </Typography>
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  )
}

export default Button
