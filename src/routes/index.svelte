<script context="module">
	export const prerender = true;

   let users = [{
		id: "138c3bd6-2aa0-4729-ba06-bffed708b57f",
		createdAt: "2022-06-08T08:55:44.426Z",
		updatedAt: "2022-06-08T08:55:44.427Z",
		name: "Oren",
		email: "oren@example.com"
	}, {
		id: "138c3bd6-2aa0-4729-ba06-bffed708b57f",
		createdAt: "2022-06-08T08:55:44.426Z",
		updatedAt: "2022-06-08T08:55:44.427Z",
		name: "Selim",
		email: "selim@example.com"
	}, {
		id: "e200b188-c8e7-48dd-8363-4b697e9c5168",
		createdAt: "2022-06-08T08:55:45.473Z",
		updatedAt: "2022-06-08T08:55:45.474Z",
		name: "Alimat",
		email: "alimat@example.com"
	}, {
		id: "55aa6c57-c471-40a8-84bb-9fdd758a7836",
		createdAt: "2022-06-08T08:55:46.284Z",
		updatedAt: "2022-06-08T08:55:46.284Z",
		name: "Nero",
		email: "nero@example.com"
	}, {
		id: "65743061-3dda-41b6-9939-7a3c6e3df75e",
		createdAt: "2022-06-08T10:36:18.848Z",
		updatedAt: "2022-06-08T10:36:18.849Z",
		name: "Monis",
		email: "monis@example.com"
	}];

	var measures = [{
		id: "16634df5-1f09-4c66-844f-8b5281d35210",
		createdAt: "2022-06-08T11:42:14.794Z",
		updatedAt: "2022-06-08T11:41:31.477Z",
		moodId: "32661bf9-6847-4046-8bce-c10f16aa8f3d",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}, {
		id: "98c2c0db-d649-4dd8-87df-1f0c8e718a45",
		createdAt: "2022-06-08T11:42:14.794Z",
		updatedAt: "2022-06-08T11:41:32.180Z",
		moodId: "05571b66-c14d-402e-8da1-71ccfb269a60",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}, {
		id: "6cdc4cf9-b964-48b3-ade0-894e9c2f0a99",
		createdAt: "2022-06-08T11:59:04.790Z",
		updatedAt: "2022-06-08T11:59:04.790Z",
		moodId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}, {
		id: "fb8d12e1-ce74-4404-bc79-8ad8a00f39e7",
		createdAt: "2022-06-08T11:59:09.322Z",
		updatedAt: "2022-06-08T11:59:09.323Z",
		moodId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}];

	var moods = [{
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

<script>
	import Measure from '$lib/Measure.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		ok barometer: garden remix!
	</h1>

	<h2>
		built on the <a href="https://ok-barometer.vercel.app/" target="_blank">ok-barometer api</a>
	</h2>

	{#if users.length}

	{#each measures as measure}
		<div class="measure">
			<div class="mood">
				{#each moods.filter(function (el) { el.id == measure.moodId }) as mood}
					{mood.label}
				{/each}
			</div>
			<div class="user">
			</div>
		</div>

	{/each}

{:else}

	<h2>Hmm...</h2>
	<p>This app is waiting for user data...</p>

{/if}
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
