<script>
  // Import assets
  import project1 from "../assets/project-1.png";
  import project2 from "../assets/project-2.png";
  import project3 from "../assets/project-3.png";
  import project4 from "../assets/project-4.png";
  import project5 from "../assets/project-5.png";
  import project6 from "../assets/complet101.png";
  import project7 from "../assets/everybitcoin.png";

  // Types
  /**
   * @typedef {Object} ProjectLink
   * @property {string} type - 'preview' | 'code'
   * @property {string} url - URL for the link
   * @property {string} icon - Box icon name
   */

  /**
   * @typedef {Object} Technology
   * @property {string} name - Technology name
   * @property {string} colorClass - CSS class for styling
   */

  /**
   * @typedef {Object} Project
   * @property {string} id - Unique identifier
   * @property {string} title - Project title
   * @property {string} description - Project description
   * @property {Technology[]} technologies - Array of technologies used
   * @property {ProjectLink[]} links - Array of project links
   * @property {Object} image - Image configuration
   * @property {string} image.src - Image source
   * @property {string} image.alt - Alt text for accessibility
   * @property {string} image.caption - Image caption
   */

  // Constants
  const LINK_TYPES = {
    PREVIEW: "preview",
    CODE: "code",
  };

  const TECH_COLORS = {
    SVELTE: "svelte",
    REACT: "react",
    NEXT: "next",
    MATERIAL_UI: "material-ui",
    TYPESCRIPT: "typescript",
  };

  // Project data configuration
  /** @type {Project[]} */
  const projects = [
    {
      id: "edustipend",
      title: "Edustipend",
      description:
        "A platform that provides support and financial resources to aid learning. It offers laptops, data subscriptions, and other resources.",
      technologies: [{ name: "React.js", colorClass: TECH_COLORS.REACT }],
      links: [
        {
          type: LINK_TYPES.PREVIEW,
          url: "https://www.edustipend.org",
          icon: "desktop",
        },
        {
          type: LINK_TYPES.CODE,
          url: "https://github.com/edustipend/dotorg",
          icon: "github",
        },
      ],
      image: {
        src: project2,
        alt: "Edustipend platform screenshot",
        caption: "A screenshot of Edustipend website, built with React.js",
      },
    },
    {
      id: "tbo-web",
      title: "TBO Web",
      description:
        "A Job application platform that connects Job seekers with job opportunities. It offers a user-friendly interface for job seekers to find and apply for jobs.",
      technologies: [
        { name: "React.js", colorClass: TECH_COLORS.REACT },
        { name: "Next.js", colorClass: TECH_COLORS.NEXT },
        { name: "Material UI", colorClass: TECH_COLORS.MATERIAL_UI },
      ],
      links: [
        {
          type: LINK_TYPES.PREVIEW,
          url: "https://web-tbo.vercel.app/",
          icon: "desktop",
        },
        {
          type: LINK_TYPES.CODE,
          url: "https://github.com/00Photon/web.tbo",
          icon: "github",
        },
      ],
      image: {
        src: project3,
        alt: "TBO Job Application Platform screenshot",
        caption:
          "A screenshot of TBO website, built with React, Next and Material UI.",
      },
    },
    {
      id: "ftf-ministry",
      title: "Faith of The Faithful Ministries",
      description:
        "An Interdenominational ministries website, called to teach the lifestyle of Faith.",
      technologies: [{ name: "React.js", colorClass: TECH_COLORS.REACT }],
      links: [
        {
          type: LINK_TYPES.PREVIEW,
          url: "https://www.ftf-ministry.vercel.app",
          icon: "desktop",
        },
        {
          type: LINK_TYPES.CODE,
          url: "https://github.com/Josh-Alhassan/ftf-ministry",
          icon: "github",
        },
      ],
      image: {
        src: project4,
        alt: "Faith of the Faithful Ministries website screenshot",
        caption:
          "A screenshot of FTF ministry website, built with React, and Next.js.",
      },
    },
    {
      id: "everey-research",
      title: "Everey Research App",
      description:
        "A research app that allows users (academians) to publish research and articles, conduct surveys and collect data efficiently.",
      technologies: [
        { name: "React.js", colorClass: TECH_COLORS.REACT },
        { name: "Next.js", colorClass: TECH_COLORS.NEXT },
        { name: "TypeScript", colorClass: TECH_COLORS.TYPESCRIPT },
      ],
      links: [
        {
          type: LINK_TYPES.PREVIEW,
          url: "https://use-everey-research-zbii.vercel.app/",
          icon: "desktop",
        },
        {
          type: LINK_TYPES.CODE,
          url: "https://github.com/Josh-Alhassan/everey-app",
          icon: "github",
        },
      ],
      image: {
        src: project5,
        alt: "Everey Research Platform screenshot",
        caption:
          "A screenshot of use-everey app, built with React, and Next.js.",
      },
    },
    {
      id: "complet101",
      title: "CompLet101",
      description:
        "CompLet101™ streamlines complex processes, providing accessible solutions with a focus on your privacy and security.",
      technologies: [{ name: "React.js", colorClass: TECH_COLORS.REACT }],
      links: [
        {
          type: LINK_TYPES.PREVIEW,
          url: "https://complet101.surge.sh/",
          icon: "desktop",
        },
        {
          type: LINK_TYPES.CODE,
          url: "https://github.com/synoloop-solutions/complet101-frontend",
          icon: "github",
        },
      ],
      image: {
        src: project6,
        alt: "CompLet101 Platform screenshot",
        caption:
          "A screenshot of CompLet101 platform, built with React and modular CSS.",
      },
    },
    {
      id: "every-bitcoin",
      title: "Every BitCoin",
      description: "A Bitcoin investment Progressive Web App.",
      technologies: [{ name: "Svelte", colorClass: TECH_COLORS.SVELTE }],
      links: [
        {
          type: LINK_TYPES.PREVIEW,
          url: "https://everybitcoin.app/",
          icon: "desktop",
        },
        {
          type: LINK_TYPES.CODE,
          url: "https://github.com/monierate/everybitcoin-mobile-web/tree/develop",
          icon: "github",
        },
      ],
      image: {
        src: project7,
        alt: "Every Bitcoin Platform screenshot",
        caption:
          "A screenshot of every bitcoin dashboard app, built with Svelte, and TailwindCSS.",
      },
    },

    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      description: "My personal portfolio showcasing my work and skills.",
      technologies: [{ name: "Svelte", colorClass: TECH_COLORS.SVELTE }],
      links: [
        {
          type: LINK_TYPES.PREVIEW,
          url: "https://portfolio-website-lemon-gamma-45.vercel.app/",
          icon: "desktop",
        },
        {
          type: LINK_TYPES.CODE,
          url: "https://github.com/Josh-Alhassan/portfolio-website",
          icon: "github",
        },
      ],
      image: {
        src: project1,
        alt: "Portfolio website screenshot",
        caption:
          "A screenshot of my personal portfolio website, built with Svelte.",
      },
    },
  ];

  // Helper functions
  const getLinkLabel = (type) => {
    const labels = {
      [LINK_TYPES.PREVIEW]: "Preview",
      [LINK_TYPES.CODE]: "Code",
    };
    return labels[type] || "Link";
  };

  const handleLinkClick = (url) => {
    // Optional: Add analytics tracking here
    window.open(url, "_blank", "noopener,noreferrer");
  };
