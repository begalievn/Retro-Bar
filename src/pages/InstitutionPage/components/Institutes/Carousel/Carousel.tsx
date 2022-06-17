import { style } from '@mui/system'
import React, { Children, cloneElement, useEffect, useState } from 'react'
import styles from './carousel.module.css'


function Carousel({children,clickData}) {
  const [pages, setPages] = useState([])
  const [offSet, setOffSet] = useState(-100)

  
  
  useEffect(() => {
    console.log(clickData);
    
    if (clickData.dir==="prev") {
     setOffSet((current)=>{
       let newOffSet = current+ 100
       if (newOffSet>=100) {
         return newOffSet-=300
       }
       return newOffSet ;
     })
      
    }
    if (clickData.dir==='next') {
      setOffSet((current)=>{
        let newOffSet = current- 100
        if (newOffSet<=-300) {
          return newOffSet+=300
        }
        return newOffSet ;
      })
    }
    
  }, [clickData,])
  
  

  useEffect(() => {
    setPages(
      Children.map(children,(child)=>{
        return cloneElement(child,{
          style: {
            height:'100%',
            minWidth: '100%',
            maxWidth: '100%'
          }
        })
      })
    )
  
   
  }, [])

  
  

  return (
    
    <div className={styles.window}>
      <div className={styles.allPagesContainer} 
      style={{
        transform: `translateX(${offSet}%)`,
      }}
      >
        {pages}
      </div>
    </div>

  )
}

export default Carousel