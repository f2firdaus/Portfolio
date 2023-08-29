import bg1 from './assets/project1/headphone.png'
import bg2 from './assets/bg2.png'
import sc1 from './assets/project1/sc1.png' 
import sc2 from './assets/project1/sc2.png' 
import sc3 from './assets/project1/sc3.png' 
import sc4 from './assets/project1/sc4.png' 
import sc5 from './assets/project1/sc5.png' 
import scn1 from './assets/project2/sc1.png' 
import scn2 from './assets/project2/sc2.png' 
import scn3 from './assets/project2/sc3.png' 
import crypto1 from './assets/project3/crypto1.png'
import crypto2 from './assets/project3/crypto2.png';

const data = [
  {
    "id": 1,
    myname:"Headphone Ecom Store",
    "name": "E-commerce Website",
    image:bg1,
    "allimage": [bg1,sc1,sc2,sc3,sc4,sc5],
    "description": "An online store for buying and selling products, with user authentication, product catalog, and shopping cart functionality.",
    "techStack": ["React.js ", "HTML","CSS", "ContextApi"],
    "project-link":"https://headphone-store-1.netlify.app/"
  },
  {
    "id": 2,
    myname:"Github Find Repo",
    "name": " Github Repository Finder",
    "allimage": [scn1,scn2,scn3],
    "image": bg2,
    "description": "A repository finder application that allows users to search for their repo  featuring a clean user interface.",
    "techStack": ["React.js", "HTML", "CSS"],
    "project-link":"https://wondrous-trifle-74c17f.netlify.app/"
  },
  {
    "id": 3,
    myname:"Crypto Tracker",
    "name": "Crypto Currency Tracker",
    "image": crypto1,
    "allimage": [crypto1,crypto2],
    "description": "A Crypto Currency Tracker dashboard that fetches and displays live data for different crypto, providing current prices.",
    "techStack": ["React.js","CSS","HTML"],
    "project-link":"https://cryptotrackerin.netlify.app/"
  }

]

export default data;