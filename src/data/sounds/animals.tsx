import {
  GiCricket,
  GiSeagull,
  GiWolfHead,
  GiOwl,
  GiWhaleTail,
} from 'react-icons/gi/index';
import {
  FaDog,
  FaFrog,
  FaHorseHead,
  FaCat,
  FaCrow,
} from 'react-icons/fa/index';
import { PiBirdFill, PiDogBold } from 'react-icons/pi/index';

import type { Category } from '../types';

export const animals: Category = {
  icon: <FaDog />,
  id: 'animals',
  sounds: [
    {
      icon: <PiBirdFill />,
      id: 'birds',
      label: '鸟儿',
      src: '/sounds/animals/birds.mp3',
    },
    {
      icon: <GiSeagull />,
      id: 'seagulls',
      label: '海鸥',
      src: '/sounds/animals/seagulls.mp3',
    },
    {
      icon: <GiCricket />,
      id: 'crickets',
      label: '蝉鸣',
      src: '/sounds/animals/crickets.mp3',
    },
    {
      icon: <GiWolfHead />,
      id: 'wolf',
      label: '狼',
      src: '/sounds/animals/wolf.mp3',
    },
    {
      icon: <GiOwl />,
      id: 'owl',
      label: '鹰',
      src: '/sounds/animals/owl.mp3',
    },
    {
      icon: <FaFrog />,
      id: 'frog',
      label: '青蛙',
      src: '/sounds/animals/frog.mp3',
    },
    {
      icon: <PiDogBold />,
      id: 'dog-barking',
      label: '小狗',
      src: '/sounds/animals/dog-barking.mp3',
    },
    {
      icon: <FaHorseHead />,
      id: 'horse-galopp',
      label: '马',
      src: '/sounds/animals/horse-galopp.mp3',
    },
    {
      icon: <FaCat />,
      id: 'cat-purring',
      label: '猫咪',
      src: '/sounds/animals/cat-purring.mp3',
    },
    {
      icon: <FaCrow />,
      id: 'crows',
      label: '乌鸦',
      src: '/sounds/animals/crows.mp3',
    },
    {
      icon: <GiWhaleTail />,
      id: 'whale',
      label: '海豹',
      src: '/sounds/animals/whale.mp3',
    },
  ],
  title: '动物们',
};
