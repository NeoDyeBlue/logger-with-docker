import * as logger from "../../../../lib/logger";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await logger.info(req, "fetch warn logs from api");
    const data = await logger.fetchWarn();
    res.status(200).json(data);
  } else {
    logger.debug(req, "used other request methods instead of GET");
    res.status(200).json({ message: "request unavailable" });
  }
}
