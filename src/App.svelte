<script>
  // @ts-nocheck

  import Footer from "./components/Footer.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Profile from "./components/Profile.svelte";
  import Projects from "./components/Projects.svelte";
  import WorkExperience from "./components/WorkExperience.svelte";

  import { onMount } from "svelte";
  import About from "./routes/about/About.svelte";
  import Blog from "./routes/blog/Blog.svelte";
  import Router from "./components/Router.svelte";

  let currentRoute = "home";
  const routes = {
    "/": "home",
    "/about": "about",
    "/blog": "blog",
  };

  function updateRoute() {
    currentRoute = routes[window.location.pathname] || "home";
  }

  onMount(() => {
    updateRoute();
    window.addEventListener("popstate", updateRoute);

    return () => {
      window.removeEventListener("popstate", updateRoute);
    };
  });

  function navigate(path) {
    window.history.pushState({}, "", path);
    updateRoute();
  }
</script>

<main>
  <Navigation {navigate} />
  <Router />

  {#if currentRoute === "home"}
    <Profile />
    <WorkExperience />
    <Projects />
  {:else if currentRoute === "about"}
    <About />
  {:else if currentRoute === "blog"}
    <Blog />
  {:else}
    <h1>Page Not Found</h1>
  {/if}

  <Footer />
</main>

<style>
</style>
