import React from 'react'
import { ReactElement, useEffect, useState } from 'react'
import Repo from './Repo'
import Repository from 'global'

function useRepo(): [Repository[], () => void, boolean] {
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [repos, setRepos] = useState<Repository[]>([])

    const fetchRepos = async (page: number) => {
        try {
            const response: Response = await fetch(`https://api.github.com/users/OrlandoU/repos?per_page=2&page=${page}&sort=updated`, {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': 'Bearer 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',
                    'X-GitHub-Api-Version': '2022-11-28',
                }
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setRepos(prev => [...prev, ...data])
                setLoading(false)
            } else{
                setLoading(false)
            }
        } catch (error) {
            console.error('Error loading repos', error)
        }
    }

    const loadMoreRepos = () => {
        if(!loading){
            setLoading(true)
            fetchRepos(page + 1)
        }
        setPage(prev => prev + 1)
    }

    useEffect(() => {
        fetchRepos(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return [repos, loadMoreRepos, loading]
}

export default function GithubRepos(): ReactElement {
    const [repos, loadMoreRepos, loading] = useRepo()

    const languageColors = {
        JavaScript: '#f1e05a',
        TypeScript: '#2b7489',
        CSS: '#563d7c',
        HTML: '#e34c26',
        Python: '#3572A5',
        Java: '#b07219',
        C: '#555555',
        'C++': '#f34b7d',
        Ruby: '#701516',
        Go: '#00ADD8',
        Swift: '#ffac45',
        Rust: '#dea584',
        PHP: '#4F5D95',
        Shell: '#89e051',
        Perl: '#0298c3',
        Scala: '#c22d40',
        Kotlin: '#F18E33',
        'Objective-C': '#438eff',
        'C#': '#178600',
        R: '#198ce7',
        'Visual Basic': '#945db7',
        MATLAB: '#e16737',
        Lua: '#000080',
        'TypeScript(JSX)': '#2b7489',
        'CoffeeScript': '#244776',
        'Vue.js': '#2c3e50',
        'Angular': '#b52e31',
        'ShellSession': '#89e051',
        PowerShell: '#012456',
        Batchfile: '#C1F12E',
        Groovy: '#e69f56',
        Pug: '#a86454',
        Dockerfile: '#384d54',
        SCSS: '#c6538c', // Color for SCSS
    };



    const fetchLimit = async () => {
        try {
            const response: Response = await fetch('https://api.github.com/rate_limit', {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': 'Bearer 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',
                    'X-GitHub-Api-Version': '2022-11-28',
                }
            })
            if (response.ok) {
                const data = await response.json();
                console.log(data)
            }
        } catch (error) {
            console.error('Error loading repos', error)
        }
    }

    useEffect(() => {
        fetchLimit()
    }, [])

    console.log(loading)

    return (
        <section id='repositories' className='relative z-10 mt-[126px] p-2 py-6 md:py-24 bg-white'>
            <div className='md:max-w-[75vw] flex flex-col m-auto'>
                <h1 className='text-5xl text-white mb-4' style={{ textShadow: '1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black' }}>Github Repositories</h1>
                <div className='flex gap-12 flex-wrap flex-col md:flex-row'>
                    {repos.map((repo: Repository) =>
                        <Repo {...repo} key={repo.id} {...languageColors} />
                    )}
                </div>
                <button className='mx-auto my-8 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500 relative' onClick={loadMoreRepos}>
                    {!loading ? 'Load more' : <span className='flex gap-2 items-center'>Loading <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 fill-white animate-spin'><title>loading</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg></span>}
                </button>
            </div>
        </section>
    )
}

