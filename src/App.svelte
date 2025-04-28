<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import Footer from "./components/Footer.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Router from "./components/Router.svelte";
  import { navigate } from "./lib/router"; // Import from your router.js

  // Initialize dark mode (if needed)
  let darkMode = false;
  onMount(() => {
    if (typeof window !== "undefined") {
      darkMode =
        localStorage.getItem("darkMode") === "true" ||
        (!localStorage.getItem("darkMode") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList.toggle("dark", darkMode);
    }
  });
</script>

<main class:dark={darkMode}>
  <Navigation {navigate} />
  <Router />
  <!-- All routing logic is handled inside this component -->
  <Footer />
</main>

<style>
  /* Optional: Add dark mode transitions */
  :global(html) {
    transition: background-color 0.3s ease;
  }
</style>
