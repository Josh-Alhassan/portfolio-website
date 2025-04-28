// src/lib/router.js
export const routes = {
  "/": "Home",
  "/about": "About",
  "/blog": "Blog",
  "/projects": "Projects",
  // Add more routes as needed
};

let currentRoute = window.location.pathname;
const subscribers = [];

export function navigate(path) {
  if (currentRoute === path) return;

  history.pushState({}, "", path);
  currentRoute = path;
  notifySubscribers();
}

export function subscribe(callback) {
  subscribers.push(callback);
  return () => {
    const index = subscribers.indexOf(callback);
    if (index > -1) subscribers.splice(index, 1);
  };
}

function notifySubscribers() {
  subscribers.forEach((callback) => callback(currentRoute));
}

// Handle browser back/forward
window.addEventListener("popstate", () => {
  currentRoute = window.location.pathname;
  notifySubscribers();
});
