import { Request, Response } from "express";

export const testRoute = async (req: Request, res: Response) => {
    try {
        const { apiKey } = req.body;

        if (!apiKey) {
            res.status(400).json({ error: "Cannot find API Key" });
            return;
        }

        res.status(200).json({
            name: "Tamojit Das",
            env: "test",
            key: `Key used: ${apiKey.slice(0, 4)}***`
        })
    } catch (error) {
        console.log("Error in testRoute controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}