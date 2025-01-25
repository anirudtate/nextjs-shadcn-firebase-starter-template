# Next.js 15, shadcn/ui, Firebase Authentication Template

This is a template built with:
- [Next.js 15](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- [Firebase](https://firebase.google.com/) for authentication
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Getting Started

### Prerequisites

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication in your Firebase project:
   - Go to Authentication > Get Started
   - Enable Email/Password authentication method
   - Enable Google authentication method

### Environment Variables

1. Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

2. Fill in your Firebase configuration in `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

You can find these values in your Firebase project settings > General > Your apps > Web app

### Development Server

First, install the dependencies:
```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 🔐 Authentication (Sign up, Sign in, Sign out, Password reset)
- 🛡️ Protected routes
- 🎨 Modern UI with shadcn/ui components
- 🎯 TypeScript support
- 📱 Responsive design

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)