import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faSass,
  faNode,
  faBootstrap,
  faTrello,
} from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const projects = [
  {
    id: 'project1',
    name: 'nC-News API',
    buildWith: [faNode],
    github: 'https://github.com/Nesh00/news-api',
    liveUrl: 'https://nenad-nc-news-api.herokuapp.com/api',
  },
  {
    id: 'project2',
    name: 'nC-News App',
    buildWith: [faReact, faCss3],
    github: 'https://github.com/Nesh00/news-frontend',
    liveUrl: 'https://nenad-nc-news.netlify.app',
  },
  {
    id: 'project3',
    name: 'Swapify Mobile App',
    buildWith: [faReact, faTrello, faUsers],
    github: 'https://github.com/Nesh00/Swapify',
    liveUrl: 'https://northcoders.com/projects/march-2022/pivot1',
  },
  {
    id: 'project4',
    name: 'Natours',
    buildWith: [faHtml5, faSass],
    github: 'https://github.com/Nesh00/natours',
    liveUrl: 'https://natours-nenad.netlify.app/',
  },
  {
    id: 'project5',
    name: 'Forkify App',
    buildWith: [faHtml5, faSass, faJsSquare],
    github: 'https://github.com/Nesh00/forkify-app',
    liveUrl: 'https://forkify-app-nenad.netlify.app/',
  },
  {
    id: 'project6',
    name: 'Marketplace App',
    buildWith: [faReact, faCss3],
    github: '',
    liveUrl: '',
  },
  {
    id: 'project7',
    name: 'Glozzom',
    buildWith: [faHtml5, faCss3, faBootstrap],
    github: 'https://github.com/Nesh00/glozzom',
    liveUrl: 'https://glozzom-nenad.netlify.app/',
  },
  {
    id: 'project8',
    name: 'Pig Game',
    buildWith: [faHtml5, faCss3, faJsSquare],
    github: 'https://github.com/Nesh00/pig-game',
    liveUrl: 'https://pig-game-nenad.netlify.app/',
  },
  {
    id: 'project9',
    name: 'Countries App',
    buildWith: [faHtml5, faCss3, faJsSquare],
    github: 'https://github.com/Nesh00/REST-countries-API',
    liveUrl: 'https://rest-countries-api-nenad.netlify.app/',
  },
];
