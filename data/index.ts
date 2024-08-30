export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-2 md:col-span-4 md:row-span-2 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-1 md:col-span-4 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-1 md:col-span-2 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for learning and development.",
        description: "",
        className: "lg:col-span-1 md:col-span-2 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently Learning AI and Data Science",
        description: "The Inside Scoop",
        className: "md:col-span-2 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-1 md:col-span-2 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "GraphQL Blog",
        des: "This is a personal blog application, created using Node.js, GraphQL, Apollo server Express and MongoDB",
        img: "/graphql.png",
        iconLists: ['node.svg', "/graphql.svg", "/apollo.svg", "/jest.svg", 'postman.svg'],
        link: "https://github.com/jareerzeenam/graphql-blog",
    },

    {
        id: 2,
        title: "Laravel Web Shop",
        des: "This application is designed to provide a seamless shopping experience with advanced features and secure payment integration. Below you'll find a detailed overview of the technologies used, features available, and instructions for setting up and running the application.",
        img: "/webshop.png",
        iconLists: ["/laravel.svg", "/tail.svg", "/ts.svg", "/stripe.svg", "/livewire.svg"],
        link: "https://github.com/jareerzeenam/laravel-webshop",
    },
    {
        id: 3,
        title: "Laravel Forum",
        des: "This is a Laravel Jetstream project built with Vue3 (Composition API) and Inertia.js. The application follows Test Driven Development (TDD) principles using Pest PHP.",
        img: "/forum.png",
        iconLists: ["/laravel.svg", "/vue.svg", "/tail.svg", "/ts.svg", "/postman.svg"],
        link: "https://github.com/jareerzeenam/laravel-forum",
    },
    {
        id: 4,
        title: "Metaversus Concept Landing Page",
        des: "This repository contains a modern landing page concept for Metaversus, a metaverse-based platform. The landing page is built using Next.js 13, React, Tailwind CSS, and Framer Motion for animated effects.",
        img: "/metaverse.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/gsap.svg"],
        link: "https://github.com/jareerzeenam/nextjs-metaverse-app",
    },

];

