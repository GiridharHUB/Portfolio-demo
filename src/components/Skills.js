import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

const styles = makeStyles({
    text:{
        position: 'relative',
        fontFamily: 'Kalam',
        color: '#FFFF',
        textAlign: 'justify'
    },
    heading: {
        position: 'relative',
        fontFamily: 'Kalam',
        color: '#FFFF',
        textAlign: 'center',
        marginTop: 10
    },
    head:{
        position: 'relative',
        top: "8vh",
        fontSize: 'xx-large',
        fontFamily: 'Kalam',
        color: '#FFFF',
        textAlign: 'center'
    },
    cpb:{
        fontFamily: 'Kalam',
    },
    hero:{
        position: 'relative',
        top: '100vh',
        width: '100%',
        height: '80vh',
        backgroundColor: '#fa7268',
        marginTop: '-8vh',
    },
    container:{
        width: '10%',
        display: 'block',
        float: 'left',
        margin: '20vh 0 0 25vh'
    }
})

function Skills() {
    const html = 82, react = 30, js = 65, ma = 70

    const classes = styles()
    return (
        <div className={classes.hero} id='skills'>
            <h2 className={classes.head}>My Finest Skills</h2>
            <div className={classes.container}>
                <CircularProgressbar className={classes.cpb} value={html} 
                styles={buildStyles({ pathColor: 'rgb(198 35 104)',textColor: 'rgb(198 35 104)',})} 
                text={`${html}%`} />
                <Typography variant="h6" className={classes.heading}>
                    HTML & CSS
                </Typography>
                <p className={classes.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>

            <div className={classes.container}>
                <CircularProgressbar className={classes.cpb} value={react} 
                styles={buildStyles({ pathColor: 'rgb(198 35 104)',textColor: 'rgb(198 35 104)',})} 
                text={`${react}%`} />
                <Typography variant="h6" className={classes.heading}>
                    React
                </Typography>
                <p className={classes.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>

            <div className={classes.container}>
                <CircularProgressbar className={classes.cpb} value={js} 
                styles={buildStyles({ pathColor: 'rgb(198 35 104)',textColor: 'rgb(198 35 104)'})} 
                text={`${js}%`} />
                <Typography variant="h6" className={classes.heading}>
                    JS
                </Typography>
                <p className={classes.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>      

            <div className={classes.container}>
                <CircularProgressbar className={classes.cpb} value={ma} 
                styles={buildStyles({ pathColor: 'rgb(198 35 104)',textColor: 'rgb(198 35 104)',})} 
                text={`${ma}%`} />
                <p className={classes.heading}>
                    Mobile App
                </p>
                <p className={classes.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
        </div>
    )
}

export default Skills
