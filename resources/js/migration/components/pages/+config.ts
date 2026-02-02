import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Umman Agency",
  description: "Marketing Agency retreiving time to people",

  extends: [vikeReact],
} satisfies Config;
