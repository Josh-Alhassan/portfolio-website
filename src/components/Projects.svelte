<script>
  import project1 from "../assets/project-1.png";
  import project2 from "../assets/project-2.png";
  import project3 from "../assets/project-3.png";
  import project4 from "../assets/project-4.png";
  import project5 from "../assets/project-5.png";
  import project6 from "../assets/complet101.png";
  import project7 from "../assets/everybitcoin.png";
</script>

<section>
  <h2 class="secondary-heading">Projects</h2>
  <div class="projects-container">
    <div class="project-card">
      <h3>Personal Portfolio</h3>
      <p>My personal portfolio showcasing my work and skills.</p>
      <p>Technologies: <span class="span-style svelte"> Svelte </span></p>

      <div class="project-links">
        <a
          href="https://portfolio-website-lemon-gamma-45.vercel.app/"
          target="_blank"
          class="preview"
          ><box-icon name="desktop" type="logo" color="#333"></box-icon> Preview</a
        >
        <a
          href="https://github.com/Josh-Alhassan/portfolio-website"
          target="_blank"
          class="code"
          ><box-icon name="github" type="logo" color="#333"></box-icon> Code</a
        >
      </div>
      <figure class="project-image-container">
        <img src={project1} alt="Portfolio website" class="project-image" />
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
        A platform that provides support and financial resources to aid
        learning. It offers laptops, data subscriptions, and other resources.
      </p>
      <p>
        Technologies: <span class="span-style react"> React.js</span>
      </p>

      <div class="project-links">
        <a href="https://www.edustipend.org" class="preview"
          ><box-icon name="desktop" type="logo" color="#333"></box-icon> Preview</a
        >
        <a
          href="https://github.com/edustipend/dotorg"
          target="_blank"
          class="code"
          ><box-icon name="github" type="logo" color="#333"></box-icon>Code</a
        >
      </div>
      <figure class="project-image-container">
        <img src={project2} alt="Edustipend Platform" class="project-image" />
        <figcaption>
          A screenshot of Edustipend website, built with React.js
          <br />
        </figcaption>
      </figure>
    </div>

    <!-- Project 3 -->
    <div class="project-card">
      <h3>TBO Web</h3>
      <p>
        A Job application platform that connects Job seekers with job
        opportunities. It offers a user-friendly interface for job seekers to
        find and apply for jobs.
      </p>
      <p>
        Technologies: <span class="span-style react"> React.js</span>
        <span class="span-style next"> Next.js</span>
        <span class="span-style material-ui"> Material UI</span>
      </p>
      <div class="project-links">
        <a href="https://web-tbo.vercel.app/" target="_blank" class="preview"
          ><box-icon name="desktop" type="logo" color="#333"></box-icon> Preview</a
        >
        <a
          href="https://github.com/00Photon/web.tbo"
          target="_blank"
          class="code"
          ><box-icon name="github" type="logo" color="#333"></box-icon> Code</a
        >
      </div>
      <figure class="project-image-container">
        <img
          src={project3}
          alt="TBO Job Application Platform"
          class="project-image"
        />
        <figcaption>
          A screenshot of TBO website, built with React, Next and Material UI.
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
        Technologies: <span class="span-style react"> React.js</span>
      </p>
      <div class="project-links">
        <a
          href="https://www.ftf-ministry.vercel.app"
          target="_blank"
          class="preview"
          ><box-icon name="desktop" type="logo" color="#333"></box-icon> Preview</a
        >
        <a
          href="https://github.com/Josh-Alhassan/ftf-ministry"
          target="_blank"
          class="code"
          ><box-icon name="github" type="logo" color="#333"></box-icon> Code</a
        >
      </div>
      <figure class="project-image-container">
        <img
          src={project4}
          alt="Faith of the Faithful Ministries website"
          class="project-image"
        />
        <figcaption>
          A screenshot of FTF ministry website, built with React, and Next.js.
          <br />
        </figcaption>
      </figure>
    </div>

    <div class="project-card">
      <h3>Everey Research App</h3>
      <p>
        A research app that allows users (academians) to publish research and
        articles, conduct surveys and collect data efficiently.
      </p>
      <p>
        Technologies: <span class="span-style react"> React.js</span>
        <span class="span-style next"> Next.js</span>
        <span class="span-style typescript"> Typescript</span>
      </p>

      <div class="project-links">
        <a
          href="https://use-everey-research-zbii.vercel.app/"
          target="_blank"
          class="preview"
          ><box-icon name="desktop" type="logo" color="#333"></box-icon> Preview</a
        >
        <a
          href="https://github.com/Josh-Alhassan/everey-app"
          target="_blank"
          class="code"
        >
          <box-icon name="github" type="logo" color="#333333"></box-icon> Code</a
        >
      </div>
      <figure class="project-image-container">
        <img
          src={project5}
          alt="Everey Research Platform"
          class="project-image"
        />
        <figcaption>
          A screenshot of use-everey app, built with React, and Next.js.
          <br />
        </figcaption>
      </figure>
    </div>

    <!-- Complet101 -->
    <div class="project-card">
      <h3>CompLet101</h3>
      <p>
        CompLet101™ streamlines complex processes, providing accessible
        solutions with a focus on your privacy and security.
      </p>
      <p>
        Technologies: <span class="span-style react"> React.js</span>
        <!-- <span class="span-style next"> Next.js</span>
        <span class="span-style typescript"> Typescript</span> -->
      </p>

      <div class="project-links">
        <a href="https://complet101.surge.sh/" target="_blank" class="preview"
          ><box-icon name="desktop" type="logo" color="#333"></box-icon> Preview</a
        >
        <a
          href="https://github.com/synoloop-solutions/complet101-frontend"
          target="_blank"
          class="code"
        >
          <box-icon name="github" type="logo" color="#333333"></box-icon> Code</a
        >
      </div>
      <figure class="project-image-container">
        <img src={project6} alt="Complet101 Platform" class="project-image" />
        <figcaption>
          A screenshot of CompLet101 platform, built with React and modular CSS.
          <br />
        </figcaption>
      </figure>
    </div>

    <!-- EveryBitCoin -->
    <div class="project-card">
      <h3>Every BitCoin</h3>
      <p>A Bitcoin investment Progressive Web App.</p>
      <p>
        <!-- Technologies: <span class="span-style react"> React.js</span> -->
        Technologies: <span class="span-style svelte"> Svelte </span>
        <!-- <span class="span-style next"> Next.js</span>
        <span class="span-style typescript"> Typescript</span> -->
      </p>

      <div class="project-links">
        <a href="https://everybitcoin.app/" target="_blank" class="preview"
          ><box-icon name="desktop" type="logo" color="#333"></box-icon> Preview</a
        >
        <a
          href="https://github.com/monierate/everybitcoin-mobile-web/tree/develop"
          target="_blank"
          class="code"
        >
          <box-icon name="github" type="logo" color="#333333"></box-icon> Code</a
        >
      </div>
      <figure class="project-image-container">
        <img src={project7} alt="Complet101 Platform" class="project-image" />
        <figcaption>
          A screenshot of every bitcoin dashboard app, built with Svelte, and
          TailwindCSS.
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* justify-content: center;
    flex-wrap: wrap; */
    gap: 2rem;

    /* margin-bottom: 100px; */
  }
  .project-card {
    background-color: var(--menu-color);
    padding: 1.2rem;
    border-radius: 0.4rem;
    color: var(--text-color);
    width: 100%;
    max-width: 700px;
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

  .project-links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .project-card a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--text-color);
    color: var(--menu-color);
    text-decoration: none;
    border-radius: 0.4rem;

    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
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

  .svelte {
    background-color: var(--svelte-color);
  }

  .react {
    background-color: var(--react-color);
  }

  .material-ui {
    background-color: var(--material-ui-color);
  }

  .next {
    background-color: var(--next-color);
  }

  .typescript {
    background-color: var(--typescript-color);
  }

  .code,
  .preview {
    color: #000000 !important;
  }

  @media (min-width: 768px) {
    .projects-container {
      gap: 2rem;
    }

    .project-card {
      /* max-width: 450px; */
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
      justify-content: flex-start;
      row-gap: 3rem;
    }
  }
</style>
