import React, { useContext, useEffect } from "react";
import { contexts } from "../../ContextsProvider";
import Section2 from "../EventsPage/components/Section2";
import classes from './NewsPages.module.css'
import SectionAdaptive from "./Section__adaptive";




const NewsPages = () => {
    const data = useContext(contexts)






    return (
        <>

            <div className={classes.container}>

                <div className={classes.containers}>

                    {data.map((item, index) => {
                        return (
                            <div key={index} className={classes.person_background}>
                                <img className={classes.photos} src={item.image} alt="" />
                                <div className={classes.text}>
                                    <h3>{item.name}</h3>
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
                <div className={classes.person_background__adaptive}>
                    <SectionAdaptive />
                </div>

            </div>


            <Section2 />
        </>
    );
}

export default NewsPages;



