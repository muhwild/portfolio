<template>
  <div class="row project">
    <div class="col-md-5">
      <img
        v-if="coverSrc"
        :src="coverSrc"
        :alt="`${project.title} screenshot`"
        class="project-cover"
        loading="lazy"
      />
      <div
        v-else
        class="project-cover title-card"
        :style="{ background: project.accent }"
        role="img"
        :aria-label="`${project.title} cover`"
      >
        <span class="title-card-name">{{ project.title }}</span>
        <span class="title-card-stack">{{ project.stack.join(", ") }}</span>
      </div>
    </div>

    <div class="col-md-7">
      <h2 class="mt-3 project-title">
        {{ project.title }}
        <hr class="dope" />
      </h2>
      <p class="project-tag">{{ project.tag }}</p>

      <b-card class="mt-3 mb-3 text-left text-dark project-body">
        <p class="project-desc">{{ project.description }}</p>

        <ul v-if="project.highlights && project.highlights.length" class="project-highlights">
          <li v-for="item in project.highlights" :key="item">{{ item }}</li>
        </ul>

        <div class="project-stack">
          <b-badge
            v-for="tech in project.stack"
            :key="tech"
            variant="light"
            class="stack-badge"
            >{{ tech }}</b-badge
          >
        </div>

        <hr />
        <div class="project-links">
          <b-link
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            {{ link.label }}
            <GithubIcon style="color: #000;" />
          </b-link>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";

export default {
  name: "ProjectCard",
  components: { GithubIcon },
  props: {
    project: { type: Object, required: true }
  },
  computed: {
    coverSrc() {
      return this.project.cover ? this.project.cover() : null;
    }
  }
};
</script>

<style scoped>
.project {
  margin-top: 70px;
  text-align: left;
}
/* The global `img` rule makes every image a 200px circle, so reset it here. */
.project-cover {
  display: block;
  width: 100%;
  height: 280px;
  border-radius: 6px;
  object-fit: cover;
  object-position: top left;
  cursor: default;
  background-color: #eee;
}
.title-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  color: #fff;
  text-align: left;
}
.title-card-name {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.1;
}
.title-card-stack {
  margin-top: 8px;
  font-size: 15px;
  opacity: 0.9;
}
.project-title {
  text-align: left;
}
.project-tag {
  margin: 4px 0 0 5px;
  color: #6c757d;
  font-size: 15px;
}
.project-desc {
  line-height: 1.7;
}
.project-highlights {
  padding-left: 18px;
  margin-bottom: 14px;
  font-size: 15px;
  line-height: 1.7;
}
.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.stack-badge {
  border: 1px solid #dee2e6;
  font-weight: 600;
}
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
hr.dope {
  border: 0;
  width: 90px;
  border-top: 2px solid #dc3545;
  text-align: left;
  margin: initial;
  margin-top: 7px;
  margin-left: 5px;
}
@media screen and (max-width: 420px) {
  .project {
    margin-top: 48px;
  }
  .project-cover {
    height: 200px;
  }
}
</style>
