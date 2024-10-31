<script>
  import { onMount } from 'svelte';
  import { currentSample } from '$lib/stores';

  let samples = [
	{
	  name: 'SO_RN_perc_water_drop_hall',
	  image: 'https://splice-res.cloudinary.com/image/upload/f_auto,q_auto,w_auto/c_limit,w_450/v1635183099/1635183093.jpg',
	  meta: 'One-Shot • percussion • fx • hip hop',
	  file: 'SO_RN_perc_water_drop_hall.wav'
	}
	// Add more sample objects if needed...
  ];

  function selectSample(sample) {
	currentSample.set(sample);
  }
</script>

<div class="samples">
  <div class="samples-left-column" id="selected-sample-column">
	<img id="selected-sample-image" src={currentSample.image} class="selected-sample-image" />
	<div id="selected-sample-name" class="selected-sample-name">{currentSample.name}</div>
	<div id="selected-sample-meta" class="selected-sample-meta">{currentSample.meta}</div>
  </div>
  <div class="samples-right-column">
	<h3>Splice Sounds</h3>
	{#each samples as sample}
	  <div class="sample-row" on:click={() => selectSample(sample)}>
		<div class="sample-image">
		  <img src={sample.image} alt="Album Art" />
		</div>
		<div class="sample-details">
		  <div class="sample-name">{sample.name}</div>
		  <div class="sample-meta">{sample.meta}</div>
		</div>
	  </div>
	{/each}
  </div>
</div>

<style>
  .samples {
	display: flex;
  }

  .samples-left-column {
	flex: 1;
	padding: 20px;
  }

  .samples-right-column {
	flex: 2;
	padding: 20px;
	overflow-y: auto;
  }

  .sample-row {
	display: flex;
	padding: 10px;
	background-color: #1e1e1e;
	border-radius: 5px;
	margin-bottom: 10px;
	cursor: pointer;
  }

  .sample-row:hover {
	background-color: #292929;
  }

  .sample-details {
	margin-left: 10px;
  }
</style>