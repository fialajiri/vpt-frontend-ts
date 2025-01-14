/** @type {import('next').NextConfig} */

const {
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["vpt-images.s3.eu-central-1.amazonaws.com"],
      },
      env: {
      
      },
    };
  }

  return {
    images: {
      domains: ["vpt-images.s3.eu-central-1.amazonaws.com"],
    },

    env: {
     
    },
  };
};
