import {
  GiWindchimes,
  GiFilmProjector,
  GiWashingMachine,
} from 'react-icons/gi/index';
import { BsFillKeyboardFill } from 'react-icons/bs/index';
import { FaKeyboard, FaClock, FaFan } from 'react-icons/fa/index';
import { MdSmartToy, MdWaterDrop, MdRadio } from 'react-icons/md/index';
import { TbBowlFilled } from 'react-icons/tb/index';
import { RiFilePaper2Fill, RiBubbleChartFill } from 'react-icons/ri/index';
import { BiSolidDryer } from 'react-icons/bi/index';
import { IoIosRadio } from 'react-icons/io/index';

import type { Category } from '../types';

export const things: Category = {
  icon: <MdSmartToy />,
  id: 'things',
  sounds: [
    {
      icon: <BsFillKeyboardFill />,
      id: 'keyboard',
      label: '打字',
      src: '/sounds/things/keyboard.mp3',
    },
    {
      icon: <FaKeyboard />,
      id: 'typewriter',
      label: '打字机',
      src: '/sounds/things/typewriter.mp3',
    },
    {
      icon: <RiFilePaper2Fill />,
      id: 'paper',
      label: '纸 / 翻书',
      src: '/sounds/things/paper.mp3',
    },
    {
      icon: <FaClock />,
      id: 'clock',
      label: '钟',
      src: '/sounds/things/clock.mp3',
    },
    {
      icon: <GiWindchimes />,
      id: 'wind-chimes',
      label: '风铃',
      src: '/sounds/things/wind-chimes.mp3',
    },
    {
      icon: <TbBowlFilled />,
      id: 'singing-bowl',
      label: '唱鼓',
      src: '/sounds/things/singing-bowl.mp3',
    },
    {
      icon: <FaFan />,
      id: 'ceiling-fan',
      label: '吹风机',
      src: '/sounds/things/ceiling-fan.mp3',
    },
    {
      icon: <BiSolidDryer />,
      id: 'dryer',
      label: '干燥机',
      src: '/sounds/things/dryer.mp3',
    },
    {
      icon: <GiFilmProjector />,
      id: 'slide-projector',
      label: '幻灯投影机',
      src: '/sounds/things/slide-projector.mp3',
    },
    {
      icon: <MdWaterDrop />,
      id: 'boiling-water',
      label: '热水',
      src: '/sounds/things/boiling-water.mp3',
    },
    {
      icon: <RiBubbleChartFill />,
      id: 'bubbles',
      label: '泡泡',
      src: '/sounds/things/bubbles.mp3',
    },
    {
      icon: <MdRadio />,
      id: 'tuning-radio',
      label: '调频电台',
      src: '/sounds/things/tuning-radio.mp3',
    },
    {
      icon: <IoIosRadio />,
      id: 'morse-code',
      label: '摩斯电码',
      src: '/sounds/things/morse-code.mp3',
    },
    {
      icon: <GiWashingMachine />,
      id: 'washing-machine',
      label: '洗衣机',
      src: '/sounds/things/washing-machine.mp3',
    },
  ],
  title: '事情',
};
