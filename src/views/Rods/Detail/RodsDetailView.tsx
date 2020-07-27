import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { find } from 'lodash'
import { Container, Wrapper, Input, Spacer } from '3oilerplate'
import { DataContext } from '../../../context'

export const RodsDetailView = () => {
  const { rodId } = useParams()
  const { rods }: any = useContext(DataContext)
  const [currentRod, setCurrentRod]: any = useState(DataContext)

  useEffect(() => {
    if (rodId && rods.length) {
      setCurrentRod(find(rods, { _id: rodId }))
    }
  }, [rods, rodId])

  return (
    <Wrapper>
      <Container style={{ justifyContent: 'center' }}>
        <Spacer>
          <Input value={currentRod.keywords && currentRod.keywords.join(' ')} />
          <Input type="number" value={currentRod.price} />
        </Spacer>
      </Container>
    </Wrapper>
  )
}
