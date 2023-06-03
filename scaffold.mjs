export async function scaffold({ deploymentName, deploymentPath }) {
  console.log(`Scaffolding ${deploymentName} at ${deploymentPath}`);
  return {
    development: {
      port: 1000,
    },
    deployment: {
      routes: [],
      type: "static",
    },
  };
}
