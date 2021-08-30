import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import pro from '../pro.png'
import waves from '../waves.png'

const styles = makeStyles({
    introText: {
        position: 'absolute',
        width: "100%",
        height: "85vh",
    },
    innerText:{
        marginTop: "5rem",
        marginLeft: "3rem",
        position: "absolute",     
    },
    shape: {
        borderRadius: "50%",
        width: "60vh",
        height: "60vh",
        backgroundColor: "rgba(0, 234, 211,0.15)",
        position: "absolute",
        left: "22vh",
        top: "10vh"
    },
    frontText:{
        marginLeft:"10rem",
        fontFamily: 'Kalam',
        fontWeight: 600
    },
    nameText:{
        fontFamily: 'Arizonia',
        fontSize: 100,
        fontWeight: 500,
        marginLeft:"12rem",

    },
    waves: {
        width: "100%",
        pointerEvents: "none",
    },
    profile: {
        width: '50vh',
        position: 'absolute',
        left: '110vh',
        top: 0,
    },
    img:{
        width: '-webkit-fill-available'
    }


})
function Intro() {
    const classes = styles()
    return (
        <div className={classes.introText}>
            <div className={classes.innerText}>
                <Typography variant="h6" className={classes.frontText}>
                    Hello, It's Me
                </Typography>
                <Typography variant="h6" className={classes.nameText}>
                        Giridhar
                </Typography>
                <Typography variant="h6" className={classes.frontText}>
                        And, I'm a Software Engineer
                </Typography>
                <div className={classes.profile}>
                    <img  src={pro} className={classes.img} alt='profile'></img>
                </div>
    
            </div>
            <img src={waves} alt='waves' className={classes.waves}></img> 
            {/* <img src={waves1} alt='waves' className={classes.waves}></img> */}
        </div>
    )
}

export default Intro
