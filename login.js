// 📁 /app/layout.tsx
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

// 📁 /app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Gestión de Proyectos</h1>
      <p>Organizá tus proyectos, tareas y herramientas sin complicaciones.</p>
      <Link
        href="/dashboard"
        className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded"
      >
        Ir al panel
      </Link>
    </main>
  );
}

// 📁 /pages/dashboard.tsx
import { useState } from "react";

export default function Dashboard() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Evento Corporativo", processes: ["Producción", "Comunicación"] },
    { id: 2, name: "Festival Primavera", processes: ["Producción"] },
  ]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.id} className="p-4 border rounded bg-white shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600">Procesos: {p.processes.join(", ")}</p>
          </li>
        ))}
      </ul>
      <button
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => alert("Función para crear proyecto próximamente")}
      >
        + Crear nuevo proyecto
      </button>
    </main>
  );
}

// 📁 /next.config.js
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// 📁 /styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: sans-serif;
  background-color: #f9f9f9;
}
