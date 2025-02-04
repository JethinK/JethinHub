const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  trailingSlash: true, // Ensures all routes end with a "/"
};
