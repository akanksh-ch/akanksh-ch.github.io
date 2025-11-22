import './Repos.css'
import Repo from './Repo'

 let repos = await fetch('https://api.github.com/users/akanksh-ch/repos').then(data => data.json())

export default function Repos() {
    return <>
    <ul className='repos'>
        {repos.map(repo => (<li key={repo.id}>
            <Repo json_data={repo} />
        </li>))}
    </ul> 
    </>
}