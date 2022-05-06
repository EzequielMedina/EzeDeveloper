import { makeStyles, Typography } from '@material-ui/core';
import { Technolofies, Technolofies2 } from "./Technolofies";
import Scene from "./Scene/Scene.js";

const Skills = ({ title, id, gray }) => {

  const classes = useStyles();

  return (
    <div className={`${classes.section} ${gray && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <Typography variant="h3" className={classes.titulo} >{title}</Typography>
        <Scene id="scena" ></Scene>
        <Technolofies></Technolofies>
        <Technolofies2></Technolofies2>
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",

  },
  sectiondark: {
    backgroundColor: "#f2f2f2",
    color: "#063891",
    position: "relative"
  },
  titulo: {
    textShadow: "6px 5px 10px #555",
    top: "5%",
    position: "absolute",
    left: "44%",
    zIndex: "9999"
  },
  skills: {
    position: "absolute",
    zIndex: "9999",
    backgroundColor: "#f2f2f2",
    left: "2%",
    top: "20%",
  },
  button: {
    backgroundColor: "#4286f4c0",
    border: "#063891 solid 2px",
    boxShadow: "6px 5px 10px #555",
    fontSize: "12px",
    fontWeight: "800",
    background: "fff",
    position: 'absolute',
    zIndex: '1',
    top: '80%',
    left: '43%',

  },
}))

export default Skills;