import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import {Technolofies} from "./Technolofies";
import Scene from "./Scene/Scene.js";

const Skills = ({title,id, gray}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${gray && classes.sectiondark}`}>
            <div className={classes.sectionContent} id={id}>
              <Typography variant="h3"className={classes.titulo} >{title}</Typography>
                <Technolofies></Technolofies>
              <Scene></Scene>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      minHeight: "100vh",
      
    },
    sectiondark:{
        backgroundColor: "#f2f2f2",
        color: "#063891",
        position: "relative"
    },
    titulo:{
      textShadow: "6px 5px 10px #555",
      top: "10%",
      position: "absolute",
      left: "46.5%",
      zIndex: "9999"
    }
  }))

export default Skills;