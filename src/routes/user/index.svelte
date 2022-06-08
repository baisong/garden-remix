<script context="module">
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
		email: "Johnson95@yahoo.com"
	}, {
		id: "e200b188-c8e7-48dd-8363-4b697e9c5168",
		createdAt: "2022-06-08T08:55:45.473Z",
		updatedAt: "2022-06-08T08:55:45.474Z",
		name: "Alimat",
		email: "Ignatius_MacGyver93@gmail.com"
	}, {
		id: "55aa6c57-c471-40a8-84bb-9fdd758a7836",
		createdAt: "2022-06-08T08:55:46.284Z",
		updatedAt: "2022-06-08T08:55:46.284Z",
		name: "Nero",
		email: "Elmo_Prosacco73@yahoo.com"
	}, {
		id: "65743061-3dda-41b6-9939-7a3c6e3df75e",
		createdAt: "2022-06-08T10:36:18.848Z",
		updatedAt: "2022-06-08T10:36:18.849Z",
		name: "Monis",
		email: "john@example.org"
	}];
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<div class="moods">
	<h1>Users</h1>

{#if users.length}

	{#each users as user (user.id)}
		<div>
			{user.name}
		</div>
	{/each}

{:else}

	<h2>Hmm...</h2>
	<p>This app is waiting for user data...</p>

{/if}

</div>

<style>
</style>
