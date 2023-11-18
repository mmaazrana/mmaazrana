import React, {FC} from 'react';
import Link from "next/link";

interface TertiaryButtonProps {
    href: string
    text: string
}

const TertiaryButton: FC<TertiaryButtonProps> = (props) => {
    return (
        <Link className={"text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl flex justify-end transition-colors font-semibold hover:text-primary-hover "}
              href={props.href}>
            <p>{props.text}</p>
        </Link>
    );
};

export default TertiaryButton;