import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.graphify.com/mcp",
  description: "Give AI agents codebase context through a code knowledge graph.",
  auth: connect("api.graphify.com/" + process.env.VERCEL_PROJECT_ID),
});
