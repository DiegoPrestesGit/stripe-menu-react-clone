import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Context } from './provider'
import { DropdownSection } from './section'

export function DropdownRoot() {
  const { options } = useContext(Context)

  return <div className="dropdown-root">
    <div>
      {options.map(item => <DropdownSection key={item.id} option={item} />)}
    </div>
  </div>
}
