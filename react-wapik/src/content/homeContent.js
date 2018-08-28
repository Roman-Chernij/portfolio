import homeBgHead from './home-bg-head.jpg';
import templateDecor from './templateDecor.png';
import testimonialsImage from './testimonialsImage.jpg';
import mapDecor from './mapDecor.png';
import downloadHome from './download-bg.png'

const contentHome = {
    navigation:['home', 'about us', 'pricing', 'contact us'],
    logo: 'wapik',
    numberPhone: {
        value:'+62 202 555 0117',
        link: '+622025550117'
    },
    btnStart: 'Get Started',
    welcome: {
        title: 'Welcome to Wapik',
        description:'Wapik is multipurpose template, with modern and smart design. Wapik is perfect template for you!',
        btn: 'Learn More',
        background: homeBgHead,
    },
    motivation: {
        title: 'Best of our features',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
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
    servises: [
        {
            title: 'Cross Browser Compatibility',
            description: 'Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus.',
            classIcons:'icon-globe'
        },
        {
            title: 'Creative Idea',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.',
            classIcons:'icon-lightbulb'
        },
        {
            title: 'Pixel Perfect',
            description: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            classIcons:'icon-magic'
        },
        {
            title: 'Free Forever and Ever',
            description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.',
            classIcons:'icon-upload-cloud-outline'
        }
    ],
    template: {
        title: 'Looking for the perfect template to use?',
        subtitle: 'Donec id elit non mi porta gravida at eget metus.',
        descriptionTitle: 'Responsive Ready',
        image:templateDecor,
        descriptionText: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper.',
        arr: [
            'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            'Donec id elit non mi porta gravida at eget metus.'
        ]
    },
    testimonials: {
        descriptionText: 'This theme is beautiful, elegant and easy to customize. I’ve been able to build an amazing site in just a minute. Thank you very much for creating this impressive template!',
        name: 'Valeria Boltneva',
        post: 'Director of Acme.Inc',
        image: testimonialsImage
    },
    built: {
        title: 'Built with High Attention to Details',
        text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.',
        image: mapDecor
    },
    price: {
        title: `Pricing & Plan`,
        subtitle: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.\n' +
        'Donec id elit non mi porta gravida at eget metus.'
    },
    pricing: {
        bottom:'Limited Time Offer. All plans are FREE 14 days!',
        info: [
            {
                type: 'Basic',
                price: '$199',
                month: 'month',
                list: ['Justo Fringilla', 'Mollis Sit Nullam', 'Ultricies Purus Amet', 'Cras Inceptos'],
                btn: 'Select Plan'
            },
            {
                type: 'Plus',
                price: '$399',
                month: 'month',
                list: ['Justo Fringilla', 'Mollis Sit Nullam', 'Ultricies Purus Amet', 'Cras Inceptos'],
                btn: 'Select Plan'
            },
            {
                type: 'Premium',
                price: '$699',
                month: 'month',
                list: ['Justo Fringilla', 'Mollis Sit Nullam', 'Ultricies Purus Amet', 'Cras Inceptos'],
                btn: 'Select Plan'
            }
        ]
    },
    composition: {
        title: 'Included With All Plans',
        list: [
            'Maecenas faucibus mollis interdum',
            'Vestibulum id ligula porta felis euismod',
            'Nulla vitae elit libero, a pharetra augue',
            'Cras justo odio, dapibus ac facilisis',
            'Duis mollis, est non commodo luctus',
            'Curabitur blandit tempus porttitor',
            'Fringilla Mattis',
            'Integer posuere',
            'Nullam quis risus eget urna mollis'
        ]
    },
    help: {
        title:'Need Help?',
        description: 'Contact our Customer Support that is always ready to help you with any possible questions, problems or information.',
        email: 'support@wapik.com'
    },
    download: {
        link: 'download now! - FREE forever',
        title: 'Do You Like Wapik? Download it Now',
        subTitle: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
        img: downloadHome
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

export  {contentHome};
