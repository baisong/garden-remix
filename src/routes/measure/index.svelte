<script context="module">
	//var urly = 'https://ok-barometer.vercel.app/api/measure';

   export async function load({ fetch }) {
        	const urly = '/measure/measures.json';
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
	export let responseJson, measures, heading;
	$: measures = (typeof responseJson !== "undefined") && responseJson.length;
	$: heading = measures.length ? "Loading..." : measures.length + " measures";
</script>

<svelte:head>
	<title>measures</title>
</svelte:head>

<div class="measures">
	<h1>{heading}</h1>

{#if measures.length}

	{#each measures as measure (measure.id)}
		<div>
			{measure.label}
		</div>
	{/each}

{:else}

	<h2>Hmm...</h2>
	<p>This app is waiting for measure data...</p>

{/if}

</div>

<style>
</style>
