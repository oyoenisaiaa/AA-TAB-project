import React, { useEffect } from 'react';
import { TiSocialLinkedin } from "react-icons/ti";

// Import images
// import tinaImage from '../assets/team/Tina Ominiabohs- Nigeria_.jpg';
// import taiwoImage from '../assets/team/Taiwo Abdrasheed-Babatunde-Nigeria.jpg';
// import vanessaImage from '../assets/team/Vanessa Nelson-Dorglo.png';
// import temitopeImage from '../assets/team/Temitope Adebayo, Nigeria_.jpg';
// import senaImage from '../assets/team/Sena Dzokoto _ Ghana.jpg'; 
// import unwanaImage from '../assets/team/Unwanaonong Williams-Nigeria.jpg';
// import unomaImage from '../assets/team/Unoma Okoro_Nigeria.jpg';
// import vanessanzImage from '../assets/team/Vanessa Nzurum- Nigeria.jpg';
// import toluwaniImage from '../assets/team/Toluwani Oladapo_Nigeria.jpg';
// import ariyoImage from '../assets/team/Ariyo Oluwadamilola. Nigeria_.png';
// import elizabethImage from '../assets/team/Elizabeth Olaniyan - Nigeria_.jpg';
// import ceciliaImage from '../assets/team/Cecilia Ajeleye - Nigeria.png';
// // import zinleImage from '../assets/team/Dladla Zinhle Fiona- Eswatini.jpg';
// import ebosetaleImage from '../assets/team/Ebosetale Sarah, Nigeria_.jpg';
// // import ebeleImage from '../assets/team/Ebele Chukwu - Nigeria.jpg';
// // import ebunoluwaImage from '../assets/team/Ebunoluwa Oluwabukola Moronkola.png';
// import ogunsebikanImage from '../assets/team/Janet ogunsebikan -Nigeria.jpg';
// // import celineImage from '../assets/team/Celine Simon.png';
// // import AderinsolaImage from '../assets/team/';
// // import SharonImage from '../assets/team/OTIEH SHARON DABERECHI,_NIGERIA.jpg';
// import TaiwoImage from '../assets/team/Taiwo Rafiu, Nigeria_.jpg';
// // import TomisinImage from '../assets/team/Tomisin_Omitogun_Nigeria.jpg';
// import HamidatImage from '../assets/team/Hamidat Mohammed 2-min.jpeg';
// import MaurineImage from '../assets/team/Taiwo Rafiu, Nigeria_.jpg';
// import RashidatImage from '../assets/team/Rashidat Tajudeen_Nigeria.jpg';
// // import MaureenImage from '../assets/team/';
// import OguntolaAmeenatImage from '../assets/team/Ameenat_Oguntola_Nigeria.png';
// import OteneImage from '../assets/team/Otene Ojimaojo (Nigeria).jpg';
// import OutekelekImage from '../assets/team/OUTEKELEK-CAMEROON.jpeg';
// import BlessingImage from '../assets/team/Blessing Ozoemena-Nigeria.png';
// // import PriscillaImage from '../assets/team/Priscilla_Agyapong_Ghana.jpg';
// import RachaelImage from '../assets/team/NWOBODO RACHAEL CHINWENDU.jpg';
// // import EzinneImage from '../assets/team/Maduka Ezinne Mary-Nigeria.png';
// // import OluwatosinImage from '../assets/team/';
// import OyoenisaiImage from '../assets/team/Oyoenisai Andrew-Essien.png';
// import OlamideImage from '../assets/team/Fabeyo Olamide.png';
// import ImmaculataImage from '../assets/team/Immaculata Chidimma - Nigeria.jpg';
// // import RachaelOlaosunImage from '../assets/team/Rachael _ Olaosun_ Nigeria_.jpg';
// import HephzImage from '../assets/team/Hephzibah Owoeye - Nigeria.jpg';
// import DaraImage from '../assets/team/Olowe Oluwadarasimi-Nigeria.jpg';
// import JoyImage from '../assets/team/Joy Oghogho Osawemwenze - Nigeria_.jpg';


