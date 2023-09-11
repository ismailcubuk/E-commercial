import { getPhonesData } from "@/utils/phonesData"; 

export async function handlerPhones(req, res) {
    if (req.method === "GET") {
      try {
        const phonesData = await getPhonesData(); 
        res.status(200).json(phonesData);
      } catch (error) {
        console.error("Error fetching phones data:", error);
        res.status(500).json({ error: "An error occurred while fetching phones data" });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }