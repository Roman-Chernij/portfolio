import aboutBgHead from './about-bg-haed.jpg';
import team1 from './team1.jpg';
import team2 from './team2.jpg';
import team3 from './team3.jpg';
import download2 from './download-bg2.png'

const contentAbout = {
    navigation:['home', 'about us', 'pricing', 'contact us'],
    logo: 'wapik',
    numberPhone: {
        value:'+62 202 555 0117',
        link: '+622025550117'
    },
    btnStart: 'Get Started',
    motivation: {
        titleSection: 'Best of our features',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    },
    welcome: {
        title: 'Cras justo odio, dapibus ac facilisis in\n' +
        'egestas eget quam',
        btn: 'Start Your Free Trial',
        background: aboutBgHead,
    },
    motivation: {
        title: 'About Us',
        subtitle: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.',
        info: [
            {
                title: 'Ionicons',
                description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem.',
                classIcons:'icon-dot-circled'
            },
            {
                title: 'Creative Design',
                description: 'Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
                classIcons:'icon-beaker'
            },
            {
                title: 'Photoshop and Sketch',
                description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna.',
                classIcons:'icon-picture-outline'
            }
        ]
    },
    team: {
        title: 'Meet Our Team',
        subtitle: 'Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        holder: [
            {
                name: 'Joyce Hudson',
                post: 'Founder & Designer',
                image: team1
            },
            {
                name: 'Angela Campbell',
                post: 'Project Manager',
                image: team2
            },
            {
                name: 'James Walker',
                post: 'Developer',
                image: team3
            }
        ]
    },
    download: {
        link: 'download now! - FREE forever',
        title: 'Do You Like Wapik? Download it Now',
        subTitle: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
        img: download2
    },
    footer: {
        navTitle:'Company',
        othersTitle: 'Others',
        others: ['Help & Support', 'Privacy Policy', 'Terms', 'Sitemap'],
        newsletter: {
            title: 'Newsletter',
            text:'Subscribe to our newsletter and get all the cool news',
            placeholder: 'Enter Email'
        },
        address: '610 Overlook Circle Suite 323 Kalamazoo, MI 49009',
        email: 'hi@wapik.com',
        social: [
            {
                name:'twitter',
                src: 'https://twitter.com'
            },
            {
                name:'facebook',
                src: 'https://www.facebook.com/'
            },
            {
                name:'instagram',
                src: 'https://www.instagram.com'
            },
            {
                name:'dribbble',
                src: 'https://dribbble.com/'
            },
            {
                name:'github',
                src: 'https://github.com'
            }
        ],
        rights: 'All rights reserved'
    }
};

export  {contentAbout};