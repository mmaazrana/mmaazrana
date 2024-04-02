import React, {FC} from 'react';
import Link from "next/link";

interface PrimaryButtonProps {
    href: string
    text: string
}

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
    return (<Link
            className={"text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl flex justify-end  py-2 px-10 xl:py-3 xl:px-6  md:px-4 rounded-lg bg-primary text-primary-accent font-medium hover:bg-primary-hover "}
            href={props.href}>
            <p>{props.text}</p>
        </Link>
    );
};

export default PrimaryButton;