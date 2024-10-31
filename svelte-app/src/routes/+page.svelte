<script>
  import SampleList from '$lib/components/SampleList.svelte';
  import EffectsRack from '$lib/components/EffectsRack.svelte';
  import Piano from '$lib/components/Piano.svelte';
</script>

<svelte:head>
	<title>Instrument</title>
	<meta name="description" content="Instrument demo" />
</svelte:head>

<button on:click={startAudio}>Play Sound</button>

<section>
  <div class="ui-container">
	<SampleList />
	<EffectsRack />
  </div>
  <Piano />
</section>

<style>
  body {
	background-color: #121212;
	color: white;
	font-family: Arial, sans-serif;
  }

  .ui-container {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 20px;
	padding: 20px;
  }
</style>

