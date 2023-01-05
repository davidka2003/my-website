import TYPESCRIPT_ICON from "@assets/icons/typescript.svg";
import GIT_ICON from "@assets/icons/git.svg";
import JIRA_ICON from "@assets/icons/jira.svg";
import HTML_ICON from "@assets/icons/html.svg";
import CSS_ICON from "@assets/icons/css.svg";
import SASS_ICON from "@assets/icons/sass.svg";
import JS_ICON from "@assets/icons/javascript.svg";
import STYLED_COMPONENTS_ICON from "@assets/icons/styled_components.png";
import FRAMER_MOTION_ICON from "@assets/icons/framerMotion.svg";
import REACT_ICON from "@assets/icons/react.svg";
import NEXTJS_ICON from "@assets/icons/nextjs.svg";
import REDUX_ICON from "@assets/icons/redux.svg";
import WEBPACK_ICON from "@assets/icons/webpack.svg";
import BABEL_ICON from "@assets/icons/babel.svg";
import NODEJS_ICON from "@assets/icons/nodejs.svg";
import EXPRESS_ICON from "@assets/icons/express.svg";
import NESTJS_ICON from "@assets/icons/nestjs.svg";
import MONGO_ICON from "@assets/icons/mongodb.svg";
import REDIS_ICON from "@assets/icons/redis.svg";
import MySQL_ICON from "@assets/icons/mysql.svg";
import REST_ICON from "@assets/icons/restapi.jpeg";
import GRAPH_ICON from "@assets/icons/graphql.svg";
import STRAPI_ICON from "@assets/icons/strapi.svg";
import WEBAPI_ICON from "@assets/icons/webapi.png";
import CSHARP_ICON from "@assets/icons/csharp.svg";
import DOTNET_ICON from "@assets/icons/dotnet.svg";
import SWAGGER_ICON from "@assets/icons/swagger.svg";
import JENKINS_ICON from "@assets/icons/jenkins.svg";
import RABBIT_MQ_ICON from "@assets/icons/rabbitmq.svg";
import GRPC_ICON from "@assets/icons/grpc.svg";
import PROTO_ICON from "@assets/icons/protobuf.svg";
import MICROSERVICES_ICON from "@assets/icons/microservices.png";
import DOCKER_ICON from "@assets/icons/docker.svg";
import TRUFFLE_ICON from "@assets/icons/truffle.png";
import GANACHE_ICON from "@assets/icons/ganache.svg";
import SOLIDITY_ICON from "@assets/icons/solidity.svg";
import HADRHAT_ICON from "@assets/icons/hardhat.svg";

export enum Stack {
  TYPESCRIPT = "typescript.svg",
  GIT = "git.svg",
  JIRA = "jira.svg",
  ///frontend
  HTML = "html.svg",
  CSS = "css.svg",
  SASS = "sass.svg",
  JS = "javascript.svg",
  STYLED_COMPONENTS = "styled_components.png", //png
  FRAMER_MOTION = "framerMotion.svg",
  REACT = "react.svg",
  NEXTJS = "nextjs.svg",
  REDUX = "redux.svg",
  WEBPACK = "webpack.svg",
  BABEL = "babel.svg",
  ///backend
  NODEJS = "nodejs.svg",
  EXPRESS = "express.svg",
  NESTJS = "nestjs.svg",
  ///dbs
  MONGO = "mongodb.svg",
  REDIS = "redis.svg",
  MySQL = "mysql.svg",
  ///backend other
  REST = "restapi.jpeg",
  GRAPH = "graphql.svg",
  STRAPI = "strapi.svg",
  WEBAPI = "webapi.jpeg",
  CSHARP = "csharp.svg",
  DOTNET = "dotnet.svg",
  SWAGGER = "swagger.svg",
  JENKINS = "jenkins.svg",
  RABBIT_MQ = "rabbitmq.svg",
  GRPC = "grpc.svg",
  PROTO = "protobuf.svg",
  MICROSERVICES = "microservices.png", //need
  DOCKER = "docker.svg",
  //blockchain
  TRUFFLE = "truffle.png",
  GANACHE = "ganache.svg",
  SOLIDITY = "solidity.svg",
  HARDHAT = "hardhat.svg",
}

export const STACK_DATA: Record<
  Stack,
  {
    title: string;
    link?: string;
    image: string;
  }
