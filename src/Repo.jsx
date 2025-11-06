import './Repo.css'

export default function Repo({json_data}) {
    return <>
        <code>
            {JSON.stringify(json_data)}
        </code>
    </>
}