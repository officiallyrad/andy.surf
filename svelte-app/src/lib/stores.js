import { writable } from 'svelte/store';

export const currentSample = writable({});
export const currentInstrument = writable(null);
export const sustain = writable(1);
export const currentMode = writable('chromatic');

// Effects Values
export const reverbValue = writable(5);
export const delayValue = writable(5);
export const filterValue = writable(50);
