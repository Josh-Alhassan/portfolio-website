<script>
  import "boxicons";

  // Blog post data - could be fetched from CMS/API
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the useEffect Hook in React: A Comprehensive Guide",
      excerpt:
        "React's useEffect hook elegantly handles side effects—operations like data fetching, subscriptions, or DOM manipulations that interact with external systems. Unlike event handlers triggered by user actions, effects run automatically during component lifecycle phases:",
      date: "2024-12-11",
      slug: "https://alhassanjoshua.hashnode.dev/understanding-the-useeffect-hook-in-react-a-comprehensive-guide",
      readTime: "4 min read",
    },
    {
      id: 2,
      title: "React State Update Batching: Optimizing Performance",
      excerpt:
        "React’s state update batching intelligently groups multiple state changes into a single re-render, boosting performance by minimizing unnecessary UI updates. This optimization is particularly beneficial in scenarios where multiple state updates occur in quick succession, such as within event handlers or asynchronous operations.",
      date: "2024-12-11",
      slug: "https://alhassanjoshua.hashnode.dev/state-update-batching-in-react-made-simple",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Components vs Instances vs Elements",
      excerpt:
        "Understanding React components, instances, and React elements concepts is key to knowing how React works, and in this article, we’ll learn the difference between these three concepts. By learning these concepts, you can build better React applications and explain the framework more clearly. Plus, they are often discussed in interviews.",
      date: "2024-11-13",
      slug: "https://alhassanjoshua.hashnode.dev/components-vs-instances-vs-elements",
      readTime: "3 min read",
    },
    {
      id: 4,
      title:
        "My Note on Understanding PropTypes in React: A Guide to Component Typing",
      excerpt:
        "In React, PropTypes provides a way to type-check the props passed to components, ensuring that the props have the correct types. This helps to catch bugs, especially in larger applications or collaborative projects, by ensuring each prop's value and type are as expected.",
      date: "2024-11-2",
      slug: "https://alhassanjoshua.hashnode.dev/my-note-on-understanding-proptypes-in-react-a-guide-to-component-typing",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Optimizing Performance Through Sleep and Brain Health  ",
      excerpt:
        "This article explores strategies to improve personal performance and prevent burnout, focusing on the importance of brain health, sleep, and task prioritization. The conversation revolves around building practical methods to ensure long-term well-being while maintaining productivity in fast-paced work environments. Below is a detailed report on the main topics discussed.",
      date: "2024-10-19",
      slug: "https://alhassanjoshua.hashnode.dev/optimizing-performance-through-sleep-and-brain-health",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Developer Health OS and Burnout Recovery Strategies",
      excerpt:
        "we explore developer health, focusing on burnout recovery, prevention, and performance optimization. Michelle Bakels discussed the 'Developer Health OS,' a comprehensive system aimed at helping software developers maintain a balanced, healthy work-life experience, similar to how professional athletes optimize their physical performance. ",
      date: "2024-10-17",
      slug: "https://alhassanjoshua.hashnode.dev/developer-health-os-and-burnout-recovery-strategies",
      readTime: "5 min read",
    },
    // Additional posts...
  ];

  // Format date for display
  const formatDate = (dateString) => {
    // @ts-ignore
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    // @ts-ignore
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
</script>

<section>
  <h2 class="secondary-heading">Blog</h2>

  <div class="blog-wrapper">
    {#each blogPosts as post}
      <article class="blog-wrapper blog-card">
        <header class="blog-header">
          <time datetime={post.date} class="blog-meta">
            {formatDate(post.date)} • {post.readTime}
          </time>
          <h3 class="blog-title">
            <a
              href={post.slug}
              class="blog-title-link"
              aria-label={`Read ${post.title}`}
              target="_blank"
            >
              {post.title}
            </a>
          </h3>
        </header>

        <p class="blog-excerpt">{post.excerpt}</p>
      </article>
    {/each}
  </div>

  <div class="blog-cta">
    <a href="/blog" class="see-more" aria-label="View all blog posts">
      See more
      <box-icon
        name="right-arrow-alt"
        type="logo"
        color="currentColor"
        aria-hidden="true"
      ></box-icon>
    </a>
  </div>
</section>

<style>
  /* Design tokens */

  .blog-card {
    transition: transform var(--transition-base);
  }

  .blog-card:hover {
    transform: translateY(-3px);
  }

  .blog-meta {
    display: block;
    font-size: var(--text-sm);
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    /* padding-top: 2rem; */
  }

  .blog-title-link {
    display: inline-block;
    font-size: 1.4rem;
    text-decoration: underline;
    margin-bottom: 0.5rem;
  }

  .blog-title-link:hover {
    text-decoration-color: var(--menu-color);
  }

  .blog-excerpt {
    margin: 0 0 3rem 0;
    line-height: 1.6;
  }

  .blog-cta {
    margin-top: var(--blog-spacing);
    text-align: center;
  }

  .blog-wrapper {
    margin-top: 2rem;
  }

  .blog-date {
    display: block;
    font-size: 1.2rem;
    color: var(--date-color);
    text-decoration: underline;
    margin-bottom: 1rem;
  }

  .blog-description {
    margin-bottom: 2rem;
  }

  .see-more {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;

    margin-top: 3rem;
  }

  .see-more:hover {
    text-decoration: underline;
  }
</style>
