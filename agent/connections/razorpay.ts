import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.razorpay.com/mcp",
  description: "Manage payments, settlements, and account data.",
  auth: connect("mcp.razorpay.com/" + process.env.VERCEL_PROJECT_ID),
});
