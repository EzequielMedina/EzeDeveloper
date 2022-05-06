import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent } from '@material-ui/lab';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from "@material-ui/core/paper";
import sql from "../img/sql.png";
import mongodb from "../img/mongodb.png";
import c from "../img/C.png";
import flutter from "../img/flutter.png";
import react from "../img/react.png";
import js from "../img/js.png";
import css3 from "../img/css3.png";
import html5 from "../img/html5.png";
import python from "../img/python.png";
import nodeJS from "../img/nodeJs.png"
import tortoiseSVN from "../img/tortoiseSVN.png"
import gitHub from "../img/GitHub.png"
import StarRating from "./StarRating";
import '../index.css';





export const Technolofies = (theme) => {
    const classes = useStyles();
    const skills = [
        {
            src: sql,
            title: "Microsoft Sql server",
            start: "Como desarrollador Junior en la empresa BIT S.A",
        },
        {
            src: c,
            title: "C# .Net",
            start: "Como desarrollador Junior en la empresa BIT S.A",
        },
        {
            src: js,
            title: "javaScript",
            start: "Como desarrollador Junior en la empresa BIT S.A",
        },
        {
            src: css3,
            title: "Css 3",
            start: "Como desarrollador Junior en la empresa BIT S.A",
        },
        {
            src: html5,
            title: "Html 5",
            start: "Como desarrollador Junior en la empresa BIT S.A",
        },
        {
            src: tortoiseSVN,
            title: "Tortoise SVN",
            start: "Como desarrollador Junior en la empresa BIT S.A para el versionamiento de codigo",
        },

    ]



    return (
        <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">

                Desarollador junior en la empresa BIT S.A
            </Typography>
            {skills.map(({ src, title, start }, index) => (

                <div>


                    <Typography variant="p" component="p">
                        <img src={src} alt={title} className={classes.customlogo}></img> 
                        {title}
                    </Typography>
                    <br/>
                </div>
                
            ))
            }
        </Paper>
    )
}
export const Technolofies2 = (theme) => {
    const classes = useStyles();
    const skills = [
        {
            src: nodeJS,
            title: "React js",
            start: "El mismo fue utilizado para la creacion del portafolio",
        },
        {
            src: react,
            title: "React js",
            start: "El mismo fue utilizado para la creacion del portafolio",
        },
        {
            src: mongodb,
            title: "Mongo db",
            start: "Proyecto personal de login",
        },

        {
            src: flutter,
            title: "Flutter",
            start: "como proyectos personales: Recordatorios y Login",
        },
        {
            src: gitHub,
            title: "Git Hub",
            start: "utilizado en proyecto personales",
        },

    ]



    return (
        <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">

                Proyectos personales
            </Typography>
            {skills.map(({ src, title, start }, index) => (

                <div>


                    <Typography variant="p" component="p">
                        <img src={src} alt={title} className={classes.customlogo}></img> 
                        {title}
                    </Typography>
                    <br/>
                </div>
                
            ))
            }
        </Paper>
    )
}
const useStyles = makeStyles((theme) => ({
    customlogo: {
        width: "25px",
        [theme.breakpoints.down("sm")]: {
            width: "35px",
            padding: "15px",


        }

    },
    paper: {

        padding: "6px 16px",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",

        }

    },

    connector: {

        [theme.breakpoints.down("sm")]: {
            display: "none",

        }
    },

}))
