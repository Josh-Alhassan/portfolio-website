<script>
  /**
   * @file Work Experience Section Component
   * @module src/components/WorkExperience.svelte
   * @description Displays a chronological list of professional work experiences with achievements.
   */

  /**
   * Professional work experience object structure.
   * @typedef {Object} WorkExperience
   * @property {string} role - Job title/position
   * @property {string} company - Company name
   * @property {string} url - Company website URL
   * @property {string} location - Geographic location (Format: "Country/City")
   * @property {string} duration - Employment duration (Format: "Remote | Start Date - End Date")
   * @property {Array<Achievement>} achievements - List of professional accomplishments
   */

  /**
   * Professional achievement object structure.
   * @typedef {Object} Achievement
   * @property {string} title - Achievement headline
   * @property {string} description - Detailed explanation of achievement
   */

  /**
   * Array of professional work experiences.
   * @type {Array<WorkExperience>}
   * @const
   * @default
   */

  const experiences = [
    {
      role: "Frontend Engineer",
      company: "Edustipend",
      url: "https://www.edustipend.org",
      location: "USA/San Francisco",
      duration: "Remote | February 2023 - Present",
      achievements: [
        {
          title: "Achieved 100% test coverage",
          description: "for mission-critical user flows (Jest, RTL)",
        },
        {
          title: "Enhanced authentication security",
          description:
            "by designing a Login component with form validation, reducing user-reported errors by 25%",
        },
        {
          title: "Increased platform credibility",
          description:
            "by leading development of an interactive testimonial carousel (React Slick), adopted by 100% of marketing campaigns",
        },
      ],
    },

    {
      role: "Frontend Engineer",
      company: "Everey Research Platform (ERP)",
      url: "https://www.everey.com",
      location: "Nigeria/Lagos",
      duration: "Remote | August 2024 – March 2025",
      achievements: [
        {
          title: "Boosted user engagement by 20%",
          description:
            "by architecting a responsive, WCAG-compliant UI for African researchers, leveraging Next.js static generation and reusable component libraries",
        },
        {
          title: "Reduced code duplication by 40%",
          description:
            "through modular design patterns, documented with TypeScript interfaces and JSDoc.",
        },
        {
          title: "Optimized critical page load speed by 30%",
          description:
            "via Next.js Image Optimization and code splitting, measured via Lighthouse.",
        },
      ],
    },

    {
      role: "Frontend Engineer",
      company: "Web TBO",
      url: "https://web-tbo.vercel.app/",
      location: "Nigeria/Abuja",
      duration: "Contract Contributor | Remote | January 2025 - February 2025",
      achievements: [
        {
          title: "Streamlined client data management",
          description:
            " by building a CRUD dashboard (React, TypeScript) with pagination/search, cutting admin task time by 35%.",
        },
        {
          title: "Accelerated development",
          description:
            "by creating reusable Material-UI components, reducing redundant code by 50%.",
        },
      ],
    },
  ];
</script>

<section class="work-experience">
  <h3 class="work-heading">Work Experience</h3>

  {#each experiences as experience}
    <article class="work-article">
      <a href={experience.url} target="_blank" class="work-company"
        >{experience.company}</a
      >
      <h4 class="work-role">{experience.role}</h4>
      <span class="work-location">{experience.location}</span>
      <p class="work-duration">{experience.duration}</p>
      <ul class="work-responsibilities">
        {#each experience.achievements as achievement}
          <li>
            <span style="font-weight: 600;">{achievement.title} </span>
            {achievement.description}
          </li>
        {/each}
      </ul>
    </article>
  {/each}
</section>

<style>
  .work-experience {
    margin: 4.8rem 0;
  }

  .work-article {
    margin-bottom: 2.4rem;
    padding: 1.2rem;
    border-radius: 0.4rem;
    background-color: var(--menu-color);
    color: var(--text-color);
  }

  .work-heading {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    font-weight: 700;
  }

  .work-role,
  .work-duration {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }

  .work-company {
    border-bottom: 1px solid var(--menu-color);
    padding-bottom: 0.1rem;
    margin-bottom: 0.4rem;
    color: #0a0a09;
    font-size: 1.6rem;
    font-weight: 600;

    display: inline-block;
  }

  .work-location {
    font-style: italic;
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  .work-responsibilities {
    margin-top: 2rem;
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    list-style: circle;
  }

  @media (max-width: 1024px) {
    .work-article {
      padding: 2rem;
    }

    .work-heading {
      font-size: 1.8rem;
    }

    .work-role {
      font-size: 1.4rem;
    }

    /* .work-company {
      font-size: 1.2rem;
    } */

    .work-location {
      font-size: 1rem;
    }
  }
</style>
