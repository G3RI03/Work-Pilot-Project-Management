# WorkPilot 🚀

A full-stack project management platform that helps teams organize projects, manage tasks, and collaborate within organizations.

# Live Demo
(https://work-pilot-project-mgt.vercel.app)

# Features

- **Organization Management** — Create multiple organizations and manage team members
- **Project Management** — Create and manage projects within an organization
- **Task Management** — Create tasks, assign them to team members, and track progress
- **Team Collaboration** — Invite and manage team members within organizations
- **Email Notifications** — Automatic email on task assignment and due date reminders
- **User Authentication** — Secure authentication and organization management via Clerk
- **Background Jobs** — Clerk webhook management and email notifications via Inngest

# Tech Stack

**Frontend**
- React JS
- Redux Toolkit
- Tailwind CSS
- Clerk (Authentication)

**Backend**
- Node JS
- Express JS
- Prisma ORM
- Clerk Express SDK
- Inngest (Background Jobs)

**Database**
- Neon PostgreSQL

**Deployment**
- Vercel

# Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Neon PostgreSQL database
- Clerk account
- Inngest account

### Environment Variables

**Server** (`server/.env`)
```env
DATABASE_URL=your_neon_pooled_connection_string
DIRECT_URL=your_neon_direct_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

**Client** (`client/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASEURL=http://localhost:5200
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/G3RI03/Work-Pilot-Project-Management.git
cd Work-Pilot-Project-Management
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd client
npm install
```

4. **Run database migrations**
```bash
cd server
npx prisma migrate dev
```

5. **Start the server**
```bash
cd server
npm run server
```

6. **Start the client**
```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173` and the server on `http://localhost:5200`.

# Project Structure
```
WorkPilot/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── features/       # Redux slices
│   │   ├── pages/          # Page components
│   │   └── configs/        # API configuration
├── server/                 # Express backend
│   ├── config/             # Prisma client
│   ├── controllers/        # Route controllers
│   ├── inngest/            # Inngest functions
│   ├── middleware/         # Auth middleware
│   ├── prisma/             # Database schema
│   └── routes/             # API routes
```

## 🔗 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/workspaces` | Get all workspaces for user |
| POST | `/api/workspaces/add-member` | Add member to workspace |
| POST | `/api/projects` | Create a project |
| PUT | `/api/projects` | Update a project |
| POST | `/api/projects/:id/add-member` | Add member to project |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks` | Delete tasks |
| POST | `/api/comments` | Add a comment |
