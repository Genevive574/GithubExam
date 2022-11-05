import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function NestedRoute() {
    const [Repo, setRepo] = useState({})
    const [loading, setLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
     axios.get(`https://api.github.com/repos/Genevive574/${params.reponame}`).then((response) => {
        setRepo(response.data)
        setLoading(true)
     })
    },[params])
  return (
    <div className='card'>
      {
        loading ? <div>
            <p>name: {Repo.name}</p>
            <p>id: {Repo.id}</p>
            <p>description: {Repo.description}</p>
            <p>fullname: {Repo.name}</p>
            <p>visibility: {Repo.name}</p>
        </div> : <p>please wait..</p>
      }
    </div>
  )
}

export default NestedRoute
