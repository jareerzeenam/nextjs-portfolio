// Every fact on the site comes from public/Jareer_Zeenam_Resume.pdf, a public
// GitHub repository or a named LinkedIn recommendation. Nothing is invented.

export const profile = {
  name: 'Jareer Zeenam',
  role: 'Full-stack software engineer',
  email: 'jareerzeenam.28@gmail.com',
  location: 'London, UK',
  resume: '/Jareer_Zeenam_Resume.pdf',
  linkedin: 'https://www.linkedin.com/in/jareer-zeenam/',
  github: 'https://github.com/jareerzeenam',
  medium: 'https://medium.com/@jareerzeenam',
};

export const navItems = [
  { name: 'Levels', link: '#levels' },
  { name: 'Projects', link: '#projects' },
  { name: 'Recommendations', link: '#recommendations' },
  { name: 'Skills', link: '#skills' },
  { name: 'Writing', link: '#writing' },
  { name: 'Contact', link: '#contact' },
];

export type Landmark =
  | 'house'
  | 'mast'
  | 'cluster'
  | 'windmill'
  | 'observatory'
  | 'clinic'
  | 'teapot'
  | 'flag';

export type Level = {
  id: string;
  company: string;
  role: string;
  place: string;
  dates: string;
  years: string;
  landmark: Landmark;
  headline: string;
  points: string[];
  stack: string[];
  kind: 'work' | 'education' | 'next';
};

