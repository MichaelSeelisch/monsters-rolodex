<script>
	import { onMount } from "svelte";

	import User from "./User.svelte";
	import UserSearch from "./UserSearch.svelte";

	// create a variable to store our users
  	let users;

	// run this when the app starts
	onMount(() => {
		getGitHubUsers();
	});

	/*
   		Grab users from GitHub
   */
	function getGitHubUsers() {
    	fetch("https://api.github.com/users")
      		.then(resp => resp.json())
      		.then(data => {
        		// bind users to our users variable
        		users = data;
    		});
  	}
</script>

<style>
	.user-list {
		display: flex;
		flex-flow: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.user-list li {
		width: 20%;
		padding: 10px;
	}
</style>

<main>
	<UserSearch />

	{#if users}
		<ul class="user-list">
			{#each users as user}
				<li>
					<User username={user.login} avatar={user.avatar_url} />
				</li>
			{/each}
		</ul>
	{/if}
</main>