import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendQuoteEmails } from "./email";
import { z } from "zod";

const quoteSchema = z.object({
  companyName: z.string().min(1),
  contactName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  services: z.array(z.string()).default([]),
  notes: z.string().optional(),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Quote submission endpoint - just sends emails, no database
  app.post("/api/quotes", async (req, res) => {
    try {
      const validatedData = quoteSchema.parse(req.body);
      
      // Send emails
      await sendQuoteEmails(validatedData);
      
      res.json({ 
        success: true, 
        message: "Quote request submitted successfully"
      });
    } catch (error) {
      console.error("Error processing quote:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit quote request" 
      });
    }
  });

  return httpServer;
}