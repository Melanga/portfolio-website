import React from "react";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

import {
  ProjectCardWrapper,
  ProjectIcon,
  ProjectHeading,
  ProjectDescription,
} from "./ProjectsSectionElements";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 15,
  (x - rect.left - rect.width / 2) / 15,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectCard = ({ img, alt, heading, description, trigger }) => {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys, config: config.wobbly });
  return (
    <div ref={ref}>
      <animated.div
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          if (trigger) {
            const rect = ref.current.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          } else {
            set([0, 0, 1]);
          }
        }}
      >
        <ProjectCardWrapper id={img}>
          <ProjectIcon src={img} alt={alt}></ProjectIcon>
          <ProjectHeading>{heading}</ProjectHeading>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectCardWrapper>
      </animated.div>
    </div>
  );
};

export default ProjectCard;
