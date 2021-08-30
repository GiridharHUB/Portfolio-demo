import React from 'react'
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        position: "sticky",
        transitionTimingFunction: "ease-in",
        transition: "0.5s",
        '@media (max-width:780px)': { 
           flexDirection: "column"
          }
    },

    logo: {
        width: "15%", 
        '@media (max-width:780px)': { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        '@media (max-width:780px)': { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flex:1,
        marginLeft: 80,
        fontFamily: 'Kalam',
        fontWeight: 600,
        transition: 'all 0.5s ease',
        "&:hover": {
            color:  "#4f25c8"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    },

})

function NavBar() {
    const classes = styles()
    return (

            <Toolbar color="rgba(0, 0, 0, 0.5)" className={classes.bar}>
                <img src={logo} alt='logo' className={classes.logo}></img>
                <img src={logoMobile} alt='logoMobile' className={classes.logoMobile}></img>

                    <Typography variant="h6" className={classes.menuItem}>
                        Intro
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem} 
                    onClick={event =>  window.location.href='/#skills'}>
                        Skills
                    </Typography>            
                    <Typography variant="h6" className={classes.menuItem}>
                        Projects
                    </Typography>
                    <Typography variant="h6" className={classes.menuItem}>
                        Experience
                    </Typography>            

                    <CustomBtn txt="Contact"/>

            </Toolbar>

    )
}

export default NavBar
