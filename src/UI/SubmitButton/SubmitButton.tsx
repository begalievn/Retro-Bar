import React from 'react'
import styles from './SubmitButton.module.css'

function SubmitButton({width=40,text='Позвонить'}) {
  return (
    <button style={{width:`${width}%`}} className={styles.button}>{text}</button>
  )
}

export default SubmitButton