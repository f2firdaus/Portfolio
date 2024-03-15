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
import chat_signup from './assets/project4/chat_signup.png'
import chat_login from './assets/project4/chat-login.png'
import chats from './assets/project4/chats.png'
import group_chat from './assets/project4/group_chat.png'
import message from './assets/project4/message.png'
import chat_profile from './assets/project4/profile.png'

const data = [
  {
    "id": 1,
    myname:"Real Time Chat App",
    "name": "chat app",
    image:chat_signup,
    "allimage": [chat_signup,chat_login,chats,group_chat,message,chat_profile],
    "description": "An online store for buying and selling products, with user authentication, product catalog, and shopping cart functionality.",
    "techStack": ["NextJs ", "Pusher","Tailwind CSS","Next Auth"],
    "project-link": "https://insta-chat-zeta.vercel.app/",
    "source-code":"https://github.com/f2firdaus/InstaChat/"
  },
  {
    "id": 2,
    myname:"Headphone Ecom Store",
    "name": "E-commerce Website",
    image:bg1,
    "allimage": [bg1,sc1,sc2,sc3,sc4,sc5],
    "description": "An online store for buying and selling products, with user authentication, product catalog, and shopping cart functionality.",
    "techStack": ["React.js ", "HTML","CSS", "ContextApi"],
    "project-link": "https://headphone-store-1.netlify.app/",
    "source-code":"https://github.com/f2firdaus/Headphone-store"
  },
  {
    "id": 3,
    myname:"Github Find Repo",
    "name": " Github Repository Finder",
    "allimage": [scn1,scn2,scn3],
    "image": bg2,
    "description": "A repository finder application that allows users to search for their repo  featuring a clean user interface.",
    "techStack": ["React.js", "HTML", "CSS"],
    "project-link": "https://sage-valkyrie-a5e338.netlify.app/",
    "source-code":"https://github.com/f2firdaus/gitfind"
    
  },
  {
    "id": 4,
    myname:"Crypto Tracker",
    "name": "Crypto Currency Tracker",
    "image": crypto1,
    "allimage": [crypto1,crypto2],
    "description": "A Crypto Currency Tracker dashboard that fetches and displays live data for different crypto, providing current prices.",
    "techStack": ["React.js","CSS","HTML"],
    "project-link": "https://cryptotrackerin.netlify.app/",
    "source-code":"https://github.com/f2firdaus/crypto-tracker"
  }

]

export default data;