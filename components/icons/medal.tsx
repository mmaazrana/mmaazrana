import * as React from 'react';
import { SVGProps } from 'react';

const Medal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" {...props}>
    <path d="m14-.004 3.107 6.498L23.9 4.096l-2.398 6.792L28 13.996l-6.498 3.107 2.398 6.792-6.793-2.398L14 27.996l-3.107-6.498L4.1 23.894l2.398-6.792L0 13.996l6.498-3.108-2.397-6.792 6.792 2.398L14-.004Z" />
  </svg>
);
export default Medal;
