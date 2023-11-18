import React, {FC} from 'react';
import Link from "next/link";

interface TertiaryButtonProps {
    href: string
    text: string
}

const TertiaryButton: FC<TertiaryButtonProps> = (props) => {
    return (
        <Link className={"flex justify-end py-2 px-3 rounded-lg transition-colors hover:bg-gray-100 "}
              href={props.href}>
            <p>{props.text}</p>
        </Link>
    );
};

export default TertiaryButton;