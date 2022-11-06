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
        loading ?
        <div class="nested_container">
          <div class="school">
            <p id="name"><strong>{Repo.name}</strong></p>
            <p><strong>ID</strong>: {Repo.id}</p>
            <p><strong>Description</strong>: {Repo.description}</p>
            <p><strong>Fullname</strong>: {Repo.full_name}</p>
            <p><strong>Visibility</strong>: {Repo.visibility}
            </p>
          </div>
        </div> : 
        <p>please wait..</p>
      }
    </div>
  )
}

export default NestedRoute
