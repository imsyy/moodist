import { useEffect, useCallback } from 'react';
import { BiUndo, BiTrash } from 'react-icons/bi/index';
import { AnimatePresence, motion } from 'framer-motion';

import { Tooltip } from '@/components/tooltip';

import { useSoundStore } from '@/stores/sound';
import { cn } from '@/helpers/styles';
import { fade, mix, slideX } from '@/lib/motion';

import styles from './unselect.module.css';

export function UnselectButton() {
  const noSelected = useSoundStore(state => state.noSelected());
  const restoreHistory = useSoundStore(state => state.restoreHistory);
  const hasHistory = useSoundStore(state => !!state.history);
  const unselectAll = useSoundStore(state => state.unselectAll);
  const locked = useSoundStore(state => state.locked);

  const variants = {
    ...mix(fade(), slideX(15)),
    exit: { opacity: 0 },
  };

  const handleToggle = useCallback(() => {
    if (locked) return;
    if (hasHistory) restoreHistory();
    else if (!noSelected) unselectAll(true);
  }, [hasHistory, noSelected, unselectAll, restoreHistory, locked]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'R') {
        handleToggle();
      }
    };

    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, [handleToggle]);

  return (
    <>
      <AnimatePresence mode="wait">
        {(!noSelected || hasHistory) && (
          <motion.div
            animate="show"
            exit="exit"
            initial="hidden"
            variants={variants}
          >
            <Tooltip
              content={hasHistory ? '恢复选中的声音' : '取消选择所有声音'}
              showDelay={0}
            >
              <button
                aria-label={hasHistory ? '恢复选中的声音' : '取消选择所有声音'}
                disabled={noSelected && !hasHistory}
                className={cn(
                  styles.unselectButton,
                  noSelected && !hasHistory && styles.disabled,
                )}
                onClick={handleToggle}
              >
                {hasHistory ? <BiUndo /> : <BiTrash />}
              </button>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
