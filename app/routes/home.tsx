import Main from "../main";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Captcha app" },
    { name: "description", content: "Totally normal captcha" },
  ];
}

export default function Home() {
  return <Main />;
}
