<script>
  import "boxicons";
  import "../app.css";
  import { navigate, subscribe } from "../lib/router";
  import { onDestroy } from "svelte";

  /**
   * A navigation component that handles both desktop and mobile views with dark mode toggle functionality.
   * @module Navigation
   * @component
   * @example
   * <Navigation />
   *
   * @property {string} currentPath - The current active path derived from the router.
   * @property {boolean} menuOpen - Controls the visibility of the mobile menu.
   * @property {boolean} darkMode - Controls the dark mode state, persisted in localStorage.
   *
   * @typedef {Object} NavItem
   * @property {string} name - The display name of the navigation item.
   * @property {string} path - The route path for the navigation item.
   *
   * @property {NavItem[]} navItems - Array of navigation items to display.
   *
   * @function toggleMenu
   * @description Toggles the mobile menu open/close state.
   *
   * @function toggleDarkMode
   * @description Toggles between dark and light mode, updating both the DOM and localStorage.
   *
   * @function handleNavigation
   * @param {string} path - The path to navigate to.
   * @description Handles navigation to a new route and closes the mobile menu.
   *
   * @listens route:change
   * @description Subscribes to route changes to update the active path.
   *
   * @listens destroy
   * @description Cleans up the route subscription when component is destroyed.
   */

  let currentPath = window.location.pathname;
  let menuOpen = false;
  let darkMode = false;

  // Subscribe to route changes
  const unsubscribe = subscribe((path) => {
    currentPath = path;
  });

  // Cleanup subscription
  onDestroy(unsubscribe);

  // Check for saved preference or system preference
  if (typeof window !== "undefined") {
    darkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", darkMode);
  }

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  };

  function handleNavigation(path) {
    navigate(path);
    menuOpen = false;
  }

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
  ];
</script>

<nav class="navigation">
  <a href="/" on:click|preventDefault={() => handleNavigation("/")}>
    <h2 class="name-title">Joshua Alhassan</h2>
  </a>

  <!-- Desktop Navigation -->
  <div class="desktop-nav">
    <ul>
      {#each navItems as item}
        <li>
          <a
            href={item.path}
            on:click|preventDefault={() => handleNavigation(item.path)}
            class:active={currentPath === item.path}
            class="menu-desktop-link"
          >
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="nav-icons">
    <box-icon name="search" color="#a0ad94"></box-icon>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <box-icon
      name={darkMode ? "sun" : "moon"}
      color="var(--icon-color)"
      on:click={toggleDarkMode}
    ></box-icon>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <box-icon
      name={menuOpen ? "x" : "menu-alt-right"}
      color="#a0ad94"
      on:click={toggleMenu}
      class="menu-alt-right"
    ></box-icon>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu {menuOpen ? 'open' : ''}">
    <ul role="menu">
      {#each navItems as item}
        <li role="none">
          <a
            href={item.path}
            role="menuitem"
            on:click|preventDefault={() => handleNavigation(item.path)}
            class:active={currentPath === item.path}
          >
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
  }

  .name-title {
    font-size: 1.4rem;
    color: var(--color);
    text-decoration: none;
    font-weight: 600;
  }

  .nav-icons {
    display: flex;
    gap: 1rem;
  }

  .nav-icons box-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .desktop-nav {
    display: none;
  }

  /* ##################### */
  /* DESKTOP VIEW STYLING */
  /* ##################### */

  .desktop-nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .desktop-nav a {
    color: var(--menu-color);
    text-decoration: none;
    font-size: 1.1rem;
    position: relative;
    padding: 0.5rem 0;
  }

  .desktop-nav a:hover {
    color: #ccc;
  }

  .desktop-nav a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  .desktop-nav a:hover::after {
    width: 100%;
  }

  .mobile-menu {
    position: absolute;
    top: 100px;
    right: 0;
    left: 10px;
    width: 0;
    height: 0;
    overflow: hidden;
    background: var(--mobile-menu-background);
    border-radius: 8px;
    transition: all 0.3s ease;
    z-index: 100;
  }

  .mobile-menu.open {
    width: 95%;
    height: auto;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-menu li {
    padding: 0.5rem 0;
  }

  .mobile-menu a {
    color: var(--menu-color);
    text-decoration: none;
    font-size: 1.1rem;
    display: block;
    padding: 0.5rem 0;
  }

  .mobile-menu a:hover {
    color: #ccc;
  }

  /* ##################### */
  /* TABLET VIEW STYLING */
  /* ##################### */

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }

    .mobile-menu-icon {
      display: none;
    }

    .desktop-nav {
      display: block;
    }

    .menu-alt-right {
      display: none;
    }
  }

  /* @media (max-width: 767px) {
    .desktop-nav {
      display: none;
    }
  } */
</style>
