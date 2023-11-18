import React, {FC} from 'react';
import Link from "next/link";

interface SecondaryButtonProps {
    href: string
    text: string
};
const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
    return (
        <Link className={"text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl flex justify-end py-2 px-3 xl:py-3 xl:px-6  rounded-lg transition-colors hover:bg-secondary-hover "}
              href={props.href}>
            <p>{props.text}</p>
        </Link>
    );
};


export default SecondaryButton;