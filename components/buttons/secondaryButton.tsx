import React, {FC} from 'react';
import Link from "next/link";

interface SecondaryButtonProps {
    href: string
    text: string
};
const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
    return (
        <Link className={"flex justify-end py-2 px-3 rounded-lg transition-colors hover:bg-secondary-hover "}
              href={props.href}>
            <p>{props.text}</p>
        </Link>
    );
};


export default SecondaryButton;