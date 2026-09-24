"use client";

import Link from "next/link";
import { useState } from "react";

const vencimientos = [
  {
    cliente: "Juan Pérez",
    cuota: "3/6",
    fecha: "Hoy",
    monto: "$65.000",
    estado: "Hoy",
  },
  {
    cliente: "María Gómez",
    cuota: "2/12",
    fecha: "Mañana",
    monto: "$42.500",
    estado: "Próxima",
  },
  {
    cliente: "Carlos Díaz",
    cuota: "4/8",
    fecha: "27/09/2026",
    monto: "$80.000",
    estado: "Próxima",
  },
  {
    cliente: "Lucía Fernández",
    cuota: "5/10",
    fecha: "22/09/2026",
    monto: "$55.000",
    estado: "Vencida",
  },
];

export default function AdminPage() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <main className="admin-shell">
      {/* SIDEBAR */}

      <aside className={`admin-sidebar ${menuAbierto ? "open" : ""}`}>
        <div className="admin-brand">
          <div className="admin-brand-icon">X</div>

          <div>
            <strong>XCO</strong>
            <span>Gestión de Créditos</span>
          </div>
        </div>

        <nav className="admin-nav">
          <span className="nav-title">GENERAL</span>

          <Link href="/admin" className="nav-item active">
            <span>▦</span>
            Dashboard
          </Link>

          <Link href="/admin/clientes" className="nav-item">
            <span>♙</span>
            Clientes
          </Link>

          <Link href="/admin/solicitudes" className="nav-item">
            <span>▤</span>
            Solicitudes
          </Link>

          <span className="nav-title nav-separator">GESTIÓN</span>

          <Link href="/admin/creditos" className="nav-item">
            <span>$</span>
            Créditos
          </Link>

          <Link href="/admin/cuotas" className="nav-item">
            <span>□</span>
            Cuotas
          </Link>

          <Link href="/admin/pagos" className="nav-item">
            <span>✓</span>
            Pagos
          </Link>

          <Link href="/admin/caja" className="nav-item">
            <span>▣</span>
            Caja
          </Link>

          <span className="nav-title nav-separator">SISTEMA</span>

          <Link href="/admin/notificaciones" className="nav-item">
            <span>◉</span>
            Notificaciones
          </Link>

          <Link href="/admin/reportes" className="nav-item">
            <span>⌁</span>
            Reportes
          </Link>

          <Link href="/admin/configuracion" className="nav-item">
            <span>⚙</span>
            Configuración
          </Link>
        </nav>

        <div className="admin-user">
          <div className="admin-avatar">AD</div>

          <div>
            <strong>Administrador</strong>
            <span>Cuenta demo</span>
          </div>
        </div>
      </aside>

      {/* CONTENIDO */}

      <section className="admin-main">
        <header className="admin-topbar">
          <button
            className="mobile-menu"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          <div>
            <span className="topbar-label">PANEL ADMINISTRATIVO</span>
            <h1>Dashboard</h1>
          </div>

          <div className="topbar-actions">
            <Link
              href="/admin/clientes/nuevo"
              className="admin-button secondary"
            >
              + Nuevo cliente
            </Link>

            <Link
              href="/admin/solicitudes/nueva"
              className="admin-button primary"
            >
              + Nueva solicitud
            </Link>
          </div>
        </header>

        <div className="admin-content">
          {/* BIENVENIDA */}

          <section className="dashboard-heading">
            <div>
              <span>RESUMEN GENERAL</span>
              <h2>Estado de la cartera</h2>
              <p>
                Información general de créditos, cobranzas y vencimientos.
              </p>
            </div>

            <div className="demo-indicator">
              <span></span>
              Modo demostración
            </div>
          </section>

          {/* MÉTRICAS */}

          <section className="stats-grid">
            <article className="stat-card featured">
              <div className="stat-top">
                <span>CAPITAL COLOCADO</span>
                <div className="stat-icon">$</div>
              </div>

              <strong>$2.450.000</strong>
              <small>18 créditos activos</small>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>CAPITAL PENDIENTE</span>
                <div className="stat-icon">↗</div>
              </div>

              <strong>$1.380.000</strong>
              <small>Saldo total por cobrar</small>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>COBRADO ESTE MES</span>
                <div className="stat-icon">✓</div>
              </div>

              <strong>$485.000</strong>
              <small>+12,4% respecto al anterior</small>
            </article>

            <article className="stat-card danger">
              <div className="stat-top">
                <span>MORA PENDIENTE</span>
                <div className="stat-icon">!</div>
              </div>

              <strong>$72.500</strong>
              <small>3 cuotas vencidas</small>
            </article>
          </section>

          {/* CONTADORES */}

          <section className="counter-grid">
            <article>
              <span>Clientes activos</span>
              <strong>24</strong>
              <small>+3 este mes</small>
            </article>

            <article>
              <span>Créditos activos</span>
              <strong>18</strong>
              <small>En curso</small>
            </article>

            <article>
              <span>Vencen hoy</span>
              <strong>4</strong>
              <small>$217.500</small>
            </article>

            <article className="counter-danger">
              <span>Cuotas vencidas</span>
              <strong>3</strong>
              <small>Requieren seguimiento</small>
            </article>
          </section>

          <section className="dashboard-columns">
            {/* VENCIMIENTOS */}

            <article className="dashboard-panel payments-panel">
              <div className="panel-heading">
                <div>
                  <span>COBRANZAS</span>
                  <h3>Próximos vencimientos</h3>
                </div>

                <Link href="/admin/cuotas">
                  Ver todas →
                </Link>
              </div>

              <div className="payments-list">
                {vencimientos.map((item, index) => (
                  <div className="payment-row" key={index}>
                    <div className="client-avatar">
                      {item.cliente
                        .split(" ")
                        .map((nombre) => nombre[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div className="payment-client">
                      <strong>{item.cliente}</strong>
                      <span>Cuota {item.cuota}</span>
                    </div>

                    <div className="payment-date">
                      <span>{item.fecha}</span>

                      <small
                        className={
                          item.estado === "Vencida"
                            ? "late"
                            : item.estado === "Hoy"
                            ? "today"
                            : ""
                        }
                      >
                        {item.estado}
                      </small>
                    </div>

                    <strong className="payment-amount">
                      {item.monto}
                    </strong>
                  </div>
                ))}
              </div>
            </article>

            {/* ACCIONES */}

            <article className="dashboard-panel quick-panel">
              <div className="panel-heading">
                <div>
                  <span>ACCESOS</span>
                  <h3>Acciones rápidas</h3>
                </div>
              </div>

              <div className="quick-actions">
                <Link href="/admin/clientes/nuevo">
                  <div className="quick-icon">+</div>

                  <div>
                    <strong>Nuevo cliente</strong>
                    <span>Registrar persona</span>
                  </div>

                  <b>→</b>
                </Link>

                <Link href="/admin/solicitudes/nueva">
                  <div className="quick-icon">$</div>

                  <div>
                    <strong>Nueva solicitud</strong>
                    <span>Simular financiación</span>
                  </div>

                  <b>→</b>
                </Link>

                <Link href="/admin/pagos">
                  <div className="quick-icon">✓</div>

                  <div>
                    <strong>Registrar pago</strong>
                    <span>Cobro manual</span>
                  </div>

                  <b>→</b>
                </Link>

                <Link href="/admin/clientes">
                  <div className="quick-icon">⌕</div>

                  <div>
                    <strong>Buscar cliente</strong>
                    <span>Consultar historial</span>
                  </div>

                  <b>→</b>
                </Link>
              </div>
            </article>
          </section>

          {/* ACTIVIDAD */}

          <section className="dashboard-panel activity-panel">
            <div className="panel-heading">
              <div>
                <span>ACTIVIDAD</span>
                <h3>Últimos movimientos</h3>
              </div>

              <Link href="/admin/pagos">
                Historial →
              </Link>
            </div>

            <div className="activity-table">
              <div className="activity-header">
                <span>Cliente</span>
                <span>Movimiento</span>
                <span>Fecha</span>
                <span>Importe</span>
                <span>Estado</span>
              </div>

              <div className="activity-row">
                <strong>Juan Pérez</strong>
                <span>Pago cuota 2/6</span>
                <span>24/09/2026</span>
                <strong>$65.000</strong>
                <small className="paid">Pagado</small>
              </div>

              <div className="activity-row">
                <strong>María Gómez</strong>
                <span>Nuevo crédito</span>
                <span>23/09/2026</span>
                <strong>$350.000</strong>
                <small className="active-credit">Activo</small>
              </div>

              <div className="activity-row">
                <strong>Carlos Díaz</strong>
                <span>Pago cuota 3/8</span>
                <span>22/09/2026</span>
                <strong>$80.000</strong>
                <small className="paid">Pagado</small>
              </div>
            </div>
          </section>
        </div>
      </section>

      {menuAbierto && (
        <button
          className="sidebar-overlay"
          aria-label="Cerrar menú"
          onClick={() => setMenuAbierto(false)}
        />
      )}
    </main>
  );
      }
