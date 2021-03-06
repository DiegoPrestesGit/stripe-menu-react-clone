import React from 'react'
import { Container, DropdownStyles } from './styles'
import {Products, Developers, Company} from '../content'
import { DropdownOption, DropdownProvider, DropdownRoot } from '../dropdown'

export function Navbar () {
  return (
    <DropdownProvider>
      <DropdownStyles>
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

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  )
}
