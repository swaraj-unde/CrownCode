# Crown Code

**Crown Code** is a modern, AI-powered code editor and playground platform that enables developers to write, test, and share code across multiple frameworks in a browser-based environment. Built with Next.js 16, it integrates WebContainer technology for live previews, Monaco Editor for professional code editing, and AI-powered assistance for intelligent code completion and debugging.

## 🚀 Features

### Core Functionality
- **Multi-Framework Support**: Create playgrounds with React, Next.js, Express, Vue, Hono, and Angular templates
- **Live Code Preview**: Real-time preview using WebContainer API with instant compilation
- **AI-Powered Assistance**: Intelligent code completion and chat assistance using local Ollama (Codellama)
- **Professional Code Editor**: Monaco Editor integration with custom dark theme and advanced features
- **File Management**: Full CRUD operations for files and folders within playgrounds
- **Project Management**: Create, edit, duplicate, and delete playgrounds with star/favorite functionality
- **Terminal Integration**: Built-in terminal for running commands and debugging
- **Authentication**: Secure OAuth authentication via GitHub and Google
- **Responsive Design**: Modern, dark-themed UI with mobile responsiveness

### Advanced Features
- **Real-time Collaboration**: Auto-save functionality with unsaved changes indicators
- **Template System**: Pre-configured starter templates for rapid development
- **Code Intelligence**: Context-aware AI suggestions based on code analysis
- **Hot Reloading**: Instant preview updates on code changes
- **Keyboard Shortcuts**: Professional editor shortcuts (Ctrl+S for save, etc.)
- **Theme Support**: Dark mode with premium gold accent styling
- **Resizable Panels**: Flexible layout with resizable editor and preview panels

## 📋 Table of Contents

- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Available Scripts](#-available-scripts)
- [Architecture Overview](#-architecture-overview)
- [Module Documentation](#-module-documentation)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Authentication Flow](#-authentication-flow)
- [WebContainer Integration](#-webcontainer-integration)
- [AI Integration](#-ai-integration)
- [Template System](#-template-system)
- [Component Library](#-component-library)
- [Styling & Theming](#-styling--theming)
- [Development Workflow](#-development-workflow)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 🛠 Technology Stack

### Frontend Framework
- **Next.js 16.2.9** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS post-processing

### UI Components & Styling
- **shadcn/ui** - Reusable component library (Radix Nova style)
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities
- **next-themes** - Theme management
- **sonner** - Toast notifications

### Code Editor & Preview
- **Monaco Editor 0.55.1** - VS Code's editor (via @monaco-editor/react)
- **WebContainer API 1.6.4** - Browser-based container for code execution
- **xterm.js 6.0.0** - Terminal emulator
  - xterm-addon-fit - Terminal fit plugin
  - xterm-addon-search - Terminal search plugin
  - xterm-addon-web-links - Terminal web links plugin

### Database & ORM
- **MongoDB** - NoSQL database
- **Prisma 6.19.3** - Database ORM and toolkit
  - @auth/prisma-adapter - NextAuth Prisma adapter
  - @prisma/extension-accelerate - Prisma Accelerate extension

### Authentication
- **NextAuth 5.0.0-beta.31** - Authentication for Next.js
- **OAuth Providers** - GitHub and Google authentication

### State Management & Hooks
- **Zustand 5.0.14** - Lightweight state management
- **React Hooks** - Custom hooks for various functionalities

### AI Integration
- **Ollama (Local)** - Local AI model hosting
- **Codellama** - AI model for code completion and chat

### Additional Libraries
- **date-fns 4.4.0** - Date manipulation
- **react-markdown 10.1.0** - Markdown rendering
  - remark-gfm - GitHub Flavored Markdown
  - remark-math - Math support
  - rehype-katex - Math rendering
- **react-resizable-panels 4.11.2** - Resizable panel components
- **recharts 3.8.0** - Chart library
- **embla-carousel-react 8.6.0** - Carousel component
- **react-day-picker 10.0.1** - Date picker
- **cmdk 1.1.1** - Command menu
- **input-otp 1.4.2** - OTP input component
- **vaul 1.1.2** - Drawer component
- **tw-animate-css 1.4.0** - Tailwind animations

### Development Tools
- **ESLint 9** - Code linting
- **eslint-config-next 16.2.9** - Next.js ESLint configuration
- **TypeScript Compiler** - Type checking

## 📁 Project Structure

```
p6/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication route group
│   │   └── auth/
│   │       ├── layout.tsx       # Auth layout
│   │       └── sign-in/
│   │           └── page.tsx     # Sign-in page
│   ├── (root)/                 # Root route group
│   │   ├── layout.tsx          # Root layout with header/footer
│   │   └── page.tsx            # Landing page
│   ├── api/                    # API routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts    # NextAuth handler
│   │   ├── chat/
│   │   │   └── route.ts        # AI chat endpoint
│   │   ├── code-completion/
│   │   │   └── route.ts        # AI code completion endpoint
│   │   └── template/
│   │       └── [id]/
│   │           └── route.ts    # Template generation endpoint
│   ├── dashboard/              # Dashboard routes
│   │   ├── layout.tsx         # Dashboard layout with sidebar
│   │   └── page.tsx           # Dashboard main page
│   ├── playground/            # Playground routes
│   │   └── [id]/
│   │       ├── layout.tsx     # Playground layout
│   │       └── page.tsx       # Playground editor page
│   ├── favicon.ico           # Favicon
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout with providers
├── components/               # React components
│   ├── providers/           # Context providers
│   │   └── theme-provider.tsx
│   └── ui/                  # shadcn/ui components (61 components)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── sidebar.tsx
│       ├── tabs.tsx
│       ├── tooltip.tsx
│       └── ... (48 more components)
├── hooks/                   # Custom React hooks
│   └── use-mobile.ts       # Mobile detection hook
├── lib/                    # Utility libraries
│   ├── db.ts              # Prisma client instance
│   ├── template.ts        # Template path mappings
│   └── utils.ts           # Utility functions (cn helper)
├── modules/               # Feature modules
│   ├── ai-chat/           # AI chat functionality
│   │   ├── components/
│   │   └── hooks/
│   ├── auth/              # Authentication module
│   │   ├── actions/
│   │   │   └── index.ts   # Server actions for auth
│   │   ├── components/
│   │   │   ├── logout-button.tsx
│   │   │   ├── sign-in-form-client.tsx
│   │   │   └── user-button.tsx
│   │   ├── hooks/
│   │   │   └── use-current-user.ts
│   │   └── types.ts
│   ├── dashboard/         # Dashboard module
│   │   ├── actions/
│   │   │   └── index.ts   # Dashboard server actions
│   │   ├── components/
│   │   │   ├── add-new.tsx
│   │   │   ├── add-repo.tsx
│   │   │   ├── dashboard-sidebar.tsx
│   │   │   ├── empty-state.tsx
│   │   │   ├── mark-toggled.tsx
│   │   │   ├── project-table.tsx
│   │   │   └── templating-selecting-modal.tsx
│   │   └── types.ts
│   ├── home/              # Home page components
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── playground/        # Playground editor module
│   │   ├── actions/
│   │   │   └── index.ts   # Playground server actions
│   │   ├── components/
│   │   │   ├── dialogs/   # Dialog components
│   │   │   │   ├── confirmation-dialog.tsx
│   │   │   │   ├── delete-dialog.tsx
│   │   │   │   ├── new-file-dialog.tsx
│   │   │   │   ├── new-folder-dialog.tsx
│   │   │   │   ├── rename-file-dialog.tsx
│   │   │   │   └── rename-folder-dialog.tsx
│   │   │   ├── loader.tsx
│   │   │   ├── playground-editor.tsx
│   │   │   ├── playground-explorer.tsx
│   │   │   └── toggle-ai.tsx
│   │   ├── hooks/
│   │   │   ├── useAISuggestion.tsx
│   │   │   ├── useFileExplorer.tsx
│   │   │   └── usePlayground.tsx
│   │   └── lib/
│   │       ├── editor-config.ts
│   │       ├── index.ts
│   │       └── path-to-json.ts
│   ├── webcontainers/     # WebContainer integration
│   │   ├── components/
│   │   │   ├── terminal.tsx
│   │   │   └── webcontainer-preview.tsx
│   │   └── hooks/
│   │       ├── transformer.ts
│   │       └── useWebContainer.ts
├── prisma/               # Prisma ORM
│   └── schema.prisma     # Database schema
├── public/               # Static assets
│   ├── add-new.svg
│   ├── add-repo.svg
│   ├── angular-2.svg
│   ├── empty-state.svg
│   ├── expressjs-icon.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── hero.svg
│   ├── hono.svg
│   ├── login.svg
│   ├── logo2.png
│   ├── next.svg
│   ├── nextjs-icon.svg
│   ├── react.svg
│   ├── vercel.svg
│   ├── vuejs-icon.svg
│   └── window.svg
├── starters/            # Starter templates (40+ frameworks)
│   ├── angular/
│   ├── express-simple/
│   ├── hono-nodejs-starter/
│   ├── nextjs/
│   ├── react-ts/
│   ├── vue/
│   ├── vite-shadcn/
│   └── ... (34 more templates)
├── .env                 # Environment variables (gitignored)
├── .gitignore          # Git ignore rules
├── AGENTS.md           # Agent-specific instructions
├── CLAUDE.md           # Claude AI instructions
├── auth.config.ts      # NextAuth configuration
├── auth.ts             # NextAuth setup
├── components.json     # shadcn/ui configuration
├── eslint.config.mjs   # ESLint configuration
├── next-auth.d.ts      # NextAuth TypeScript types
├── next.config.ts      # Next.js configuration
├── next-env.d.ts       # Next.js environment types
├── package.json        # Dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
├── proxy.ts            # Authentication middleware
├── routes.ts           # Route definitions
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## 🔧 Installation

### Prerequisites
- Node.js 18+ (recommended 20.x)
- MongoDB instance (local or cloud)
- Ollama installed locally (for AI features)
- Git

### Step-by-Step Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd p6
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory (see [Environment Variables](#environment-variables) section)

4. **Set up MongoDB**
Ensure you have a MongoDB instance running. Update the `DATABASE_URL` in your `.env` file.

5. **Initialize Prisma**
```bash
npx prisma generate
npx prisma db push
```

6. **Set up Ollama (for AI features)**
```bash
# Install Ollama (if not already installed)
# Visit: https://ollama.ai/

# Pull the Codellama model
ollama pull codellama:latest

# Start Ollama server
ollama serve
```

7. **Run the development server**
```bash
npm run dev
```

8. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Next.js Configuration (`next.config.ts`)
- **Image Optimization**: Configured for remote HTTPS images
- **Security Headers**: COOP and COEP headers for WebContainer compatibility
- **React Strict Mode**: Disabled for WebContainer compatibility

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2017
- **Module Resolution**: Bundler
- **Strict Mode**: Enabled
- **Path Aliases**: `@/*` maps to root directory

### Tailwind CSS Configuration
- **Version**: Tailwind CSS v4
- **Theme**: Custom dark theme with OKLCH color space
- **Components**: shadcn/ui integration
- **Animations**: tw-animate-css for animations

### ESLint Configuration
- **Base**: Next.js Core Web Vitals
- **TypeScript**: Next.js TypeScript rules
- **Ignores**: Standard Next.js build directories

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"

# NextAuth
AUTH_SECRET="<your-auth-secret>"
AUTH_GITHUB_ID="<your-github-client-id>"
AUTH_GITHUB_SECRET="<your-github-client-secret>"
AUTH_GOOGLE_ID="<your-google-client-id>"
AUTH_GOOGLE_SECRET="<your-google-client-secret>"

# Ollama (AI)
OLLAMA_API_URL="http://localhost:11434"
```

### Environment Variable Details

#### Database
- `DATABASE_URL`: MongoDB connection string with retry writes and majority write concern

#### Authentication
- `AUTH_SECRET`: Secret key for NextAuth session encryption (generate with: `openssl rand -base64 32`)
- `AUTH_GITHUB_ID`: GitHub OAuth App Client ID
- `AUTH_GITHUB_SECRET`: GitHub OAuth App Client Secret
- `AUTH_GOOGLE_ID`: Google OAuth Client ID
- `AUTH_GOOGLE_SECRET`: Google OAuth Client Secret

#### AI Services
- `OLLAMA_API_URL`: Local Ollama server URL (default: `http://localhost:11434`)

### Setting up OAuth Providers

#### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env`

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Set Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to `.env`

## 🗄 Database Setup

### Prisma Schema Overview

The application uses MongoDB with Prisma ORM. The schema includes:

#### Models

**User**
- `id`: String (CUID)
- `name`: String (optional)
- `email`: String (unique)
- `image`: String (optional)
- `role`: UserRole (USER, ADMIN, PREMIUM_USER)
- `accounts`: Account[] (relation)
- `myPlaground`: Playground[] (relation)
- `staredPlayground`: StarMark[] (relation)
- `chatMessages`: ChatMessage[] (relation)
- `createdAt`: DateTime
- `updatedAt`: DateTime

**Account**
- `id`: String (CUID)
- `userId`: String
- `type`: String
- `provider`: String
- `providerAccountId`: String
- `refreshToken`: String (optional)
- `accessToken`: String (optional)
- `expiresAt`: Int (optional)
- `tokenType`: String (optional)
- `scope`: String (optional)
- `idToken`: String (optional)
- `sessionState`: String (optional)
- `user`: User (relation)
- Unique constraint: [provider, providerAccountId]

**Playground**
- `id`: String (CUID)
- `title`: String
- `description`: String (optional)
- `template`: Templates enum (REACT, NEXTJS, EXPRESS, VUE, HONO, ANGULAR)
- `createdAt`: DateTime
- `updatedAt`: DateTime
- `Starmark`: StarMark[] (relation)
- `userId`: String
- `user`: User (relation)
- `templateFiles`: TemplateFile[] (relation)

**StarMark**
- `id`: String (CUID)
- `userId`: String
- `playgroundId`: String
- `isMarked`: Boolean
- `createdAt`: DateTime
- `user`: User (relation)
- `playground`: Playground (relation)
- Unique constraint: [userId, playgroundId]

**TemplateFile**
- `id`: String (CUID)
- `content`: JSON
- `createdAt`: DateTime
- `updatedAt`: DateTime
- `playgroundId`: String (unique)
- `playground`: Playground (relation)

**ChatMessage**
- `id`: String (CUID)
- `userId`: String
- `role`: String
- `content`: String
- `createdAt`: DateTime
- `user`: User (relation)

### Database Commands

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset

# Create a new migration
npx prisma migrate dev --name <migration-name>
```

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server on port 3000
```

### Production
```bash
npm run build        # Build for production
npm start            # Start production server
```

### Code Quality
```bash
npm run lint         # Run ESLint
```

### Database
```bash
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Push schema changes to database
npx prisma studio    # Open Prisma Studio
```

## 🏗 Architecture Overview

### Application Architecture

Crown Code follows a modular, feature-based architecture with clear separation of concerns:

#### Layer Structure
1. **Presentation Layer** (`app/`, `components/`)
   - Next.js App Router for routing
   - React components for UI
   - Server and Client Components separation

2. **Business Logic Layer** (`modules/`)
   - Feature-specific modules (auth, dashboard, playground, etc.)
   - Server Actions for data mutations
   - Custom hooks for client-side logic

3. **Data Layer** (`lib/`, `prisma/`)
   - Prisma ORM for database operations
   - Utility functions and helpers

4. **Integration Layer** (`modules/webcontainers/`, `modules/ai-chat/`)
   - External service integrations
   - API clients and adapters

#### Design Patterns
- **Server Actions**: For database mutations and server-side logic
- **Custom Hooks**: For reusable client-side state management
- **Context Providers**: For global state (theme, session)
- **Module Pattern**: Feature-based code organization
- **Repository Pattern**: Prisma as data repository

#### Data Flow
1. User interaction → Component event handler
2. Component → Custom hook or server action
3. Hook/Action → Database or external API
4. Response → State update
5. State update → Component re-render

## 📚 Module Documentation

### Authentication Module (`modules/auth/`)

Handles user authentication via NextAuth with OAuth providers.

#### Components
- **sign-in-form-client.tsx**: Sign-in form with GitHub and Google OAuth buttons
- **user-button.tsx**: User avatar dropdown with logout functionality
- **logout-button.tsx**: Logout button component

#### Actions (`modules/auth/actions/index.ts`)
- `getUserById(id)`: Fetch user by ID with accounts
- `getAccountByUserId(userId)`: Fetch user's OAuth account
- `currentUser()`: Get currently authenticated user

#### Hooks
- `useCurrentUser()`: Client-side hook to access current user

#### Types (`modules/auth/types.ts`)
- `LogoutButtonProps`: Props interface for logout button

### Dashboard Module (`modules/dashboard/`)

Manages the user dashboard with project listing and management.

#### Components
- **dashboard-sidebar.tsx**: Sidebar navigation with project list
- **project-table.tsx**: Table displaying all user projects
- **add-new.tsx**: Button to create new playground
- **add-repo.tsx**: Button to add repository (placeholder)
- **empty-state.tsx**: Empty state when no projects exist
- **mark-toggled.tsx**: Star/favorite toggle component
- **templating-selecting-modal.tsx**: Modal for selecting project template

#### Actions (`modules/dashboard/actions/index.ts`)
- `getAllPlaygroundForUser()`: Fetch all playgrounds for current user
- `createPlayground(data)`: Create new playground
- `deleteProjectById(id)`: Delete playground by ID
- `editProjectById(id, data)`: Update playground details
- `duplicateProjectById(id)`: Duplicate existing playground
- `toggleStarMarked(playgroundId, isChecked)`: Toggle star status

#### Types (`modules/dashboard/types.ts`)
- `User`: User interface
- `Project`: Project interface

### Playground Module (`modules/playground/`)

Core module for the code editor playground functionality.

#### Components
- **playground-editor.tsx**: Monaco Editor integration with AI suggestions
- **playground-explorer.tsx**: File explorer tree view
- **toggle-ai.tsx**: AI suggestion toggle button
- **loader.tsx**: Loading state component

#### Dialogs (`modules/playground/components/dialogs/`)
- **new-file-dialog.tsx**: Dialog for creating new files
- **new-folder-dialog.tsx**: Dialog for creating new folders
- **rename-file-dialog.tsx**: Dialog for renaming files
- **rename-folder-dialog.tsx**: Dialog for renaming folders
- **delete-dialog.tsx**: Confirmation dialog for deletion
- **confirmation-dialog.tsx**: Generic confirmation dialog

#### Actions (`modules/playground/actions/index.ts`)
- `getPlaygroundById(id)`: Fetch playground by ID
- `saveUpdatedCode(playgroundId, data)`: Save updated code to database

#### Hooks
- **usePlayground(id)**: Manage playground state and operations
- **useFileExplorer()**: Manage file explorer state and operations
- **useAISuggestion()**: Manage AI code suggestions

#### Libraries (`modules/playground/lib/`)
- **path-to-json.ts**: Template directory scanning and JSON conversion
- **editor-config.ts**: Monaco Editor configuration and theme
- **index.ts**: File path utilities

### WebContainer Module (`modules/webcontainers/`)

Handles WebContainer integration for live code preview.

#### Components
- **webcontainer-preview.tsx**: Preview pane with iframe
- **terminal.tsx**: Terminal emulator integration

#### Hooks
- **useWebContainer({ templateData })**: WebContainer instance management
- **transformer.ts**: Transform template data to WebContainer format

### Home Module (`modules/home/`)

Landing page components.

#### Components
- **header.tsx**: Navigation header with logo and user menu
- **footer.tsx**: Footer with copyright information

### AI Chat Module (`modules/ai-chat/`)

AI-powered chat assistance (placeholder for future expansion).

## 🔌 API Endpoints

### Authentication Endpoints

#### `GET/POST /api/auth/[...nextauth]`
NextAuth handler for OAuth authentication flows.

**Providers**: GitHub, Google

**Callbacks**:
- `signIn`: Creates/updates user and account on sign-in
- `jwt`: Adds user role to JWT token
- `session`: Adds user ID and role to session

### Template Endpoints

#### `GET /api/template/[id]`
Generates template JSON structure for a playground.

**Parameters**:
- `id`: Playground ID

**Response**:
```json
{
  "success": true,
  "templateJson": {
    "folderName": "Root",
    "items": [...]
  }
}
```

**Process**:
1. Fetch playground from database
2. Scan template directory from starters folder
3. Convert to JSON structure
4. Return template data

### Code Completion Endpoint

#### `POST /api/code-completion`
Generates AI-powered code suggestions.

**Request Body**:
```json
{
  "fileContent": "string",
  "cursorLine": 0,
  "cursorColumn": 0,
  "suggestionType": "completion",
  "fileName": "example.ts"
}
```

**Response**:
```json
{
  "suggestion": "string",
  "context": {
    "language": "TypeScript",
    "framework": "React",
    "beforeContext": "string",
    "currentLine": "string",
    "afterContext": "string",
    "cursorPosition": { "line": 0, "column": 0 },
    "isInFunction": true,
    "isInClass": false,
    "isAfterComment": false,
    "incompletePatterns": ["function"]
  },
  "metadata": {
    "language": "TypeScript",
    "framework": "React",
    "position": { "line": 0, "column": 0 },
    "generatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Features**:
- Language detection (TypeScript, JavaScript, Python, etc.)
- Framework detection (React, Vue, Angular, Next.js)
- Context analysis (function, class, comment detection)
- Incomplete pattern detection (conditionals, functions, objects)

### Chat Endpoint

#### `POST /api/chat`
AI-powered chat assistance for coding help.

**Request Body**:
```json
{
  "message": "How do I create a React component?",
  "history": [
    { "role": "user", "content": "string" },
    { "role": "assistant", "content": "string" }
  ]
}
```

**Response**:
```json
{
  "response": "AI response string",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

**Features**:
- Conversation history support (last 10 messages)
- Code-focused AI assistant
- Error handling and validation

## 🔐 Authentication Flow

### Sign-In Flow

1. User navigates to `/auth/sign-in`
2. User selects OAuth provider (GitHub or Google)
3. NextAuth redirects to provider's authorization page
4. User grants permissions
5. Provider redirects back with authorization code
6. NextAuth exchanges code for access token
7. `signIn` callback:
   - Checks if user exists in database
   - If not, creates new user with account
   - If yes, creates new account if not exists
8. JWT token is created with user role
9. Session is established
10. User is redirected to dashboard

### Session Management

- **Strategy**: JWT (JSON Web Tokens)
- **Storage**: HTTP-only cookies
- **Token Content**: User ID, email, name, role
- **Expiration**: Configurable via NextAuth

### Protected Routes

Protected routes are defined in `routes.ts`:
- `protectedRoutes`: Routes requiring authentication (`/`)
- `publicRoutes`: Routes accessible without auth (empty)
- `authRoutes`: Authentication routes (`/auth/sign-in`)
- `apiAuthPrefix`: API auth prefix (`/api/auth`)

Middleware (`proxy.ts`) enforces route protection:
- Redirects unauthenticated users to sign-in
- Redirects authenticated users away from auth routes
- Allows public routes and API auth routes

### User Roles

Three user roles defined in Prisma schema:
- `USER`: Standard user
- `ADMIN`: Administrator (future features)
- `PREMIUM_USER`: Premium user (future features)

## 🐳 WebContainer Integration

### Overview

WebContainer API enables running Node.js applications directly in the browser with full file system access and terminal capabilities.

### Initialization

WebContainer is initialized in `useWebContainer` hook:

```typescript
const webcontainerInstance = await WebContainer.boot();
```

### File System Operations

The application supports:
- **Write files**: `instance.fs.writeFile(path, content)`
- **Create directories**: `instance.fs.mkdir(path, { recursive: true })`
- **Read files**: `instance.fs.readFile(path)`

### Template Transformation

Template data is transformed from internal format to WebContainer format:

**Internal Format**:
```typescript
{
  folderName: "Root",
  items: [
    { filename: "index", fileExtension: "js", content: "..." }
  ]
}
```

**WebContainer Format**:
```typescript
{
  "index.js": {
    file: { contents: "..." }
  }
}
```

### Terminal Integration

Terminal is powered by xterm.js with addons:
- **Fit**: Automatically resize terminal
- **Search**: Search within terminal output
- **Web Links**: Clickable URLs in terminal

### Server Preview

Applications are spawned and previewed in iframe:
- Development server commands are executed
- Server URL is extracted from logs
- Preview iframe loads server URL
- Hot reloading on file changes

### Cross-Origin Headers

Next.js config includes COOP and COEP headers for WebContainer compatibility:
```typescript
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

## 🤖 AI Integration

### Overview

AI features are powered by local Ollama instance running Codellama model.

### Code Completion

**Endpoint**: `/api/code-completion`

**Process**:
1. Analyze code context (language, framework, position)
2. Detect code patterns (functions, classes, conditionals)
3. Build context-aware prompt
4. Send to Ollama Codellama
5. Parse and return suggestion

**Context Analysis**:
- Language detection via file extension and content
- Framework detection via imports and syntax
- Function/class scope detection
- Comment detection
- Incomplete pattern detection

### Chat Assistance

**Endpoint**: `/api/chat`

**Process**:
1. Receive user message and conversation history
2. Validate input
3. Limit history to last 10 messages
4. Build system prompt for coding assistant
5. Send to Ollama Codellama
6. Return AI response

**System Prompt**:
```
You are a helpful AI coding assistant. You help developers with:
- Code explanations and debugging
- Best practices and architecture advice
- Writing clean, efficient code
- Troubleshooting errors
- Code reviews and optimizations
```

### Ollama Setup

1. Install Ollama from [ollama.ai](https://ollama.ai/)
2. Pull Codellama model:
```bash
ollama pull codellama:latest
```
3. Start Ollama server:
```bash
ollama serve
```
4. Configure API URL in `.env`:
```env
OLLAMA_API_URL="http://localhost:11434"
```

### AI Features in Editor

- **Toggle AI**: Enable/disable AI suggestions
- **Trigger Suggestions**: Manual trigger via keyboard shortcut
- **Accept/Reject**: Accept or reject AI suggestions
- **Loading States**: Visual feedback during AI generation

## 📦 Template System

### Available Templates

The application includes 40+ starter templates in the `starters/` directory:

- **React**: `react-ts/` - TypeScript React template
- **Next.js**: `nextjs/` - Next.js template
- **Express**: `express-simple/` - Simple Express server
- **Vue**: `vue/` - Vue.js template
- **Hono**: `hono-nodejs-starter/` - Hono framework
- **Angular**: `angular/` - Angular template
- **Vite + shadcn**: `vite-shadcn/` - Vite with shadcn/ui
- **And 34+ more templates**

### Template Path Mapping

Template paths are defined in `lib/template.ts`:

```typescript
export const templatePaths = {
  REACT: "/starters/react-ts",
  NEXTJS: "/starters/nextjs",
  EXPRESS: "/starters/express-simple",
  VUE: "/starters/vue",
  HONO: "/starters/hono-nodejs-starter",
  ANGULAR: "/starters/angular",
};
```

### Template Loading Process

1. User selects template when creating playground
2. Template path is mapped from selection
3. Template directory is scanned via `scanTemplateDirectory()`
4. Directory structure is converted to JSON format
5. Files are read and content stored
6. JSON structure is saved to database
7. Template is loaded in playground editor

### Template Scanning

The `scanTemplateDirectory` function in `modules/playground/lib/path-to-json.ts`:

**Features**:
- Recursive directory scanning
- File content reading
- Ignore patterns (node_modules, .git, etc.)
- File size limits (1MB default)
- Error handling for missing files

**Ignored Files**:
- `package-lock.json`, `yarn.lock`
- `.DS_Store`, `thumbs.db`
- `.gitignore`, `.npmrc`
- `.env` files

**Ignored Directories**:
- `node_modules`
- `.git`, `.vscode`, `.idea`
- `dist`, `build`, `coverage`

### JSON Structure

Template structure is stored as JSON:

```typescript
interface TemplateFile {
  filename: string;
  fileExtension: string;
  content: string;
}

interface TemplateFolder {
  folderName: string;
  items: (TemplateFile | TemplateFolder)[];
}
```

## 🎨 Component Library

The application uses shadcn/ui components with Radix Nova style.

### Available Components (61 total)

**Form Components**:
- `input.tsx` - Text input
- `textarea.tsx` - Text area
- `select.tsx` - Dropdown select
- `checkbox.tsx` - Checkbox
- `radio-group.tsx` - Radio buttons
- `switch.tsx` - Toggle switch
- `slider.tsx` - Range slider
- `input-otp.tsx` - OTP input

**Layout Components**:
- `card.tsx` - Card container
- `separator.tsx` - Visual separator
- `resizable.tsx` - Resizable panels
- `scroll-area.tsx` - Custom scroll area
- `aspect-ratio.tsx` - Aspect ratio container

**Navigation Components**:
- `tabs.tsx` - Tab navigation
- `breadcrumb.tsx` - Breadcrumb navigation
- `pagination.tsx` - Pagination controls
- `navigation-menu.tsx` - Navigation menu
- `menubar.tsx` - Menu bar

**Feedback Components**:
- `alert.tsx` - Alert messages
- `alert-dialog.tsx` - Alert dialogs
- `toast.tsx` (sonner) - Toast notifications
- `progress.tsx` - Progress indicator
- `spinner.tsx` - Loading spinner
- `skeleton.tsx` - Skeleton loading

**Overlay Components**:
- `dialog.tsx` - Modal dialogs
- `dropdown-menu.tsx` - Dropdown menus
- `popover.tsx` - Popover tooltips
- `tooltip.tsx` - Tooltips
- `hover-card.tsx` - Hover cards
- `drawer.tsx` - Slide-out drawer
- `sheet.tsx` - Side sheets

**Data Display**:
- `table.tsx` - Data tables
- `badge.tsx` - Status badges
- `avatar.tsx` - User avatars
- `calendar.tsx` - Date picker
- `chart.tsx` - Charts (Recharts)

**Advanced Components**:
- `sidebar.tsx` - Collapsible sidebar
- `command.tsx` - Command palette
- `context-menu.tsx` - Context menus
- `collapsible.tsx` - Collapsible content
- `accordion.tsx` - Accordion panels
- `carousel.tsx` - Image carousel

**Utility Components**:
- `button.tsx` - Buttons with variants
- `button-group.tsx` - Button groups
- `toggle.tsx` - Toggle buttons
- `toggle-group.tsx` - Toggle groups
- `label.tsx` - Form labels
- `kbd.tsx` - Keyboard key display

### Component Configuration

**Style**: Radix Nova (modern, clean design)
**Base Color**: Neutral
**CSS Variables**: Enabled
**Icon Library**: Lucide React
**RSC**: React Server Components enabled

### Custom Components

**Theme Toggle** (`components/ui/theme-toggle.tsx`):
- Light/dark mode toggle
- System theme detection
- Smooth transitions

**Sonner Toast** (`components/ui/sonner.tsx`):
- Toast notifications
- Multiple positions
- Auto-dismiss

## 🎨 Styling & Theming

### Design System

The application uses a premium dark theme with royal gold accents, inspired by VS Code, Linear, and GitHub Dark.

### Color Palette

**Light Mode** (OKLCH color space):
- Background: `oklch(1 0 0)` (White)
- Foreground: `oklch(0.145 0 0)` (Dark gray)
- Primary: `oklch(0.205 0 0)` (Dark)
- Accent: `oklch(0.97 0 0)` (Light gray)
- Gold Accent: `oklch(0.65 0.15 85)` (Gold)

**Dark Mode**:
- Background: `oklch(0.145 0 0)` (Dark gray)
- Foreground: `oklch(0.985 0 0)` (Off-white)
- Primary: `oklch(0.922 0 0)` (Light gray)
- Accent: `oklch(0.269 0 0)` (Medium gray)
- Gold Accent: `oklch(0.65 0.15 85)` (Gold)

### Typography

**Font Families**:
- Sans: Geist (Google Fonts)
- Mono: Geist Mono (Google Fonts)

**Font Sizes**:
- Base: 14px (editor), 16px (UI)
- Heading: 2xl (36px), 3xl (48px)
- Small: 12px, xs (10px)

### Monaco Editor Theme

Custom "modern-dark" theme defined in `modules/playground/lib/editor-config.ts`:

**Syntax Highlighting**:
- Keywords: Purple (C586C0)
- Strings: Orange (CE9178)
- Numbers: Light green (B5CEA8)
- Functions: Yellow (DCDCAA)
- Variables: Light blue (9CDCFE)
- Types: Teal (4EC9B0)
- Comments: Gray (7C7C7C)

**Editor Colors**:
- Background: #0D1117 (GitHub Dark)
- Foreground: #E6EDF3
- Selection: #264F78
- Line Highlight: #21262D
- Cursor: #F0F6FC

### Tailwind CSS v4

The application uses Tailwind CSS v4 with:
- **CSS Variables**: For theming
- **OKLCH Color Space**: Modern color system
- **Custom Variants**: Dark mode variant
- **Shadcn Integration**: Component styling

### Animation Library

**tw-animate-css**: Pre-built Tailwind animations for:
- Fade in/out
- Slide in/out
- Scale transitions
- Spin animations

## 💻 Development Workflow

### Recommended Workflow

1. **Feature Development**
   - Create feature branch: `git checkout -b feature/feature-name`
   - Implement feature in appropriate module
   - Test locally
   - Commit changes with descriptive messages

2. **Code Organization**
   - Place components in `components/` or `modules/`
   - Use server actions for data mutations
   - Use custom hooks for reusable logic
   - Follow existing patterns and conventions

3. **Testing**
   - Test in development environment
   - Test authentication flows
   - Test WebContainer functionality
   - Test AI features (with Ollama running)

4. **Code Quality**
   - Run `npm run lint` before committing
   - Follow TypeScript strict mode
   - Use proper error handling
   - Add comments for complex logic

### Git Workflow

```bash
# Create feature branch
git分支 checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request
# (via GitHub/GitLab interface)
```

### Debugging

**Client-side Debugging**:
- Use browser DevTools
- React DevTools for component inspection
- Console logging for debugging

**Server-side Debugging**:
- Use `console.log` in server actions
- Check Next.js server logs
- Use Prisma Studio for database inspection

**WebContainer Debugging**:
- Check terminal output
- Inspect network requests
- Verify file system operations

**AI Debugging**:
- Ensure Ollama is running: `ollama serve`
- Check Ollama logs
- Verify model is pulled: `ollama list`
- Test API endpoint directly

## 🚀 Deployment

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables for Production

Ensure all environment variables are set in production:
- `DATABASE_URL`: Production MongoDB connection
- `AUTH_SECRET`: Secure random string
- `AUTH_GITHUB_ID/SECRET`: Production OAuth credentials
- `AUTH_GOOGLE_ID/SECRET`: Production OAuth credentials
- `OLLAMA_API_URL`: Production Ollama instance (if used)

### Vercel Deployment

1. **Push code to GitHub**
2. **Import project in Vercel**
3. **Configure environment variables**
4. **Deploy**

### Docker Deployment (Optional)

Create `Dockerfile`:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t crown-code .
docker run -p 3000:3000 --env-file .env crown-code
```

### MongoDB Atlas (Cloud)

1. Create MongoDB Atlas account
2. Create cluster
3. Create database user
4. Get connection string
5. Update `DATABASE_URL` in `.env`

### Ollama in Production

For production AI features:
- Deploy Ollama on separate server
- Configure CORS if needed
- Update `OLLAMA_API_URL` to production endpoint
- Consider using managed AI services (OpenAI, Anthropic) for better reliability

## 🔧 Troubleshooting

### Common Issues

#### WebContainer Not Working

**Symptoms**: Preview not loading, errors in console

**Solutions**:
1. Check COOP/COEP headers in `next.config.ts`
2. Ensure HTTPS (required for WebContainer)
3. Check browser console for specific errors
4. Verify WebContainer API compatibility

#### Ollama Connection Failed

**Symptoms**: AI suggestions not working, connection errors

**Solutions**:
1. Ensure Ollama is running: `ollama serve`
2. Check Ollama is accessible at `http://localhost:11434`
3. Verify Codellama model is pulled: `ollama pull codellama:latest`
4. Check firewall settings

#### Authentication Errors

**Symptoms**: OAuth redirects failing, session issues

**Solutions**:
1. Verify OAuth credentials in `.env`
2. Check callback URLs match OAuth app settings
3. Ensure `AUTH_SECRET` is set
4. Clear browser cookies and try again

#### Database Connection Issues

**Symptoms**: Prisma errors, data not persisting

**Solutions**:
1. Verify `DATABASE_URL` is correct
2. Check MongoDB instance is running
3. Ensure network connectivity to MongoDB
4. Run `npx prisma db push` to sync schema

#### Build Errors

**Symptoms**: TypeScript errors, build failures

**Solutions**:
1. Run `npm run lint` to check for errors
2. Check TypeScript configuration
3. Ensure all dependencies are installed
4. Clear Next.js cache: `rm -rf .next`

#### Template Loading Issues

**Symptoms**: Templates not loading, empty playgrounds

**Solutions**:
1. Verify template paths in `lib/template.ts`
2. Check starter directories exist in `starters/`
3. Ensure file permissions are correct
4. Check template scanning logs

### Getting Help

- Check browser console for errors
- Review server logs in terminal
- Check Ollama logs: `ollama logs`
- Use Prisma Studio: `npx prisma studio`
- Review Next.js documentation
- Check WebContainer API documentation

## 🤝 Contributing

### Contribution Guidelines

1. **Code Style**
   - Follow existing code patterns
   - Use TypeScript for type safety
   - Add comments for complex logic
   - Use descriptive variable names

2. **Commit Messages**
   - Use conventional commits: `feat:`, `fix:`, `docs:`, etc.
   - Be descriptive but concise
   - Reference issues if applicable

3. **Pull Requests**
   - Create feature branches
   - Write clear PR descriptions
   - Include screenshots for UI changes
   - Ensure all tests pass

4. **Testing**
   - Test thoroughly before submitting
   - Test on multiple browsers
   - Test authentication flows
   - Test WebContainer functionality

### Development Setup for Contributors

```bash
# Fork and clone repository
git clone <your-fork-url>
cd p6

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values

# Set up database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

### Reporting Issues

When reporting issues, include:
- Description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS version
- Relevant error messages
- Screenshots if applicable

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **Next.js** - React framework
- **shadcn/ui** - UI component library
- **Monaco Editor** - Code editor
- **WebContainer API** - Browser-based containers
- **Ollama** - Local AI models
- **Prisma** - Database ORM
- **Radix UI** - Component primitives
- **Tailwind CSS** - Styling
- **Lucide** - Icons

## Author

Swaraj Unde

---
