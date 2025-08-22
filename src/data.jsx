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
        date : 'March 15, 2024',
        name : 'Ethical Hacking Workshop',
        time : '10 : 00 AM',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
    {
        label : 'Competition',
        date : 'March 15, 2024',
        name : 'Ethical Hacking Workshop',
        time : '11 : 00 AM',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
    {
        label : 'Seminar',
        date : 'March 15, 2024',
        name : 'Ethical Hacking Workshop',
        time : '4 : 00 PM',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
    {
        label : 'Seminar',
        date : 'March 15, 2024',
        name : 'Ethical Hacking Workshop',
        time : '4 : 00 PM',
        description : 'Learn penetration testing and ethical hacking tools.'
    },
]

export const AssociationDetailsCounts = [
    {
        img : <Users />,
        name : 'Members',
        count : '500+',
    },
    {
        img : <Calendar />,
        name : 'Members',
        count : '500+',
    },
    {
        img : <Badge />,
        name : 'Members',
        count : '500+',
    },
    {
        img : <Shield />,
        name : 'Members',
        count : '500+',
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