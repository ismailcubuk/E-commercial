import { getMouseData } from "@/utils/mouseData"; 

export async function handlerMouse(req, res) {
    if (req.method === "GET") {
      try {
        const mouseData = await getMouseData();
        res.status(200).json(mouseData);
      } catch (error) {
        console.error("Error fetching mouse data:", error);
        res.status(500).json({ error: "An error occurred while fetching mouse data" });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }