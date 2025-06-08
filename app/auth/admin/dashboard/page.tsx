import React from "react";
import Link from "next/link";

export default async function dashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <h1 className="text-center text-2xl font-bold mb-8">Chat con Clientes</h1>

      <div className="flex justify-center">
        <Link
          href="/auth/admin/chat"
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg shadow text-sm font-semibold transition"
        >
          Ir al Panel de Chats
        </Link>
      </div>
    </div>
  );
}
