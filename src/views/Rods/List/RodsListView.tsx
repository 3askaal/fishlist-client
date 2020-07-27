import React, { useContext } from 'react'
import { Edit } from 'react-feather'
import { startCase } from 'lodash'
import {
  Container,
  Wrapper,
  Spacer,
  List,
  ListItem,
  Button,
  Box,
} from '3oilerplate'
import { DataContext } from '../../../context'

export const RodsListView = () => {
  const { rods }: any = useContext(DataContext)

  return (
    <Wrapper>
      <Container style={{ justifyContent: 'center' }}>
        <List>
          {rods.map((rod: any) => (
            <ListItem
              href={`/rods/${rod._id}/edit`}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Spacer style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Box
                  style={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{startCase(rod.keywords.join(' '))}</span>
                  <span>{rod.price}</span>
                </Box>
                <Button style={{ borderRadius: '100%', padding: 'xs' }}>
                  <Edit />
                </Button>
              </Spacer>
            </ListItem>
          ))}
        </List>
      </Container>
    </Wrapper>
  )
}
