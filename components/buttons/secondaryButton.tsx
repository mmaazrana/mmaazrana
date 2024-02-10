import React, {FC} from 'react';
import Link from "next/link";

interface SecondaryButtonProps {
    href: string
    text: string
    className?: string
};
const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
    return (
        <Link className={`text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl flex justify-end py-2 px-3 xl:py-3 xl:px-6 md:px-4 rounded-lg transition-colors hover:bg-secondary-hover ${props.className} `}
              href={props.href}>
            <p>{props.text}</p>
        </Link>
    );
};


export default SecondaryButton;