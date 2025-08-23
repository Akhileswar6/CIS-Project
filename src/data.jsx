import { Badge, Calendar, Github, Instagram, Linkedin, Mail, Shield, Target, Twitter, Users, Eye, User, MailIcon } from "lucide-react"
import { GiAchievement } from "react-icons/gi"
import Achievements from "./Components/Achievements"
import pic1 from './assets/react.svg'

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
    {name : 'Mail', link : 'tejayerriboyina@gmail.com', img : <Mail size={18} />},
    {name : 'LinkedIn', link : 'tejayerriboyina@gmail.com', img : <Linkedin size={18} />},
    {name : 'GitHub', link : 'tejayerriboyina@gmail.com', img : <Github size={18} />},
    {name : 'Twitter', link : 'tejayerriboyina@gmail.com', img : <Twitter size={18} />},
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
        img : <Users color="#113356ff" size={30}/>,
        name : 'Members',
        count : '50+',
    },
    {
        img : <Calendar color="#113356ff" size={30}/>,
        name : 'Events',
        count : '50+',
    },
    {
        img : <Badge color="#113356ff" size={30}/>,
        name : 'Awards',
        count : '10+',
    },
    {
        img : <Shield color="#113356ff" size={30}/>,
        name : 'Secure',
        count : '100%',
    },
]

export const MissionAndVision = [
    {
        name : 'Our Mission',
        img : <Eye color="#5fa7d4ff" />,
        description : 'To be the leading CyberSecurity Association that shapes the future of information security through education, innovation, and community engagement. We envision a world where cybersecurity knowledge is accessible to all, fostering a safer digital environment for everyone.',
    },
    {
        name : 'Our Vision',
        img : <Target color="#2ed883ff"/>,
        description : 'To empower students with cutting-edge cybersecurity skills and knowledge and practical skills through hands-on workshops, competitions. We are commmitted to building a strong community of ethical hackers, who will lead the way in protecting digital assets and privacy in an increasingly interconnected world.',

    },
]

export const OrganizationalStructure = [
    {
        img : <User color="#5fa7d4ff"/>,
        name : 'President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : < User color="#5fa7d4ff"/>,
        name : 'Vice-President',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <User color="#5fa7d4ff"/>,
        name : 'Secretary',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <User color="#5fa7d4ff"/>,
        name : 'Treasurer',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <Users color="#5fa7d4ff"/>,
        name : 'Promotion Team',
        work : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae providen',
        resonsibilities : [
            'Strategic Planning',
            'Strategic Planning',
            'Strategic Planning',
        ]
    },
    {
        img : <Users color="#5fa7d4ff"/>,
        name : 'Technical Team',
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

export const TeamsDetailsData = [
    {
        name : 'Leadership Team',
        TeamDetails : [
            {
                name : 'Arjun Reddy',
                role : 'President',
                branch : 'Cyber Security 3rd Year',
                img : pic1,
                description : 'Passionate about cybersecurity research and ethical hacking. Leading the association towards new heights.',
                skills : [
                    'Penetration Testing',
                    'Network Security',
                    'Leadership',
                ],
                achievements : [
                    'CEH Certified',
                    'Winner - National CTF 2023',
                ],
                socialLinks : [
                    {name : 'Mail', img :<MailIcon size={18} />, link : 'tejayerriboyina@gmail.com'},
                    {name : 'Mail', img :<Linkedin size={18} />, link : 'www.linkedin.com'},
                    {name : 'Mail', img :<Github size={18} />, link : 'www.github.com'},
                ]
            },
            {
                name : 'Arjun Reddy',
                role : 'President',
                branch : 'Cyber Security 3rd Year',
                img : pic1,
                description : 'Passionate about cybersecurity research and ethical hacking. Leading the association towards new heights.',
                skills : [
                    'Penetration Testing',
                    'Network Security',
                    'Leadership',
                ],
                achievements : [
                    'CEH Certified',
                    'Winner - National CTF 2023',
                ],
                socialLinks : [
                    {name : 'Mail', img :<MailIcon size={18} />, link : 'tejayerriboyina@gmail.com'},
                    {name : 'Mail', img :<Linkedin size={18} />, link : 'www.linkedin.com'},
                    {name : 'Mail', img :<Github size={18} />, link : 'www.github.com'},
                ]
            },
        ]
    },
    {
        name : 'Technical Team',
        TeamDetails : [
            {
                name : 'Arjun Reddy',
                role : 'President',
                branch : 'Cyber Security 3rd Year',
                img : pic1,
                description : 'Passionate about cybersecurity research and ethical hacking. Leading the association towards new heights.',
                skills : [
                    'Penetration Testing',
                    'Network Security',
                    'Leadership',
                ],
                achievements : [
                    'CEH Certified',
                    'Winner - National CTF 2023',
                ],
                socialLinks : [
                    {name : 'Mail', img :<MailIcon size={18} />, link : 'tejayerriboyina@gmail.com'},
                    {name : 'Mail', img :<Linkedin size={18} />, link : 'www.linkedin.com'},
                    {name : 'Mail', img :<Github size={18} />, link : 'www.github.com'},
                ]
            },
            {
                name : 'Arjun Reddy',
                role : 'President',
                branch : 'Cyber Security 3rd Year',
                img : pic1,
                description : 'Passionate about cybersecurity research and ethical hacking. Leading the association towards new heights.',
                skills : [
                    'Penetration Testing',
                    'Network Security',
                    'Leadership',
                ],
                achievements : [
                    'CEH Certified',
                    'Winner - National CTF 2023',
                ],
                socialLinks : [
                    {name : 'Mail', img :<MailIcon size={18} />, link : 'tejayerriboyina@gmail.com'},
                    {name : 'Mail', img :<Linkedin size={18} />, link : 'www.linkedin.com'},
                    {name : 'Mail', img :<Github size={18} />, link : 'www.github.com'},
                ]
            },
            {
                name : 'Arjun Reddy',
                role : 'President',
                branch : 'Cyber Security 3rd Year',
                img : pic1,
                description : 'Passionate about cybersecurity research and ethical hacking. Leading the association towards new heights.',
                skills : [
                    'Penetration Testing',
                    'Network Security',
                    'Leadership',
                ],
                achievements : [
                    'CEH Certified',
                    'Winner - National CTF 2023',
                ],
                socialLinks : [
                    {name : 'Mail', img :<MailIcon size={18} />, link : 'tejayerriboyina@gmail.com'},
                    {name : 'Mail', img :<Linkedin size={18} />, link : 'www.linkedin.com'},
                    {name : 'Mail', img :<Github size={18} />, link : 'www.github.com'},
                ]
            },
            {
                name : 'Arjun Reddy',
                role : 'President',
                branch : 'Cyber Security 3rd Year',
                img : pic1,
                description : 'Passionate about cybersecurity research and ethical hacking. Leading the association towards new heights.',
                skills : [
                    'Penetration Testing',
                    'Network Security',
                    'Leadership',
                ],
                achievements : [
                    'CEH Certified',
                    'Winner - National CTF 2023',
                ],
                socialLinks : [
                    {name : 'Mail', img :<MailIcon size={18} />, link : 'tejayerriboyina@gmail.com'},
                    {name : 'Mail', img :<Linkedin size={18} />, link : 'www.linkedin.com'},
                    {name : 'Mail', img :<Github size={18} />, link : 'www.github.com'},
                ]
            },
        ]
    }
]