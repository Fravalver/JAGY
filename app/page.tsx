import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    icon: "👨‍👩‍👧",
    title: "Orientación familiar",
    description:
      "Asesoramiento para mejorar la comunicación y fortalecer vínculos en el entorno familiar."
  },
  {
    icon: "💚",
    title: "Acompañamiento emocional",
    description:
      "Espacio seguro para gestionar emociones, afrontar cambios y recuperar equilibrio personal."
  },
  {
    icon: "📄",
    title: "Informes sociales",
    description:
      "Elaboración de informes profesionales con enfoque riguroso y sensibilidad social."
  },
  {
    icon: "💻",
    title: "Consulta online",
    description:
      "Atención remota flexible para recibir apoyo profesional desde cualquier lugar."
  }
];

const testimonials = [
  "“Gracias a Andrea encontramos herramientas claras para afrontar un momento familiar muy complejo.”",
  "“Su acompañamiento fue cercano, profesional y respetuoso. Sentí apoyo desde la primera sesión.”",
  "“Nos ayudó a ordenar nuestra situación y a tomar decisiones con más tranquilidad y confianza.”"
];

const posts = [
  "Cómo fortalecer la red de apoyo en momentos difíciles",
  "Guía práctica para gestionar conflictos familiares",
  "Claves para cuidar el bienestar emocional en casa"
];

export default function Home() {
  return (
    <main>
      <section className="section-shell grid gap-10 pt-20 md:grid-cols-2 md:items-center md:pt-24">
        <div className="fade-up" style={{ ["--delay" as string]: "100ms" }}>
          <p className="mb-4 inline-flex rounded-full bg-sage px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone">
            Puentes de Éxito
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Acompañamiento social y emocional para avanzar hacia tu bienestar
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone">
            Espacio profesional de orientación y apoyo para personas y familias.
          </p>
          <button className="mt-8 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-stone">
            Reservar consulta
          </button>
        </div>
        <div
          className="fade-up card min-h-80 bg-gradient-to-br from-sand to-sage"
          style={{ ["--delay" as string]: "250ms" }}
          aria-label="Espacio para fotografía profesional"
        >
          <div className="flex h-full min-h-80 items-center justify-center rounded-xl2 border border-white/70 bg-white/40 p-8 text-center text-stone">
            Foto profesional (placeholder)
          </div>
        </div>
      </section>

      <section className="section-shell" id="servicios">
        <SectionTitle
          eyebrow="Servicios"
          title="Apoyo social integral adaptado a tu situación"
          description="Intervenciones centradas en la persona, desde una mirada humana, ética y orientada a resultados sostenibles."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card fade-up"
              style={{ ["--delay" as string]: `${index * 120}ms` }}
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage text-xl">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-stone">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 md:grid-cols-2 md:items-start" id="sobre-mi">
        <div className="card fade-up">
          <SectionTitle
            eyebrow="Sobre Andrea"
            title="Trayectoria profesional en intervención social"
            description="Trabajadora social con experiencia en acompañar a personas y familias en situaciones de vulnerabilidad, promoviendo autonomía, bienestar y acceso a recursos."
          />
          <p className="text-stone">
            Aquí puedes incluir credenciales, colegiación, formación especializada y experiencia en contextos comunitarios, sanitarios o educativos.
          </p>
        </div>
        <div className="card fade-up" style={{ ["--delay" as string]: "160ms" }}>
          <h3 className="text-xl font-semibold">Credenciales y enfoque</h3>
          <ul className="mt-4 space-y-3 text-stone">
            <li>• Grado en Trabajo Social y formación continua en intervención familiar.</li>
            <li>• Experiencia en acompañamiento emocional y gestión de recursos sociales.</li>
            <li>• Metodología basada en escucha activa, respeto y planificación personalizada.</li>
          </ul>
        </div>
      </section>

      <section className="section-shell" id="testimonios">
        <SectionTitle
          eyebrow="Testimonios"
          title="Historias de acompañamiento y avance"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((quote, index) => (
            <article
              key={index}
              className="card fade-up"
              style={{ ["--delay" as string]: `${index * 120}ms` }}
            >
              <p className="text-stone">{quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="card fade-up bg-ink text-white">
          <p className="text-sm uppercase tracking-[0.18em] text-sage">Da el siguiente paso</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Agenda tu espacio de orientación profesional
          </h2>
          <p className="mt-4 max-w-2xl text-sage">
            Si buscas apoyo para ti o tu familia, podemos construir juntos un plan de acompañamiento adaptado a tu realidad.
          </p>
          <button className="mt-7 rounded-full bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:bg-sage">
            Solicitar cita
          </button>
        </div>
      </section>

      <section className="section-shell" id="blog">
        <SectionTitle
          eyebrow="Blog"
          title="Recursos prácticos para tu día a día"
          description="Lecturas breves con recomendaciones profesionales sobre bienestar social y emocional."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post}
              className="card fade-up"
              style={{ ["--delay" as string]: `${index * 120}ms` }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone">
                Artículo destacado
              </p>
              <h3 className="text-lg font-semibold">{post}</h3>
              <a href="#" className="mt-5 inline-block text-sm font-semibold text-stone underline-offset-4 hover:underline">
                Leer más
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="contacto">
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos"
          description="Completa el formulario y te responderé para agendar una primera consulta."
        />
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <form className="card fade-up space-y-4" aria-label="Formulario de contacto">
            <label className="block text-sm font-medium text-stone">
              Name
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label className="block text-sm font-medium text-stone">
              Email
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label className="block text-sm font-medium text-stone">
              Message
              <textarea name="message" rows={5} />
            </label>
            <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone">
              Enviar mensaje
            </button>
          </form>
          <aside className="card fade-up" style={{ ["--delay" as string]: "140ms" }}>
            <h3 className="text-xl font-semibold">Información de contacto</h3>
            <p className="mt-4 text-stone">Email: contacto@puentesdeexito.com</p>
            <p className="mt-2 text-stone">Ubicación: [Ciudad, España]</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
