import React from 'react'
import styles from './SubmitButton.module.css'

function SubmitButton({ text = 'Позвонить' }) {
  return (
      <a href='tel:+380441111111'> <button className={styles.button}>{text}</button></a>
  )
}

export default SubmitButton