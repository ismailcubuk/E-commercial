import { getKeyboardsData } from "@/utils/keyboardsData"; 

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const keyboardsData = await getKeyboardsData();
      res.status(200).json(keyboardsData);
    } catch (error) {
      console.error("Error fetching keyboards data:", error);
      res.status(500).json({ error: "An error occurred while fetching data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
