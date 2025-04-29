<script>
  import "boxicons";
  import resume from "../assets/Joshua-Abel-Alhassan.pdf";
</script>

<section>
  <h2 class="profile-greeting">Hi there!</h2>
  <p class="profile-intro">
    I'm <a
      href="https://www.linkedin.com/in/alhassan-joshua-abel/"
      target="_blank">Joshua Abel Alhassan</a
    >, a frontend Engineer specialized in complex UI development and process
    optimization for high-stakes applications. Proven ability to deliver
    scalable, accessible, and performant solutions using React.js, Next.js,
    Svelte and TypeScript. Also, I'm a dveloper advoate with a strong focus on
    impact-driven development and technical leadership.
  </p>

  <div class="profile-links">
    <span class="profile-link-connect">Connect with me:</span>
    <div class="profile-link-icons">
      <a
        href="https://www.linkedin.com/in/alhassan-joshua-abel/"
        class="profile-link"
        aria-label="LinkedIn Profile"
        ><box-icon name="linkedin-square" type="logo" color="#ffffff"
        ></box-icon></a
      >
      <a
        href="https://github.com/Josh-Alhassan"
        class="profile-link"
        aria-label="GitHub Profile"
        ><box-icon name="github" type="logo" color="#ffffff"></box-icon></a
      >
      <a
        href="https://x.com/josh_script"
        class="profile-link"
        aria-label="Twitter Profile"
        ><box-icon name="twitter" type="logo" color="#ffffff"></box-icon></a
      >
      <a
        href="mailto:thealhassanjoshua@gmail.com"
        class="profile-link"
        aria-label="Email"
        ><box-icon name="envelope" color="#ffffff"></box-icon></a
      >
      <a
        href={resume}
        download
        class="profile-link"
        aria-label="Download Resume"
        ><box-icon name="file" type="solid" color="#ffffff"></box-icon></a
      >
    </div>
  </div>
</section>

<style>
  .profile-greeting {
    font-size: 2rem;
    margin-bottom: 1.4rem;
  }

  .profile-intro {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .profile-link-icons {
    display: flex;
    gap: 1rem;
  }

  .profile-links {
    display: flex;
    justify-content: space-between;
    gap: 0.7rem;
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    .profile-greeting {
      font-size: 2.5rem;
    }

    .profile-intro {
      font-size: 1.4rem;
    }
  }
</style>
