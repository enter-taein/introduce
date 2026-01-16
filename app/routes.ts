import { type RouteConfig, layout, index, route } from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("welcome", "routes/welcome.tsx"),
    route("about", "routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;