export const levels: Level[] = [
  {
    id: 'seven-media',
    company: 'Seven Media Group',
    role: 'Web Developer',
    place: 'Sri Lanka',
    dates: 'Oct 2018 – Jun 2020',
    years: '2018–20',
    landmark: 'house',
    headline: 'Designed and built websites, prototypes and web apps for clients.',
    points: [
      'Designed and developed web applications, prototypes, user interfaces and websites for clients.',
      'Turned specifications from analysts and designers into working applications, with data integrated into databases and sites.',
      'Trained and supported clients, and helped plan and estimate projects.',
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
    kind: 'work',
  },
  {
    id: 'elegant-media',
    company: 'Elegant Media',
    role: 'Associate Software Engineer, PHP Laravel',
    place: 'Australia, remote',
    dates: 'Oct 2020 – Dec 2021',
    years: '2020–21',
    landmark: 'mast',
    headline: 'REST APIs for web and mobile apps, with Stripe payments.',
    points: [
      'Developed REST APIs for web and mobile applications with Laravel and the TALL stack.',
      'Integrated the Stripe payment gateway into web and mobile applications.',
      'Created libraries shared across the iOS, Android and PHP teams, and documented APIs with OpenAPI (Swagger).',
    ],
    stack: ['Laravel', 'Livewire', 'Inertia.js', 'Stripe', 'Swagger'],
    kind: 'work',
  },
  {
    id: 'adventus',
    company: 'Adventus Education',
    role: 'Software Engineer, Full Stack',
    place: 'Australia, remote',
    dates: 'Dec 2021 – Feb 2023',
    years: '2021–23',
    landmark: 'cluster',
    headline: 'Moved the platform to microservices for tens of thousands of concurrent users.',
    points: [
      'Moved the platform to a microservices architecture with Node.js, GraphQL, Apollo Server, TypeScript, schema stitching and Sequelize.',
      'Fixed performance on a platform serving tens of thousands of concurrent users with query optimisation, caching, async processing, request chunking and AWS load balancers.',
      'Built RESTful APIs in Laravel and Express.js, tested with PHPUnit and Jest, and kept the CI/CD pipelines running.',
      'Built front-end features with the Vue 3 Composition API, Vuex and Vue Router.',
    ],
    stack: ['Node.js', 'GraphQL', 'Apollo', 'TypeScript', 'AWS', 'Vue'],
    kind: 'work',
  },
  {
    id: 'gapstars',
    company: 'Gapstars',
    role: 'Software Engineer',
    place: 'Netherlands, remote',
    dates: 'Feb 2023 – Aug 2023',
    years: '2023',
    landmark: 'windmill',
    headline: 'Full-stack features for the Certscanner product.',
    points: [
      'Delivered full-stack features for Certscanner across back end, front end, microservices and APIs with Laravel, Vue.js, Docker, Elasticsearch, Redis and MinIO.',
      'Built reusable Vue.js components with Pinia state and high test coverage in Vitest.',
      'Led the redesign of the main company website.',
      'Reviewed code against SOLID, OOP and TDD practices, cutting code-related bugs.',
    ],
    stack: ['Laravel', 'Vue', 'Pinia', 'Docker', 'Redis', 'Vitest'],
    kind: 'work',
  },
  {
    id: 'msc',
    company: 'University of East London',
    role: 'MSc Artificial Intelligence and Data Science, Distinction',
    place: 'London, UK',
    dates: '2024',
    years: '2024',
    landmark: 'observatory',
    headline: 'MSc in AI and Data Science, awarded with Distinction.',
    points: [
      'MSc Artificial Intelligence and Data Science, Distinction.',
      'Machine learning, data science and Apache Spark with Python (PySpark).',
      'Before this: BSc (Hons) Software Engineering, First Class, Solent University (2020).',
    ],
    stack: ['Python', 'PySpark', 'Machine learning'],
    kind: 'education',
  },
  {
    id: 'medic-care',
    company: 'Medic Care Direct',
    role: 'Full Stack Developer, part-time',
    place: 'London, UK',
    dates: 'Apr 2024 – Sep 2025',
    years: '2024–25',
    landmark: 'clinic',
    headline: 'A patient management system with 1,000+ registered users.',
    points: [
      'Built and maintained a patient management system with 1,000+ registered users in Laravel, Inertia.js, Vue.js and MySQL.',
      'Made appointment scheduling and record-keeping faster for the clinic.',
      'Optimised and secured the company WordPress site, and shipped changes from user feedback.',
    ],
    stack: ['Laravel', 'Inertia.js', 'Vue', 'MySQL', 'WordPress'],
    kind: 'work',
  },
  {
    id: 'teapot',
    company: 'Teapot Creative',
    role: 'Software Developer',
    place: 'Somerset, UK, hybrid',
    dates: 'Oct 2025 – Oct 2026',
    years: '2025–26',
    landmark: 'teapot',
    headline: 'Client builds, plus a support desk that turns bug reports into work.',
    points: [
      'Built a support desk for clients, developers and admins that turns bug reports from non-technical clients into development work.',
      'Shipped features across Laravel, Symfony, WordPress and PrestaShop through every stage of the lifecycle.',
      'Delivered pixel-perfect, responsive client sites with designers, working directly with clients.',
      'Helped the team adopt agentic AI automation and took part in code reviews.',
    ],
    stack: ['Laravel', 'Symfony', 'WordPress', 'PrestaShop'],
    kind: 'work',
  },
  {
    id: 'next',
    company: 'Your team',
    role: 'Next level',
    place: 'London, or relocating',
    dates: 'Available now',
    years: 'Now',
    landmark: 'flag',
    headline: 'Open to work, available immediately and open to relocation.',
    points: [],
    stack: [],
    kind: 'next',
  },
];

export const facts = [
  { value: '6+ years', label: 'building web apps, APIs and microservices' },
  { value: '1,000+', label: 'registered users on the patient system at Medic Care Direct' },
  { value: 'Distinction', label: 'MSc in Artificial Intelligence and Data Science' },
  { value: 'First Class', label: 'BSc (Hons) in Software Engineering' },
];

export const projects = [
  {
    id: 'ai-resume',
    title: 'AI Resume Builder',
    description:
      'A SaaS app that helps people write resumes with AI, with sign-in, tiered subscriptions and custom options for paid users.',
    img: '/ai-resume.webp',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
    link: 'https://github.com/jareerzeenam/nextjs-ai-resume-builder',
  },
  {
    id: 'webshop',
    title: 'Laravel Web Shop',
    description:
      'An online shop with Stripe checkout, built on Laravel and Livewire with TypeScript and Tailwind.',
    img: '/webshop.webp',
    stack: ['Laravel', 'Livewire', 'Stripe', 'Tailwind'],
    link: 'https://github.com/jareerzeenam/laravel-webshop',
  },
  {
    id: 'forum',
    title: 'Laravel Forum',
    description:
      'A discussion forum on Laravel Jetstream with Vue 3 and Inertia.js, written test-first with Pest.',
    img: '/forum.webp',
    stack: ['Laravel', 'Vue', 'Inertia.js', 'Pest'],
    link: 'https://github.com/jareerzeenam/laravel-forum',
  },
  {
    id: 'graphql-blog',
    title: 'GraphQL Blog',
    description:
      'A blog API on Node.js with Apollo Server, Express and MongoDB, tested with Jest.',
    img: '/graphql.webp',
    stack: ['Node.js', 'GraphQL', 'Apollo', 'MongoDB'],
    link: 'https://github.com/jareerzeenam/graphql-blog',
  },
];

// `excerpt` is always a verbatim sentence from `quote`.
export const testimonials = [
  {
    name: 'Hayden Pitout',
    title: 'Head of Product Platform Engineering, Adventus.io',
    image: '/hayden.webp',
    excerpt:
      'In a very short period of time Jareer went from strength to strength, sharpening his skills in Vue.js, GraphQL, AWS and Microservice Architecture.',
    quote:
      "Jareer first joined Adventus as an Associate Software Engineer. What drew me to his CV from all of the others was his inquisitive mindset (a superpower, important in technology) and zest to learn new technologies. What a great hire! In a very short period of time Jareer went from strength to strength, sharpening his skills in Vue.js, GraphQL, AWS and Microservice Architecture. And soon after, being promoted to Software Engineer. It has been an absolute pleasure having Jareer in the team, he has a bright future ahead and I highly recommend him to any company looking for new talent.",
  },
  {
    name: 'Lizzie Tottle',
    title: 'Founder and Director, Teapot Creative',
    image: '/lizzie.webp',
    excerpt:
      'His AI and code based knowledge is great and he always delivers high quality work.',
    quote:
      'Jareer is a fantastic team member. We have loved having him at Teapot for the past year. His AI and code based knowledge is great and he always delivers high quality work. His attention to detail and reliability are also to be credited. However, his biggest asset is his personality - a truly lovely person and a pleasure to work with.',
  },
  {
    name: 'Dom Fallows',
    title: 'Account Manager, Teapot Creative',
    image: '/dom.webp',
    excerpt:
      'Anyone requiring work done efficiently and with great integrity will find that he delivers over and over.',
    quote:
      'Jareer is not only one of the most outstanding peoples I’ve come across in the work place he is one of the most talented. He has a natural acumen to accompany his superb skill set. Anyone requiring work done efficiently and with great integrity will find that he delivers over and over. A natural problem solver and one of the most genuine people I have met in my life in or out of the workplace.',
  },
  {
    name: 'Alexon Simpkin',
    title: 'Head of Development, Teapot Creative',
    image: '/alexon.webp',
    excerpt:
      'He is constantly honing his craft in his own time, keeping up to date with modern tech and methodologies and putting them into practice.',
    quote:
      "Jareer is an excellent developer, highly analytical and skilled. He is constantly honing his craft in his own time, keeping up to date with modern tech and methodologies and putting them into practice. On top of his skills as a developer, he's also just a great guy.",
  },
  {
    name: 'Sajini Rathnayake',
    title: 'Senior Quality Assurance Engineer, Adventus.io',
    image: '/sajini.webp',
    excerpt:
      'His ability to listen to product demands, and quickly understand what needs to be done and then get it done is remarkable.',
    quote:
      'Jareer is a great developer with ninja engineering skills! His ability to listen to product demands, and quickly understand what needs to be done and then get it done is remarkable. He is a person who knows his craft well and is able to deliver high-quality work. When working with others with different skill sets, he is able to explain the technical side of his work well and is also able to absorb what needs to be done in order to achieve the desired outcome. Most of all, he is a good person and easy to work with.',
  },
  {
    name: 'Chinthaka Dilan F',
    title: 'Technical Lead, Gapstars',
    image: '/chinthaka.webp',
    excerpt:
      'Jareer has impressed me with his ability to quickly understand complex software development concepts and execute them with a high level of accuracy.',
    quote:
      'I am writing to highly recommend Jareer, who I have had the pleasure of working with as a team mate at adventus.io. Jareer works as a Software Engineer and has consistently demonstrated his exceptional technical skills and passion for software development. Throughout his time at adventus.io, Jareer has impressed me with his ability to quickly understand complex software development concepts and execute them with a high level of accuracy. He has a strong work ethic and is always eager to take on new challenges and improve his skills. In addition to his technical abilities, Jareer is an energetic and enthusiastic individual who brings a positive energy to the workplace. He is always willing to lend a helping hand to his colleagues and is a great team player. I have no doubt that Jareer will continue to excel in his career as a software engineer and I highly recommend him for any future opportunities.',
  },
  {
    name: 'Senthurkumaran Sivasubramaniam',
    title: 'Senior Software Engineer, Gapstars',
    image: '/senthur.webp',
    excerpt:
      'His unwavering dedication consistently leads to flawless task completion, and he brings a wealth of knowledge to our team.',
    quote:
      "I wholeheartedly recommend Jareer as a Software Engineer of exceptional skill and unwavering commitment to the world of technology. His unwavering dedication consistently leads to flawless task completion, and he brings a wealth of knowledge to our team. Jareer's eagerness to learn and his willingness to share his expertise make him a true asset to any team.",
  },
];

type Skill = { name: string; icon?: string };

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Back end',
    skills: [
      { name: 'PHP', icon: '/php.svg' },
      { name: 'Laravel', icon: '/laravel.svg' },
      { name: 'Symfony', icon: '/icons/symfony.svg' },
      { name: 'Node.js', icon: '/node.svg' },
      { name: 'Express', icon: '/express.svg' },
      { name: 'GraphQL', icon: '/graphql.svg' },
      { name: 'Apollo Server', icon: '/apollo.svg' },
      { name: 'Livewire', icon: '/livewire.svg' },
      { name: 'REST and OpenAPI', icon: '/swagger.svg' },
    ],
  },
  {
    title: 'Front end',
    skills: [
      { name: 'TypeScript', icon: '/ts.svg' },
      { name: 'JavaScript', icon: '/javascript.svg' },
      { name: 'Next.js', icon: '/next.svg' },
      { name: 'React', icon: '/re.svg' },
      { name: 'Vue.js', icon: '/vue.svg' },
      { name: 'Inertia.js', icon: '/icons/inertia.svg' },
      { name: 'Tailwind CSS', icon: '/tail.svg' },
      { name: 'Sass', icon: '/sass.svg' },
      { name: 'Three.js', icon: '/three.svg' },
    ],
  },
  {
    title: 'Data',
    skills: [
      { name: 'MySQL', icon: '/mysql.svg' },
      { name: 'MongoDB', icon: '/mongodb.svg' },
      { name: 'DynamoDB', icon: '/dynamodb.svg' },
      { name: 'Redis', icon: '/redis.svg' },
      { name: 'Elasticsearch', icon: '/icons/elasticsearch.svg' },
      { name: 'Supabase', icon: '/icons/supabase.svg' },
      { name: 'Python and PySpark', icon: '/python.svg' },
    ],
  },
  {
    title: 'Cloud and delivery',
    skills: [
      { name: 'AWS', icon: '/aws.svg' },
      { name: 'S3', icon: '/amazons3.svg' },
      { name: 'Serverless', icon: '/serverless.svg' },
      { name: 'Docker', icon: '/docker.svg' },
      { name: 'Cloudflare', icon: '/icons/cloudflare.svg' },
      { name: 'CI/CD and Git', icon: '/git.svg' },
      { name: 'GitHub', icon: '/github.svg' },
    ],
  },
  {
    title: 'Testing and practice',
    skills: [
      { name: 'PHPUnit' },
      { name: 'Pest', icon: '/pest.svg' },
      { name: 'Jest', icon: '/jest.svg' },
      { name: 'Vitest', icon: '/icons/vitest.svg' },
      { name: 'TDD, SOLID, code review' },
      { name: 'Postman', icon: '/postman.svg' },
    ],
  },
  {
    title: 'Commerce and CMS',
    skills: [
      { name: 'WordPress', icon: '/wordpress.svg' },
      { name: 'WooCommerce', icon: '/icons/woocommerce.svg' },
      { name: 'PrestaShop', icon: '/icons/prestashop.svg' },
      { name: 'Stripe', icon: '/stripe.svg' },
    ],
  },
];