export const testimonials = [
    {
        quote:
            "Jareer first joined Adventus as an Associate Software Engineer. What drew me to his CV from all of the others was his inquisitive mindset (a superpower, important in technology) and zest to learn new technologies. What a great hire! In a very short period of time Jareer went from strength to strength, sharpening his skills in Vue.js, GraphQL, AWS and Microservice Architecture. And soon after, being promoted to Software Engineer. It has been an absolute pleasure having Jareer in the team, he has a bright future ahead and I highly recommend him to any company looking for new talent.",
        name: "Hayden Pitout",
        title: "Head of Product Platform Engineering - Adventus.io",
        image: "/hayden.jpeg",
    },
    {
        quote:
            "I am writing to highly recommend Jareer, who I have had the pleasure of working with as a team mate at adventus.io. Jareer works as a Software Engineer and has consistently demonstrated his exceptional technical skills and passion for software development. Throughout his time at adventus.io, Jareer has impressed me with his ability to quickly understand complex software development concepts and execute them with a high level of accuracy. He has a strong work ethic and is always eager to take on new challenges and improve his skills. In addition to his technical abilities, Jareer is an energetic and enthusiastic individual who brings a positive energy to the workplace. He is always willing to lend a helping hand to his colleagues and is a great team player. I have no doubt that Jareer will continue to excel in his career as a software engineer and I highly recommend him for any future opportunities. If you have any questions or would like further information, please do not hesitate to reach out to me.",
        name: "Chinthaka Dilan F",
        title: "Technical Lead - Gapstars",
        image: "/chinthaka.jpeg",
    },
    {
        quote:
            "I wholeheartedly recommend Jareer as a Software Engineer of exceptional skill and unwavering commitment to the world of technology. His unwavering dedication consistently leads to flawless task completion, and he brings a wealth of knowledge to our team. Jareer's eagerness to learn and his willingness to share his expertise make him a true asset to any team.",
        name: "Senthurkumaran Sivasubramaniam",
        title: "Senior Software Engineer - Gapstars",
        image: "/senthur.jpeg",
    },
    {
        quote:
            "Jareer is a great developer with ninja engineering skills! His ability to listen to product demands, and quickly understand what needs to be done and then get it done is remarkable. He is a person who knows his craft well and is able to deliver high-quality work. When working with others with different skill sets, he is able to explain the technical side of his work well and is also able to absorb what needs to be done in order to achieve the desired outcome. Most of all, he is a good person and easy to work with. ",
        name: "Sajini Rathnayake",
        title: "Senior Quality Assurance Engineer - Adventus.io",
        image: "/sajini.jpeg",
    },

];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Software Engineer",
        area: "Full Stack",
        company: "Gapstars",
        desc: "Developed and optimized backend systems using PHP Laravel and contributed to building dynamic frontends with Next.js, enhancing both performance and user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 2,
        title: "Software Engineer",
        area: "Full Stack",
        company: "Adventus.io",
        desc: "Transitioned the system architecture to microservices using Node.js and GraphQL, significantly improving scalability and efficiency.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 3,
        title: "Associate Software Engineer",
        area: "Backend Developer",
        company: "Elegant Media",
        desc: "Developed robust APIs for mobile and web applications using PHP Laravel, ensuring seamless integration and reliable performance.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 4,
        title: "Web Developer",
        area: "Full Stack",
        company: "Seven Media Group",
        desc: "Created and maintained responsive e-commerce websites and lead-generating landing pages using WordPress, improving site performance and user engagement.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/github.svg",
        link: "https://github.com/jareerzeenam"
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/jareer-zeenam/"
    },
    {
        id: 3,
        img: "/medium.svg",
        link: "https://medium.com/@jareerzeenam"
    },
    {
        id: 4,
        img: "/twit.svg",
        link: "https://x.com/Jareer28"
    },
];

export const blogs = [
    {
        title: "Implementing GraphQL and Apollo Server with Next.js 13.4: A Simple Guide (App Directory)",
        description: "Explore the fusion of GraphQL and Apollo Server with Next.js 13.4 in a step-by-step journey.",
        link: "https://medium.com/@jareerzeenam/implementing-graphql-and-apollo-server-with-next-js-13-4-a-simple-guide-app-directory-77e38eb697e3",
    },
    {
        title: "How to GraphQL? Explain like I’m 5",
        description: "Discover GraphQL Basics with Easy-to-Follow Steps and Simple Explanations.",
        link: "https://medium.com/@jareerzeenam/how-to-graphql-explain-like-im-5-78c31e3d0fd5",
    },
    {
        title: "Setting up Serverless Framework with AWS",
        description: "Learn How to Set Up the Serverless Framework on AWS with Clear, Step-by-Step Instructions.",
        link: "https://medium.com/@jareerzeenam/setting-up-serverless-framework-with-aws-19736402c146",
    },
];

export const approach = [
    {
        id: 1,
        title: "Planning & Discovery",
        order: "Phase 1",
        description: "Understanding the project's goals, requirements, and audience. Collaborating with stakeholders to define scope, objectives, and timelines.",
        className: "bg-gradient-to-r from-red-500 to-black-100",
    },
    {
        id: 2,
        title: "Design & Development",
        order: "Phase 2",
        description: "Transforming ideas into functional, user-friendly solutions. Writing clean, maintainable code while focusing on scalability and efficiency.",
        className: "bg-gradient-to-r from-black-100 to-yellow-500",
        colors: [
            [236, 72, 153],
            [232, 121, 249],
        ]

    },
    {
        id: 3,
        title: "Testing & Deployment",
        order: "Phase 3",
        description: "Conducting rigorous testing to ensure quality. Managing smooth deployment and providing ongoing support post-launch.",
        className: "bg-gradient-to-r from-green-500 to-black-100",
        colors: [[125, 211, 252]]
    },
];

