import React, { FC } from "react";
import Typography from "@/components/Typography";

import {
  ButtonTypes,
  ColorTypes,
  TextTypes,
  WeightTypes,
} from "@/helpers/enums";

interface ButtonProps {
  type: ButtonTypes;
  text: string;
  textSize?: TextTypes;
  textColor?: ColorTypes;
  borderColor?: ColorTypes;
  textWeight?: WeightTypes;
  size?: "large" | "medium" | "small";
  loading?: boolean;
  width?: string;
  height?: string;
  borderWidth?: number;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  type = ButtonTypes.primary,
  textColor = type === ButtonTypes.primary
    ? ColorTypes.primaryAccent
    : ColorTypes.primary,
  text,
  textSize = TextTypes.xl,
  size,
  leftIcon,
  rightIcon,
  borderColor = ColorTypes.transparent,
  borderWidth = 0,
  textWeight = WeightTypes.regular,
  loading = false,
  height,
  width,
  onClick,
  className,
  disabled = false,
}) => {
  const typeClasses: { [index: string]: any } = {
    primary: `flex justify-center py-2 px-10 xl:py-3 xl:px-6 md:px-4 rounded-lg bg-primary hover:bg-primary-hover ${disabled && ""}`,
    secondary: `flex justify-center py-2 px-10 xl:py-3 xl:px-6 md:px-4 rounded-lg hover:bg-secondary-hover ${disabled && ""}`,
    tertiary: `flex justify-center rounded-lg hover:text-primary-hover ${disabled && ""}`,
    error: `bg-error ${disabled && ""}`,
  };

  const borderColorClasses = {
    primary: "border-primary hover:border-primary-hover",
    "primary-accent": "border-primary-accent",
    "primary-hover": "border-primary-hover",
    secondary: "border-secondary hover:border-secondary-hover",
    "secondary-hover": "border-secondary-hover",
    transparent: "border-transparent",
    error: "border-error",
  };

  const dynamicClasses = [
    typeClasses[type],
    borderColorClasses[borderColor],
    `border-[${borderWidth}]`,
    "transition-all duration-250",
    disabled ? "cursor-disabled" : onClick ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={dynamicClasses} onClick={() => onClick && onClick()}>
      {leftIcon && leftIcon}
      <Typography type={textSize} weight={textWeight} color={textColor}>
        {text}
      </Typography>
      {rightIcon && rightIcon}
    </div>
  );
};

export default Button;
