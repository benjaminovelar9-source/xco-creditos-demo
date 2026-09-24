import Link from "next/link";

export default function Home() {
  return (
    <main className="landing">
      <header className="landing-header">
        <div className="brand">
          <div className="brand-logo">X</div>

          <div>
            <strong>XCO</strong>
            <span>Gestión de Créditos</span>
          </div>
        </div>

        <Link href="/admin" className="header-login">
          Ingresar
        </Link>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            SISTEMA DE GESTIÓN FINANCIERA
          </div>

          <h1>
            Administrá tus créditos
            <span> de forma simple.</span>
          </h1>

          <p className="hero-description">
            Clientes, préstamos, cuotas, vencimientos, cobranzas y pagos
            organizados desde un único sistema.
          </p>

          <div className="hero-actions">
            <Link href="/admin" className="btn-primary">
              Ver demo administrador
              <span>→</span>
            </Link>

            <Link href="/mi-credito" className="btn-secondary">
              Ver portal del cliente
            </Link>
          </div>

          <div className="hero-features">
            <div>
              <strong>01</strong>
              <span>Control de créditos</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Gestión de cuotas</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Control de vencimientos</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <div>
              <span>RESUMEN GENERAL</span>
              <h3>Panel financiero</h3>
            </div>

            <div className="status-dot">
              <span></span>
              Activo
            </div>
          </div>

          <div className="money-card">
            <span>Capital administrado</span>
            <strong>$2.450.000</strong>

            <div className="money-change">
              ↑ Demo del sistema
            </div>
          </div>

          <div className="mini-grid">
            <div className="mini-card">
              <span>Por cobrar</span>
              <strong>$1.380.000</strong>
            </div>

            <div className="mini-card">
              <span>Clientes</span>
              <strong>24</strong>
            </div>

            <div className="mini-card">
              <span>Próximas</span>
              <strong>7</strong>
            </div>

            <div className="mini-card alert">
              <span>Vencidas</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="next-payment">
            <div>
              <span>PRÓXIMO VENCIMIENTO</span>
              <strong>Juan Pérez</strong>
              <small>Cuota 3 de 6 · vence hoy</small>
            </div>

            <strong>$65.000</strong>
          </div>
        </div>
      </section>

      <section className="landing-benefits">
        <div className="benefit">
          <span>CLIENTES</span>
          <h3>Todo centralizado</h3>
          <p>
            Datos personales, créditos, pagos e historial de cada cliente.
          </p>
        </div>

        <div className="benefit">
          <span>COBRANZAS</span>
          <h3>Cuotas y vencimientos</h3>
          <p>
            Controlá qué cuotas están pagadas, pendientes o vencidas.
          </p>
        </div>

        <div className="benefit">
          <span>AUTOMATIZACIÓN</span>
          <h3>Preparado para crecer</h3>
          <p>
            Integración futura con Mercado Pago y recordatorios por WhatsApp.
          </p>
        </div>
      </section>

      <footer className="landing-footer">
        <div>
          <strong>XCO</strong>
          <span>Demo comercial · Sistema de gestión de créditos</span>
        </div>

        <span>Versión demostración</span>
      </footer>
    </main>
  );
      }
