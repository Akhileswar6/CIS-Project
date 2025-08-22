import { Badge, Calendar, Github, Instagram, Linkedin, Mail, Shield, Target, Twitter, Users, Eye, User } from "lucide-react"
import { GiAchievement } from "react-icons/gi"

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

export const UpcomingEventsData = [
    {
        label : 'Workshop',
        date : 'Nov 15, 2025',
        name : 'Ethical Hacking Workshop',
        time : '09:30 AM',
        description : 'Join our Ethical Hacking Workshop to explore cybersecurity basics and hands-on hacking tools.'
    },
    {
        label : 'Hackathon',
        date : 'Oct 17, 2025',
        name : 'CyberSecurity Hackathon',
        time : '10:30 AM',
        description : 'Participate in our Cybersecurity Hackathon to tackle real-world security challenges and showcase your skills.'
    },
   
]

export const AssociationDetailsCounts = [
    {
        img : <Users color="#4da6ff"/>,
        name : 'Members',
        count : '50+',
    },
    {
        img : <Calendar color="#4da6ff"/>,
        name : 'Events',
        count : '50+',
    },
    {
        img : <Badge color="#4da6ff"/>,
        name : 'Awards',
        count : '10+',
    },
    {
        img : <Shield color="#4da6ff"/>,
        name : 'Secure',
        count : '100%',
    },
]

export const MissionAndVision = [
    {
        name : 'Our Mission',
        img : <Eye color="blue" />,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident necessitatibus reiciendis qui sequi impedit, vero quas aut cumque possimus, explicabo facilis, debitis similique nam delectus tempore? Quasi, libero ipsum!',
    },
    {
        name : 'Our Vision',
        img : <Target color="green" />,
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident necessitatibus reiciendis qui sequi impedit, vero quas aut cumque possimus, explicabo facilis, debitis similique nam delectus tempore? Quasi, libero ipsum!',
    },
]

export const OrganizationalStructure = [
    {
        img : <User />,
        name : 'President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <User  />,
        name : 'President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <User />,
        name : 'President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <User />,
        name : 'President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <User />,
        name : 'President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <User />,
        name : 'President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
]

export const AchievementsData = [
    {
        label : 'Workshop',
        img : <Badge />,
        year : '2024',
        name : 'Ethical Hacking Workshop',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
    {
        label : 'Competition',
        img : <Badge />,
        year : '2024',
        name : 'Ethical Hacking Workshop',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
    {
        label : 'Seminar',
        img : <Badge />,
        year : '2024',
        name : 'Ethical Hacking Workshop',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
    {
        label : 'Seminar',
        img : <Badge />,
        year : '2024',
        name : 'Ethical Hacking Workshop',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
]