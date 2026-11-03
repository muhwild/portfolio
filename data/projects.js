// All project content lives here so you can edit copy without touching markup.
// Repos come from https://github.com/muhwild

const GH = "https://github.com/muhwild";

// Projects with a screenshot use `cover`. Projects without one get a generated
// title-card cover (see ProjectCard.vue) using `accent` as the background.
export const projects = [
  {
    title: "Palhost",
    tag: "Game server hosting",
    description:
      "Spinning up a Palworld server usually means wrestling with config files. Palhost is a storefront and hosting site built so a group of friends can pick a plan, start a server and get playing together. It's a full pricing flow: three tiers, billing-period discounts, and a language switcher for a global player base.",
    highlights: [
      "Three plans (Rift, Nebula, Zenith) with slot counts per tier",
      "Monthly to annual billing with up to 15% off",
      "Multi-language interface and a built-in support chat"
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    cover: () => require("@/assets/palhost_1.png"),
    accent: "#ff7a18",
    links: [{ label: "Source code", url: `${GH}/palhost` }]
  },
  {
    title: "SSL Certificate Manager",
    tag: "Admin dashboard",
    description:
      "DNS records, domains and SSL certificates tend to live in three different tabs and a spreadsheet. This dashboard pulls them into one control room: a certificate queue, status tracking and key downloads, all behind a dark-mode-ready Vue admin UI.",
    highlights: [
      "Brands, DNS, Domain, SSL Queue and Certificate views",
      "Status tracking from Draft to Issued, with download, key and delete actions per certificate",
      "Searchable, sortable tables with date filtering"
    ],
    stack: ["Vue.js", "Vuexy", "SCSS", "Bootstrap-Vue"],
    cover: () => require("@/assets/xxl.png"),
    accent: "#7367f0",
    links: [{ label: "Source code", url: `${GH}/ssl-cert` }]
  },
  {
    title: "Retail Order",
    tag: "Online ordering web app",
    description:
      "Ordering from a local shop shouldn't need a DM thread. Retail Order is the shopper's side of the counter: pick an outlet (with live open hours), browse combos and promos in rupiah, and keep an eye on the cart from a bar pinned to the bottom of the screen.",
    highlights: [
      "Outlet switcher showing open or closed status",
      "Search with Category and Special filters",
      "Promo pricing with struck-through original prices"
    ],
    stack: ["Vue.js", "Vue CLI"],
    cover: () => require("@/assets/antarinbarang.png"),
    accent: "#1485cc",
    links: [{ label: "Source code", url: `${GH}/retail` }]
  },
  {
    title: "POS Backoffice",
    tag: "Point-of-sale management UI",
    description:
      "The command centre behind a point-of-sale business. This is my front-end work on Olsera V2's backoffice, where merchants run catalogue, marketing, sales, purchasing and reports from one sidebar. It's a lot of product packed into one interface. The repo is even named after the ticket it was built around (#935).",
    highlights: [
      "Sidebar navigation across catalogue, sales, purchasing and accounting",
      "Outlet switching, notifications and a What's New feed",
      "Front-end for Olsera V2, built on Vue 2"
    ],
    stack: ["Vue 2", "JavaScript"],
    cover: () => require("@/assets/olsera.png"),
    accent: "#1a9ad7",
    links: [{ label: "Source code", url: `${GH}/frontend-olseraV2-issue-935` }]
  },
  {
    title: "Pujasera",
    tag: "Multi-vendor food court",
    description:
      "In Indonesia a pujasera is a food court: many kitchens, one roof, one table. This TypeScript project brings that idea to the web and is pinned on my GitHub profile.",
    highlights: [],
    stack: ["TypeScript"],
    cover: null,
    accent: "#e4572e",
    links: [{ label: "Source code", url: `${GH}/pujasera` }]
  },
  {
    title: "HJ Social Platform",
    tag: "Social network, three front-ends",
    description:
      "One social platform, three surfaces. I built the desktop web app for people on a browser, a mobile-first version tuned for touch and small screens, and an admin client for managing and monitoring the whole thing. Sharing one product across three audiences kept me honest about responsive design. The project ships with Chinese-language docs, which made it a nice cross-border build.",
    highlights: [
      "hj-pc: desktop web app",
      "hj-m: mobile-oriented layouts and interactions",
      "hj-adminclient: admin and monitoring interface"
    ],
    stack: ["Vue.js", "Responsive design"],
    cover: null,
    accent: "#2d6a4f",
    links: [
      { label: "Desktop", url: `${GH}/hj-pc` },
      { label: "Mobile", url: `${GH}/hj-m` },
      { label: "Admin", url: `${GH}/hj-adminclient` }
    ]
  },
  {
    title: "Job Portal",
    tag: "Client project",
    description:
      "A job portal built for a client, and a chance to work beyond pure front-end. Laravel handles routing and data while Blade templates render the pages on the server.",
    highlights: [],
    stack: ["Laravel", "Blade", "PHP"],
    cover: null,
    accent: "#ff2d20",
    links: [{ label: "Source code", url: `${GH}/job-portal` }]
  }
];

// Smaller or older repos, shown as a compact list at the bottom of the page.
export const archive = [
  {
    title: "Plenus",
    tag: "Queue management",
    description: "A JavaScript app for managing queues and keeping lines moving.",
    stack: ["JavaScript"],
    url: `${GH}/plenus`
  },
  {
    title: "MGR",
    tag: "Transaction management",
    description: "JavaScript tooling for tracking and managing transactions.",
    stack: ["JavaScript"],
    url: `${GH}/MGR`
  },
  {
    title: "Gomekanik",
    tag: "Java project",
    description: "A Java project from my archive, outside my usual JavaScript world.",
    stack: ["Java"],
    url: `${GH}/gomekanik`
  }
];
