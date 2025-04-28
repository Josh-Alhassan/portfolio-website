<!-- src/components/Router.svelte -->
<script>
  import { onDestroy } from "svelte";
  import { routes, subscribe } from "../lib/router";
  import About from "../routes/about/About.svelte";
  import Blog from "../routes/blog/Blog.svelte";
  //   import Home from "../routes/home/Home.svelte";
  //   import Projects from "./Projects.svelte";

  let currentPath = "/";

  const unsubscribe = subscribe((path) => {
    currentPath = path;
  });

  const components = {
    "/about": About,
    "/blog": Blog,
  };

  onDestroy(unsubscribe);
</script>

<svelte:component this={components[currentPath]} />
