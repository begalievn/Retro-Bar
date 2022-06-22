import React from 'react'
import styles from './SubmitButton.module.css'

function SubmitButton({text='Позвонить'}) {
  return (
    <button  className={styles.button}>{text}</button>
  )
}

export default SubmitButton