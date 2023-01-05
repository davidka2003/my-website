import { useEffect, useRef } from "react";
import Matter, {
  Bodies,
  Common,
  Composite,
  Composites,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  World,
} from "matter-js";
import { STACK_ALL } from "@utils/constants/stack";
import { getImageDimensions } from "@utils/matterjs/getImageDimensions";

export const MyStackService = () => {
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef(Engine.create());
  useEffect(() => {
    if (!scene.current) {
      return;
    }
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;
    const render = getRender(scene.current, engine.current);
    const init = async () => {
      if (!scene.current) {
        return;
      }

      const stack = await getStack(cw);
      const mouseConstraint = getMouseConstraint(render, engine.current);
      const walls = getWalls(cw, ch);
      Composite.add(engine.current.world, stack);
      Composite.add(engine.current.world, mouseConstraint);
      Composite.add(engine.current.world, walls);
      //run
      Matter.Runner.run(engine.current);
      Render.run(render);
    };
    init();
    // unmount
    return () => {
      // destroy Matter
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
      //@ts-ignore
      render.canvas = null;
      //@ts-ignore
      render.context = null;
      render.textures = {};
    };
  }, []);
  return { scene };
};

const getStack = async (sceneWidth: number) => {
  const height = 50;
  const elements = STACK_ALL.map(async (ent, index) => {
    const url = "/icons/".concat(ent);
    const textureSize = await getImageDimensions(url);
    const scaleY = height / textureSize.height;
    return Matter.Bodies.rectangle(
      (20 * index + 1) % (sceneWidth * 0.9),
      20,
      textureSize.width * scaleY,
      textureSize.height * scaleY,
      {
        // restitution: 0.5,
        render: {
          fillStyle: "black",
          sprite: {
            texture: url,
            xScale: scaleY,
            yScale: scaleY,
          },
        },
      }
    );
  });
  return await Promise.all(elements);
};
const getMouseConstraint = (render: Matter.Render, engine: Matter.Engine) => {
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });
  return mouseConstraint;
};
const getWalls = (cw: number, ch: number) => {
  return [
    Bodies.rectangle(0, 0, 1, ch * 2, {
      isStatic: true,
      render: { fillStyle: "black" },
    }), //left
    Bodies.rectangle(0, 0, cw * 2, 1, {
      isStatic: true,
      render: { fillStyle: "black" },
    }), //top
    Bodies.rectangle(cw, 0, 1, ch * 2, {
      isStatic: true,
      render: { fillStyle: "black" },
    }), //right
    Bodies.rectangle(0, ch, cw * 2, 1, {
      isStatic: true,
      render: { fillStyle: "black" },
    }), //bottom
  ];
};
const getRender = (scene: HTMLElement, engine: Matter.Engine) =>
  Render.create({
    element: scene,
    engine: engine,
    options: {
      width: scene.clientWidth,
      height: scene.clientHeight,
      wireframes: false,
      background: "transparent",
    },
  });
