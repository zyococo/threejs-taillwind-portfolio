import {
  toeic,
  ielts,
  secretary,
  benchpress,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  scss,
  mysql,
  java,
  c,
  nodejs,
  php,
  threejs,
  hirano,
  gakusho,
  rugby,
  tafe,
  naocan,
  kredo,
  discord,
  javafx,
  phpjquery,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "強み",
  },
  {
    id: "experience",
    title: "経歴",
  },
  {
    id: "work",
    title: "作品",
  },
  {
    id: "contact",
    title: "連絡",
  },
];

const services = [
  {
    title: "TOEIC 900点",
    icon: toeic,
  },
  {
    title: "IELTS overall 7.0",
    icon: ielts,
  },
  {
    title: "秘書検定2級",
    icon: secretary,
  },
  {
    title: "ベンチプレス100kg",
    icon: benchpress,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Scss",
    icon: scss,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: c,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const experiences = [
  {
    title: "大阪教育大学附属高等学校平野校舎",
    company_name: "普通科コース",
    icon: hirano,
    iconBg: "#E6DEDD",
    date: "2010/4 - 2013/3",
    points: ["国立大学法人大阪教育大学の附属高校の1つ"],
  },
  {
    title: "京都産業大学",
    company_name: "総合生命科学部  動物生命医科学科",
    icon: gakusho,
    iconBg: "#E6DEDD",
    date: "2013/4 - 2019/3",
    points: [
      "主にコロナなどの動物由来の感染症について学ぶ",
      "大学で英語学習支援スタッフとして活動する",
      "大学を休学しフィリピン,カナダに半年間ずつ留学する",
    ],
  },
  {
    title: "Rugby farm",
    company_name: "Harvester",
    icon: rugby,
    iconBg: "#E6DEDD",
    date: "2019/4 - 2020/12",
    points: [
      "2トントラックを使用し主に野菜を収穫する",
      "多国籍の5人組クループで様々な地域に移動し作業する",
    ],
  },
  {
    title: "South Metropolitan TAFE Australia",
    company_name: "Diploma of Software Development",
    icon: tafe,
    iconBg: "#E6DEDD",
    date: "2021/1 - 2022/1",
    points: [
      "Java,C#,PHPのバックエンド言語を学習する",
      "アジャイル開発でプロジェクトを進行する",
    ],
  },
  {
    title: "Rugby farm",
    company_name: "Super Advisor",
    icon: rugby,
    iconBg: "#E6DEDD",
    date: "2022/2 - 2022/10",
    points: [
      "スーパーアドバイザーというポジションで再就任する",
      "数グループに仕事を振り分け監視役ポジションを獲得する",
    ],
  },
  {
    title: "なおかん",
    company_name: "Preserved Flower",
    icon: naocan,
    iconBg: "#E6DEDD",
    date: "2022/11 - 2023/3",
    points: [
      "個人事業主なおかんの営業を行う",
      "寺,花屋に足を運びプロモーション活動する",
      "TS(Next.js,React),Node.js独学中です",
    ],
  },
  {
    title: "Kredo Japan",
    company_name: "IT member",
    icon: kredo,
    iconBg: "#E6DEDD",
    date: "2023/4 - 現在",
    points: ["I have not updated yet"],
  },
];

const projects = [
  {
    name: "Discord",
    description:
      "アメリカ発のチャットサービス。Reactのフックスやカスタムフックス実装し、TypescriptやReduxを用いて一からDiscordクローンを作成",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    web_link: "https://my-discord-f6afa.web.app/",
    source_code_link: "https://github.com/zyococo/my-typescript-sns",
  },
  {
    name: "Movie Review",
    description:
      "バックエンドにPHP, フロントエンドにjavascript(JQuery)を選択しMySQLにデータベースを用意し簡易的な映画レビューサイトを作成",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: phpjquery,
    source_code_link: "https://github.com/zyococo/php-movies-review",
  },
  {
    name: "Word Collection",
    description:
      "バックエンドにJava、またGUIライブラリであるJavaFXを選択しMySQLにデータベースを用意し単語帳リストを作成",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "JavaFX",
        color: "pink-text-gradient",
      },
    ],
    image: javafx,
    source_code_link: "https://github.com/zyococo/javafx-words",
  },
];

export { services, technologies, experiences, projects };
