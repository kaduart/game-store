This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
Game System - Project Overview

This game system is an interactive web app where users can explore, view details, and manage games. Built with modern tech and designed for performance and security, it provides a friendly and dynamic experience for gamers.

Technologies Used

- ReactJS: The main technology for building the frontend, creating a smooth and responsive user interface.
- Next.js: Enhances React by adding server-side rendering and static page generation, which improve performance and SEO.
- Zod: Used to validate data, particularly in forms, ensuring user inputs are secure and formatted correctly before being stored.
- useFormState: A form state management tool that makes input control and data validation easier, creating a more organized experience.
- Next Link: Supports fast and smooth navigation between pages.
- Slug: Allows for friendly dynamic URLs, where games have unique identifiers, improving usability and search visibility.
- Prisma: The ORM (Object-Relational Mapping) that interacts with the database securely, handling data for both games and users.
- jose: Manages JWT (JSON Web Tokens) for secure user authentication and authorization.
- bcrypt: Hashes passwords and tokens, adding extra security by protecting sensitive information.
- Tailwind CSS: Provides a modern and responsive design, with utilities that speed up styling and make it easier to manage.

Key Features

- Navigation and Search: Allows users to explore games with user-friendly URLs.
- Registration and Login: Uses JWT-based authentication with secure storage for user data.
- Game Management: Supports creating, viewing, editing, and deleting games with Zod-validated forms, ensuring a smooth experience.
- Responsive Interface: Styled with Tailwind CSS for a modern look on all devices. 

This game system is ideal for anyone looking to explore a game catalog with the latest in web technology, offering a secure and efficient project experience.


## Getting Started
First, run the development server:

- git clone https://github.com/kaduart/game-store.git
- yarn install
- cp .env.example .env
  - add no .env:
    -  NODE_ENV=development
    -  DATABASE_URL="file:./db/dev.db"
    - JWT_SECRET="dsgf4fd56ghgh4fg654h65fdg4h6f54ds5"
- npx prisma migrate dev
- if question: ok to proced? (y) answer (y)
- npx prisma db seed
- if question: ok to proced? (y) answer (y)
- npm run dev | yarn dev



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
![image](https://github.com/user-attachments/assets/6e89b5ee-6acc-4ea8-b56a-a0d907aa717a)


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
