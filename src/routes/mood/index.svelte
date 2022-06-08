<script context="module">
	//var urly = 'https://ok-barometer.vercel.app/api/mood';

   export async function load({ fetch }) {
        	const urly = 'https://ok-barometer.vercel.app/api/mood';
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
	export let responseJson, moods, heading;
	$: moods = (typeof responseJson !== "undefined") && responseJson.length;
	$: heading = moods.length ? "Loading..." : moods.length + " Moods";
</script>

<svelte:head>
	<title>Moods</title>
</svelte:head>

<div class="moods">
	<h1>{heading}</h1>

{#if moods.length}

	{#each moods as mood (mood.id)}
		<div>
			{mood.label}
		</div>
	{/each}

{:else}

	<h2>Hmm...</h2>
	<p>This app is waiting for mood data...</p>

{/if}

</div>

<style>
</style>
