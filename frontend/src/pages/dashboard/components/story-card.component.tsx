import React from 'react'

import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'

import styled from 'styled-components'

import { StyledLink } from '../../../styles/app-styles'

import { NavLink } from 'react-router-dom'

interface StoryCardProps {
  empty?: boolean;
  image?: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  empty,
  image
}: StoryCardProps) => (
  <>
    {empty ? (
      <StyledLink to="/story/create">
        <Card>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: '100%', width: '100%', borderRadius: '20px' }}
          >
            <Grid item>
              <AddIcon style={{ width: '64px', height: '64px' }} />
            </Grid>
          </Grid>
        </Card>
      </StyledLink>
    ) : (
      <NavLink to="/story/description" style={{ textDecoration: 'none' }}>
        <Card>
          <Grid
            container
            justify="center"
            direction="row"
            //   alignItems="flex-end"
            style={{ height: '100%', width: '100%', borderRadius: '20px' }}
          >
            <BackgroundImage item image={image} />
            <Grid item>Titulo do RPG pouco longo</Grid>
          </Grid>
        </Card>
      </NavLink>
    )}
  </>
)

const Card = styled.div`
  width: 220px;
  height: 220px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  align-items: center;

  font-family: "Grenze Gotisch", cursive;
  color: rgba(225, 225, 225, 1);
  font-size: 20px;
  margin: 10px;
  transition: 300ms;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

const BackgroundImage = styled(Grid)`
  width: 100%;
  height: 85%;
  border-radius: 20px 20px 0px 0px;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-color: blue; */
`

export default StoryCard
