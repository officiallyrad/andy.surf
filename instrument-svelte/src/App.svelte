<script>
  import "./app.css"; // Import global styles if needed.
  import { onMount } from 'svelte';
  import Tone from 'tone';

  // Resume Tone.js Audio Context on user interaction
  onMount(() => {
	document.body.addEventListener('click', () => {
	  if (Tone.context.state !== 'running') {
		Tone.context.resume().then(() => {
		  console.log('Audio context resumed');
		});
	  }
	});
  });
</script>

<slot /> <!-- This slot renders all layouts and pages -->

<style>
  body {
	margin: 0;
	font-family: Arial, sans-serif;
	background-color: #121212;
	color: white;
  }
</style>