// const teamMembers = [
//   {
//     name: "Tina OmIniabohs",
//     imgSrc: tinaImage, 
//     description: "Scrum Mastery",
//     description2: "Chief Product Manager",
//     linkedin: "http://linkedin.com/in/tina-ominiabohs-803a13264",
//   },
//   {
//     name: "Taiwo Hameedah Abdrasheed-Babatunde",
//     imgSrc: taiwoImage, 
//     description: "Scrum Mastery",
//     linkedin: "https://www.linkedin.com/in/taiwo-abdrasheed-babatunde-4a9735114",
//   },
//   {
//     name: "Vanessa Nelson-Dorglo",
//     imgSrc: vanessaImage, 
//     description: "Scrum Mastery",
//     linkedin: "https://www.linkedin.com/in/vanessa-nelson-dorglo-a17324169/",
//   },
//   {
//     name: "Temitope Adebayo",
//     imgSrc: temitopeImage, 
//     description: "Scrum Mastery",
//     linkedin: "https://pt.linkedin.com/in/topeadebayo1234",
//   },
//   {
//     name: "Sena Dzokoto",
//     imgSrc: senaImage,
//     description: "Scrum mastery",
//     linkedin: "https://www.linkedin.com/in/sena-dzokoto",
//   },
//   {
//     name: "Unwanaobong Williams",
//     imgSrc: unwanaImage, 
//     description: "Product Management",
//     linkedin: "https://www.linkedin.com/in/unwanaobong",
//   },
//   {
//     name: "Unoma Okoro",
//     imgSrc: unomaImage, 
//     description: "Product Management",
//     linkedin: "https://www.linkedin.com/in/unomaokoro",
//   },
//   {
//     name: "Nzurum Vanessa Chinonyerem",
//     imgSrc: vanessanzImage, 
//     description: "Product Management",
//     linkedin: "https://www.linkedin.com/in/vanessa-nzurum-37964322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//   },
//   {
//     name: "Oladapo Toluwani",
//     imgSrc: toluwaniImage, 
//     description: "Product Management",
//     linkedin: "https://www.linkedin.com/in/toluwani-o-5b67301b0",
//   },
//   {
//     name: "Ariyo Oluwadamilola Bukola",
//     imgSrc: ariyoImage, 
//     description: "Product Management",
//     linkedin: "https://www.linkedin.com/in/ariyo-oluwadamilola-b-2a956a248",
//   },
//   {
//     name: "Olaniyan Elizabeth",
//     imgSrc: elizabethImage, 
//     description: "UI/UX Design",
//     linkedin: "https://www.linkedin.com/in/elizabeth-olaniyan-50418b271",
//   },
//   {
//     name: "Cecilia Ajeleye",
//     imgSrc: ceciliaImage, 
//     description: "UI/UX Design",
//     linkedin: "http://www.linkedin.com/in/dacececi",
//   },
//   // {
//   //   name: "Zinhle Fiona Dladla",
//   //   imgSrc: zinleImage, 
//   //   description: "UI/UX Design",
//   //   linkedin: "",
//   // },
//   {
//     name: "Ebosetale Sarah Agboifoh",
//     imgSrc: ebosetaleImage, 
//     description: "UI/UX Design",
//     linkedin: "https://www.linkedin.com/in/ebosetaleagboifoh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   // {
//   //   name: "Ebele Chukwu",
//   //   imgSrc: ebeleImage, 
//   //   description: "UI/UX Design",
//   //   linkedin: "",
//   // },
//   // {
//   //   name: "Ebunoluwa Oluwabukola Moronkola",
//   //   imgSrc: ebunoluwaImage, 
//   //   description: "UI/UX Design",
//   //   linkedin: "",
//   // },
//   {
//     name: "Ogunsebikan Janet YEMISI",
//     imgSrc: ogunsebikanImage, 
//     description: "UI/UX Design",
//     linkedin: "https://www.linkedin.com/in/janet-ogunsebikan-831594122",
//   },
//   // {
//   //   name: "Celine Simon",
//   //   imgSrc: celineImage, 
//   //   description: "UI/UX Design",
//   //   linkedin: "",
//   // },
//   // {
//   //   name: "Aderinsola Folasade",
//   //   imgSrc: AderinsolaImage, 
//   //   description: "Online Branding and Marketing",
//   //   linkedin: "",
//   // },
//   // {
//   //   name: "Sharon Otieh",
//   //   imgSrc: SharonImage, 
//   //   description: "Online Branding and Marketing",
//   //   linkedin: "",
//   // },
//   {
//     name: "Taiwo Rafiu",
//     imgSrc: TaiwoImage, 
//     description: "Online Branding and Marketing",
//     linkedin: "https://www.linkedin.com/in/taiwo-rafiu-211b69233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   // {
//   //   name: "Tomisin Omitogun",
//   //   imgSrc: TomisinImage, 
//   //   description: "Online Branding and Marketing",
//   //   linkedin: "",
//   // },
//   {
//     name: "Hamidat Mohammed",
//     imgSrc: HamidatImage, 
//     description: "Artificial Intelligence",
//     linkedin: "https://www.linkedin.com/in/hamidat-mohammed?trk=contact-info",
//   },
//   {
//     name: "Maurine Chebet",
//     imgSrc: MaurineImage, 
//     description: "Artificial Intelligence",
//     linkedin: "https://www.linkedin.com/in/maurine-chebet-849922147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   {
//     name: "Rashidat Tajudeen",
//     imgSrc: RashidatImage, 
//     description: "Data Science and Machine Learning",
//     linkedin: "https://www.linkedin.com/in/rashidat-tajudeen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   // {
//   //   name: "Maureen Okoli",
//   //   imgSrc: MaureenImage, 
//   //   description: "Data Science and Machine Learning",
//   //   linkedin: "",
//   // },
//   {
//     name: " Oguntola Ameenat Ibitola",
//     imgSrc: OguntolaAmeenatImage, 
//     description: "Data Science and Machine Learning",
//     linkedin: "https://www.linkedin.com/in/ameenat-oguntola-321286318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//   },
//   {
//     name: "Otene Ojimaojo Eunice",
//     imgSrc: OteneImage, 
//     description: "Data Science and Machine Learning",
//     linkedin: "https://www.linkedin.com/in/ojimaojo-eunice-otene-250b89185",
//   },
//   {
//     name: "LILIANE CHARLIE OUTEKELEK EKATH",
//     imgSrc: OutekelekImage, 
//     description: "Data Science and Machine Learning",
//     linkedin: "https://www.linkedin.com/in/charlie-liliane-outekelek-ekath-947b7b52/",
//   },
//   {
//     name: "Blessing Ozoemena",
//     imgSrc: BlessingImage, 
//     description: "Data Science and Machine Learning",
//     linkedin: "https://www.linkedin.com/in/blessing-ozoemena-70106023b",
//   },
//   // {
//   //   name: "Priscilla Agyapong",
//   //   imgSrc: PriscillaImage, 
//   //   description: "Data Science and Machine Learning",
//   //   linkedin: "",
//   // },
//   {
//     name: "Nwobodo Rachael Chinwendu",
//     imgSrc: RachaelImage, 
//     description: "Data Science and Machine Learning",
//     linkedin: "https://www.linkedin.com/in/rachael-nwobodo-487a16102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   // {
//   //   name: "Ezinne Mary Maduka",
//   //   imgSrc: EzinneImage, 
//   //   description: "Data Science and Machine Learning",
//   //   linkedin: "",
//   // },
//   // {
//   //   name: "Oluwatosin Olotu",
//   //   imgSrc: OluwatosinImage, 
//   //   description: "Data Science and Machine Learning",
//   //   linkedin: "",
//   // },
//   {
//     name: "Oyoenisai Andrew-Essien",
//     imgSrc: OyoenisaiImage, 
//     description: "Front-End Development",
//     linkedin: "https://www.linkedin.com/in/oyoenisaiaa/",
//   },
//   {
//     name: "Fabeyo Olamide",
//     imgSrc: OlamideImage, 
//     description: "Front-End Development",
//     linkedin: "https://www.linkedin.com/in/fabeyo-olamide-86ab9613b",
//   },
//   {
//     name: "Mmadu Immaculata Chidimma",
//     imgSrc: ImmaculataImage, 
//     description: "Front-End Development",
//     linkedin: "https://www.linkedin.com/in/immaculata-chidimma-7a2b26289-profile?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   // {
//   //   name: "Rachael Olaosun",
//   //   imgSrc: RachaelOlaosunImage, 
//   //   description: "Front-End Development",
//   //   linkedin: "",
//   // },
//   {
//     name: "Hephzibah Owoeye",
//     imgSrc: HephzImage, 
//     description: "Back-End Development",
//     linkedin: "https://www.linkedin.com/in/hephzibah-owoeye",
//   },
//   {
//     name: "Olowe Oluwadarasimi",
//     imgSrc: DaraImage, 
//     description: "Back-End Development",
//     linkedin: "https://www.linkedin.com/in/olowe-oluwadarasimi-179b7822a",
//   },
//   {
//     name: "Joy Oghogho Osawemwenze",
//     imgSrc: JoyImage, 
//     description: "Back-End Development",
//     linkedin: "https://www.linkedin.com/in/joy-oghogho-osawemwenze-88881412a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
// ];



