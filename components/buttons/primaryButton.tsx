import React, {FC} from 'react';
import Link from "next/link";

interface PrimaryButtonProps {
    href: string
    text: string
}

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
    return (<Link
            className={"flex justify-end py-2 px-10  md:px-4 md:ml-1 rounded-lg bg-primary text-primary-accent font-semibold hover:bg-primary-hover "}
            href={props.href}>
            <p>{props.text}</p>
        </Link>
    );
};

export default PrimaryButton;