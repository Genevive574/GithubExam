import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'


function Repos() {
    const [Repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageNumber, setNumber] = useState(0)
    const repoPerpage = 5
    const pagesVisited = pageNumber * repoPerpage
    useEffect(() => {
        axios.get(`https://api.github.com/users/Genevive574/repos`).then((response) => {
            setRepos(response.data)  
            setLoading(true)
        })
    },[])

    const pageCount = Math.ceil(Repos.length / repoPerpage)
    function Changepage({selected}) {
        setNumber(selected)
    
    }
  return (
    <div>
      {
        loading ? Repos
        .slice(pagesVisited, pagesVisited + repoPerpage)
        .map((Repo) => {
            return (
                <Link to={`/repos/${Repo.name}`}><h1>{Repo.name}</h1></Link>
            )
        }) : <p>Please wait...</p>
      }
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={Changepage}
      containerClassName={"paginationBtns"}
      previousLinkClassName={"previousBtn"}
      nextLinkClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
    </div>
  )
}

export default Repos
