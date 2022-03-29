import React, { useCallback, useState } from 'react'
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'

import { Container, Form, SubmitButton, List, DeleteRepo } from './styles'

import api from '../../services/api'


const Main = () => {

    const [newRepo, setNewRepo] = useState('')
    const [repositorio, setRepositorio] = useState([])
    const [loading, setLoading] = useState(false)

    
    const handleSubmit = useCallback((e) => {

      e.preventDefault()

      async function submit() {  

        setLoading(true)
        
        try {

          const response = await api.get(`repos/${newRepo}`)

          const data = {
            name: response.data.full_name,
          }
    
          setRepositorio([...repositorio, data])
          setNewRepo('')

        } catch (error) {
          console.log(error)
        }finally{

          setLoading(false)
        }     
      
    }

    submit()

  }, [newRepo, repositorio])
      

    function handleInputChange(e){
      setNewRepo(e.target.value)
    }

    const handleDelete = useCallback((repo) =>{
      const find = repositorio.filter(r => r.name !== repo)
      setRepositorio(find)
    }, [repositorio])

    return (

      <Container>

        <h1>
          <FaGithub size={25} />
          Meus Repositorios
        </h1>

        <Form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Adicionar Repositorios'
            value={newRepo}
            onChange={handleInputChange}
            
            />

          <SubmitButton Loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color='#FFF' size={14} />
            ) : (
              <FaPlus color='#FFF' size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositorio.map(repo => (
            <li key={repo.name}>
              <span>
                <DeleteRepo onClick={() => handleDelete(repo.name)}>
                  <FaTrash size={14} />
                </DeleteRepo>
                {repo.name}
              </span>
              <a href=''>
                <FaBars size={20} />
              </a>
            </li>
          ))}

        </List>
        
      </Container>
    );
  }
  
  export default Main;
  