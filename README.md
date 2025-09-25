# Frontend/UX Preliminary Test Case

This project consists of two main tasks: a practical Vue.js banner component implementation and a UI/UX redesign mockup for an e-commerce product page.

## Task 1 - Practical Implementation

### Overview

This task implements a responsive banner component for landing pages using Vue.js. The component supports both square and rectangle modes, with optional carousel functionality on mobile for the square mode. It displays images and call-to-action (CTA) boxes with configurable background colors, text, headings, and links.

### Technical Decisions

#### Build Tool: Vite
I chose Vite over create-vue for this project due to its lightweight nature and fast development experience. Since this is a focused implementation of a single component, the additional boilerplate from create-vue was unnecessary. Vite provides the minimal setup needed while maintaining excellent development performance.

#### TypeScript Integration
The entire project is written in TypeScript, which has become standard in modern application development. All types are centrally organized in a dedicated types folder and exported where needed, maintaining clean architecture while keeping the project structure simple and maintainable.

#### Carousel Implementation
For the carousel functionality in square mode, I integrated Swiper.js, a well-established and thoroughly documented carousel library. This choice was based on proven reliability and extensive documentation, avoiding the need to build custom carousel logic from scratch.

#### Styling Approach
I used plain CSS for styling due to the straightforward nature of the requirements. Reusable styles are centralized in `styles.css`, while component-specific styles are contained within their respective component style tags. This approach maintains organization while keeping the codebase lightweight.

### Component Features

#### Square Mode
- Images maintain strict 1:1 aspect ratio across all screen sizes
- Prevents image stretching and distortion
- Optional carousel functionality on mobile with main image and thumbnail navigation
- CTA box displays as square on desktop, narrow rectangle on mobile for optimal space usage
- Desktop layout shows 3 boxes per row (mix of CTA and images)
- Flexible ordering based on the items prop configuration

#### Rectangle Mode
- Displays rectangular images on desktop (3:1 aspect ratio) as background images
- Mobile view shows square images with CTA box positioned below
- CTA box features semi-transparent white background for text readability
- Right-aligned CTA positioning on desktop overlay

### Design Considerations

#### Image Handling
For square mode, maintaining the 1:1 aspect ratio was prioritized over preventing potential pixelation at very large sizes. This ensures visual consistency across all viewport sizes while meeting the core requirement of preventing image distortion.

#### Responsive Behavior
The component adapts seamlessly between desktop and mobile layouts, with particular attention to mobile-first design principles. CTA boxes transform from square to rectangular on mobile to optimize vertical space usage.

#### Undefined Behaviors
The requirements mentioned carousel functionality for rectangle mode in pseudocode but not in mockups. Since this was considered undefined behavior, carousel functionality was not implemented for rectangle mode, focusing instead on the clearly specified square mode carousel.

## Task 2 - UI/UX Mockup

### Design Analysis and Approach

You can view the complete redesign mockups here: [Figma Design Link](https://www.figma.com/design/zkOILSmHOleglLWgKyUPMw/ux-design-task?node-id=24-201&t=GCzgsw57B0UcbNQ7-1)

I was asked what is the way that I would expect to recieve design deliverables, I expect them to be provided as Figma files for professional collaboration and easier review access.

### Problem Analysis and Solutions

#### Low Add to Cart Conversion Rate

The primary issue identified was insufficient visual prominence of the add to cart functionality. My solution focuses on making this element more compelling through:

- Increased button size and visual weight
- Enhanced color contrast using brighter, more attention-grabbing colors
- Addition of shopping cart icon for immediate visual recognition
- Strategic positioning to capture user attention as the primary page objective

The core goal is building user trust in the product to drive cart additions and eventual purchases.

#### Customer Support Queries About Delivery Time

The current interface lacks clear visual information, users can be lost which forces users to contact support. This indicates poor information architecture and user trust issues. My redesign addresses this by:

- Making delivery time information more prominent with clear a icon
- Increasing text size and weight for better visibility
- Repositioning product ratings above the add to cart section
- Improving overall information hierarchy for enhanced user confidence

#### Design Freshness Without Confusion

The challenge was introducing modern design elements while maintaining familiar user patterns. My approach balances innovation with usability:

- Maintained similar layout structure to preserve user familiarity
- Introduced modern UI elements including border radius, shadow effects, and improved typography
- Used the teal green color as a primary color for visual refreshment
- Created two mobile variations (pink accent and teal green) to demonstrate color flexibility
- I believe that the secondary color option provides stronger visual refresh, particularly effective on desktop product information sections

### Design Philosophy

The redesign maintains the established user flow while modernizing the visual presentation. The familiar layout ensures users can navigate intuitively, while new design elements create a fresh, engaging experience.

The product information sections received particular attention, transforming from basic text blocks to visually engaging, modern components. This approach demonstrates how the entire product page ecosystem can be enhanced following consistent design patterns.

Both desktop and mobile versions follow this balanced approach, ensuring the redesign feels fresh and contemporary while respecting established user behavior patterns.

### Implementation Notes

The mockup showcases the foundational approach for redesigning the complete product page experience. Additional components can be integrated following the same design principles, creating a cohesive, modern interface that drives conversions while maintaining usability standards.
