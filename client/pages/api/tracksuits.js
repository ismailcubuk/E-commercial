import { getTracksuitsData } from "@/utils/tracksuitsData";

export async function handlerTracksuits(req, res) {
  if (req.method === "GET") {
    try {
      const tracksuitsData = await getTracksuitsData(); 
      res.status(200).json(tracksuitsData);
    } catch (error) {
      console.error("Error fetching tracksuits data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching tracksuits data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
