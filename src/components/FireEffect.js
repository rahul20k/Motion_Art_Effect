import React, { useEffect, useCallback } from 'react';
import { tsParticles } from "tsparticles";
import { loadFirePreset } from "tsparticles-preset-fire";

const FireEffect = () => {
  const initParticles = useCallback(async () => {
    await loadFirePreset(tsParticles);
    tsParticles.load("tsparticles", {
      preset: "fire",
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      particles: {
        move: {
          enable: true,
          speed: 3
        }
      }
    });
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  return <div id="tsparticles"></div>;
};

export default FireEffect;