import Bacardo from '../assets/aboute-svg/Expert1.png';
import Loreno from '../assets/aboute-svg/Expert2.png';
import Pelore from '../assets/aboute-svg/Expert3.png';
import { FacebookIcon } from '../assets/footer-svg/FacebookIcon';
import { InstagramIcon } from '../assets/footer-svg/InstagramIcon';
import { TwitterIcon } from '../assets/footer-svg/TwitterIcon';

export const experts = [
  {
    id: 1,
    name: 'Giovani Bacardo',
    role: 'Farmer',
    img: Bacardo,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { TwitterIcon },
    },
  },
  {
    id: 2,
    name: 'Marianne Loreno',
    role: 'Designer',
    img: Loreno,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { TwitterIcon },
    },
  },
  {
    id: 3,
    name: 'Riga Pelore',
    role: 'Farmer',
    img: Pelore,
    socials: {
      facebook: { FacebookIcon },
      instagram: { InstagramIcon },
      twitter: { TwitterIcon },
    },
  },
];
