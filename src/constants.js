
export const services = [
    {
        title: "Software Engineer",
        icon: 'https://cdn-icons-png.flaticon.com/512/5906/5906160.png',
    },
    {
        title: "Technology Enthusiast",
        icon: 'https://png.pngtree.com/thumb_back/fh260/background/20230811/pngtree-minimalist-human-ai-logo-icon-for-tech-enthusiasts-image_13083007.jpg',
    },
    {
        title: "Sports Freak",
        icon: 'https://e7.pngegg.com/pngimages/810/232/png-clipart-sport-logo-design-grass-sports-equipment-thumbnail.png',
    },
];

export const name = 'Aditya';

export const experiences = [
    {
        'company': 'Societe Generale Global Solution Centre',
        'role': 'Software Engineer',
        'duration': 'February 2024 - Present',
        'logo': 'https://i.pinimg.com/564x/ae/02/c2/ae02c2fb337504bd1a40d1b18e10a3d9.jpg',
        'points': [
            'Responsible for designing and creating APIs using Java Springboot for the Client Exposure Monitoring team. These APIs are used for the pushing and extracting data to and from OpenSee database.',
            'Implemented and reduced the latency of API for getting data of multiple Legal Entities (LE) which has about 60Mb of data per LE.',
            'Increased test coverage to 99% in most of the existing modules',
            'Implemented new push strategies which uses Kafka notification to trigger a Spark job and push millions of data after customization into OPENSEE database'
        ],
        'url': 'https://globalsolutioncenter.societegenerale.in/en/',
    },
    {
        'company': 'Unacademy',
        'role': 'Operations Associate',
        'duration': 'July 2023 - November 2023',
        'logo': 'https://i.pinimg.com/736x/68/a0/42/68a042e75a0fe666c2ef0382ddb3f738.jpg',
        'points': [
            'Worked in the content team for UnacademyX team for reviewing and maintaining the quality of the content which brought down the errors and typo to almost 0%',
            'Used figma for designing the content slides which went into the UnacademyX app',  
            'Maintained excels sheets efficiently for timely delivery of content slides, almost 1000 slides per day.',
        ],
        'url': 'https://www.linkedin.com/in/adityaprasad1308/overlay/1716702675673/single-media-viewer/?profileId=ACoAAC0gNBcBxaG8KjhLQw4V86TJ_XqxJo4kodI',
    },
    {
        'company': 'Utrade Solutions Pvt. Ltd.',
        'role': 'Software Engineer Intern',
        'duration': 'May 2022 - May 2023',
        'logo': 'https://play-lh.googleusercontent.com/gVxFKJbSIr_7jraQOAAMgFBBSPcrS6hOp532cRqVv2SNn9yLPnJ0IR-hM-0yCWCb3rzh',
        'points': [
            'Worked in the development and new features of HFT(High Frequency Trading) which is being used in uTrade.',
            'As a C++ backend developer, responsible for developing new features and improving existing features of HFT.',  
            'Development in frontend for uTrade Algo in QT framework, reducing latency by optimizing code also developing new features.',
        ],
        'url': 'https://www.linkedin.com/in/adityaprasad1308/overlay/1635531910276/single-media-viewer/?profileId=ACoAAC0gNBcBxaG8KjhLQw4V86TJ_XqxJo4kodI',
    },
]



export const EMAIL_JS_SERVICE_ID =  process.env.REACT_APP_EMAILJS_SERVICE_ID
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_USER_ID;

// const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// const userID = process.env.REACT_APP_EMAILJS_USER_ID;
