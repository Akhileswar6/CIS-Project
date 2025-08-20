import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export const NavLinks = [
    {name : 'Home' , link : '/'},
    {name : 'About' , link : '/about'},
    {name : 'Teams' , link : '/teams'},
    {name : 'Events' , link : '/events'},
    {name : 'Resources' , link : '/resources'},
    {name : 'Contact' , link : '/contact'},
    {name : 'Join Us' , link : '/joinus'},
]

export const FooterDetails = [
    {heading : 'Quick Links', links : NavLinks},
    {heading : 'Support', links : [
        {name : 'Contact Us', link : '/contact'},
        {name : 'Join Us', link : '/joinus'},
        
    ]}
]

export const SocialLinks = [
    {name : 'Mail', link : 'tejayerriboyina@gmail.com', img : <Mail size={16} />},
    {name : 'LinkedIn', link : 'tejayerriboyina@gmail.com', img : <Linkedin size={16} />},
    {name : 'GitHub', link : 'tejayerriboyina@gmail.com', img : <Github size={16} />},
    {name : 'Twitter', link : 'tejayerriboyina@gmail.com', img : <Twitter size={16} />},
]