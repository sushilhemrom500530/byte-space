# 🌌 ByteSpace — Online Learning & Course Marketplace

ByteSpace is a modern, high-performance web platform designed to connect eager learners with world-class course creators. Built with **Next.js 16 (App Router)**, **React 19**, and **TailwindCSS v4**, ByteSpace delivers an immersive, pixel-perfect learning experience featuring rich 3D visuals, interactive course catalogs, advanced search & filtering, and a mobile-first responsive layout.

---

## ✨ Features & Architecture

### 1. 🚀 Dynamic Hero Banner
- **Interactive Search**: Real-time search bar that accepts queries and redirects directly to the `/courses` catalog with pre-filtered results.
- **3D Decorative Elements**: Floating geometric 3D shapes positioned using modern CSS custom properties and pseudo-classes (`::before`, `::after`) for zero-layout-shift performance.
- **Interactive Badges**: Live learner spotlight cards (`UI/UX Design`, `Happy Students`, `Learning Progress: 55%`) anchored seamlessly across all responsive breakpoints.

### 2. 📚 Comprehensive Course Catalog (`/courses`)
- **Instant Search & Query Sync**: URL search parameter synchronization (`?search=...`) allowing direct links and bookmarking of filtered searches.
- **Category Filter Dropdown**: Quickly filter by categories such as *Design*, *Development*, *Business*, *Marketing*, *Data Analytics*, and *Finance*.
- **Multi-Faceted Filtering & Sorting**:
  - Filter by Skill Level (*Beginner*, *Intermediate*, *Advanced*).
  - Filter by Topical Tags (*UI/UX*, *Web Development*, *Productivity*, etc.).
  - Sort by *Relevance*, *Price (Low to High / High to Low)*, *Ratings*, and *Popularity*.
- **Smooth Pagination**: Multi-page catalog navigation with automated smooth scrolling back to the top of the grid.

### 3. 🎓 Course Details (`/courses/view/[courseId]`)
- Rich course landing page with overview header, enrollment action sidebar, and tabbed content navigation (*About*, *Curriculum / Lessons*, and *Student Reviews*).

### 4. 👥 Creator Directory (`/creators`)
- Dedicated showcase of top instructors and educators with follower counts, course stats, and creator spotlights.

### 5. 📱 Responsive Navigation & Mobile Drawer
- **Smart Adaptive Navbar**: Fixed navigation with auto-hiding on scroll down, revealing on scroll up, and dynamic height transition (`75px` at scroll top, `100px` when scrolled).
- **Fullscreen Mobile Drawer**: Portaled sliding drawer with frosted backdrop blur, navigation links, cart shortcut, and quick authentication buttons (*Sign In*, *Join Us*).

### 6. 🔐 Authentication Experience
- Modern, clean authentication flows for both **Sign In** (`/auth/sign-in`) and **Sign Up / Join Us** (`/auth/sign-up`).

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [TailwindCSS v4](https://tailwindcss.com/) & Vanilla CSS custom properties |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (`hi2`, `fi`, `bs`) |
| **Typography** | [Poppins](https://fonts.google.com/specimen/Poppins), [Geist Sans](https://vercel.com/font) |
| **Package Manager** | `npm` |

---

## 🎨 Color Palette & Design System

- **Primary Blue**: `#003BE2` — Bold, vibrant brand signature color.
- **Secondary Lime**: `#D4FB20` — High-energy accent color for primary call-to-actions, buttons, and badges.
- **Backgrounds**: Pure White (`#FFFFFF`), Slate Light (`#F6F6F7`), and Primary Grid Pattern.
- **Typography**: Dark Gray / Black (`#111111`, `#242528`, `#52525B`).

---

## 📂 Project Structure

```text
byte-space/
├── public/                     # Static assets and browser favicons
│   ├── icon.svg                # ByteSpace SVG favicon
│   └── favicon.ico             # ByteSpace ICO favicon
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── (public)/           # Public layout routes (Home, Courses, Creators)
│   │   │   ├── courses/        # Course catalog & course details pages
│   │   │   ├── creators/       # Creators directory
│   │   │   └── page.tsx        # Homepage
│   │   ├── auth/               # Sign In & Sign Up auth routes
│   │   ├── icon.svg            # Dynamic metadata app icon
│   │   ├── favicon.ico         # App favicon
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   └── not-found.tsx       # Custom 404 page
│   ├── assets/                 # SVGs, 3D shapes, avatars & illustration assets
│   ├── components/             # Modular React components
│   │   ├── auth/               # Authentication form components
│   │   ├── common/             # Shared layout components
│   │   ├── courses/            # Course listing, banner, and filter components
│   │   ├── home/               # Homepage sections (Banner, Discover, Growth, Join Us, etc.)
│   │   ├── navbar.tsx          # Global navigation bar & mobile drawer
│   │   └── footer.tsx          # Global footer with newsletter signup
│   ├── data/                   # Mock course data, creator lists, and navigation links
│   ├── styles/                 # Global CSS and Tailwind definitions
│   └── types/                  # TypeScript interface definitions
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites
- Node.js `v18.17+` (v20+ recommended)
- `npm` or `pnpm` or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/byte-space.git
   cd byte-space
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```
