<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>About</h1>

	<h2>Developing this app demo in 3 hours</h2>

	<h3>Hour 1</h3>

	<ul>
		<li>Read the project description and inspect data model</li>
		<li>Come up with the idea of visualizing the 7 degrees of moods represented as plant seedling growth stages, and the name for the demo app to be 'garden remix'</li>
		<li>Review submission requirements and select development environment to be <a href="">sveltekit</a> on <a href="">vercel</a> hosting.</li>
		<li>Start a local project with a git repository mirrored on GitHub</li>
		<li>Scaffold out web app routes (one route per API data type: user, mood, measure)</li>
		<li>Break the server with too many request attempts! (<pre>message: 'Error querying the database: db error: FATAL: too many connections for role "yvdsinevfynewh"'</pre>)</li>
	</ul>

	<h3>Hour 2</h3>

	<ul>
		<li>Verify that the database error occurs across devices and browser sessions</li>
		<li>Configure Vercel production environment</li>
		<li>Adapt to a virtual backend from local JSON snapshots of the data I was able to retrieve while it was still accessible</li>
	</ul>

	<h3>Hour 3</h3>

	<ul>
		<li>Sveltekit has a design pattern, through the .svelte file format, of keeping script, html and css statements in one file. However, the coding assignment asked for things to be kept separate. After about 30 minutes trying to keep files separate and emulate a locally-hosted clone of the API, I realized my time was running low and so I reverted to the design pattern of data inline within .svelte files, simply to have something to show.</li>
		<li>Demonstrate the most basic features and prepare github repo, vercel production environment, and email response</li> 
	</ul>

	<h2>This app is built on a framework</h2>

	<p><em>Note: The rest of this about page is boilerplate text from the application framework!</em></p>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm init svelte</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
	ul li {
		margin-bottom: 1em;
	}
</style>
