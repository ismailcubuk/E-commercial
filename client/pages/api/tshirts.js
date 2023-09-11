import { getTshirtsData } from "@/utils/tshirtsData";

export async function handlerTshirts(req, res) {
  if (req.method === "GET") {
    try {
      const tshirtsData = await getTshirtsData();
      res.status(200).json(tshirtsData);
    } catch (error) {
      console.error("Error fetching tshirts data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching tshirts data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
