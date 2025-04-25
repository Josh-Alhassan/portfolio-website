<script>
  import Footer from "./components/Footer.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Profile from "./components/Profile.svelte";
  import Projects from "./components/Projects.svelte";
  import WorkExperience from "./components/WorkExperience.svelte";

  import { onMount } from "svelte";
  import About from "./routes/about/About.svelte";
  import Blog from "./routes/blog/Blog.svelte";

  let currentRoute = "home";

  onMount(() => {
    const path = window.location.pathname;
    if (path === "/about") {
      currentRoute = "about";
    } else if (path === "/blog") {
      currentRoute = "blog";
    }
  });
</script>

<main>
  <Navigation />

  {#if currentRoute === "home"}
    <Profile />
    <WorkExperience />
    <Projects />
  {:else if currentRoute === "about"}
    <About />
  {:else if currentRoute === "blog"}
    <Blog />
  {/if}

  <Footer />
</main>

<style>
</style>
