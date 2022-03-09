import * as logger from "../../../../lib/logger";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await logger.info(req, 200, "fetch trace logs from api");
    const data = await logger.fetchTrace();
    res.status(200).json(data);
  } else {
    logger.error(req, 405, `${req.method} request is not allowed`);
    res.status(405).json({ message: "request not allowed" });
  }
}
