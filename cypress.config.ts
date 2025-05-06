import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://open-webui-three-xi.vercel.app'
	},
	video: true
});
