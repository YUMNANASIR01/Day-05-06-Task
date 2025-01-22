# Furniro - Furniture Marketplace

A fully optimized and responsive furniture marketplace built using Next.js 15, TypeScript, and Tailwind CSS. Furniro focuses on providing an exceptional user experience with modern development practices, testing, and performance enhancements.

---

## 🚀 Features

### 🌟 Core Features
- Dynamic product listing with Incremental Static Regeneration (ISR).
- Product categories, filters, and detailed product pages.
- Interactive Hero section with Call-to-Action buttons.
- AI-driven personalized product recommendations.
- Multi-language support for global accessibility.

### 🔒 Security
- Secure API communication using HTTPS.
- Input validation and sanitization to prevent XSS and SQL injection.
- Environment variables used for sensitive data like API keys.

### 🧪 Testing
- Unit testing with React Testing Library.
- End-to-end testing using Cypress.
- Functional and User Acceptance Testing (UAT) covering:
  - Browsing products, adding to cart, and checkout.
  - Fallback UI for empty states or API failures.

### ⚡ Performance Optimization
- **Image Optimization:**
  - All images compressed using TinyPNG.
  - Leveraged Next.js Image Optimization with lazy loading for non-critical images.
- **Code Splitting and Lazy Loading:**
  - Components dynamically imported to reduce initial JavaScript bundle size.
- **Minified and Purged CSS:**
  - Removed unused CSS with PurgeCSS.
- **Caching:**
  - Static file caching and browser caching for assets.

### 📱 Responsive Design
- Fully responsive across devices using Tailwind CSS.
- Cross-browser compatibility tested on Chrome, Firefox, Safari, and Edge.

---

## 🔧 Tech Stack
- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Testing:**
  - Unit Tests: React Testing Library
  - End-to-End Tests: Cypress
- **Performance Tools:**
  - Lighthouse for performance evaluation.
  - TinyPNG for image compression.

---

## 📊 Core Web Vitals
- **Performance Score:** Improved to 90+ in Lighthouse.
- **Largest Contentful Paint (LCP):** Optimized with image lazy loading and caching.
- **Cumulative Layout Shift (CLS):** Addressed layout shifts by explicitly setting width and height for all images.

---

## 🌐 Data Fetching and Error Handling

### 📡 API Calls
- Utilized **Next.js API routes** for server-side operations.
- Fetching data using **Axios** and **Fetch API** with async/await for cleaner syntax.

### 🛡️ Error Handling
- Implemented global error boundaries for catching unexpected issues.
- Displayed meaningful error messages to users with fallback UI.
- Handled API errors with try-catch blocks and retries for transient issues.
- Added network status detection to notify users of offline mode.

### 🔄 Data Loading States
- Loading spinners or skeleton screens displayed during API calls.
- Handled empty data states gracefully with user-friendly messages.

---

## 🛠️ Project Setup

### 1. Installation
```bash
git clone https://github.com/your-repo/furniro-marketplace.git
cd furniro-marketplace
npm install
```

### 2. Running the Development Server
Start the server locally:
```bash
npm run dev
```
Access the application at [http://localhost:3000](http://localhost:3000).

### 3. Building for Production
Build the application for production:
```bash
npm run build
```
Start the production server:
```bash
npm start
```

---

## 🧪 Testing Instructions

### Unit Tests
Run all unit tests:
```bash
npm test
```

### End-to-End Tests
Open Cypress Test Runner for interactive testing:
```bash
npm run cypress:open
```
Run Cypress tests in the terminal:
```bash
npm run cypress:run
```

---

## 🖼️ Optimizations

### Image Optimization
- Compressed all images using TinyPNG.
- Used the Next.js Image Component for responsive, optimized, and lazy-loaded images.

### JavaScript Optimization
- Implemented dynamic imports with `next/dynamic` to split the JavaScript bundle.

### CSS Optimization
- Removed unused CSS using PurgeCSS and ensured all styles were minified.

### Caching
- Utilized browser caching and static file caching for faster repeat visits.

---

## ✨ Future Enhancements
- Add PWA (Progressive Web App) support for offline capabilities.
- Integrate advanced analytics for user behavior tracking.
- Expand AI-driven personalization to include search and browsing.

---

## 👨‍💻 Contributors
- Yumna Nasir - Designer

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

---

Let me know if there are any further modifications or additions required! 