export const socialMedia = [
  { name: 'LinkedIn', link: profile.linkedin },
  { name: 'GitHub', link: profile.github },
  { name: 'Medium', link: profile.medium },
  { name: 'X', link: 'https://x.com/Jareer28' },
];

export const blogs = [
  {
    title: 'How our side hustle became a full-fledged product',
    description: 'Architecture, teamwork and a Laravel and Vue stack, from a side project to a product the client owned.',
    link: 'https://medium.com/@jareerzeenam/how-our-side-hustle-became-a-full-fledged-product-lessons-from-building-a-full-stack-app-with-d9c808cd54f1',
  },
  {
    title: 'From junior to senior: what really sets senior engineers apart?',
    description: 'Scale, complexity and responsibility separate senior engineers from juniors, not syntax.',
    link: 'https://medium.com/@jareerzeenam/from-junior-to-senior-what-really-sets-senior-software-engineers-apart-cdc633b95fff',
  },
  {
    title: 'GraphQL and Apollo Server with Next.js 13.4 (App Directory)',
    description: 'A step-by-step guide to running a GraphQL API inside a Next.js app.',
    link: 'https://medium.com/@jareerzeenam/implementing-graphql-and-apollo-server-with-next-js-13-4-a-simple-guide-app-directory-77e38eb697e3',
  },
  {
    title: 'How to GraphQL? Explain like I’m 5',
    description: 'GraphQL basics in small steps and plain words.',
    link: 'https://medium.com/@jareerzeenam/how-to-graphql-explain-like-im-5-78c31e3d0fd5',
  },
  {
    title: 'Setting up the Serverless Framework with AWS',
    description: 'Setting up Serverless on AWS, step by step.',
    link: 'https://medium.com/@jareerzeenam/setting-up-serverless-framework-with-aws-19736402c146',
  },
];
