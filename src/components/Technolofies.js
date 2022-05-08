import React from "react";
import { makeStyles } from '@material-ui/core';
import Paper from "@material-ui/core/paper";
import sql from "../img/sql.png";
import mongodb from "../img/mongodb.png";
import c from "../img/C.png";
import flutter from "../img/flutter.png";
import react from "../img/react.png";
import js from "../img/js.png";
import css3 from "../img/css3.png";
import html5 from "../img/html5.png";
import jQuery from "../img/jQuery.png";
import nodeJS from "../img/nodeJs.png"
import tortoiseSVN from "../img/tortoiseSVN.png"
import gitHub from "../img/GitHub.png";
import boostrap from "../img/bootstrap.jpg";
import threeImage from "../img/three.png"
import '../index.css';
import TypeWriterEffect from "react-typewriter-effect";


export const Technolofies = (theme) => {
    const classes = useStyles();
    const skills = [
        {
            src: sql,
            title: "  Microsoft Sql server",
        },
        {
            src: c,
            title: "  C# .Net",
        },
        {
            src: js,
            title: "  javaScript",
        },
        {
            src: css3,
            title: "  Css 3",
        },
        {
            src: html5,
            title: "  Html 5",
        },
        {
            src: jQuery,
            title: "  jQuery",
        },
        {
            src: tortoiseSVN,
            title: "  Tortoise SV",
        },

    ]



    return (
        <Paper elevation={5} className={`${classes.paper} ${classes.skills1}`}>
             <TypeWriterEffect
                            text="Desarrollador Junior en Bit S.A"
                            textStyle={{ fontSize: "1.3rem", fontWeight: "800px", color: "tomato" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
            <br/>
            {skills.map(({ src, title, start }, index) => (
                <div className={classes.imagen}>
                    <div >
                        <img src={src} alt={title} className={classes.customlogo}></img>
                    </div>
                    <div className={classes.nombreSkill}>
                        <TypeWriterEffect
                            text={title}
                            textStyle={{ fontSize: "1.1rem", fontWeight: "500px", color: "black" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <br></br>
                    </div>
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
            src: mongodb,
            title: "Mongo db",

        },
        {
            src: nodeJS,
            title: "Node js",

        },
        {
            src: react,
            title: "React js",

        },
        {
            src: boostrap,
            title: "Boostrap",
        },

        {
            src: flutter,
            title: "Flutter",
        },
        {
            src: gitHub,
            title: "Git Hub",
        },
        {
            src: threeImage,
            title: "Three JS"
        }

    ]



    return (
        <Paper elevation={5} className={`${classes.paper} ${classes.skills2}`}>
             <TypeWriterEffect
                            text="Proyectos personales"
                            textStyle={{ fontSize: "1.3rem", fontWeight: "800px", color: "tomato" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
            <br/>
            {skills.map(({ src, title, start }, index) => (
                <div className={classes.imagen2}>
                    
                    <div className={classes.nombreSkill}>
                        <TypeWriterEffect
                            text={title}
                            textStyle={{ fontSize: "1.1rem", fontWeight: "500px", color: "black" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <br></br>
                    </div>
                     
                    <div >
                        <img src={src} alt={title} className={classes.customlogo}></img>
                    </div>
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

        },
        boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)",
    },

    connector: {

        [theme.breakpoints.down("sm")]: {
            display: "none",

        }
    },
    skills1: {
        position: "absolute",
        zIndex: "1",
        backgroundColor: "#f2f2f2",
        left: "10%",
        top: "19%",
        [theme.breakpoints.down("sm")]: {
            display: "none",
      
        }
    },
    skills2: {
        position: "absolute",
        zIndex: "1",
        backgroundColor: "#f2f2f2",
        right: "14%",
        top: "20%",
        [theme.breakpoints.down("sm")]: {
            display: "none",
      
        }
    },
    imagen:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    imagen2:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    nombreSkill:{
        paddingLeft: "10px",
    }

}))
