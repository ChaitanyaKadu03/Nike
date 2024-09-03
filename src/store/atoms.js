import { atomFamily } from 'recoil';

export const divPosition = atomFamily({
  key: 'divPosition',
  default: { top: 0 }
});
