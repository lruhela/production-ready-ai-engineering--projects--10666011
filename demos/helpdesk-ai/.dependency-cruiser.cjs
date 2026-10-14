module.exports = {
  forbidden: [
    {
      name: "web-must-not-depend-on-api",
      severity: "error",
      from: { path: "^apps/web/" },
      to: { path: "^apps/api/" },
    },
  ],
};