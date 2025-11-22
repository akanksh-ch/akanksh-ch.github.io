import './Repo.css'

export default function Repo({json_data}) {
    return <div>
        <a href={json_data.html_url}>{json_data.name}</a>
        <p>{json_data.description}</p>
    </div>
}