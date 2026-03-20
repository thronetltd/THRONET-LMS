// Logo configuration for THRONET EDU project

const logoConfig = {
    logos: {
        default: {
            path: '/assets/logos/default-logo.png',
            altText: 'Default Logo for THRONET EDU',
            styles: {
                width: '150px',
                height: 'auto',
            },
        },
        small: {
            path: '/assets/logos/small-logo.png',
            altText: 'Small Logo for THRONET EDU',
            styles: {
                width: '100px',
                height: 'auto',
            },
        },
        favicon: {
            path: '/assets/logos/favicon.ico',
            altText: 'Favicon for THRONET EDU',
            styles: {
                width: '32px',
                height: '32px',
            },
        },
    },
    usageGuidelines: {
        description: 'The logos should be used in accordance with the branding guidelines set for the THRONET EDU project.',
        placement: 'Logos are to be used in the header and footer of the application.',
        notes: 'Always maintain the aspect ratio of logos when resizing.'
    }
};

export default logoConfig;