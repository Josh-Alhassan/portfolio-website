<script>
  import "boxicons";

  // Blog post data - could be fetched from CMS/API
  const blogPosts = [
    {
      id: 1,
      title: "State Update Batching in React Made Easy",
      excerpt:
        "Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad hic ipsum, reprehenderit quos beatae quibusdam? Blanditiis, voluptas eaque. Ullam odit excepturi laboriosam vel nihil qui possimus quasi odio voluptates.",
      date: "2025-04-14",
      slug: "react-state-update-batching",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Developers Health - Quick Recovery Process",
      excerpt:
        "Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad hic ipsum, reprehenderit quos beatae quibusdam? Blanditiis, voluptas eaque. Ullam odit excepturi laboriosam vel nihil qui possimus quasi odio voluptates.",
      date: "2025-04-14",
      slug: "developers-health-recovery",
      readTime: "4 min read",
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
              href={`/blog/${post.slug}`}
              class="blog-title-link"
              aria-label={`Read ${post.title}`}
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
