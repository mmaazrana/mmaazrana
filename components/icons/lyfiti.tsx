import * as React from "react";
import { SVGProps } from "react";

const Lyfiti = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 32" {...props}>
    <mask
      id="b"
      width={95}
      height={32}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M94.438 0H.065v32h94.373V0Z" />
    </mask>
    <g mask="url(#b)">
      <path
        d="M37.065.456h2.585v24.289h-2.585V.456ZM57.9 9.13 50.5 32h-2.747l2.364-7.255H47.91l-5.015-15.62h2.775l4.699 15.427h.066l4.699-15.427 2.766.004ZM75.124 24.745H72.54V11.053h-7.984v13.692h-2.586V11.053h-2.524V9.129h4.797v-.061C58.101 5.286 64.411-2.41 70.236.74l-.378 1.985C64.571.744 63.996 5.13 64.366 9.13h10.758v15.616Zm0-22.398V5.66H72.54V2.347h2.585ZM83.396 11.053c.48 3.518-2.266 14.715 5.077 11.357v2.018c-9.69 3.766-7.499-7.777-7.668-13.375h-2.524V9.129h2.714V3.7h2.59c.201 2.13-.411 4.353-2.467 5.364v.062h7.601v1.924l-5.323.004ZM91.852 2.347h2.586V5.66h-2.586V2.347Zm0 6.782h2.586v15.62h-2.586V9.13ZM24.435 9.865c.905-2.877.63-5.253-.78-6.663-1.41-1.41-3.865-1.644-6.66-.777A12.573 12.573 0 0 0 .162 12.615a12.568 12.568 0 0 0 .675 5.952c-.9 2.877-.62 5.274.785 6.675a4.865 4.865 0 0 0 3.569 1.3 10.553 10.553 0 0 0 3.095-.519A12.576 12.576 0 0 0 24.435 9.865Zm-11.798 15.46c-.7-.001-1.398-.069-2.085-.202a27.887 27.887 0 0 0 7.507-5.475 30.7 30.7 0 0 0 3.762-4.522c.046-.854-.008-1.71-.16-2.552a27.905 27.905 0 0 1-4.646 6.05C11.609 24.01 5.039 26.57 2.663 24.198c-.744-.744-1.015-1.956-.801-3.498a12.536 12.536 0 0 0 2.252 2.77 6.356 6.356 0 0 0 2.257-.086A11.098 11.098 0 0 1 14.73 3.33a27.836 27.836 0 0 0-7.51 5.48 30.56 30.56 0 0 0-3.93 4.784c-.011.829.07 1.656.242 2.466a27.652 27.652 0 0 1 4.731-6.194c5.406-5.422 11.976-7.983 14.352-5.61.744.747 1.015 1.96.802 3.497a12.511 12.511 0 0 0-2.759-3.206c-.608.127-1.208.291-1.796.493a11.098 11.098 0 0 1-6.224 20.285Z"
        fill="white"
      />
    </g>
  </svg>
);
export default Lyfiti;
