import { getWatchesData } from "@/utils/watchesData";

export async function handlerWatches(req, res) {
  if (req.method === "GET") {
    try {
      const watchesData = await getWatchesData(); 
      res.status(200).json(watchesData);
    } catch (error) {
      console.error("Error fetching watches data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching watches data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
