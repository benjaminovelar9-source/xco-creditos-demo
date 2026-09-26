"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cargando, setCargando] = useState(false);
  const [comprobando, setComprobando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    comprobarSesion();
  }, []);

  async function comprobarSesion() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      router.replace("/admin");
      return;
    }

    setComprobando(false);
  }

  async function iniciarSesion(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setCargando(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (error) {
      setError(
        "Correo o contraseña incorrectos."
      );

      setCargando(false);
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  if (comprobando) {
    return (
      <main className="login-page">
        <div className="login-loading">
          Verificando sesión...
        </div>
      </main>
    );
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-brand">
          <div className="login-logo">
            X
          </div>

          <div>
            <strong>XCO</strong>
            <span>Gestión de Créditos</span>
          </div>
        </div>

        <div className="login-heading">
          <span>ACCESO ADMINISTRATIVO</span>

          <h1>Bienvenido</h1>

          <p>
            Ingresá con tu cuenta para acceder
            al panel de administración.
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={iniciarSesion}
        >
          <label>
            <span>Correo electrónico</span>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="admin@empresa.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            <span>Contraseña</span>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </label>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={cargando}
          >
            {cargando
              ? "Ingresando..."
              : "Ingresar al sistema"}
          </button>
        </form>

        <div className="login-security">
          <span>●</span>

          <div>
            <strong>Acceso protegido</strong>
            <p>
              La información del sistema requiere
              una sesión administrativa válida.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="login-back"
        >
          ← Volver al inicio
        </Link>
      </section>

      <section className="login-side">
        <div>
          <span className="login-side-label">
            XCO · ADMINISTRACIÓN
          </span>

          <h2>
            Control financiero
            <br />
            <em>en un solo lugar.</em>
          </h2>

          <p>
            Gestioná clientes, solicitudes,
            créditos, cuotas y cobranzas desde
            un panel centralizado.
          </p>

          <div className="login-side-items">
            <div>
              <strong>01</strong>
              <span>Gestión de clientes</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Control de créditos</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Seguimiento de cobranzas</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
