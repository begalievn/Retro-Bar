import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import styles from './SubmitButton.module.css'

type SubmitButtonProps = {
  tel:string,
  
 }

function SubmitButton({tel}:SubmitButtonProps) {
  return (
      <a href={tel}> <button className={styles.button}>Позвонить</button></a>
  )
}

export default SubmitButton