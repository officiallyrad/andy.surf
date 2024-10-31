<script>
  import { onMount } from 'svelte';
  import { currentInstrument, currentMode, sustain } from '$lib/stores';

  let keys = [];

  function createPianoKeys() {
	const MIDI_START = 21;
	const MIDI_END = 108;

	for (let i = MIDI_START; i <= MIDI_END; i++) {
	  keys.push({ note: i, isBlack: [1, 3, 6, 8, 10].includes(i % 12) });
	}
  }

  function playKey(note) {
	if (currentMode === 'chromatic' && currentInstrument) {
	  currentInstrument.triggerAttackRelease(Tone.Frequency(note, 'midi').toFrequency(), sustain);
	}
  }

  createPianoKeys();
</script>

<div id="piano">
  {#each keys as key}
	<div class="key {key.isBlack ? 'black-key' : 'white-key'}" on:mousedown={() => playKey(key.note)}>
	</div>
  {/each}
</div>

<style>
  .key {
	width: 30px;
	height: 120px;
	display: inline-block;
	cursor: pointer;
  }

  .black-key {
	background: black;
	z-index: 1;
  }

  .white-key {
	background: white;
	border: 1px solid #000;
  }
</style>