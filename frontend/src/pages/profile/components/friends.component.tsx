import React from 'react'

import ProfileBadge from '../../../components/profile-badge.component'
import { StyledLink } from '../../../styles/app-styles'

import styled from 'styled-components'
import { Checkbox } from '@material-ui/core'

// Array for testing purposes only
const namesArray: Array<string> = [
  'Gustavo Lopes',
  'Miguel Demarque',
  'Luiz Felipe',
  'Nicolas Gen',
  'Leonel P',
  'Yves',
]

interface FriendsProps {
  status?: string
  id?: number
}

function friendActions(status?: string) {
  switch (status) {
    case 'p':
      return <StyledLink underline>Cancelar o miguel gay</StyledLink>
    case 'a':
      return <StyledLink underline>Desfazer amizade</StyledLink>
    case 'b':
      return <StyledLink underline>Desbloquear</StyledLink>
    default:
      // return <StyledLink underline>Adicionar amigo</StyledLink>
      return <Checkbox style={{ color: 'white' }} />
  }
}

const Friends: React.FC<FriendsProps> = ({ status }: FriendsProps) => (
  <Container>
    {namesArray.map((user, index) => (
      <Box key={index}>
        <ProfileBadge name={user} />
        <Actions>{friendActions(status)}</Actions>
      </Box>
    ))}
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgb(56, 68, 77);
  width: 100%;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
`

export default Friends