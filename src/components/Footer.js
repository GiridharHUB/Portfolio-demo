import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';

function Footer() {
    return (
            <BottomNavigation >
            <BottomNavigationAction  color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
            <BottomNavigationAction  href="https://www.linkedin.com/in/giridhar-b-1792a6189/" target="_blank" label="Linkedin" value="favorites" icon={<LinkedinIcon  style={{fill: "#1DA1F2"}}/>} />
            <BottomNavigationAction  href="https://www.instagram.com/_miracle_boiy_/?hl=en" target="_blank" label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
            <BottomNavigationAction  href="https://github.com/giridhar2000" target="_blank"label="GitHub" value="folder" icon={<GitHub  style={{fill: "#000"}}/>} />
            </BottomNavigation>
)
}

export default Footer