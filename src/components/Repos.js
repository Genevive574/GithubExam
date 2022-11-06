import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import {Helmet} from "react-helmet-async";


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
         <Helmet>
                <title>Repos</title>
                <meta name="description" content="My Repos" />
                <meta
                    name="keywords"
                    content="react-helmet, altschool africa, github repos, github api"
                />
            </Helmet>
      {
        loading ? Repos
        .slice(pagesVisited, pagesVisited + repoPerpage)
        .map((Repo) => {
            return (
                <Link to={`/repos/${Repo.name}`}>
                <div class="wrapper">
                  <div class="card_item">
                    <div class="card_top">
                      <h1>{Repo.name}</h1>

                      <div class="card_buttom">
                        <p class="id">id: {Repo.id}</p>
                        <p class="desc">description: {Repo.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
            )
        }) : <p id="wait">Please wait...</p>

        
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
