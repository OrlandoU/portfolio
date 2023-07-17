import Repository, { LanguageColors } from 'global'
import React, { useState, useEffect, useMemo } from 'react'
import { Fade } from 'react-reveal';

interface RepoProps extends LanguageColors, Repository {
    [key: string]: any
}


export default function Repo(props: RepoProps): JSX.Element {
    const date = useMemo(() => {
        const date = new Date(props.updated_at);
        const day = String(date.getDate()).padStart(2, '0');
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
        const year = date.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;

        return formattedDate
    }, [props.updated_at])

    const [languages, setLanguages] = useState<{ [key: string]: number }>({})

    const fetchLanguages = async () => {
        try {
            const response: Response = await fetch(props.languages_url, {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': 'Bearer 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',
                    'X-GitHub-Api-Version': '2022-11-28',
                }
            })
            if (response.ok) {
                const data = await response.json()
                calcPorcentage(data)
                setLanguages(data)
            }

        } catch (error) {
            console.error('Error loading repos', error)
        }
    }

    const calcPorcentage = (languages: { [key: string]: number }) => {
        let total = Object.values(languages).reduce((acc, crr) => acc + crr)
        Object.keys(languages).forEach((lan: string) => {
            languages[lan] = +((languages[lan] / total) * 100).toFixed(1)
        })
    }

    useEffect(() => {
        fetchLanguages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Fade up distance='100px' duration={300}>
            <div className='p-8 md:p-12 rounded-md relative md:min-w-[420px] shadow flex-1 bg-[#1b1f23] text-white pb-2 overflow-hidden flex flex-col'>
                <span className='bg-white rounded-full h-[450px] w-[450px] -z-1 absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2'></span>
                <header className=''>
                    <h2 className='text-sm text-gray-400'>{props.full_name}</h2>
                    <h3 className='mb-4 text-xl capitalize'>{props.name}</h3>
                </header>
                <p className='flex gap-2'>Last updated <span>·</span> <span className='text-gray-400'>{date}</span></p>
                <p className='mb-2 flex gap-2'>Size <span>·</span> <span className='text-gray-400'>{props.size}kb</span></p>
                <div className=' border-gray-600 border-2 rounded p-4 m-1 bg-[#1b1f23] z-10 relative'>
                    <h3 className='mb-2 text-center text-gray-200'>Language Usage Breakdown</h3>
                    <div className='bg-gray-500 h-2 w-full rounded-[50px] flex overflow-hidden mb-2'>
                        {Object.keys(languages).map((lan: string) =>
                            <div style={{ backgroundColor: props[lan], width: languages[lan] + '%' }} key={lan} className={`h-full`}>
                            </div>
                        )}
                    </div>
                    <ul className='flex flex-wrap gap-x-3'>
                        {Object.keys(languages).map((lan: string) =>
                            <li key={lan}>
                                <h5 className='flex items-center gap-1 text-sm font-bold'>
                                    <span style={{ backgroundColor: props[lan] }} className={`w-2 h-2 rounded-full`}></span>
                                    <span className='pr-0'>{lan}</span>
                                    <span className='text-gray-400'>{languages[lan] + '%'}</span>
                                </h5>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='flex-1 flex justify-end items-end'>
                    <a href={props.html_url} target='__blank' className='hover:translate-x-2 pt-8 relative z-10 gap-2 flex items-center pb-4 justify-end w-fit ml-auto p-5 py-1 pr-2 group rounded transition bg-white  text-black'>
                        <span className='pb-1'>Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 fill-black transition-all'>
                            <title>{props.html_url}</title>
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </Fade>
    )
}