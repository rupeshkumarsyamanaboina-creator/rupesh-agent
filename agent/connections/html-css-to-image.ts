import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.hcti.io",
  description: "Generate images, screenshots, and PDFs from HTML, URLs, or templates.",
  auth: connect("mcp.hcti.io/" + process.env.VERCEL_PROJECT_ID),
});
