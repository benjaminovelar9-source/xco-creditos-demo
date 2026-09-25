"use client";

import Link from "next/link";
import { useState } from "react";

type Cliente = {
  id: number;
  nombre: string;
  dni: string;
  telefono: string;
  localidad: string;
  creditos: number;
  saldo: number;
  estado: "Activo" | "Sin crédito" | "En mora";
};

const clientesDemo: Cliente[] = [
  {
    id: 1,
    nombre: "Juan Pérez",
    dni: "32.456.789",
    telefono: "11 5555-1234",
    localidad: "Berazategui",
    creditos: 1,
    saldo: 260000,
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "María Gómez",
    dni: "36.741.258",
    telefono: "11 5555-7854",
    localidad: "Quilmes",
    creditos: 1,
    saldo: 297500,
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "Carlos Díaz",
    dni: "29.852.147",
    telefono: "11 5555-4567",
    localidad: "Florencio Varela",
    creditos: 1,
    saldo: 400000,
    estado: "En mora",
  },
  {
    id: 4,
    nombre: "Lucía Fernández",
    dni: "40.125.963",
    telefono: "11 5555-9512",
    localidad: "Berazategui",
    creditos: 0,
    saldo: 0,
    estado: "Sin crédito",
  },
];

const dinero = (valor: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(valor);

export default function ClientesPage() {
  const [buscar, setBuscar] = useState("");

  const clientes = clientesDemo.filter((cliente) => {
    const texto = buscar.toLowerCase();

    return (
      cliente.nombre.toLowerCase().includes(texto) ||
      cliente.dni.toLowerCase().includes(texto) ||
      cliente.telefono.toLowerCase().includes(texto)
    );
  });

  return (
    <main className="module-page">
      <header className="module-topbar">
        <div>
          <Link href="/admin" className="back-link">
            ← Dashboard
          </Link>

          <span>ADMINISTRACIÓN</span>
          <h1>Clientes</h1>
        </div>

        <Link href="/admin/clientes/nuevo" className="admin-button primary">
          + Nuevo cliente
        </Link>
      </header>

      <div className="module-content">
        <section className="module-heading">
          <div>
            <span>BASE DE CLIENTES</span>
            <h2>Gestión de clientes</h2>
            <p>
              Consultá información personal, créditos y estado de cada cliente.
            </p>
          </div>

          <div className="client-total">
            <strong>{clientesDemo.length}</strong>
            <span>Clientes registrados</span>
          </div>
        </section>

        <section className="client-summary">
          <article>
            <span>CLIENTES ACTIVOS</span>
            <strong>2</strong>
          </article>

          <article>
            <span>CON CRÉDITO</span>
            <strong>3</strong>
          </article>

          <article>
            <span>SIN CRÉDITO</span>
            <strong>1</strong>
          </article>

          <article className="summary-danger">
            <span>EN MORA</span>
            <strong>1</strong>
          </article>
        </section>

        <section className="clients-card">
          <div className="clients-toolbar">
            <div>
              <h3>Todos los clientes</h3>
              <span>Datos demostrativos</span>
            </div>

            <div className="client-search">
              <span>⌕</span>

              <input
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
                placeholder="Buscar nombre, DNI o teléfono..."
              />
            </div>
          </div>

          <div className="clients-table-wrapper">
            <div className="clients-table">
              <div className="clients-table-head">
                <span>Cliente</span>
                <span>DNI</span>
                <span>Teléfono</span>
                <span>Localidad</span>
                <span>Créditos</span>
                <span>Saldo</span>
                <span>Estado</span>
                <span></span>
              </div>

              {clientes.map((cliente) => (
                <div className="clients-table-row" key={cliente.id}>
                  <div className="client-name-cell">
                    <div className="client-list-avatar">
                      {cliente.nombre
                        .split(" ")
                        .map((parte) => parte[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div>
                      <strong>{cliente.nombre}</strong>
                      <small>Cliente #{cliente.id.toString().padStart(4, "0")}</small>
                    </div>
                  </div>

                  <span>{cliente.dni}</span>
                  <span>{cliente.telefono}</span>
                  <span>{cliente.localidad}</span>

                  <strong>{cliente.creditos}</strong>

                  <strong>{dinero(cliente.saldo)}</strong>

                  <small
                    className={`client-status ${
                      cliente.estado === "En mora"
                        ? "mora"
                        : cliente.estado === "Activo"
                        ? "activo"
                        : "neutral"
                    }`}
                  >
                    {cliente.estado}
                  </small>

                  <Link
                    href={`/admin/clientes/${cliente.id}`}
                    className="client-view"
                  >
                    Ver →
                  </Link>
                </div>
              ))}

              {clientes.length === 0 && (
                <div className="empty-clients">
                  No encontramos clientes con esa búsqueda.
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
      }
