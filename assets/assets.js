import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import tools from "./tools.png";
import frontend from "./frontend.png";
import backend from "./backend.png";
import school from "./school.png";
import bag from "./bag.png";
import project_img from "./project_img.png";
import camera_store from "./camera_store.png";
import neststore from "./neststore.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  frontend,
  backend,
  tools,
  bag,
  school,
  project_img,
  camera_store,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const projects = [
  {
    title: "E-commerce Camera Store",
    image: camera_store,
    description:
      "Full-stack e-commerce platform with React frontend and Laravel backend.",
    technologies: ["React", "Laravel", "MySQL", "JWT"],
    github: "https://github.com/KyoTung/Camera_store_frontend.git",
    demo: "https://camera-store-frontend-nu.vercel.app",
  },
  {
    title: "E-commerce NesStore",
    image: neststore,
    description:
      "Full-stack phone e-commerce platform with React frontend and Nodejs backend.",
    technologies: ["React", "Nodejs", "MongoDB", "JWT"],
    github: "https://github.com/KyoTung/E-Commerce-Frontend.git",
    demo: "https://nest-store-commerce.vercel.app/",
  },
];
export const infoList = [
  {
    icon: assets.frontend,
    iconDark: assets.code_icon_dark,
    title: "Front-end",
    description: "HTML5/CSS3, JavaScript (ES6), React Js, Reponsive Design",
  },
  {
    icon: assets.backend,
    iconDark: assets.code_icon_dark,
    title: "Back-end",
    description: "PHP, Laravel, RESTful APIs, MySQL, Authentication (JWT)",
  },
  {
    icon: assets.tools,
    iconDark: assets.code_icon_dark,
    title: "Tools & Methods",
    description:
      "Git/GitHub, PostMan, MVC Architecture, OOP, Agile Development",
  },
  {
    icon: assets.school,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor’s degree in Computer Programming, BKACAD",
  },
  {
    icon: assets.bag,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];
