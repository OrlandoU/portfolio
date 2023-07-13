import { Octokit } from 'octokit'
import React from 'react'
import { ReactElement, useEffect, useState } from 'react'



export default function GithubRepos(): ReactElement {

    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        try {
            const response: Response = await fetch('https://api.github.com/users/OrlandoU/repos', {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': 'Bearer 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',
                    'X-GitHub-Api-Version': '2022-11-28',
                }
            })
            const data = await response.json()
            console.log(response)
            console.log(data)
        } catch (error) {
            console.log('Error loading repos')
        }
    }

    useEffect(()=>{
        fetchRepos()
    }, [])

    return (
        <section id='repositories'>

        </section>
    )
}