# AnimeLens - AI-Powered Anime Detection

## Project Overview

**AnimeLens** is a modern web application that uses artificial intelligence to identify anime series, characters, and episodes from uploaded screenshots. Built with cutting-edge technologies for optimal performance and user experience.

## Features

- 🤖 **AI-Powered Detection**: Advanced machine learning algorithms for accurate anime identification
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX**: Beautiful interface with smooth animations and intuitive navigation
- 📊 **Detailed Results**: Comprehensive anime information including synopsis, characters, and external links
- 🔒 **Privacy-Focused**: Automatic image deletion within 24 hours
- 📚 **API Documentation**: Complete developer documentation with code examples

## How to run this project locally?

### Prerequisites

Make sure you have Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation Steps

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd AnimeLens

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```sh
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

This project is built with modern web technologies:

- **⚡ Vite** - Fast build tool and development server
- **🔷 TypeScript** - Type-safe JavaScript development
- **⚛️ React 18** - Modern React with hooks and functional components
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 shadcn-ui** - High-quality, accessible UI components
- **🛣️ React Router** - Client-side routing
- **🔄 TanStack Query** - Data fetching and state management
- **📝 React Hook Form** - Form handling with validation
- **🎯 Zod** - Schema validation
- **🎭 Lucide React** - Beautiful icons

## Project Structure

```
AnimeLens/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn-ui components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Application pages
│   │   ├── Homepage.tsx
│   │   ├── DetectPage.tsx
│   │   ├── ResultPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── DocsPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   └── NotFound.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── App.tsx           # Main application component
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

### Option 1: Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### Option 2: Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Option 3: Manual Deployment
```sh
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload the contents to your web server
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help, please:
- Check the [Documentation](src/pages/DocsPage.tsx)
- Open an issue on GitHub
- Contact us through the [Contact Page](src/pages/ContactPage.tsx)

---

**AnimeLens** - Discover anime instantly with AI-powered recognition technology! 🚀

## Draft Penyesuaian UI/UX AnimeLens untuk Project Plan
# UI/UX Adjustment Draft for AnimeLens Project Plan (English Version)

## 🎨 Visual Identity Adjustments
1. Branding & Logo
- Keep the name "AnimeLens"
- Update tagline to: "AI-Powered Anime Recognition Research Platform"
- Add subtitle: "Developed by Team CC25-CR364"
- Maintain Purple-Blue gradient color scheme (aligned with research theme)

2. Header Navigation
- Simplify navigation menu to:
  - Home
  - About
  - Contact
- Keep the "Try Now" button, which scrolls to the detection section on the Home page
- Remove Detect, Research, and Documentation menu items

## 📱 Homepage Adjustments
### Homepage Redesign
- Section 1: Hero
  - Headline: "Anime Identification with AI Technology"
  - Subtitle: "A CNN-based research platform for anime image detection"
  - Primary CTA: "Try Detection Now"
  - Secondary CTA: "View Our Research"

- Section 2: Research Highlights (NEW)
  - "Dataset of 10,000+ Anime Images"
  - "Specialized Trained CNN Model"
  - "High Detection Accuracy"
  - "Integrated University Research"

- Section 3: How It Works (Updated)
  - Step 1: "Upload Anime Image"
  - Step 2: "Analyze with CNN Model"
  - Step 3: "Identification Results + Metadata"

- Section 4: Research Team (NEW)
  - Highlight team members from 5 universities
  - Focus on research aspects
  - Link to full team profiles

- Section 5: Integrated Detection Section
  - Upload interface with info: "Supported: JPG, PNG, GIF (Max 10MB)"
  - Upload progress indicator
  - Image preview with metadata
  - Batch upload option (for testing multiple images)
  - Confidence score with visual bar
  - Alternative predictions (top 3)
  - Technical details (processing time, model version)
  - Research data contribution notice
  - User feedback section:
    - "Is this result accurate?" (Yes/No)
    - "Help our research with your feedback"
    - Optional: "Correct the result if wrong"

## 🎯 UI Component Specifications
- Enhanced Upload Component
  - Drag & drop with visual feedback
  - File validation with error messages
  - Image preview with crop suggestion
  - Upload progress with percentage
  - Multiple file selection support

- Results Card Component
  - Anime title (large, bold)
  - Confidence score (visual progress bar)
  - Metadata grid (studio, year, genre)
  - Alternative suggestions (collapsible)
  - Action buttons (save, share, feedback)

- Research Stats Component (NEW)
  - Total detections performed
  - Current model accuracy
  - Dataset size
  - Processing speed average

- Team Profile Component (NEW)
  - Photo + Name + University
  - Role (ML/Frontend/Backend)
  - Contribution highlights
  - Contact/LinkedIn links

## 📊 Layout & Design Adjustments
- Color Scheme (Maintained)
  - Primary: Purple-Blue gradient
  - Secondary: Gray tones
  - Accent: Green (for success states)
  - Warning: Orange (for low confidence)
  - Error: Red (for failed uploads)

- Typography Hierarchy
  - H1: Research-focused headlines
  - H2: Section titles with academic tone
  - Body: Clear, informative text
  - Caption: Technical details and metadata

- Spacing & Layout
  - Wider content areas for data display
  - Card-based layout for research metrics
  - Grid system for team profiles
  - Responsive breakpoints for mobile research access

## 🔧 User Experience Improvements
- Navigation Flow
  - Landing → Research highlights → Upload
  - Upload → Results → Feedback → Research contribution
  - About → Team profiles → Research methodology

- Feedback Mechanisms
  - Accuracy rating system
  - Suggestion box for improvements
  - Research participation opt-in
  - Progress tracking for contributions

- Mobile Optimization
  - Touch-friendly upload interface
  - Swipeable results cards
  - Collapsible research sections
  - Optimized team profile grid

## 📱 Responsive Design Adjustments
- Desktop (1200px+)
  - Full research dashboard layout
  - Side-by-side upload and results
  - Expanded team profile grid
  - Detailed research metrics

- Tablet (768px-1199px)
  - Stacked upload and results
  - 2-column team profiles
  - Condensed research metrics
  - Collapsible navigation

- Mobile (320px-767px)
  - Single column layout
  - Touch-optimized upload
  - Card-based team profiles
  - Essential metrics only

## 🎨 Visual Elements to Add
- Research-Themed Graphics
  - University logos (subtle placement)
  - Research process illustrations
  - Data visualization charts
  - Academic-style infographics

- Interactive Elements
  - Hover effects on research metrics
  - Animated confidence score bars
  - Progressive disclosure for technical details
  - Smooth transitions between sections

- Loading States
  - Research-themed loading messages
  - Progress indicators with technical terms
  - Skeleton screens for data loading
  - Error states with helpful guidance

## 📋 Implementation Checklist
- Phase 1: Content Updates
  - [ ] Update all copy for research context
  - [ ] Add team member information
  - [ ] Create research methodology content
  - [ ] Update navigation structure

- Phase 2: Visual Enhancements
  - [ ] Add research metrics components
  - [ ] Enhance upload interface
  - [ ] Improve results display
  - [ ] Create team profile section

- Phase 3: UX Improvements
  - [ ] Add feedback mechanisms
  - [ ] Implement progress tracking
  - [ ] Optimize mobile experience
  - [ ] Add accessibility features

- Phase 4: Polish & Testing
  - [ ] Cross-browser testing
  - [ ] Mobile responsiveness check
  - [ ] Performance optimization
  - [ ] User testing with target audience