// Import images - Alphabetical order of names in array except for CPM

import tinaImage from '../assets/team/Tina Ominiabohs- Nigeria_.jpg';
import taiwoImage from '../assets/team/Taiwo Abdrasheed-Babatunde-Nigeria.jpg';
import vanessaImage from '../assets/team/Vanessa Nelson-Dorglo.png';
import temitopeImage from '../assets/team/Temitope Adebayo, Nigeria_.jpg';
import senaImage from '../assets/team/Sena Dzokoto _ Ghana.jpg'; 
import unwanaImage from '../assets/team/Unwanaonong Williams-Nigeria.jpg';
import unomaImage from '../assets/team/Unoma Okoro_Nigeria.jpg';
import vanessanzImage from '../assets/team/Vanessa Nzurum- Nigeria.jpg';
import toluwaniImage from '../assets/team/Toluwani Oladapo_Nigeria.jpg';
import ariyoImage from '../assets/team/Ariyo Oluwadamilola. Nigeria_.png';
import elizabethImage from '../assets/team/Elizabeth Olaniyan - Nigeria_.jpg';
import ceciliaImage from '../assets/team/Cecilia Ajeleye - Nigeria.png';
import zinleImage from '../assets/team/Dladla Zinhle Fiona- Eswatini.jpg';
import ebosetaleImage from '../assets/team/Ebosetale Sarah, Nigeria_.jpg';
import ogunsebikanImage from '../assets/team/Janet ogunsebikan -Nigeria.jpg';
import celineImage from '../assets/team/Celine Simon.png';
import TaiwoRImage from '../assets/team/Taiwo Rafiu, Nigeria_.jpg';
import TomisinImage from '../assets/team/Tomisin_Omitogun_Nigeria.jpg';
import HamidatImage from '../assets/team/Hamidat Mohammed 2-min.jpeg';
import MaurineImage from '../assets/team/Maurine Chebet.png';
import RashidatImage from '../assets/team/Rashidat Tajudeen_Nigeria.jpg';
import OguntolaAmeenatImage from '../assets/team/Ameenat_Oguntola_Nigeria.png';
import OteneImage from '../assets/team/Otene Ojimaojo (Nigeria).jpg';
import OutekelekImage from '../assets/team/OUTEKELEK-CAMEROON.jpeg';
import BlessingImage from '../assets/team/Blessing Ozoemena-Nigeria.png';
import PriscillaImage from '../assets/team/Priscilla_Agyapong_Ghana.jpg';
import RachaelImage from '../assets/team/NWOBODO RACHAEL CHINWENDU.jpg';
import OyoenisaiImage from '../assets/team/Oyoenisai Andrew-Essien.png';
import OlamideImage from '../assets/team/Fabeyo Olamide.png';
import ImmaculataImage from '../assets/team/Immaculata Chidimma - Nigeria.jpg';
import HephzImage from '../assets/team/Hephzibah Owoeye - Nigeria.jpg';
import DaraImage from '../assets/team/Olowe Oluwadarasimi-Nigeria.jpg';
import JoyImage from '../assets/team/Joy Oghogho Osawemwenze - Nigeria_.jpg';
import ebeleImage from '../assets/team/Ebele Chukwu - Nigeria.jpg';
import RachaelOlaosunImage from '../assets/team/Rachael _ Olaosun_ Nigeria_.jpg';
// import AderinsolaImage from '../assets/team/';
// import ebunoluwaImage from '../assets/team/Ebunoluwa Oluwabukola Moronkola.png';
// import EzinneImage from '../assets/team/Maduka Ezinne Mary-Nigeria.png';
// import MaureenImage from '../assets/team/';
// import OluwatosinImage from '../assets/team/';
// import SharonImage from '../assets/team/OTIEH SHARON DABERECHI,_NIGERIA.jpg';



