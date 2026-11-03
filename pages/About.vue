<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-6">
        <div class="about">
          <h1 class="line-after">About Me</h1>
          <h4 class="mt-4">Hey 👋</h4>
          <p>
            I am Muh Wildan Alifi, a <b>Front-end developer</b>
          </p>
          <p>
            I have <b>{{ yearsExperience }}+ years of experience</b> crafting
            web and mobile interfaces. My
            <b-link to="/projects">recent work</b-link> ranges from
            point-of-sale backoffices and retail ordering apps to SSL admin
            dashboards, a Palworld hosting storefront and a social platform
            built for desktop, mobile and admin.
          </p>
          <p>
            I'm an agile learner: Vue and Nuxt are home turf, and I keep
            stretching into Next.js, TypeScript, Tailwind CSS and Laravel. See
            the code on
            <b-link
              href="https://github.com/muhwild"
              target="_blank"
              rel="noopener"
              >GitHub</b-link
            >.
          </p>
          <h4 class="mt-5">Tech Stacks</h4>
          <p>Below are some of the technologies I use daily:</p>
          <div class="row animate__animated animate__fadeInUp">
            <div class="col">
              <ul style="list-style-type: circle;">
                <li>HTML & CSS / SCSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Bootstrap & Tailwind CSS</li>
              </ul>
            </div>
            <div class="col">
              <ul style="list-style-type: circle;">
                <li>Vue.js & Nuxt</li>
                <li>React & Next.js</li>
                <li>Node.js</li>
                <li>Laravel (Blade)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/working.png"
          alt="About Illustration"
          class="abt-img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startYear: 2021,
      currYear: new Date().getFullYear()
    };
  },
  computed: {
    yearsExperience() {
      return this.currYear - this.startYear;
    }
  },
  head: {
    title: "About 🕵️‍♂️ - Muh Wildan",
    meta: [
      {
        hid: "description",
        name: "description",
        // currYear - startYear
        content: `Hey there 👋 I'm Muh Wildan, a front-end developer. I build dashboards, storefronts and social platforms with Vue, Nuxt, Next.js and TypeScript, and I learn something new every day.`
      }
    ]
  }
};
</script>
<style scoped>
.container {
  margin-top: 140px;
  text-align: left;
}
.line-after {
  overflow: hidden;
}
.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 2px solid rgb(211, 46, 46);
}
.abt-img {
  width: inherit;
  height: inherit;
  border-radius: 5px;
}
/* .abt-img:hover {
  animation: swing;
  animation-duration: 2s;
} */
</style>
