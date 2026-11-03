# Muh Wildan — Portfolio

Personal portfolio of **Muh Wildan Alifi Alfian**, a fullstack developer. Projects are pulled from [github.com/muhwild](https://github.com/muhwild).

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
| Experience, education, skills (from the CV) | `data/profile.js` |
| About page layout | `pages/About.vue` |
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

Requires Node **24** (an `.nvmrc` is included, so `nvm use` works; Node 22 and 26 also build). Nuxt is pinned to 2.18.x and webpack to 4.x, which is what lets Nuxt 2 run on modern Node without `--openssl-legacy-provider`.

### Deploying on Vercel

Vercel ignores `.nvmrc`. It reads the Node version from `engines.node` in `package.json` (set to `24.x`), which overrides the dropdown in *Project Settings → Build and Deployment → Node.js Version*. If you see an "invalid or discontinued Node.js Version" error, update that dropdown too.

## License

MIT
