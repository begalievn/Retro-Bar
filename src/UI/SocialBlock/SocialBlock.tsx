import React,{FC} from 'react';
import Grid from "@mui/material/Grid";

import {UseSocialIcons} from "../../hooks/useSocialIcons";
import classes from "../../layout/Footer/styles.module.css";

interface ISocialBlockProps {
    color?: string
}

const SocialBlock: FC<ISocialBlockProps> = ({color}) => {
    const social = UseSocialIcons()

    return (
        <Grid
            sx={{
                display: { xs: 'block', md: 'none' },
                margin: '0 auto',
                marginTop: '30px',
            }}
            item
            xs={12}
            className={classes.iconsBlock}
        >
            <h6 style={{color: `${color && color}`}} >Мы в социальных сетях:</h6>
            <div className={classes.onlyIcons}>
                {social?.map((item, index) => (
                    <a target="_blank" key={index} href={item.path}>
                        {item.icon}
                    </a>
                ))}
            </div>
        </Grid>
    );
};

export default SocialBlock;