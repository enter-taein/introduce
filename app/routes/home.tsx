import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>소개 사이트 메인입니다.</p>
      <div>
        <Link to="/projects">프로젝트 보기</Link>
        <Link to="/contact">연락하기</Link>
      </div>
    </section>
  );
}
