import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './styles';

import api from '../../services/api'


export default function Repositorio({match}) {

  const [respositorio, setRepositorio] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)


  const {repositorio} = useParams()

    useEffect(() =>{      

      async function load() {

        const nomeRepo = decodeURIComponent(repositorio)

        const [repositorioData, issuesData] = await Promise.all([
          api.get(`/repos/${nomeRepo}`),
          api.get(`/repos/${nomeRepo}/issues`, {
            params: {
              state: 'open',
              per_page: 5
            }
          })
        ])

        setRepositorio(repositorioData.data)
        setIssues(issuesData.data)
        setLoading(false)

      }

      load()
    })

    

    return (
      <div>
        <Container>

          
          
        </Container>
      </div>
    );
  }
    