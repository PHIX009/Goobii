# Goobii Marketing Website

## Overview

This is a React-based marketing website for Goobii, an eco-friendly car cleaning service in Dubai. The application promotes Goobii's Sooftwash™ technology that uses just 2-4 liters of water per wash compared to traditional methods that use 100-150 liters. The site is designed to drive app downloads and provides comprehensive information about services, subscriptions, and business solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with file-based page structure
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and design tokens
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Design System
- **Brand Colors**: Custom CSS variables for Goobii brand identity (#006980 primary, #003B5C secondary, #FF8200 accent)
- **Typography**: Custom font families (Ghost, Grandview) with Inter as fallback
- **Component Structure**: Modular reusable components (CTAGroup, ServiceCard, SubscriptionCard, FAQItem)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Page Structure
- **Home**: Hero section with value propositions and app download CTAs
- **Services**: Four service tiers (Aura, Aura Absolute, Glow, Glow Absolute)
- **Subscriptions**: Three plans (Spark 4, Spark 8, Flow 12)
- **Buildings**: B2B solutions for residential/commercial properties
- **Fleet**: Enterprise fleet management services
- **About**: Company mission and sustainability focus
- **FAQs**: Comprehensive question/answer sections
- **Contact**: Form submission with validation

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints with proper error handling
- **Request Validation**: Zod schemas for type-safe API contracts
- **Development Setup**: Vite middleware integration for hot reloading

### Data Storage Solutions
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Schema**: User management and contact submission tables
- **Fallback Storage**: In-memory storage implementation for development
- **Migration Support**: Drizzle Kit for database schema management

### Contact Form System
- **Validation**: Client and server-side validation using Zod
- **Storage**: Contact submissions stored with timestamps
- **Error Handling**: Proper error responses with user-friendly messages
- **Logging**: Server-side logging of form submissions

## External Dependencies

### Database & Storage
- **Neon Database**: PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database queries and migrations

### UI Framework & Components
- **Radix UI**: Accessible component primitives for complex UI elements
- **Shadcn/ui**: Pre-built component library with consistent styling
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Type safety across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundling for production

### Form & Validation
- **React Hook Form**: Performant form handling
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Deployment & Runtime
- **Replit Integration**: Development environment optimizations
- **Express**: Node.js web framework for API routes
- **Session Management**: PostgreSQL session storage support

### Third-party Services
- **Unsplash**: Stock photography for marketing imagery
- **Google Fonts**: Typography integration (Inter font family)
- **Placeholder Links**: iOS and Android app store placeholders for CTAs