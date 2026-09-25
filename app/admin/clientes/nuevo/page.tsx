"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormCliente = {
  nombre: string;
  apellido: string;
  dni: string;
  nacimiento: string;
  telefono: string;
  telefonoAlternativo: string;
  email: string;
  direccion: string;
  localidad: string;
  provincia: string;
  ocupacion: string;
  empleador: string;
  ingresos: string;
  antiguedad: string;
  referenciaNombre: string;
  referenciaTelefono: string;
  observaciones: string;
};

const inicial: FormCliente = {
  nombre: "",
  apellido: "",
  dni: "",
  nacimiento: "",
  telefono: "",
  telefonoAlternativo: "",
  email: "",
  direccion: "",
  localidad: "",
  provincia: "Buenos Aires",
  ocupacion: "",
  empleador: "",
  ingresos: "",
  antiguedad: "",
  referenciaNombre: "",
  referenciaTelefono: "",
  observaciones: "",
};

export default function NuevoClientePage() {
  const [form, setForm] = useState<FormCliente>(inicial);
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const cambiar = (
    campo: keyof FormCliente,
    valor: string
  ) => {
    setForm((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  };

  const guardar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMensaje("");
    setError("");

    if (
      !form.nombre.trim() ||
      !form.apellido.trim() ||
      !form.dni.trim() ||
      !form.telefono.trim()
    ) {
      setError(
        "Completá nombre, apellido, DNI y teléfono."
      );
      return;
    }

    setGuardando(true);

    setTimeout(() => {
      setGuardando(false);

      setMensaje(
        "Cliente validado correctamente. En modo demo todavía no se guardó en la base de datos."
      );
    }, 600);
  };

  return (
    <main className="module-page">
      <header className="module-topbar">
        <div>
          <Link
            href="/admin/clientes"
            className="back-link"
          >
            ← Volver a clientes
          </Link>

          <span>ADMINISTRACIÓN</span>
          <h1>Nuevo cliente</h1>
        </div>

        <div className="form-top-actions">
          <Link
            href="/admin/clientes"
            className="admin-button secondary"
          >
            Cancelar
          </Link>

          <button
            form="nuevo-cliente"
            type="submit"
            className="admin-button primary"
            disabled={guardando}
          >
            {guardando
              ? "Validando..."
              : "Guardar cliente"}
          </button>
        </div>
      </header>

      <div className="module-content">
        <section className="module-heading">
          <div>
            <span>NUEVO REGISTRO</span>

            <h2>Datos del cliente</h2>

            <p>
              Completá la información necesaria para
              incorporar una persona al sistema.
            </p>
          </div>

          <div className="demo-indicator">
            <span></span>
            Modo demostración
          </div>
        </section>

        {error && (
          <div className="form-message error">
            <strong>No pudimos continuar</strong>
            <span>{error}</span>
          </div>
        )}

        {mensaje && (
          <div className="form-message success">
            <strong>Formulario correcto</strong>
            <span>{mensaje}</span>
          </div>
        )}

        <form
          id="nuevo-cliente"
          onSubmit={guardar}
          className="client-form"
        >
          {/* DATOS PERSONALES */}

          <section className="form-section">
            <div className="form-section-title">
              <div className="section-number">01</div>

              <div>
                <span>INFORMACIÓN PRINCIPAL</span>
                <h3>Datos personales</h3>
                <p>
                  Información de identificación del
                  solicitante.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <label>
                <span>Nombre *</span>
                <input
                  value={form.nombre}
                  onChange={(e) =>
                    cambiar("nombre", e.target.value)
                  }
                  placeholder="Ej: Juan"
                  required
                />
              </label>

              <label>
                <span>Apellido *</span>
                <input
                  value={form.apellido}
                  onChange={(e) =>
                    cambiar("apellido", e.target.value)
                  }
                  placeholder="Ej: Pérez"
                  required
                />
              </label>

              <label>
                <span>DNI *</span>
                <input
                  value={form.dni}
                  onChange={(e) =>
                    cambiar("dni", e.target.value)
                  }
                  inputMode="numeric"
                  placeholder="Ej: 32456789"
                  required
                />
              </label>

              <label>
                <span>Fecha de nacimiento</span>
                <input
                  type="date"
                  value={form.nacimiento}
                  onChange={(e) =>
                    cambiar(
                      "nacimiento",
                      e.target.value
                    )
                  }
                />
              </label>
            </div>
          </section>

          {/* CONTACTO */}

          <section className="form-section">
            <div className="form-section-title">
              <div className="section-number">02</div>

              <div>
                <span>CONTACTO</span>
                <h3>Teléfono y domicilio</h3>
                <p>
                  Datos que posteriormente podremos
                  utilizar para avisos de vencimiento.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <label>
                <span>WhatsApp / Teléfono *</span>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) =>
                    cambiar(
                      "telefono",
                      e.target.value
                    )
                  }
                  placeholder="Ej: 11 5555 1234"
                  required
                />
              </label>

              <label>
                <span>Teléfono alternativo</span>
                <input
                  type="tel"
                  value={
                    form.telefonoAlternativo
                  }
                  onChange={(e) =>
                    cambiar(
                      "telefonoAlternativo",
                      e.target.value
                    )
                  }
                  placeholder="Opcional"
                />
              </label>

              <label className="form-wide">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    cambiar("email", e.target.value)
                  }
                  placeholder="cliente@email.com"
                />
              </label>

              <label className="form-wide">
                <span>Domicilio</span>
                <input
                  value={form.direccion}
                  onChange={(e) =>
                    cambiar(
                      "direccion",
                      e.target.value
                    )
                  }
                  placeholder="Calle, número, piso/departamento"
                />
              </label>

              <label>
                <span>Localidad</span>
                <input
                  value={form.localidad}
                  onChange={(e) =>
                    cambiar(
                      "localidad",
                      e.target.value
                    )
                  }
                  placeholder="Localidad"
                />
              </label>

              <label>
                <span>Provincia</span>
                <input
                  value={form.provincia}
                  onChange={(e) =>
                    cambiar(
                      "provincia",
                      e.target.value
                    )
                  }
                  placeholder="Provincia"
                />
              </label>
            </div>
          </section>

          {/* ECONOMÍA */}

          <section className="form-section">
            <div className="form-section-title">
              <div className="section-number">03</div>

              <div>
                <span>PERFIL ECONÓMICO</span>
                <h3>Actividad e ingresos</h3>
                <p>
                  Información administrativa para
                  evaluar solicitudes.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <label>
                <span>Ocupación</span>
                <input
                  value={form.ocupacion}
                  onChange={(e) =>
                    cambiar(
                      "ocupacion",
                      e.target.value
                    )
                  }
                  placeholder="Ej: Empleado"
                />
              </label>

              <label>
                <span>Empresa / actividad</span>
                <input
                  value={form.empleador}
                  onChange={(e) =>
                    cambiar(
                      "empleador",
                      e.target.value
                    )
                  }
                  placeholder="Empresa o actividad"
                />
              </label>

              <label>
                <span>Ingresos mensuales</span>

                <div className="money-input">
                  <b>$</b>

                  <input
                    type="number"
                    min="0"
                    value={form.ingresos}
                    onChange={(e) =>
                      cambiar(
                        "ingresos",
                        e.target.value
                      )
                    }
                    placeholder="0"
                  />
                </div>
              </label>

              <label>
                <span>Antigüedad</span>
                <input
                  value={form.antiguedad}
                  onChange={(e) =>
                    cambiar(
                      "antiguedad",
                      e.target.value
                    )
                  }
                  placeholder="Ej: 3 años"
                />
              </label>
            </div>
          </section>

          {/* REFERENCIA */}

          <section className="form-section">
            <div className="form-section-title">
              <div className="section-number">04</div>

              <div>
                <span>REFERENCIA</span>
                <h3>Contacto de referencia</h3>
                <p>
                  Información opcional de una persona
                  de referencia.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <label>
                <span>Nombre y apellido</span>
                <input
                  value={form.referenciaNombre}
                  onChange={(e) =>
                    cambiar(
                      "referenciaNombre",
                      e.target.value
                    )
                  }
                  placeholder="Nombre completo"
                />
              </label>

              <label>
                <span>Teléfono</span>
                <input
                  type="tel"
                  value={
                    form.referenciaTelefono
                  }
                  onChange={(e) =>
                    cambiar(
                      "referenciaTelefono",
                      e.target.value
                    )
                  }
                  placeholder="Teléfono de referencia"
                />
              </label>

              <label className="form-full">
                <span>Observaciones</span>

                <textarea
                  rows={5}
                  value={form.observaciones}
                  onChange={(e) =>
                    cambiar(
                      "observaciones",
                      e.target.value
                    )
                  }
                  placeholder="Información adicional del cliente..."
                />
              </label>
            </div>
          </section>

          <div className="form-bottom">
            <div>
              <strong>Datos del cliente</strong>
              <span>
                Los campos marcados con * son
                obligatorios.
              </span>
            </div>

            <div>
              <Link
                href="/admin/clientes"
                className="admin-button secondary"
              >
                Cancelar
              </Link>

              <button
                type="submit"
                className="admin-button primary"
                disabled={guardando}
              >
                {guardando
                  ? "Validando..."
                  : "Guardar cliente"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
