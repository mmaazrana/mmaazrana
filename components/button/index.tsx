import React, { cloneElement, FC } from "react";
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
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
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
  textClassName,
  disabled = false,
}) => {
  const typeClasses: { [index: string]: any } = {
    primary: `flex py-2 xl:py-3 px-10 md:px-4 xl:px-6 gap-3 items-center rounded-lg bg-primary hover:bg-primary-hover ${leftIcon ? "justify-start" : rightIcon ? "justify-end" : "justify-center"} ${disabled && ""}`,
    secondary: `flex py-2 xl:py-3 gap-2 items-center rounded-lg hover:bg-secondary-hover ${leftIcon ? "justify-start px-3 xl:px-4" : rightIcon ? "justify-end px-3 xl:px-4" : "justify-center px-10 md:px-4 xl:px-6"} ${disabled && ""}`,
    tertiary: `flex rounded-lg gap-4 hover:text-primary-hover gap-2 items-center ${leftIcon ? "justify-start" : rightIcon ? "justify-end" : "justify-center"} ${disabled && ""}`,
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
      {leftIcon && (
        <div>
          {cloneElement(leftIcon, {
            className: `${type === "primary" ? "fill-primary-accent w-6 h-6" : "fill-primary w-[18px] h-[18px]"} ${leftIcon.props.className}`,
          })}
        </div>
      )}
      <Typography
        type={textSize}
        weight={textWeight}
        color={textColor}
        className={textClassName}
      >
        {text}
      </Typography>
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};

export default Button;
