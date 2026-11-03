<template>
  <div class="about page animate__animated animate__fadeIn">
    <h2>Recent Projects</h2>
    <p class="intro-line">
      Selected work from my
      <b-link href="https://github.com/muhwild" target="_blank" rel="noopener"
        >GitHub</b-link
      >: dashboards, storefronts, a social platform and a few things in between.
    </p>

    <div class="container">
      <project-card
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />

      <div class="archive">
        <h3>From the archive</h3>
        <p class="archive-note">Smaller and older repos that are still around.</p>
        <div class="row archive-row">
          <div
            class="col-md-4 mb-3"
            v-for="item in archive"
            :key="item.title"
          >
            <b-card class="h-100 text-left text-dark archive-card">
              <h5 class="mb-0">{{ item.title }}</h5>
              <p class="archive-tag">{{ item.tag }}</p>
              <p class="archive-desc">{{ item.description }}</p>
              <b-badge
                v-for="tech in item.stack"
                :key="tech"
                variant="light"
                class="stack-badge mr-1"
                >{{ tech }}</b-badge
              >
              <hr />
              <b-link :href="item.url" target="_blank" rel="noopener">
                Source code <GithubIcon style="color: #000;" />
              </b-link>
            </b-card>
          </div>
        </div>
      </div>

      <p class="more-link">
        More on
        <b-link href="https://github.com/muhwild?tab=repositories" target="_blank" rel="noopener"
          >github.com/muhwild</b-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import { projects, archive } from "@/data/projects";

export default {
  components: {
    GithubIcon
  },
  data() {
    return {
      projects,
      archive
    };
  },
  head: {
    title: "Recent Projects 💻 - Muh Wildan",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Projects by Muh Wildan: a Palworld hosting storefront, an SSL certificate dashboard, a retail ordering app, a point-of-sale backoffice, a social platform and a Laravel job portal, with source on GitHub."
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Recent Projects 💻 - Muh Wildan"
      },
      {
        property: "og:description",
        content:
          "Projects by Muh Wildan: a Palworld hosting storefront, an SSL certificate dashboard, a retail ordering app, a point-of-sale backoffice, a social platform and a Laravel job portal, with source on GitHub."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/man-computer.png")
      }
    ]
  }
};
</script>

<style scoped>
.intro-line {
  max-width: 560px;
  margin: 12px auto 0;
  line-height: 1.7;
}
.archive {
  margin-top: 90px;
  text-align: left;
}
.archive-note {
  color: #6c757d;
}
.archive-row {
  margin-top: 16px;
}
.archive-tag {
  margin: 2px 0 10px;
  color: #6c757d;
  font-size: 14px;
}
.archive-desc {
  font-size: 15px;
  line-height: 1.6;
}
.stack-badge {
  border: 1px solid #dee2e6;
  font-weight: 600;
}
.more-link {
  margin: 40px 0 60px;
}
</style>
