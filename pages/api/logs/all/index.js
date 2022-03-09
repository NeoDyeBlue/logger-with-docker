import * as logger from "../../../../lib/logger";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await logger.info(req, 200, "fetch all logs from api");
    const data = await logger.fetchAll();
    res.status(200).json(data);
  } else if (req.method == "DELETE") {
    logger.clearAll();
    res.status(200).json({ message: "logs cleared" });
  } else {
    logger.error(req, 405, `${req.method} request is not allowed`);
    res.status(405).json({ message: "request not allowed" });
  }
}
