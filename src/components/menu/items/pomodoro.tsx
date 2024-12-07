import { MdOutlineAvTimer } from 'react-icons/md/index';

import { Item } from '../item';

import { usePomodoroStore } from '@/stores/pomodoro';

interface PomodoroProps {
  open: () => void;
}

export function Pomodoro({ open }: PomodoroProps) {
  const running = usePomodoroStore(state => state.running);

  return (
    <Item
      active={running}
      icon={<MdOutlineAvTimer />}
      label="番茄时钟"
      shortcut="Shift + P"
      onClick={open}
    />
  );
}
