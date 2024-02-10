# Readme

This is a (very) simple "todo app" for internships build with [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The data will be sent crawled and send to a rest api build with [json-server](https://www.npmjs.com/package/json-server)

## Inspirations for this project

Building this project was inspired by a "tutorial" published on [medium.com](https://medium.com/@amayawickramasinghe2001/creating-a-to-do-app-with-next-js-cdb58f0b12d1)

See also the corresponding repository on [GitHub](https://github.com/Amaya-2001/ToDoApp/tree/main)

## Getting Started

First, run the development server and the json-server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Parallel running

Running both commands in parallel was built with [concurrently](https://www.npmjs.com/package/concurrently)

See also <https://www.swyx.io/parallel-npm-scripts>

## Web-Interfaces

### App/Next.js (Frontend)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### API/json-server (Backend)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the "database"/api dashboard

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

### React & Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn)Next.js - an interactive tutorial.
- [Learn React](https://nextjs.org/learn/react-foundations) - an interactive React tutorial

### Next.js Partial rendering

- [Docs](https://nextjs.org/docs/app/api-reference/next-config-js/partial-prerendering)
- [GitHub](https://github.com/vercel-labs/next-partial-prerendering)
- [Demo](https://vercel.com/templates/next.js/partial-prerendering-nextjs)

### Next.js server actions

- [LogRocket Blog](https://blog.logrocket.com/diving-into-server-actions-next-js-14/)
- [Next.js Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [YT-Video for explanation](https://www.youtube.com/watch?v=RadgkoJrhu0)
- [Another example](https://makerkit.dev/blog/tutorials/nextjs-server-actions)

## Task (in German)

Ziel ist es, eine kleine ToDo-WebApp mit [Next.js](https://nextjs.org) und einer [REST-API](https://www.redhat.com/de/topics/api/what-is-a-rest-api) zu erstellen.

Mit dieser WebApp soll eine ToDo-Liste erstellt werden können, d. h. es sollen in dieser Liste Einträge erstellt, mit dem DB-Server synchronisiert und auch wieder gelöscht werden können (CRUD; Create-Read-Update-Delete).

Für die optische Aufwertung soll [tailwindcss](https://tailwindcss.com/) verwendet werden, sofern noch Zeit dafür ist.

Es geht nicht um das Layout, es sollte die Funktionalität, bzw. die "Code Quality" im Fokus stehen, d. h. Erstellung einzelner Komponenten, die mehrfach wieder verwendet werden können (Vermeidung von Duplicate Code); möglichst wenig "Hard Code" (Inhalt kann einfach ausgetausch werden); etc.

### Frontend

- Das Frontend, sowie die Anbindung an die REST-API (via [json-server](https://www.npmjs.com/package/json-server)) sollen mittels [Next.js](https://nextjs.org) realisiert werden

This project is work in progress and can be extended with every internship ;-)
