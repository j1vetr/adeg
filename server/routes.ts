import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteSchema } from "@shared/schema";
import { sendQuoteEmails } from "./email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Quote submission endpoint
  app.post("/api/quotes", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertQuoteSchema.parse(req.body);
      
      // Save to database
      const quote = await storage.createQuote(validatedData);
      
      // Send emails (async, don't wait for completion)
      sendQuoteEmails(validatedData).catch((error) => {
        console.error("Failed to send quote emails:", error);
      });
      
      res.json({ 
        success: true, 
        message: "Quote request submitted successfully",
        quoteId: quote.id 
      });
    } catch (error) {
      console.error("Error creating quote:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit quote request" 
      });
    }
  });

  // Get all quotes (admin endpoint - optional)
  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch quotes" 
      });
    }
  });

  return httpServer;
}