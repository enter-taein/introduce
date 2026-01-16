export type Project = {
    slug: string;
    title: string;
    desc: string;
    href?: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "vt-platform",
      title: "Virtual Tour Platform",
      desc: "360/3D 기반 투어 플랫폼",
      href: "https://example.com",
    },
    {
      slug: "attendance-app",
      title: "Attendance App",
      desc: "Flutter 출석체크 앱",
    },
  ];