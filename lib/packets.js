import { writable } from 'svelte/store';

const _packets = writable(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a) => {
    return `Log ${a} ${Math.random()} ${Math.random()}`;
  })
);

export const Packets = {
  add: (p) => {
    _packets.update((_p) => {
      _p.push(p);
      return _p;
    });
  },
  clear: () => {
    _packets.set([]);
  },
  subscribe: _packets.subscribe,
};