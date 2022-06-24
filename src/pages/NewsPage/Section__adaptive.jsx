import React, { useContext, useState } from 'react';
import { contexts } from '../../ContextsProvider';
import classes from './Section_adaptive.module.css'

const SectionAdaptive = () => {
    const data = useContext(contexts)

    const [pages, setPages] = useState([])

    return (
        <div className={classes.main_container}>
            <h2 className={classes.title}>Личности</h2>
            <div className={classes.window}>

                <div className={classes.all_pages_container}>

                    {data.map((item, index) => {
                        return (

                            <div className={classes.person_background} item={item} key={index}>

                                <div className={classes.photo}>
                                    <img className={classes.image} src={item.image} />
                                </div>
                                <div className={classes.text}>
                                    <h3 >{item.name}</h3>
                                    <br />
                                    <p>{item.type}</p>
                                    <br />
                                    <span>{item.description}</span>
                                    <br />
                                    <button className={classes.btn}>Смотреть</button>

                                </div>


                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default SectionAdaptive;
