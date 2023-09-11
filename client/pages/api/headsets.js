import { getHeadsetsData } from "@/utils/headsetsData"; 

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const headsetsData = await getHeadsetsData(); 
      res.status(200).json(headsetsData);
    } catch (error) {
      console.error("Error fetching headsets data:", error);
      res.status(500).json({ error: "An error occurred while fetching data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
