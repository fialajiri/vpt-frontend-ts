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
        mongodb_username: "jiri_fiala",
        mongodb_password: "Weapon1984*",
        mongodb_clustername: "cluster0",
        mongodb_database: "volba",
        REACT_APP_BACKEND_URL: "https://vpt-backend.herokuapp.com/api",
        NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-DYBEGLWFK7",
      },
    };
  }

  return {
    images: {
      domains: ["vpt-images.s3.eu-central-1.amazonaws.com"],
    },

    env: {
      mongodb_username: "jiri_fiala",
      mongodb_password: "Weapon1984*",
      mongodb_clustername: "cluster0",
      mongodb_database: "nextjs-blog",
      REACT_APP_BACKEND_URL: "https://vpt-backend.herokuapp.com/api",
      NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-DYBEGLWFK7",
    },
  };
};