</script>

<!-- Projects Section -->
<section class="projects-section" aria-labelledby="projects-heading">
  <h2 id="projects-heading" class="section-heading">Projects</h2>

  <div class="projects-grid" role="list">
    {#each projects as project (project.id)}
      <article class="project-card" role="listitem">
        <!-- Project Header -->
        <header class="project-header">
          <h3 class="project-title">{project.title}</h3>
          <p class="project-description">{project.description}</p>
        </header>

        <!-- Technologies -->
        <div class="technologies" aria-label="Technologies used">
          <span class="technologies-label" aria-hidden="true"
            >Technologies:</span
          >
          <div class="tech-tags">
            {#each project.technologies as tech}
              <span
                class="tech-tag tech-tag--{tech.colorClass}"
                role="img"
                aria-label={tech.name}
              >
                {tech.name}
              </span>
            {/each}
          </div>
        </div>

        <!-- Project Links -->
        <nav
          class="project-links"
          aria-label="Project links for {project.title}"
        >
          {#each project.links as link}
            <button
              type="button"
              class="project-link project-link--{link.type}"
              on:click={() => handleLinkClick(link.url)}
              aria-label="{getLinkLabel(link.type)} {project.title}"
            >
              <box-icon
                name={link.icon}
                type="logo"
                color="#333"
                aria-hidden="true"
              ></box-icon>
              {getLinkLabel(link.type)}
            </button>
          {/each}
        </nav>

        <!-- Project Image -->
        <figure class="project-image-container">
          <img
            src={project.image.src}
            alt={project.image.alt}
            class="project-image"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="project-caption">
            {project.image.caption}
          </figcaption>
        </figure>
      </article>
    {/each}
  </div>
</section>

<style>
  /* CSS Custom Properties */
  .projects-section {
    --section-spacing: 2rem;
    --card-padding: 1.5rem;
    --border-radius: 0.5rem;
    --shadow-light: rgba(0, 0, 0, 0.1) 0px 2px 8px;
    --shadow-medium: rgba(0, 0, 0, 0.15) 0px 4px 16px;
    --transition-smooth: all 0.2s ease;
  }

  /* Section Styles */
  .projects-section {
    margin-block: var(--section-spacing);
  }

  .section-heading {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-color, #333);
  }

  /* Grid Layout */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: var(--section-spacing);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Project Card */
  .project-card {
    background-color: var(--menu-color, #fff);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-light);
    color: var(--text-color, #333);
    overflow: hidden;
    padding: var(--card-padding);
    transition: var(--transition-smooth);
  }

  .project-card:hover {
    box-shadow: var(--shadow-medium);
    transform: translateY(-2px);
  }

  /* Project Header */
  .project-header {
    margin-bottom: 1.25rem;
  }

  .project-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .project-description {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    opacity: 0.9;
  }

  /* Technologies */
  .technologies {
    margin-bottom: 1.25rem;
  }

  .technologies-label {
    font-size: 1rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.5rem;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background-color: var(--tech-bg, #e5e7eb);
    border-radius: calc(var(--border-radius) * 0.6);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.375rem 0.75rem;
    white-space: nowrap;
  }

  /* Technology Colors */
  .tech-tag--svelte {
    background-color: var(--svelte-color, #ff3e00);
  }
  .tech-tag--react {
    background-color: var(--react-color, #61dafb);
  }
  .tech-tag--next {
    background-color: var(--next-color, #000000);
  }
  .tech-tag--material-ui {
    background-color: var(--material-ui-color, #0081cb);
  }
  .tech-tag--typescript {
    background-color: var(--typescript-color, #3178c6);
  }

  /* Project Links */
  .project-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .project-link {
    align-items: center;
    background-color: var(--text-color, #333);
    border: none;
    border-radius: var(--border-radius);
    color: var(--menu-color, #fff);
    cursor: pointer;
    display: inline-flex;
    font-size: 0.9rem;
    font-weight: 500;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    text-decoration: none;
    transition: var(--transition-smooth);
  }

  .project-link:hover {
    background-color: var(--link-hover-bg, #555);
    transform: translateY(-1px);
  }

  .project-link:focus {
    outline: 2px solid var(--focus-color, #0066cc);
    outline-offset: 2px;
  }

  .project-link:active {
    transform: translateY(0);
  }

  /* Project Image */
  .project-image-container {
    margin: 0;
    text-align: center;
  }

  .project-image {
    border-radius: var(--border-radius);
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  .project-caption {
    color: var(--caption-color, #666);
    font-size: 0.875rem;
    font-style: italic;
    line-height: 1.4;
    margin-top: 0.75rem;
    text-align: left;
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .section-heading {
      font-size: 2.5rem;
    }

    .projects-grid {
      gap: 2.5rem;
    }

    .project-card {
      --card-padding: 2rem;
    }

    .project-title {
      font-size: 1.6rem;
    }

    .project-description {
      font-size: 1.1rem;
    }

    .project-link {
      font-size: 1rem;
    }

    .project-caption {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .project-card,
    .project-link {
      transition: none;
    }

    .project-card:hover {
      transform: none;
    }

    .project-link:hover {
      transform: none;
    }
  }

  /* Dark Mode Support */
  @media (prefers-color-scheme: dark) {
    .project-card {
      --shadow-light: rgba(255, 255, 255, 0.1) 0px 2px 8px;
      --shadow-medium: rgba(255, 255, 255, 0.15) 0px 4px 16px;
    }
  }

  /* Print Styles */
  @media print {
    .project-links {
      display: none;
    }

    .project-card {
      box-shadow: none;
      border: 1px solid #ccc;
      break-inside: avoid;
      margin-bottom: 1rem;
    }
  }
</style>
