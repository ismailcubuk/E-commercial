import { getShoesData } from "@/utils/shoesData";

export async function handlerShoes(req, res) {
  if (req.method === "GET") {
    try {
      const shoesData = await getShoesData(); 
      res.status(200).json(shoesData);
    } catch (error) {
      console.error("Error fetching shoes data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching shoes data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
