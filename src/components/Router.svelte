<script>
  import { navigate, subscribe } from "../lib/router";
  import Profile from "./Profile.svelte";
  import WorkExperience from "./WorkExperience.svelte";
  import Projects from "./Projects.svelte";
  import About from "../routes/about/About.svelte";
  import Blog from "../routes/blog/Blog.svelte";
  import { onDestroy } from "svelte";

  /**
   * @file Router Component
   * @module src/components/Router.svelte
   * @description Handles client-side routing and renders the appropriate page component based on the current URL path.
   * Manages subscriptions to route changes and cleans up listeners on component destruction.
   */

  /**
   * Current active route path
   * @type {string}
   * @private
   */

  let currentPath = window.location.pathname;

  /**
   * Route configuration mapping paths to view identifiers
   * @type {Object.<string, string>}
   * @const
   * @property {string} "/" - Home view identifier
   * @property {string} "/about" - About view identifier
   * @property {string} "/blog" - Blog view identifier
   * @property {string} "/projects" - Home view identifier (special case)
   */

  // Navigation items (sync with Navigation.svelte)
  const routes = {
    "/": "home",
    "/about": "about",
    "/blog": "blog",
    "/projects": "home",
  };

  /**
   * Subscription to router changes
   * @type {Function}
   * @private
   * @listens router:change
   */

  const unsubscribe = subscribe((path) => {
    currentPath = path;
  });

  /**
   * Cleans up router subscription when component is destroyed
   * @function
   * @private
   * @listens onDestroy
   */

  // @ts-ignore
  onDestroy(unsubscribe);

  /**
   * Router Component
   * @component
   * @prop {Function} navigate - Router navigation function from '../lib/router'
   * @prop {Function} subscribe - Router subscription function from '../lib/router'
   * @returns {HTMLElement} Conditional rendering of route-matched components
   */

  /**
   * Home view container
   * @selector #if routes[currentPath] === "home"
   * @renders Profile - Personal profile component
   * @renders WorkExperience - Professional history component
   * @renders Projects - Portfolio projects component
   */

  /**
   * About view container
   * @selector :else if routes[currentPath] === "about"
   * @renders About - About page component
   */

  /**
   * Blog view container
   * @selector :else if routes[currentPath] === "blog"
   * @renders Blog - Blog listing component
   */

  /**
   * 404 Not Found view
   * @selector :else
   * @renders div.not-found - Error page with home link

   */

  /**
   * Route change subscription handler
   * @callback RouteChangeCallback
   * @param {string} path - New route path
   * @returns {void}
   */

  /**
   * Router interface
   * @typedef {Object} RouterInterface
   * @property {Function} navigate - Programmatic navigation function
   * @property {Function} subscribe - Route change subscription function
   * @property {Function} unsubscribe - Route change unsubscription function
   */
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
