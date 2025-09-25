# Banner Component Case Study

Overview

This project implements a banner component for landing pages. It supports both square and rectangle modes, with optional carousel functionality on mobile for the square mode. The component displays images and a call-to-action (CTA) box with configurable background and text colors, headings, and links.

Project Setup

Vite

I decided to use Vite as the build tool instead of create-vue, the official Vue project scaffolding tool. The reason is that this project is small and straightforward, so the additional files and configurations from create-vue were unnecessary. Vite provides a lightweight and fast development experience, allowing me to focus on implementing the component without extra boilerplate.

TypeScript

The project is written in TypeScript because it has become a standard in modern applications. All the necessary types are stored in the types folder and exported wherever needed. This keeps the project organized while remaining simple.

Carousel

For the carousel functionality in square mode, I used Swiper.js, a well-tested and documented carousel library. I have previously used it in React projects, so it was familiar and allowed me to avoid reinventing the wheel.

CSS

I used plain CSS because the task is relatively simple. Any reusable styles across components are placed in styles.css, while component-specific styles are defined inside the style tag of the corresponding component. This approach keeps the code organized and easy to maintain.

Thought Process and Decisions

Images and Aspect Ratio

For square mode, it was important that images maintain a 1:1 aspect ratio and do not stretch out of shape. While the requirement mentioned not stretching, it was unclear what behavior was expected if images were scaled beyond their resolution. I ensured that images keep a 1:1 aspect ratio regardless of screen size. This may result in pixelation if the image becomes very large, but it meets the described requirement.

For the rectangle mode, the aspect ratio of the image was defined as 3:1, which aligns with typical banner layouts.

Carousel in Rectangle Mode

The behavior of a carousel in rectangle mode was not specified in the requirements. It was mentioned in pseudocode but not in the mockups. Therefore, it is considered undefined behavior, and I did not implement a carousel for rectangle mode.

Conclusion

This project demonstrates the implementation of a flexible banner component with attention to responsive design, usability, and clarity. All decisions have been documented, including any assumptions made when requirements were ambiguous.

Thank you for reviewing this case study.
