import React from 'react'
import {FaGithub, FaPlus } from 'react-icons/fa'

import { Container, Form, SubmitButton } from './styles'

const Main = () => {
    return (

      <Container>

        <h1>
          <FaGithub size={25} />
          Meus Repositorios
        </h1>

        <Form>
          <input type='text' placeholder='Adicionar Repositorios' />

          <SubmitButton>
            
            <FaPlus color='#FFF' size={14} />

          </SubmitButton>
        </Form>
        
      </Container>
    );
  }
  
  export default Main;
  