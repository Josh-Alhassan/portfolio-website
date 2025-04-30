<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import Footer from "./components/Footer.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Router from "./components/Router.svelte";
  import { navigate } from "./lib/router"; // Import from your router.js

  /**
   * @file Root application layout component
   * @module src/routes/+layout.svelte
   * @description The main application container that handles global layout, dark mode initialization,
   *              and provides routing context to all child components.
   */

  /**
   * Dark mode state variable
   * @type {boolean}
   * @default false
   * @private
   */

  // Initialize dark mode (if needed)
  let darkMode = false;

  /**
   * Initializes dark mode preference on component mount.
   * Checks for saved user preference in localStorage or falls back to system preference.
   * @function
   * @private
   * @listens onMount
   * @example
   * // Sets dark mode if system preference is dark or localStorage contains 'darkMode: true'
   * initializeDarkMode();
   */
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

<!-- /**
* Main application layout template
* @component
* @prop {Function} navigate - Router navigation function injected from './lib/router'
* @slot default - Contains all routed page content via the Router component
* @example
* <script>
*   import { navigate } from './lib/router';
* </script>
* 
* <Layout {navigate}>
*   Page content 
* </Layout>
*/ -->

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
