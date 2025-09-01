import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  topic: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Log the contact submission (as per requirements)
      console.log("Contact form submission:", {
        timestamp: new Date().toISOString(),
        data: validatedData
      });
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      res.json({
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
        submissionId: submission.id
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again."
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
