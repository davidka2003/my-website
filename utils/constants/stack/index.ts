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
  }
> = {
  [Stack.TYPESCRIPT]: {
    title: "Typescript",
    link: undefined,
  },
  [Stack.GIT]: {
    title: "Git",
    link: undefined,
  },
  [Stack.JIRA]: {
    title: "Jira",
    link: undefined,
  },
  [Stack.HTML]: {
    title: "HTML5",
    link: undefined,
  },
  [Stack.CSS]: {
    title: "CSS",
    link: undefined,
  },
  [Stack.SASS]: {
    title: "SCSS/SASS",
    link: undefined,
  },
  [Stack.JS]: {
    title: "ES6",
    link: undefined,
  },
  [Stack.STYLED_COMPONENTS]: {
    title: "Styled Components",
    link: undefined,
  },
  [Stack.FRAMER_MOTION]: {
    title: "Framer Motion",
    link: undefined,
  },
  [Stack.REACT]: {
    title: "React",
    link: undefined,
  },
  [Stack.NEXTJS]: {
    title: "NextJS",
    link: undefined,
  },
  [Stack.REDUX]: {
    title: "Redux Toolkit",
    link: undefined,
  },
  [Stack.WEBPACK]: {
    title: "Webpack",
    link: undefined,
  },
  [Stack.BABEL]: {
    title: "Babel",
    link: undefined,
  },
  [Stack.NODEJS]: {
    title: "NodeJS",
    link: undefined,
  },
  [Stack.EXPRESS]: {
    title: "ExpressJS",
    link: undefined,
  },
  [Stack.NESTJS]: {
    title: "NestJS",
    link: undefined,
  },
  [Stack.MONGO]: {
    title: "MongoDB",
    link: undefined,
  },
  [Stack.REDIS]: {
    title: "Redis",
    link: undefined,
  },
  [Stack.MySQL]: {
    title: "MySQL",
    link: undefined,
  },
  [Stack.REST]: {
    title: "Rest API",
    link: undefined,
  },
  [Stack.GRAPH]: {
    title: "GraphQL",
    link: undefined,
  },
  [Stack.STRAPI]: {
    title: "Strapi",
    link: undefined,
  },
  [Stack.WEBAPI]: {
    title: "WebAPI",
    link: undefined,
  },
  [Stack.CSHARP]: {
    title: "C#",
    link: undefined,
  },
  [Stack.DOTNET]: {
    title: ".NET 7",
    link: undefined,
  },
  [Stack.SWAGGER]: {
    title: "Swagger",
    link: undefined,
  },
  [Stack.JENKINS]: {
    title: "Jenkins",
    link: undefined,
  },
  [Stack.RABBIT_MQ]: {
    title: "RabbitMQ",
    link: undefined,
  },
  [Stack.GRPC]: {
    title: "GRpc",
    link: undefined,
  },
  [Stack.PROTO]: {
    title: "Protobuf",
    link: undefined,
  },
  [Stack.MICROSERVICES]: {
    title: "Microservices",
    link: undefined,
  },
  [Stack.DOCKER]: {
    title: "Docker",
    link: undefined,
  },
  [Stack.TRUFFLE]: {
    title: "Truffle",
    link: undefined,
  },
  [Stack.GANACHE]: {
    title: "Ganache",
    link: undefined,
  },
  [Stack.SOLIDITY]: {
    title: "Solidity",
    link: undefined,
  },
  [Stack.HARDHAT]: {
    title: "Hardhat",
    link: undefined,
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
];