const teamMembers = [
  {
    name: "Tina OmIniabohs",
    imgSrc: tinaImage, 
    description: "Scrum Mastery",
    description2: "Chief Product Manager",
    linkedin: "http://linkedin.com/in/tina-ominiabohs-803a13264",
  },
  // {
  //   name: "Aderinsola Folasade",
  //   imgSrc: AderinsolaImage, 
  //   description: "Online Branding and Marketing",
  //   linkedin: "",
  // },
  {
    name: "Ariyo Oluwadamilola Bukola",
    imgSrc: ariyoImage, 
    description: "Product Management",
    linkedin: "https://www.linkedin.com/in/ariyo-oluwadamilola-b-2a956a248",
  },
  {
    name: "Blessing Ozoemena",
    imgSrc: BlessingImage, 
    description: "Data Science and Machine Learning",
    linkedin: "https://www.linkedin.com/in/blessing-ozoemena-70106023b",
  },
  {
    name: "Cecilia Ajeleye",
    imgSrc: ceciliaImage, 
    description: "UI/UX Design",
    linkedin: "http://www.linkedin.com/in/dacececi",
  },
  {
    name: "Celine Simon",
    imgSrc: celineImage, 
    description: "UI/UX Design",
    linkedin: " https://www.linkedin.com/in/celine-simon-320365203",
  },
  {
    name: "Ebele Yvonne Chukwu",
    imgSrc: ebeleImage, 
    description: "UI/UX Design",
    linkedin: "https://www.linkedin.com/in/ebele-chukwu-3b904690",
  },
  {
    name: "Ebosetale Sarah Agboifoh",
    imgSrc: ebosetaleImage, 
    description: "UI/UX Design",
    linkedin: "https://www.linkedin.com/in/ebosetaleagboifoh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // {
  //   name: "Ebunoluwa Oluwabukola Moronkola",
  //   imgSrc: ebunoluwaImage, 
  //   description: "UI/UX Design",
  //   linkedin: "",
  // },
  // {
  //   name: "Ezinne Mary Maduka",
  //   imgSrc: ezinneImage, 
  //   description: "Data Science and Machine Learning",
  //   linkedin: "",
  // },
  {
    name: "Fabeyo Olamide",
    imgSrc: OlamideImage, 
    description: "Front-End Development",
    linkedin: "https://www.linkedin.com/in/fabeyo-olamide-86ab9613b",
  },
  {
    name: "Hamidat Mohammed",
    imgSrc: HamidatImage, 
    description: "Artificial Intelligence",
    linkedin: "https://www.linkedin.com/in/hamidat-mohammed?trk=contact-info",
  },
  {
    name: "Hephzibah Owoeye",
    imgSrc: HephzImage, 
    description: "Back-End Development",
    linkedin: "https://www.linkedin.com/in/hephzibah-owoeye",
  },
  {
    name: "Joy Oghogho Osawemwenze",
    imgSrc: JoyImage, 
    description: "Back-End Development",
    linkedin: "https://www.linkedin.com/in/joy-oghogho-osawemwenze-88881412a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "LILIANE CHARLIE OUTEKELEK EKATH",
    imgSrc: OutekelekImage, 
    description: "Data Science and Machine Learning",
    linkedin: "https://www.linkedin.com/in/charlie-liliane-outekelek-ekath-947b7b52/",
  },
  {
    name: "Maurine Chebet",
    imgSrc: MaurineImage, 
    description: "Artificial Intelligence",
    linkedin: "https://www.linkedin.com/in/maurine-chebet-849922147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // {
  //   name: "Maureen Okoli",
  //   imgSrc: MaureenImage, 
  //   description: "Data Science and Machine Learning",
  //   linkedin: "",
  // },
  {
    name: "Mmadu Immaculata Chidimma",
    imgSrc: ImmaculataImage, 
    description: "Front-End Development",
    linkedin: "https://www.linkedin.com/in/immaculata-chidimma-7a2b26289-profile?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Nwobodo Rachael Chinwendu",
    imgSrc: RachaelImage, 
    description: "Data Science and Machine Learning",
    linkedin: "https://www.linkedin.com/in/rachael-nwobodo-487a16102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Nzurum Vanessa Chinonyerem",
    imgSrc: vanessanzImage, 
    description: "Product Management",
    linkedin: "https://www.linkedin.com/in/vanessa-nzurum-37964322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Ogunsebikan Janet YEMISI",
    imgSrc: ogunsebikanImage, 
    description: "UI/UX Design",
    linkedin: "https://www.linkedin.com/in/janet-ogunsebikan-831594122",
  },
  {
    name: "Oguntola Ameenat Ibitola",
    imgSrc: OguntolaAmeenatImage, 
    description: "Data Science and Machine Learning",
    linkedin: "https://www.linkedin.com/in/ameenat-oguntola-321286318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Olaniyan Elizabeth",
    imgSrc: elizabethImage, 
    description: "UI/UX Design",
    linkedin: "https://www.linkedin.com/in/elizabeth-olaniyan-50418b271",
  },
  {
    name: "Oladapo Toluwani",
    imgSrc: toluwaniImage, 
    description: "Product Management",
    linkedin: "https://www.linkedin.com/in/toluwani-o-5b67301b0",
  },
  {
    name: "Olowe Oluwadarasimi",
    imgSrc: DaraImage, 
    description: "Back-End Development",
    linkedin: "https://www.linkedin.com/in/olowe-oluwadarasimi-179b7822a",
  },
  // {
  //   name: "Oluwatosin Olotu",
  //   imgSrc: OluwatosinImage, 
  //   description: "Data Science and Machine Learning",
  //   linkedin: "",
  // },
  {
    name: "Otene Ojimaojo Eunice",
    imgSrc: OteneImage, 
    description: "Data Science and Machine Learning",
    linkedin: "https://www.linkedin.com/in/ojimaojo-eunice-otene-250b89185",
  },
  {
    name: "Oyoenisai Andrew-Essien",
    imgSrc: OyoenisaiImage, 
    description: "Front-End Development",
    linkedin: "https://www.linkedin.com/in/oyoenisaiaa/",
  },
  {
    name: "Priscilla Agyapong",
    imgSrc: PriscillaImage, 
    description: "Data Science and Machine Learning",
    linkedin: "https://www.linkedin.com/in/priscillaagyapong/",
  },
  {
    name: "Rachael Olaosun",
    imgSrc: RachaelOlaosunImage, 
    description: "Front-End Development",
    linkedin: "https://www.linkedin.com/in/rachael-olaosun-5476552ab/",
  },
  {
    name: "Rashidat Tajudeen",
    imgSrc: RashidatImage, 
    description: "Data Science and Machine Learning",
    linkedin: "https://www.linkedin.com/in/rashidat-tajudeen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sena Dzokoto",
    imgSrc: senaImage,
    description: "Scrum mastery",
    linkedin: "https://www.linkedin.com/in/sena-dzokoto",
  },
  // {
  //   name: "Sharon Otieh",
  //   imgSrc: SharonImage, 
  //   description: "Online Branding and Marketing",
  //   linkedin: "",
  // },
  {
    name: "Taiwo Hameedah Abdrasheed-Babatunde",
    imgSrc: taiwoImage, 
    description: "Scrum Mastery",
    linkedin: "https://www.linkedin.com/in/taiwo-abdrasheed-babatunde-4a9735114",
  },
  {
    name: "Taiwo Rafiu",
    imgSrc: TaiwoRImage, 
    description: "Online Branding and Marketing",
    linkedin: "https://www.linkedin.com/in/taiwo-rafiu-211b69233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Temitope Adebayo",
    imgSrc: temitopeImage, 
    description: "Scrum Mastery",
    linkedin: "https://pt.linkedin.com/in/topeadebayo1234",
  },
  {
    name: "Tomisin Omitogun",
    imgSrc: TomisinImage, 
    description: "Online Branding and Marketing",
    linkedin: " https://www.linkedin.com/in/tomisin-omitogun-ot2024",
  }, 
  {
    name: "Unoma Okoro",
    imgSrc: unomaImage, 
    description: "Product Management",
    linkedin: "https://www.linkedin.com/in/unomaokoro",
  },
  {
    name: "Unwanaobong Williams",
    imgSrc: unwanaImage, 
    description: "Product Management",
    linkedin: "https://www.linkedin.com/in/unwanaobong",
  },
  {
    name: "Vanessa Nelson-Dorglo",
    imgSrc: vanessaImage, 
    description: "Scrum Mastery",
    linkedin: "https://www.linkedin.com/in/vanessa-nelson-dorglo-a17324169/",
  },
  {
    name: "Zinhle Fiona Dladla",
    imgSrc: zinleImage, 
    description: "UI/UX Design",
    linkedin: "https://www.linkedin.com/in/zinhle-dladla-723b0315a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  }
];


const Team = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-blue-600 text-4xl font-bold mb-10 text-center">MEET THE TEAM</h1>
      <div className="team-container flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member w-48 m-5 text-center">
            <div className="member-photo w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-700 italic">{member.description}</p>
            <p className="text-sm text-gray-700 font-bold italic">{member.description2}</p>
            <a 
              href={member.linkedin} 
              className="inline-block mt-2 text-gray-500 hover:text-blue-600 transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <TiSocialLinkedin className="w-6 h-6 fill-current" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
