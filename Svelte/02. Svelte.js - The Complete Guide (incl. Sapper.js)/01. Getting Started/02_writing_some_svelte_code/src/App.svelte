<script>
	let name = 'Micha';
	let age = 42;

	function incrementAge() {
		age += 1;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}, your age is {age}!</h1>
<button on:click='{incrementAge}'>Change Age</button>
