# Goobii Eco-Friendly Car Cleaning Service - Design Guidelines

## Design Approach
**Reference-Based**: Drawing from Airbnb's visual appeal for service presentation, Stripe's clean layouts, and modern environmental brands' organic feel. Focus on trust-building through imagery and whitespace.

## Typography System
**Font Stack**: 
- Primary: 'Inter' (Google Fonts) - 400, 500, 600, 700
- Accent: 'Poppins' (Google Fonts) - 600, 700 for headlines

**Hierarchy**:
- Hero Headline: 3.5rem (desktop) / 2.25rem (mobile), Poppins 700, tracking-tight
- Section Headers: 2.5rem (desktop) / 1.875rem (mobile), Poppins 600
- Subheadings: 1.5rem (desktop) / 1.25rem (mobile), Inter 600
- Body: 1.125rem (desktop) / 1rem (mobile), Inter 400, leading-relaxed
- Captions: 0.875rem, Inter 500

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 lg:py-32
- Component spacing: gap-8 lg:gap-12
- Container: max-w-7xl mx-auto px-4 lg:px-8
- Content-focused sections: max-w-4xl mx-auto

## Page Structure (7 Sections)

### 1. Hero Section (90vh desktop / auto mobile)
- Full-width background image showing pristine car after eco-cleaning
- Centered content overlay with blurred-background button container
- Headline + subheadline (max-w-3xl)
- Dual CTA buttons (primary: "Book Now", secondary: "Learn More") with backdrop-blur-md bg-white/10
- Trust indicator below CTAs: "★★★★★ Rated 4.9/5 by 2,000+ customers"

### 2. Services Grid (3 columns desktop / 1 mobile)
- Card-based layout with gentle shadow (shadow-lg)
- Each card: Icon (96x96), service name, description, "From $X" pricing
- Services: Express Wash, Deep Clean, Interior Detailing, Eco Protection, Fleet Service, Mobile Service
- Cards have rounded-2xl borders, hover:shadow-xl transition

### 3. Why Eco-Friendly Split Section
- Two-column (lg:grid-cols-2)
- Left: Large environmental impact image (before/after or eco products)
- Right: Benefits list with checkmark icons
- Benefits: 100% biodegradable products, Water-saving technology, Carbon-neutral operations, No harsh chemicals
- Background: Subtle gradient overlay

### 4. How It Works Timeline (Horizontal on desktop / Vertical mobile)
- 4-step process with connecting line
- Each step: Number badge, title, description, supporting icon
- Steps flow left-to-right (desktop) with animated connecting dots

### 5. Social Proof Carousel
- Customer testimonials with photos
- 3 cards visible desktop / 1 mobile, auto-scroll
- Each: Customer photo (rounded-full, 80x80), quote, name, location
- Star ratings per testimonial

### 6. Pricing Comparison (3-column desktop / stack mobile)
- Three tiers: Basic, Premium, Ultimate
- Feature comparison checkmarks
- Prominent "Most Popular" badge on middle tier
- CTA button per tier

### 7. Contact/Booking Section
- Split layout: Form (60%) + Info sidebar (40%)
- Form fields: Name, Email, Phone, Service dropdown, Date picker, Message
- Sidebar: Office hours, Phone number, Email, Service areas map placeholder
- Large "Schedule Your Clean" button

### 8. Footer (4-column desktop / stack mobile)
- Company info, Quick links, Services, Contact
- Newsletter signup with inline form
- Social icons (Instagram, Facebook, Twitter)
- Trust badges: Eco-certified, Insured, 100% Satisfaction

## Component Specifications

**Buttons**:
- Primary: Full brand colors with rounded-lg, px-8 py-4, font-semibold
- On images: Add backdrop-blur-md bg-white/10 border border-white/20
- Sizes: Large (hero), Medium (sections), Small (cards)

**Cards**:
- Rounded corners (rounded-2xl)
- Padding: p-6 lg:p-8
- Subtle shadows that lift on hover
- Consistent internal spacing (gap-4)

**Forms**:
- Input fields: rounded-lg border-2, px-4 py-3
- Focus states: ring-2 with brand color
- Labels: font-medium mb-2
- Full mobile width, comfortable desktop widths

## Images Section

**Required Images**:
1. **Hero Background** (1920x1080): Sparkling clean luxury car in eco-friendly setting (outdoor/nature backdrop), professional photography, high contrast
2. **Environmental Impact** (800x600): Eco-friendly cleaning products/water-saving equipment in action
3. **Customer Testimonials** (6 photos, 400x400 each): Diverse, happy customers with their cleaned vehicles
4. **Service Icons/Illustrations**: Custom eco-themed icons for each service type (can use Heroicons as base with custom styling)
5. **Before/After Showcase** (4 images, 600x400): Split-view comparisons of vehicle transformations

**Large Hero Image**: YES - Full-width, high-quality background image critical for establishing premium service perception and trust.

## Responsive Behavior
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Grid collapse: 3-col → 2-col → 1-col
- Typography scales proportionally (text-4xl lg:text-6xl pattern)
- Touch-friendly tap targets: min 48x48px
- Stack all multi-column layouts on mobile
- Maintain 16px minimum side margins on all devices