export const skills = [
    {
        id: 1,
        title: "PHP",
        img: "/php.svg",
    },
    {
        id: 1,
        title: "Laravel",
        img: "/laravel.svg",
    },
    {
        id: 1,
        title: "Python",
        img: "/python.svg",
    },
    {
        id: 4,
        title: "JavaScript",
        img: "/javascript.svg",
    },
    {
        id: 5,
        title: "Node.js",
        img: "/node.svg",
    },
    {
        id: 5,
        title: "Jest",
        img: "/jest.svg",
    },
    {
        id: 5,
        title: "PEST",
        img: "/pest.svg",
    },
    {
        id: 6,
        title: "GraphQL",
        img: "/graphql.svg",
    },
    {
        id: 6,
        title: "Apollo",
        img: "/apollo.svg",
    },
    {
        id: 3,
        title: "Next.js",
        img: "/next.svg",
    },
    {
        id: 4,
        title: "TypeScript",
        img: "/ts.svg",
    },
    {
        id: 4,
        title: "Express",
        img: "/express.svg",
    },
    {
        id: 7,
        title: "MySQL",
        img: "/mysql.svg",
    },
    {
        id: 7,
        title: "MongoDB",
        img: "/mongodb.svg",
    },
    {
        id: 7,
        title: "DynamoDB",
        img: "/dynamodb.svg",
    },
    {
        id: 19,
        title: "Redis",
        img: "/redis.svg",
    },
    {
        id: 2,
        title: "Tailwind",
        img: "/tail.svg",
    },
    {
        id: 2,
        title: "Bootstrap",
        img: "/bootstrap.svg",
    },
    {
        id: 4,
        title: "JQuery",
        img: "/jquery.svg",
    },
    {
        id: 4,
        title: "EsLint",
        img: "/eslint.svg",
    },
    {
        id: 9,
        title: "Docker",
        img: "/docker.svg",
    },
    {
        id: 10,
        title: "AWS",
        img: "/aws.svg",
    },
    {
        id: 19,
        title: "S3",
        img: "/amazons3.svg",
    },
    {
        id: 12,
        title: "Serverless",
        img: "/serverless.svg",
    },

    {
        id: 11,
        title: "Stripe",
        img: "/stripe.svg",
    },
    {
        id: 12,
        title: "Swagger",
        img: "/swagger.svg",
    },
    {
        id: 12,
        title: "Livewire",
        img: "/livewire.svg",
    },
    {
        id: 13,
        title: "Git",
        img: "/git.svg",
    },
    {
        id: 13,
        title: "GitHub",
        img: "/github.svg",
    },
    {
        id: 13,
        title: "Copilot",
        img: "/githubcopilot.svg",
    },
    {
        id: 13,
        title: "Postman",
        img: "/postman.svg",
    },

    {
        id: 14,
        title: "GSAP",
        img: "/gsap.svg",
    },
    {
        id: 15,
        title: "Three.js",
        img: "/three.svg",
    },
    {
        id: 16,
        title: "HTML5",
        img: "/html.svg",
    },
    {
        id: 16,
        title: "CSS3",
        img: "/css3.svg",
    },
    {
        id: 16,
        title: "SASS",
        img: "/sass.svg",
    },
    {
        id: 17,
        title: "Material UI",
        img: "/mui.svg",
    },
    {
        id: 18,
        title: "Figma",
        img: "/figma.svg",
    },
    {
        id: 18,
        title: "Adobe",
        img: "/adobe.svg",
    },
    {
        id: 19,
        title: "Storybook",
        img: "/storybook.svg",
    },

    {
        id: 20,
        title: "React",
        img: "/re.svg",
    },
    {
        id: 21,
        title: "Vue",
        img: "/vue.svg",
    },
    {
        id: 21,
        title: "Alpine.js",
        img: "/alpine.svg",
    },
    {
        id: 21,
        title: "Confluence",
        img: "/confluence.svg",
    },
    {
        id: 21,
        title: "WordPress",
        img: "/wordpress.svg",
    },

];