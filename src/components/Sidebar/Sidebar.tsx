import React, { FC, ReactElement, useState } from 'react'
import { Menu, X } from 'react-feather'
import { List, ListItem } from '3oilerplate'
import { SSidebar, SSidebarToggle } from './Sidebar.styled'

export const Sidebar: FC<any> = (props: any): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SSidebar {...props} isOpen={isOpen}>
      <SSidebarToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </SSidebarToggle>
      <List>
        <ListItem href="/">Home</ListItem>
        <ListItem href="/rods">Rods</ListItem>
      </List>
    </SSidebar>
  )
}
