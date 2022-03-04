import * as logger from "../../../../lib/logger";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await logger.info(req, "fetch all logs from api");
    const data = await logger.fetchAll();
    res.status(200).json(data);
  } else if(req.method == "DELETE") {
    logger.clearAll();
    logger.debug(req, "clear all logs");
    res.status(200).json({ message: "logs cleared" });
  } else {
    logger.debug(req, "used other request methods instead of GET or DELETE");
    res.status(200).json({ message: "request unavailable" });
  }
}
