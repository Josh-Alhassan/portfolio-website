<script>
  import { subscribe } from "../lib/router";
  import Profile from "./Profile.svelte";
  import WorkExperience from "./WorkExperience.svelte";
  import Projects from "./Projects.svelte";
  import About from "../routes/about/About.svelte";
  import Blog from "../routes/blog/Blog.svelte";
  import { onDestroy } from "svelte";

  let currentPath = window.location.pathname;

  // Navigation items (sync with Navigation.svelte)
  const routes = {
    "/": "home",
    "/about": "about",
    "/blog": "blog",
    "/projects": "home", // Example of mapping different path to same view
  };

  const unsubscribe = subscribe((path) => {
    currentPath = path;
  });

  onDestroy(unsubscribe);
</script>

{#if routes[currentPath] === "home"}
  <Profile />
  <WorkExperience />
  <Projects />
{:else if routes[currentPath] === "about"}
  <About />
{:else if routes[currentPath] === "blog"}
  <Blog />
{:else}
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <a href="/" use:navigate>Return Home</a>
  </div>
{/if}

<style>
  .not-found {
    text-align: center;
    padding: 2rem;
  }
</style>
