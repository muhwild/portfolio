# Muh Wildan — Portfolio

Personal portfolio of **Muh Wildan Alifi**, a front-end developer. Projects are pulled from [github.com/muhwild](https://github.com/muhwild).

## Stack

- [Nuxt.js 2](https://nuxtjs.org/) (static target)
- [Bootstrap-Vue](https://bootstrap-vue.org/)
- [Vue Ionicons](https://github.com/mazipan/vue-ionicons)
- [Animate.css](https://animate.style/)

## Editing content

| What | Where |
| --- | --- |
| Project cards, descriptions, tech badges, links | `data/projects.js` |
| Home intro and social links | `pages/index.vue` |
| Bio and tech stack | `pages/About.vue` |
| Project card layout | `components/ProjectCard.vue` |

To add a project, add an object to `projects` in `data/projects.js`. Give it a `cover` (a screenshot in `assets/`) or set `cover: null` to get a generated title card using its `accent` colour.

## Build setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# generate static project
npm run generate
```

Requires a current Node LTS (**22 or 24**; an `.nvmrc` is included, so `nvm use` works). Nuxt is pinned to 2.18.x and webpack to 4.x, which is what makes Nuxt 2 run on modern Node without any `--openssl-legacy-provider` flags.

## License

MIT
