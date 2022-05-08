import React from 'react';
import { Card, CardContent, CardMedia, Grid,  makeStyles, Typography, Link,Button } from '@material-ui/core';

import mockData from '../monckData';



const Portafile = ({title,id, gray}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${gray && classes.sectiondark}`}>
            <div className={classes.sectionContent} id={id}>
            <Typography variant="h3"className={classes.titulo} >{title}</Typography>
              <Grid container className={classes.grid}>
                {
                  mockData.map(({title, image, repositorio, video}, index)=>{
                    
                    return (
                      <Grid item key={index} xs={12} ms={6} md={4}>
                        <Card className={classes.card}>
                          <CardMedia image={image} titulo="caratula" className={classes.caratula } />
                          <CardContent className={classes.content}>
                            <Button vartian="contained" className={classes.button}>
                              <Link href={repositorio} color="primary" target="_blank" reel="noopener noreferrer" > 
                                {title}
                                </Link>             
                            </Button>
                          </CardContent>
                            <Typography variant="h6"className={classes.tecnologias} >{video}</Typography>
                        </Card>
                      </Grid>
                    );
                  })
                }
              </Grid>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section:{
      
      minHeight: "100vh",
      color: "#063891"
    },
    sectiondark:{
        backgroundColor: "#f2f2f2",
        
    },
    sectionContent:{
        maxWidth:"80vw",
        margin: "0 auto",
        padding: theme.spacing(5),
        
    },
    grid:{
      marginTop: theme.spacing(10),
      
    },
    card:{
      maxWidth: 345,
      minHeight: 275,
      margin: theme.spacing(3),
      
    },
    caratula:{
      height: 0,
      paddingTop: "56.25%",//16:9
      backgroundSize:"100% 100%",
      backgroundRepeat: "no-repeat",

    },
    content:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    },
    button:{
      backgroundColor: "#4286f4c0",
      border: "#063891 solid 2px",
      boxShadow: "6px 5px 10px #555",
      fontSize: "12px",
      fontWeight: "800",
      background: "fff"
      
    },
    titulo:{
      textShadow: "6px 5px 10px #555"
    },
    tecnologias:{
      textAlign: "center",
    }
  }))

export default Portafile;