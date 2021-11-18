import Memory from "../assets/projects/memory.png";
import Adopt from "../assets/projects/adopt.png";
import Farmily from "../assets/projects/farmily.png";
import Speedy from "../assets/projects/speedy.png";
import Team from "../assets/projects/team.png";
import Tracking from "../assets/projects/tracking.png";
import Trashi from "../assets/projects/trashi.png";

let project_list = [
  {
    image: Memory,
    title: "Fruits Memory Game",
    des: "Match all five pairs of fruits to win!.",
    tags: ["React", "JavaScript", "Html", "CSS"],
    links: {
      launch: "https://fruits-memory-game.netlify.app/",
      github: "https://github.com/Evelyn-ZYW/memory-game",
    },
  },
  {
    image: Adopt,
    title: "Pet Adoption App",
    des: "A pet adoption app to see available animals by their type.",
    tags: ["React", "Context", "Router", "JavaScript", "Html", "CSS"],
    links: {
      launch: "https://adopt-fur-baby.netlify.app/",
      github: "https://github.com/Evelyn-ZYW/ADOPT-ME",
    },
  },
  {
    image: Team,
    title: "Team Member List",
    des: "An app to add, delete and search team members.",
    tags: ["React", "JavaScript", "Html", "CSS", "Sass", "Styled-components"],
    links: {
      launch: "https://frontend-demo-1.netlify.app/",
      github: "https://github.com/Evelyn-ZYW/FE-Assessment-F8TCH",
    },
  },
  // {
  //   image: 'https://i.ibb.co/vkFWG2q/bbot.png',
  //   title: 'Landing Page',
  //   des:
  //     "Landing page created for Burnaby Board of Trade. The UI design was tailored to the needs of our client. All the components were coded with React. The content can be updated through CMS by our client.",
  //   tags: [
  //     'JavaScript',
  //     'Html',
  //     'Sass',
  //     'React',
  //     'GraphQL',
  //     'Gatsby',
  //     'Headless CMS',
  //   ],
  //   links: {
  //     launch: 'https://bbotmain.gatsbyjs.io/',
  //     github: 'https://github.com/HenryBcit/BBoT',
  //   },
  // },
  {
    image: Tracking,
    title: "Money Tracking App",
    des: "An unique app designed and developed for young couples to keep track of their income, bills and expenses. I am working on improving it.",
    tags: ["React", "JavaScript", "Html", "CSS"],
    links: {
      launch: "https://money-tracking-app.herokuapp.com/",
      github: "https://github.com/Evelyn-ZYW/MoneyTrackingApp",
    },
  },
  {
    image: Trashi,
    title: "Trashi Monster",
    des: "Trashi Monster was an educational app for children 5-12 providing tips on how to produce less garbage and save the environment.",
    tags: ["React", "JavaScript", "Html", "CSS", "Storybook"],
    links: {
      launch: "https://trashimonster.herokuapp.com/Home",
      github: "https://github.com/Evelyn-ZYW/TrashiMonster",
    },
  },
  {
    image: Farmily,
    title: "Farmily",
    des: "Farmily was designed as a social networking mobile app that provides a platform for BC farmers to communicate, trade, and book farm appointments.",
    tags: [
      "React",
      "ReactNative",
      "Xcode",
      "Android Studio",
      "JavaScript",
      "Html",
      "CSS",
    ],
    links: {
      // launch: '',
      github: "https://github.com/Evelyn-ZYW/FarmilyFrontEnd",
    },
  },
  {
    image: Speedy,
    title: "Speedy",
    des: "Speedy was designed as a parking lot searching app using Figma. A good front end developer understands good UI/UX, as well as the tool to create it.",
    tags: ["UI/UX Design", "Figma"],
    links: {
      launch:
        "https://www.figma.com/proto/smOW4nW6WFjUD5MddBT1y7/Assignment-10-Part-3?node-id=2%3A39&scaling=scale-down&page-id=0%3A1",
      // github: '',
    },
  },
];

export default project_list;
