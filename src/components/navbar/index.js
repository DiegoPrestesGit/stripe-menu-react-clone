import React from 'react'
import { Container, Dropdown } from './styles'
import {Products, Developers, Company} from '../content'
import { DropdownOption } from '../dropdown'

export function Navbar () {
  return (
    <Dropdown>
      <Container>
        <ul>
          <li>
              <DropdownOption name="Produtos"
                content={Products}
              />
          </li>
          <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
              />
          </li>
          <li>
              <DropdownOption
                name="Empresa"
                content={Company}
              />
          </li>
        </ul>
      </Container>
    </Dropdown>
  )
}
