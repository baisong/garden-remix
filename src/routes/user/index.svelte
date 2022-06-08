<script context="module">
	//var urly = 'https://ok-barometer.vercel.app/api/mood';

   export async function load({ fetch }) {
        	const urly = 'https://ok-barometer.vercel.app/api/user';
            const response = await fetch(urly);
            //console.log(response);
            const responseJson = await response.json();
            console.log(responseJson);

            return {
                props: {
                    responseJson
                }
            }
        }
	export let responseJson, users, heading;
	$: users = (typeof responseJson !== "undefined") && responseJson.length;
	$: heading = users.length ? "Loading..." : users.length + " Users";
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<div class="moods">
	<h1>{heading}</h1>

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
