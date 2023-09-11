import { getHeadphonesData } from "@/utils/headphonesData"; 

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const headphonesData = await getHeadphonesData();
      res.status(200).json(headphonesData);
    } catch (error) {
      console.error("Error fetching headphones data:", error);
      res.status(500).json({ error: "An error occurred while fetching data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}