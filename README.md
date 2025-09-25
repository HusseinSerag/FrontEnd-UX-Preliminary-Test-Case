# Frontend/UX Preliminary Test Case

This project consists of two main tasks: a practical Vue.js banner component implementation and a UI/UX redesign mockup for an e-commerce product page.

## Task 1 - Practical Implementation

## Banner Component Case Study Overview
This project implements a banner component for landing pages. It supports both square and rectangle modes, with optional carousel functionality on mobile for the square mode. The component displays images and a call-to-action (CTA) box with configurable background and text colors, headings, and links.

## Project Setup

### Vite
I decided to use Vite as the build tool instead of create-vue, the official Vue project scaffolding tool. The reason is that this project is small and straightforward, so the additional files and configurations from create-vue were unnecessary. Vite provides a lightweight and fast development experience, allowing me to focus on implementing the component without extra boilerplate.

### TypeScript
The project is written in TypeScript because it has become a standard in modern applications. All the necessary types are stored in the types folder and exported wherever needed. This keeps the project organized while remaining simple.

### Carousel
For the carousel functionality in square mode, I used Swiper.js, a well-tested and documented carousel library. I have previously used it in React projects, so it was familiar and allowed me to avoid reinventing the wheel.

### CSS
I used plain CSS because the task is relatively simple. Any reusable styles across components are placed in styles.css, while component-specific styles are defined inside the style tag of the corresponding component. This approach keeps the code organized and easy to maintain.

## Thought Process and Decisions

### Images and Aspect Ratio
For square mode, it was important that images maintain a 1:1 aspect ratio and do not stretch out of shape. While the requirement mentioned not stretching, it was unclear what behavior was expected if images were scaled beyond their resolution. In real life applications we would obviously set a maximum width and height but for this test case it is not set, but I ensured that images keep a 1:1 aspect ratio regardless of screen size. This may result in pixelation if the image becomes very large, but it meets the described requirement.

For the rectangle mode, the aspect ratio of the image was defined as 3:1, which aligns with typical banner layouts.

### Carousel in Rectangle Mode
The behavior of a carousel in rectangle mode was not specified in the requirements. It was mentioned in pseudocode but not in the mockups. Also from my understanding in this context, it doesn't make sense, therefore, it is considered undefined behavior to set true when mode is equal to rectangle, and I did not implement a carousel for rectangle mode.

## Conclusion
This project demonstrates the implementation of a flexible banner component with attention to responsive design, usability, and clarity. All decisions have been documented, including any assumptions made when requirements were ambiguous.

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
