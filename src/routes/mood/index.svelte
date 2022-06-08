<script>

	let moods = [{
		id: "32dc55f9-ff7f-45e5-a599-04d47c8f1434",
		createdAt: "2022-06-08T08:55:38.134Z",
		updatedAt: "2022-06-08T08:55:38.135Z",
		idx: 0,
		label: "desolate"
	}, {
		id: "5e750db6-df2e-4d51-a465-c28e1b60bcce",
		createdAt: "2022-06-08T08:55:38.866Z",
		updatedAt: "2022-06-08T08:55:38.867Z",
		idx: 1,
		label: "dispirited"
	}, {
		id: "85774990-deef-43a7-b83e-6351823bcaa3",
		createdAt: "2022-06-08T08:55:39.713Z",
		updatedAt: "2022-06-08T08:55:39.714Z",
		idx: 2,
		label: "sad"
	}, {
		id: "a360debb-f3de-440a-875e-d58d1d0b2fc0",
		createdAt: "2022-06-08T08:55:40.471Z",
		updatedAt: "2022-06-08T08:55:40.471Z",
		idx: 3,
		label: "quiet"
	}, {
		id: "32661bf9-6847-4046-8bce-c10f16aa8f3d",
		createdAt: "2022-06-08T08:55:41.286Z",
		updatedAt: "2022-06-08T08:55:41.287Z",
		idx: 4,
		label: "ok"
	}, {
		id: "05571b66-c14d-402e-8da1-71ccfb269a60",
		createdAt: "2022-06-08T08:55:42.019Z",
		updatedAt: "2022-06-08T08:55:42.020Z",
		idx: 5,
		label: "lively"
	}, {
		id: "ed317940-ec34-42c9-bb9d-760fdc29cacb",
		createdAt: "2022-06-08T08:55:42.846Z",
		updatedAt: "2022-06-08T08:55:42.847Z",
		idx: 6,
		label: "energized"
	}, {
		id: "4b8b86e7-72df-4fe4-8cbf-25685d760dd4",
		createdAt: "2022-06-08T08:55:43.643Z",
		updatedAt: "2022-06-08T08:55:43.643Z",
		idx: 7,
		label: "hysterical"
	}];

</script>

<svelte:head>
	<title>Moods</title>
</svelte:head>

<div class="moods">
	<h1>Moods</h1>

{#if moods.length}
	<ul>
	{#each moods as mood (mood.id)}
		<li>
			{mood.idx}: {mood.label}
		</li>
	{/each}
	</ul>

{:else}

	<h2>Hmm...</h2>
	<p>This app is waiting for mood data...</p>

{/if}

</div>

<style>
</style>
