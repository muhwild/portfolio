<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-6">
        <div class="about">
          <h1 class="line-after">About Me</h1>
          <h4 class="mt-4">Hey 👋</h4>
          <p>
            I am {{ profile.name }}, a <b>{{ profile.title }}</b> based in
            {{ profile.location }}.
          </p>
          <p>
            I have <b>{{ yearsExperience }}+ years of experience</b> building,
            enhancing and maintaining web applications across frontend and
            backend. I turn business requirements and UI/UX designs into
            working products: reusable components, RESTful API integrations
            and the relational databases behind them.
          </p>
          <p>
            See my <b-link to="/projects">recent work</b-link> or browse the
            code on
            <b-link
              href="https://github.com/muhwild"
              target="_blank"
              rel="noopener"
              >GitHub</b-link
            >.
          </p>
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

    <section class="cv-section">
      <h2 class="line-after section-title">Experience</h2>
      <div class="job" v-for="job in experience" :key="job.company">
        <div class="job-head">
          <div>
            <h5 class="job-role">{{ job.role }}</h5>
            <div class="job-company">{{ job.company }}</div>
          </div>
          <div class="job-dates">{{ job.dates }}</div>
        </div>
        <ul class="job-points">
          <li v-for="point in job.points" :key="point">{{ point }}</li>
        </ul>
      </div>
    </section>

    <section class="cv-section">
      <h2 class="line-after section-title">Education</h2>
      <div class="job" v-for="item in education" :key="item.title">
        <div class="job-head">
          <div>
            <h5 class="job-role">{{ item.title }}</h5>
            <div class="job-company">{{ item.school }}</div>
          </div>
          <div class="job-dates">{{ item.dates }}</div>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h2 class="line-after section-title">Skills</h2>
      <div class="row">
        <div class="col-md-6 mb-3" v-for="g in skills" :key="g.group">
          <h5 class="skill-group">{{ g.group }}</h5>
          <b-badge
            v-for="item in g.items"
            :key="item"
            variant="light"
            class="skill-badge"
            >{{ item }}</b-badge
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { profile, experience, education, skills } from "@/data/profile";

export default {
  data() {
    return {
      profile,
      experience,
      education,
      skills,
      // First web development role on the CV (Oct 2021); the CV states 5+ years.
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
        content: `Muh Wildan Alifi Alfian is a fullstack developer in Batam, Indonesia with 5+ years of experience building web applications with React.js, Vue.js, Next.js, TypeScript, PHP and Laravel.`
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
.cv-section {
  margin-top: 80px;
}
.section-title {
  font-size: 28px;
  margin-bottom: 28px;
}
.job {
  margin-bottom: 36px;
  padding-left: 18px;
  border-left: 2px solid rgb(211, 46, 46);
}
.job-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 16px;
}
.job-role {
  margin: 0;
  font-weight: 700;
}
.job-company {
  color: #6c757d;
}
.job-dates {
  font-weight: 600;
  white-space: nowrap;
}
.job-points {
  margin: 12px 0 0;
  padding-left: 18px;
  line-height: 1.7;
}
.skill-group {
  font-weight: 700;
  margin-bottom: 10px;
}
.skill-badge {
  margin: 0 6px 8px 0;
  border: 1px solid #dee2e6;
  font-size: 14px;
  font-weight: 600;
}
</style>
