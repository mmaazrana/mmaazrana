'use client';

import React, { cloneElement, FC, ReactElement } from 'react';
import Typography from '@/components/Typography';

import { ButtonTypes, ColorTypes, TextTypes, WeightTypes } from '@/helpers/enums';

interface ButtonProps {
  type: ButtonTypes;
  text: string;
  textSize?: TextTypes;
  textColor?: ColorTypes;
  borderColor?: ColorTypes;
  textWeight?: WeightTypes;
  size?: 'large' | 'medium' | 'small';
  loading?: boolean;
  width?: string;
  height?: string;
  borderWidth?: number;
  rightIcon?: ReactElement<{ className?: string }>;
  leftIcon?: ReactElement<{ className?: string }>;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  type = ButtonTypes.primary,
  textColor = type === ButtonTypes.primary ? ColorTypes.primaryAccent : ColorTypes.primary,
  text,
  textSize = TextTypes.xl,
  leftIcon,
  rightIcon,
  borderColor = ColorTypes.transparent,
  borderWidth = 0,
  textWeight = WeightTypes.regular,
  onClick,
  className,
  textClassName,
  disabled = false,
}) => {
  const typeClasses: { [index: string]: any } = {
    primary: `flex py-2 xl:py-3 px-10 md:px-4 xl:px-6 gap-3 items-center rounded-full bg-primary hover:bg-primary-hover ${leftIcon ? 'justify-start' : rightIcon ? 'justify-end' : 'justify-center'} ${disabled && ''}`,
    secondary: `flex py-2 xl:py-3 gap-2 items-center rounded-full hover:bg-secondary-hover ${leftIcon ? 'justify-start pr-4 xl:pr-5 pl-3 xl:pl-4' : rightIcon ? 'justify-end pl-4 xl:pl-5 pr-2 xl:pr-3' : 'justify-center px-10 md:px-4 xl:px-6'} ${disabled && ''}`,
    tertiary: `flex rounded-full gap-4 !text-error hover:text-primary-hover gap-2 items-center ${leftIcon ? 'justify-start' : rightIcon ? 'justify-end' : 'justify-center'} ${disabled && ''}`,
    error: `bg-error ${disabled && ''}`,
  };

  const textClasses: { [index: string]: any } = {
    primary: ``,
    secondary: ``,
    tertiary: `hover:text-primary-hover transition-colors duration-250`,
    error: ``,
  };

  const borderColorClasses = {
    primary: 'border-primary hover:border-primary-hover',
    'primary-accent': 'border-primary-accent',
    'primary-hover': 'border-primary-hover',
    secondary: 'border-secondary hover:border-secondary-hover',
    'secondary-hover': 'border-secondary-hover',
    transparent: 'border-transparent',
    error: 'border-error',
    golden: 'border-golden',
  };

  const dynamicClasses = [
    typeClasses[type],
    borderColorClasses[borderColor],
    `border-[${borderWidth}]`,
    'transition-all duration-250',
    disabled ? 'cursor-disabled' : onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={dynamicClasses} onClick={() => onClick && onClick()}>
      {leftIcon && (
        <div>
          {cloneElement(leftIcon, {
            className: `${type === 'primary' ? 'fill-primary-accent w-[14px] sm:w-[16px] md:w-[18px] lg:w-[20px] xl:w-6 h-[14px] sm:h-[16px] md:h-[18px] lg:h-[20px] xl:h-6' : 'fill-primary  w-[14px] md:w-[16px] xl:w-[18px] h-[14px] md:h-[16px] xl:h-[18px]'} ${leftIcon.props.className}`,
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
  );
};

export default Button;
