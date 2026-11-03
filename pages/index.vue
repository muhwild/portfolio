<template>
  <b-row style="margin-left: 0;margin-right: 0;">
    <b-col md="4">
      <b-img
        :src="avatar"
        id="avatar-img"
        alt="Muhwil Memoji"
        @mouseenter="changeAvatar"
        @mouseleave="changeAvatar"
      />
    </b-col>

    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        Hi 👋,
        <br />I<span>'m Muh Wildan&nbsp;Alifi</span>.
      </h2>

      <div class="col-md-10 info">
        A <b>front-end developer</b> who loves turning messy workflows into
        clean interfaces.<br />
        I build <b>dashboards</b>, <b>storefronts</b> and
        <b>social platforms</b> with Vue, Nuxt and Next.js, from point-of-sale
        backoffices to game-server hosting.
        <br />
        <b-button
          class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast"
          to="/projects"
        >
          Explore >
        </b-button>

        <!-- .SOCIAL LINKS SECTION -->
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <social-link :to="socialLinks.github">
            <GithubIcon />
          </social-link>

          <social-link :to="socialLinks.linkedin">
            <LinkedinIcon />
          </social-link>

          <social-link :to="socialLinks.mail">
            <MailIcon />
          </social-link>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    MailIcon
  },

  data() {
    return {
      avatar: require("@/assets/avatar-1.webp"),
      // ADD YOUR SOCIAL LINKS HERE 👇
      socialLinks: {
        github: "https://github.com/muhwild",
        linkedin: "https://www.linkedin.com/in/muhwil/",
        mail: "mailto:elwin235h@gmail.com",
        youtube: ""
      }
    };
  },

  head: {
    title: "Portfolio ⚡ - Muh Wildan",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Muh Wildan is a front-end developer who builds dashboards, storefronts and social platforms with Vue, Nuxt, Next.js and TypeScript, from point-of-sale backoffices to game-server hosting."
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Portfolio ⚡ - Muh Wildan"
      },
      {
        property: "og:description",
        content:
          "Muh Wildan is a front-end developer who builds dashboards, storefronts and social platforms with Vue, Nuxt, Next.js and TypeScript, from point-of-sale backoffices to game-server hosting."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/coding.png")
      }
    ]
  },
  methods: {
    changeAvatar() {
      if (this.avatar == require("@/assets/avatar-2.webp")) {
        this.avatar = require("@/assets/avatar-1.webp");
      } else {
        this.avatar = require("@/assets/avatar-2.webp");
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>
