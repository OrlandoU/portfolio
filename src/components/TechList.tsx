import React,{ ReactElement } from 'react'
export default function TechList(props: { children?: ReactElement[] | ReactElement | undefined, header?: string}): ReactElement {
    return (
        <div className='flex flex-col items-center gap-6 min-w-[200px] text-gray-600'>
            <h2 className='text-xl font-bold border-b-[2px] border-gray-400 w-full p-2'>{props.header}</h2>
            <div className='flex flex-wrap text-6xl gap-6 drop-shadow-md'>
                {props.children}
            </div>
        </div>
    )
}