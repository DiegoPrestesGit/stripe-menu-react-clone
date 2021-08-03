import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useDimentions } from './dimentions'
import { Context } from './provider'

let lastOptionId = 0

export function DropdownOption({name, content: Content, backgroundHeight}) {
  const idRef = useRef(++lastOptionId)
  const id = idRef.current

  const [optionHook, optionDimentions] = useDimentions()
  const [registered, setRegistered] = useState(false)

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    targetId,
    setTargetId,
  } = useContext(Context)

  useEffect(() => {
    if (!registered && optionDimentions) {
      const WrappedContent = () => {
        const contentRef = useRef()

        useEffect(() => {
          const contentDimensions = contentRef.current.getBoundingClientRect()
          updateOptionProps(id, { contentDimensions })
        }, [])

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        )
      }

      registerOption({
        id,
        optionDimentions,
        optionCenterX: optionDimentions.x + optionDimentions.width / 2,
        WrappedContent,
        backgroundHeight
      })

      setRegistered(true)
    } else if (registered && optionDimentions) {
      updateOptionProps(id, {
        optionDimentions,
        optionCenterX: optionDimentions.x + optionDimentions.width / 2
      })
    }
  }, [backgroundHeight, optionDimentions, registerOption, id, registered, updateOptionProps])

  const handleClick = () => {}
  const handleTouch = () => {}
  const handleOpen = () => {}
  const handleClose = () => {}

  return (
    <motion.button
      className="dropdown-option"
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => !window.isMobile && handleOpen()}
      onHoverEnd={() => !window.isMobile && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
        {name}
    </motion.button>
  )
}
