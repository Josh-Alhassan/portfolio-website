<script>
  import project1 from "../assets/project-1.png";
  import project2 from "../assets/project-2.png";
  import project3 from "../assets/project-3.png";
  import project4 from "../assets/project-4.png";
</script>

<section>
  <h2 class="secondary-heading">Projects</h2>
  <div class="projects-container">
    <div class="project-card">
      <h3>Personal Portfolio</h3>
      <p>My personal portfolio showcasing my work and skills.</p>
      <p>Technologies: <span class="span-style alt-1"> Svelte </span></p>
      <a href="#">View Project</a>
      <a
        href="https://github.com/Josh-Alhassan/portfolio-website"
        target="_blank">View Code</a
      >
      <figure class="project-image-container">
        <img src={project1} alt="Portfolio Project 1" class="project-image" />
        <figcaption>
          A screenshot of my personal portfolio website, built with Svelte.
          <br />
        </figcaption>
      </figure>
    </div>

    <!-- Project 2 -->
    <div class="project-card">
      <h3>Edustipend</h3>
      <p>
        A Job application platform that connects Job seekers with job
        opportunities. It offers a user-friendly interface for job seekers to
        find and apply for jobs.
      </p>
      <p>
        Technologies: <span class="span-style alt-2"> React.js</span>
      </p>
      <a href="https://www.edustipend.org">View Project</a>
      <a href="https://github.com/edustipend/dotorg" target="_blank"
        >View Code</a
      >
      <figure class="project-image-container">
        <img src={project2} alt="Edustipend 2" class="project-image" />
        <figcaption>
          A screenshot of my Edustipend website, built with React.js
          <br />
        </figcaption>
      </figure>
    </div>

    <!-- Project 3 -->
    <div class="project-card">
      <h3>TBO Web</h3>
      <p>
        A platform that provides support and financial resources to aid
        learning. It offers laptops, data subscriptions, and other resources.
      </p>
      <p>
        Technologies: <span class="span-style alt-3"> React.js</span>
        <span class="span-style alt-2"> Next.js</span>
        <span class="span-style alt-1"> Material UI</span>
      </p>
      <a href="#">View Project</a>
      <a href="https://github.com/00Photon/web.tbo" target="_blank">View Code</a
      >
      <figure class="project-image-container">
        <img src={project3} alt="TBO Project 3" class="project-image" />
        <figcaption>
          A screenshot of my TBO website, built with React, Next and Material
          UI.
          <br />
        </figcaption>
      </figure>
    </div>

    <div class="project-card">
      <h3>Faith of The Faithful Ministries</h3>
      <p>
        An Interdenominational ministries website, called to teach the lifestyle
        of Faith.
      </p>
      <p>
        Technologies: <span class="span-style alt-3"> React.js</span>
        <span class="span-style alt-4"> Next.js</span>
      </p>
      <a href="https://www.ftf-ministry.vercel.app">View Project</a>
      <a href="https://github.com/Josh-Alhassan/ftf-ministry" target="_blank"
        >View Code</a
      >
      <figure class="project-image-container">
        <img src={project4} alt="TBO Project 3" class="project-image" />
        <figcaption>
          A screenshot of FTF ministry website, built with React, and Next.js.
          <br />
        </figcaption>
      </figure>
    </div>
  </div>
</section>

<style>
  .secondary-heading {
    font-size: 2rem;
    margin-bottom: 1.4rem;
    font-weight: 700;
  }

  .projects-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .project-card {
    background-color: var(--menu-color);
    padding: 1.2rem;
    border-radius: 0.4rem;
    color: var(--text-color);
    width: 100%;
    max-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .project-card h3 {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
  }
  .project-card p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .project-card a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--text-color);
    color: var(--menu-color);
    text-decoration: none;
    border-radius: 0.4rem;
  }
  .project-card a:hover {
    background-color: #ccc;
  }
  .project-image-container {
    margin-top: 1.2rem;
    text-align: center;
  }
  .project-image {
    max-width: 100%;
    height: auto;
    border-radius: 0.4rem;
  }
  .project-image-container figcaption {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.4rem;
  }

  .span-style {
    font-weight: 600;
    display: inline-block;
    margin-bottom: 0.5rem;

    padding: 5px;
    color: #fff;
    border-radius: 5px;
  }

  .alt-1 {
    background-color: #a94064;
  }

  .alt-2 {
    background-color: #636172;
  }

  .alt-3 {
    background-color: #83b3d7;
  }

  .alt-4 {
    background-color: #ff9f00;
  }

  @media (min-width: 768px) {
    .projects-container {
      gap: 2rem;
    }

    .project-card {
      max-width: 450px;
      height: auto;
      padding: 1.5rem;
    }
    .project-card h3 {
      font-size: 1.6rem;
    }
    .project-card p {
      font-size: 1.4rem;
    }
    .project-card a {
      font-size: 1.2rem;
    }
    .project-image-container figcaption {
      font-size: 1rem;
    }
  }
  @media (min-width: 1024px) {
    .projects-container {
      gap: 1.5rem;
      justify-content: space-between;
      row-gap: 3rem;
    }
  }
</style>
