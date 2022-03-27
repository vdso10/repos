import React, { useCallback, useState } from 'react'
import {FaGithub, FaPlus } from 'react-icons/fa'

import { Container, Form, SubmitButton } from './styles'

import api from '../../services/api'


const Main = () => {

    const [newRepo, setNewRepo] = useState('')
    const [repositorio, setRepositorio] = useState([])

    
    const handleSubmit = useCallback((e) => {

      e.preventDefault()

      async function submit() {      

      const response = await api.get(`repos/${newRepo}`)

      const data = {
        name: response.data.full_name,
      }

      setRepositorio([...repositorio, data])
      setNewRepo('')
      
    }

    submit()

  }, [newRepo, repositorio])
      

    function handleInputChange(e){
      setNewRepo(e.target.value)
    }

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

          <SubmitButton>

            <FaPlus color='#FFF' size={14} />

          </SubmitButton>
        </Form>
        
      </Container>
    );
  }
  
  export default Main;
  