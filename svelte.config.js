import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit";

export default {
  kit: {
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};

// export default {
//   // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
//   // for more information about preprocessors
//   preprocess: vitePreprocess(),
// };