> = {
  [Stack.TYPESCRIPT]: {
    title: "Typescript",
    link: undefined,
    image: TYPESCRIPT_ICON,
  },
  [Stack.GIT]: {
    title: "Git",
    link: undefined,
    image: GIT_ICON,
  },
  [Stack.JIRA]: {
    title: "Jira",
    link: undefined,
    image: JIRA_ICON,
  },
  [Stack.HTML]: {
    title: "HTML5",
    link: undefined,
    image: HTML_ICON,
  },
  [Stack.CSS]: {
    title: "CSS",
    link: undefined,
    image: CSS_ICON,
  },
  [Stack.SASS]: {
    title: "SCSS/SASS",
    link: undefined,
    image: SASS_ICON,
  },
  [Stack.JS]: {
    title: "ES6",
    link: undefined,
    image: JS_ICON,
  },
  [Stack.STYLED_COMPONENTS]: {
    title: "Styled Components",
    link: undefined,
    image: STYLED_COMPONENTS_ICON,
  },
  [Stack.FRAMER_MOTION]: {
    title: "Framer Motion",
    link: undefined,
    image: FRAMER_MOTION_ICON,
  },
  [Stack.REACT]: {
    title: "React",
    link: undefined,
    image: REACT_ICON,
  },
  [Stack.NEXTJS]: {
    title: "NextJS",
    link: undefined,
    image: NEXTJS_ICON,
  },
  [Stack.REDUX]: {
    title: "Redux Toolkit",
    link: undefined,
    image: REDUX_ICON,
  },
  [Stack.WEBPACK]: {
    title: "Webpack",
    link: undefined,
    image: WEBPACK_ICON,
  },
  [Stack.BABEL]: {
    title: "Babel",
    link: undefined,
    image: BABEL_ICON,
  },
  [Stack.NODEJS]: {
    title: "NodeJS",
    link: undefined,
    image: NODEJS_ICON,
  },
  [Stack.EXPRESS]: {
    title: "ExpressJS",
    link: undefined,
    image: EXPRESS_ICON,
  },
  [Stack.NESTJS]: {
    title: "NestJS",
    link: undefined,
    image: NESTJS_ICON,
  },
  [Stack.MONGO]: {
    title: "MongoDB",
    link: undefined,
    image: MONGO_ICON,
  },
  [Stack.REDIS]: {
    title: "Redis",
    link: undefined,
    image: REDIS_ICON,
  },
  [Stack.MySQL]: {
    title: "MySQL",
    link: undefined,
    image: MySQL_ICON,
  },
  [Stack.REST]: {
    title: "Rest API",
    link: undefined,
    image: REST_ICON,
  },
  [Stack.GRAPH]: {
    title: "GraphQL",
    link: undefined,
    image: GRAPH_ICON,
  },
  [Stack.STRAPI]: {
    title: "Strapi",
    link: undefined,
    image: STRAPI_ICON,
  },
  [Stack.WEBAPI]: {
    title: "WebAPI",
    link: undefined,
    image: WEBAPI_ICON,
  },
  [Stack.CSHARP]: {
    title: "C#",
    link: undefined,
    image: CSHARP_ICON,
  },
  [Stack.DOTNET]: {
    title: ".NET 7",
    link: undefined,
    image: DOTNET_ICON,
  },
  [Stack.SWAGGER]: {
    title: "Swagger",
    link: undefined,
    image: SWAGGER_ICON,
  },
  [Stack.JENKINS]: {
    title: "Jenkins",
    link: undefined,
    image: JENKINS_ICON,
  },
  [Stack.RABBIT_MQ]: {
    title: "RabbitMQ",
    link: undefined,
    image: RABBIT_MQ_ICON,
  },
  [Stack.GRPC]: {
    title: "GRpc",
    link: undefined,
    image: GRPC_ICON,
  },
  [Stack.PROTO]: {
    title: "Protobuf",
    link: undefined,
    image: PROTO_ICON,
  },
  [Stack.MICROSERVICES]: {
    title: "Microservices",
    link: undefined,
    image: MICROSERVICES_ICON,
  },
  [Stack.DOCKER]: {
    title: "Docker",
    link: undefined,
    image: DOCKER_ICON,
  },
  [Stack.TRUFFLE]: {
    title: "Truffle",
    link: undefined,
    image: TRUFFLE_ICON,
  },
  [Stack.GANACHE]: {
    title: "Ganache",
    link: undefined,
    image: GANACHE_ICON,
  },
  [Stack.SOLIDITY]: {
    title: "Solidity",
    link: undefined,
    image: SOLIDITY_ICON,
  },
  [Stack.HARDHAT]: {
    title: "Hardhat",
    link: undefined,
    image: HADRHAT_ICON,
  },
};

export const STACK_ALL = [
  Stack.TYPESCRIPT,
  Stack.GIT,
  Stack.JIRA,
  Stack.HTML,
  Stack.CSS,
  Stack.SASS,
  Stack.JS,
  Stack.STYLED_COMPONENTS,
  Stack.FRAMER_MOTION,
  Stack.REACT,
  Stack.NEXTJS,
  Stack.REDUX,
  Stack.WEBPACK,
  Stack.BABEL,
  Stack.NODEJS,
  Stack.EXPRESS,
  Stack.NESTJS,
  Stack.MONGO,
  Stack.REDIS,
  Stack.MySQL,
  Stack.REST,
  Stack.GRAPH,
  Stack.STRAPI,
  Stack.WEBAPI,
  Stack.CSHARP,
  Stack.DOTNET,
  Stack.SWAGGER,
  Stack.JENKINS,
  Stack.RABBIT_MQ,
  Stack.GRPC,
  Stack.PROTO,
  Stack.MICROSERVICES,
  Stack.DOCKER,
  Stack.TRUFFLE,
  Stack.GANACHE,
  Stack.SOLIDITY,
  Stack.HARDHAT,
];
