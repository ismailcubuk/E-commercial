import { getAllData } from "@/utils/allData";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const allData = await getAllData();
      res.status(200).json(allData);
    } catch (error) {
      console.error("Error fetching all data:", error);
      res.status(500).json({ error: "An error occurred while fetching data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
