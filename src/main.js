import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Daniel'
	}
});

export default app;