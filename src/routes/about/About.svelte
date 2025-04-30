<script>
  import bioImage from "../../assets/joshua.jpg";

  const contactLinks = [
    {
      type: "Email",
      value: "thealhassanjoshua@gmail.com",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/alhassan-joshua-abel/",
    },
    {
      type: "Twitter",
      value: "@josh_script",
    },
  ];
</script>

<section class="about-section">
  <header>
    <h2 class="secondary-heading">
      About <br /> <span class="joshua-span"> Hi, I'm Joshua! 👋 </span>
    </h2>

    <p class="about-info">
      👋 Hello, I’m Joshua Abel Alhassan, a dedicated professional with a
      passion for community building, education, and technology. Currently, I
      wear multiple hats in the tech and education space, contributing my skills
      to various projects and communities.
    </p>
  </header>

  <figure>
    <img class="bio-image" src={bioImage} alt="Joshua Alhassan" />

    <figcaption class="figure-caption">Joshua Abel Alhassan</figcaption>
  </figure>

  <h3 class="tertiary-heading">Let's Connnect</h3>
  <p class="connect-with-me">
    I'm a software engineer with a passion for building web applications,
    technology, education, and community. I am driven by the belief that
    collaboration and knowledge-sharing are key to personal and collective
    growth. Let’s connect, learn, and grow together!
  </p>

  <div class="connect-with-me__card">
    {#each contactLinks as link}
      <p class="connect-link">
        {link.type}: <span class="connect-link-span">{link.value}</span>
      </p>
    {/each}
  </div>

  <p class="thank-you-note">
    Thanks for stopping by my little corner of the web.
  </p>
</section>

<style>
  .joshua-span {
    color: var(--menu-color);
    font-weight: 700;
    display: block;
    margin-top: 1.2rem;
  }

  .about-info {
    margin-top: 1rem;
  }

  .bio-image {
    width: 400px;
    display: block;
    border-radius: 10px;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    margin-top: 2rem;
  }

  .figure-caption {
    text-align: center;
    margin-top: 0.5rem;
  }

  .tertiary-heading {
    font-size: 2rem;
    margin-top: 2rem;
    font-weight: 700;
  }
  .tertiary-heading::after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background-color: var(--menu-color);
    margin-top: 0.5rem;
  }

  .connect-with-me {
    margin-top: 3rem;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .connect-with-me__card {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .connect-link {
    color: var(--text-color);
    font-size: 1.1rem;
  }

  .connect-link-span {
    color: var(--menu-color);
    font-weight: 700;
  }

  .thank-you-note {
    font-size: 1.2rem;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    .bio-image {
      width: 100%;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (min-width: 1024px) {
    .figure-caption {
      text-align: left;
    }
  }
</style>
