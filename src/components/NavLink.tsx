import React, { ReactNode } from 'react'
export default function NavLink(props: {href?: string, children?: ReactNode, top?: boolean}): JSX.Element {
    return (
        <li className="relative px-3 py-1 flex justify-center group cursor-pointer">
            <span className={"absolute h-px w-full bottom-0 scale-x-0 group-hover:scale-x-100 transition-all " + (props.top ? 'bg-white' : 'bg-slate-500')}></span>
            <a href={props.href} aria-label="Scroll to About section">{props.children}</a>
        </li>
    )
}