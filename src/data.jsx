import { Badge, Calendar, Github, Instagram, Linkedin, Mail, Shield, Target, Twitter, Users, Eye, User, MailIcon, Trophy, BookOpen, Lightbulb } from "lucide-react"
import { GiAchievement } from "react-icons/gi"
import Achievements from "./Components/Achievements"
import pic1 from './assets/react.svg'
import pic2 from './assets/light.png'




// ==========================
// Navigation Links (Header Menu)
// ==========================

export const NavLinks = [
    {name : 'Home' , link : '/'},
    {name : 'About' , link : '/about'},
    {name : 'Teams' , link : '/teams'},
    {name : 'Events' , link : '/events'},
    {name : 'Resources' , link : '/resources'},
    {name : 'Contact' , link : '/contact'},
    {name : 'Join Us' , link : '/joinus'},

]


// ==========================
// Footer Links (Uses NavLinks + Support Links)
// ==========================

export const FooterDetails = [
    {heading : 'Quick Links', links : NavLinks},
    {heading : 'Support', links : [
        {name : 'Contact Us', link : '/contact'},
        {name : 'Join Us', link : '/joinus'},
        
    ]}
]


// ==========================
// Social Media Links
// ==========================

export const SocialLinks = [
    {name : 'Mail', link : 'tejayerriboyina@gmail.com', img : <Mail size={18} />},
    {name : 'LinkedIn', link : 'tejayerriboyina@gmail.com', img : <Linkedin size={18} />},
    {name : 'GitHub', link : 'tejayerriboyina@gmail.com', img : <Github size={18} />},
    {name : 'Twitter', link : 'tejayerriboyina@gmail.com', img : <Twitter size={18} />},
]


// ==========================
// Upcoming Events (Future Schedule)
// ==========================

export const UpcomingEventsData = [
    {
        label : 'Workshop',
        date : 'Nov 15, 2025',
        name : 'Ethical Hacking Workshop',
        time : '09:30 AM',
        description : 'Join our Ethical Hacking Workshop to explore cybersecurity basics and hands-on hacking tools.'
    },
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
    {
        label : 'Hackathon',
        date : 'Oct 17, 2025',
        name : 'CyberSecurity Hackathon',
        time : '10:30 AM',
        description : 'Participate in our Cybersecurity Hackathon to tackle real-world security challenges and showcase your skills.'
    },
   
]


// ==========================
// Association Stats (Counters for Landing Page)
// ==========================

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


// ==========================
// Mission and Vision Section
// ==========================

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


// ==========================
// Organizational Structure (Core Team Roles)
// ==========================

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



// ==========================
// Achievements Data (Workshops, Competitions, Seminars)
// ==========================

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




// ==========================
// Teams Data (Leadership, Technical, etc.)
// Each team contains multiple members with skills, achievements & links
// ==========================

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




// ==========================
// Important Programs (Highlights like CTF, Sessions, etc.)
// ==========================

export const ImportantPrograms = [
    {name : 'CTF Competititons', img : <Trophy color="blue" />, description : 'Regular capture-the-flag competitions to test and improve your hacking skills', tagLine : 'Monthly competitions with 100+ participants'},
    {name : 'CTF Competititons', img : <BookOpen color="green" />, description : 'Regular capture-the-flag competitions to test and improve your hacking skills', tagLine : 'Monthly competitions with 100+ participants'},
    {name : 'CTF Competititons', img : <Lightbulb color="blue" />, description : 'Regular capture-the-flag competitions to test and improve your hacking skills', tagLine : 'Monthly competitions with 100+ participants'},
]





// ==========================
// Past Events (History of Programs Conducted)
// ==========================

export const PastEventsData = [
    {
        program : 'Workshop',
        date : 'Feb 20, 2025',
        name : 'Advanced Malware Analysis Workshop',
        tag : 'Deep dive into malware reverse engineering and analysis techniques',
        images : [
            pic1,
            pic1, 
            pic1
        ],
        highlights : [
            'Static and dynamic analysis',
            'Sandbox environments',
            'Real malware samples',
            'Industry tools'
        ],
        participants : '45',
        rating : '4.8',
    },
    {
        program : 'Workshop',
        date : 'Feb 20, 2025',
        name : 'Advanced Malware Analysis Workshop',
        tag : 'Deep dive into malware reverse engineering and analysis techniques',
        images : [
            pic1,
            pic1, 
            pic1
        ],
        highlights : [
            'Static and dynamic analysis',
            'Sandbox environments',
            'Real malware samples',
            'Industry tools'
        ],
        participants : '45',
        rating : '4.8',
    },
    {
        program : 'Workshop',
        date : 'Feb 20, 2025',
        name : 'Advanced Malware Analysis Workshop',
        tag : 'Deep dive into malware reverse engineering and analysis techniques',
        images : [
            pic2,
            pic2, 
            pic2,
            pic2,
            pic2,
        ],
        highlights : [
            'Static and dynamic analysis',
            'Sandbox environments',
            'Real malware samples',
            'Industry tools'
        ],
        participants : '45',
        rating : '4.8',
    },
    {
        program : 'Workshop',
        date : 'Feb 20, 2025',
        name : 'Advanced Malware Analysis Workshop',
        tag : 'Deep dive into malware reverse engineering and analysis techniques',
        images : [
            pic1,
            pic1, 
            pic1
        ],
        highlights : [
            'Static and dynamic analysis',
            'Sandbox environments',
            'Real malware samples',
            'Industry tools'
        ],
        participants : '45',
        rating : '4.8',
    },
]