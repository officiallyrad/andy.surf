<script>
  import { onMount } from 'svelte';
  import Nexus from '$lib/components/nexusui.js';
  import { reverbValue, delayValue, filterValue } from '$lib/stores';

  let reverbKnob, delayKnob, filterKnob;

  onMount(() => {
	reverbKnob = new Nexus.Dial('#reverb-knob', { size: [60, 60], min: 0, max: 10, value: 5 });
	delayKnob = new Nexus.Dial('#delay-knob', { size: [60, 60], min: 0, max: 10, value: 5 });
	filterKnob = new Nexus.Dial('#filter-knob', { size: [60, 60], min: 1, max: 100, value: 50 });

	reverbKnob.on('change', (v) => {
	  reverbValue.set(v);
	});

	delayKnob.on('change', (v) => {
	  delayValue.set(v);
	});

	filterKnob.on('change', (v) => {
	  filterValue.set(v);
	});
  });
</script>

<div class="effects-rack">
  <div class="knob-wrapper">
	<div id="reverb-knob" class="knob"></div>
	<label class="knob-label">Reverb</label>
  </div>
  <div class="knob-wrapper">
	<div id="delay-knob" class="knob"></div>
	<label class="knob-label">Delay</label>
  </div>
  <div class="knob-wrapper">
	<div id="filter-knob" class="knob"></div>
	<label class="knob-label">Filter</label>
  </div>
</div>

<style>
  .effects-rack {
	display: flex;
	gap: 20px;
  }

  .knob-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
  }
</style>