# Handoff — Rediseño web portfolio (rafarearte.com)

## Para el agente (Claude Code)

Sos un desarrollador frontend senior con buen ojo de diseño. Tu tarea es **rediseñar y actualizar el sitio portfolio personal** de Rafael Rearte, que hoy está básico y desactualizado. El sitio ya existe (HTML/CSS/JS vanilla) y se sirve en rafarearte.com.

**Objetivo:** que quede profesional, moderno y que muestre TODO lo que Rafa hace hoy — no solo la app de eventos como ahora. Es un portfolio de **desarrollador de software a medida / freelance**, con sistemas reales en producción.

Corrés en la PC de Rafa, con acceso a sus archivos y al repo. Este documento te da la base; la info que falta (capturas, proyectos extra, links, testimonios) la juntás vos en la Fase 0 antes de tocar código.

**Importante antes de empezar:**
- Pedí/localizá los archivos actuales del repo: `index.html`, `styles.css`, `script.js` y cualquier asset. Trabajá sobre esos.
- No rompas el deploy. Confirmá cómo se publica (parece VPS propio con IIS; verificá antes de asumir).
- Mobile-first y responsive. Revisá que se vea bien en teléfono.
- Español (es-AR) como idioma del sitio.

---

## FASE 0 — Recolección (hacer ANTES de tocar código)

Este handoff trae los 3 proyectos principales con buen detalle, pero el sitio tiene que "vender toda la carne al asador" y hay material en la PC de Rafa que todavía no está acá. Antes de rediseñar, recolectá lo siguiente y, si falta algo, **preguntale a Rafa directamente** en vez de inventar:

1. **Capturas / imágenes de los proyectos.** Es lo que más vende y hoy no hay ninguna. Buscá en el repo y en carpetas del proyecto (capturas de dashboards, pantalla de acreditación, el Excel con marca de la AAC, el sistema de socios, etc.). Si no encontrás, pedíselas a Rafa. Si no hay, usá placeholders prolijos (no dejes huecos rotos).
2. **Proyectos/clientes adicionales.** Rafa hace bastante más que los 3 de este doc. Hay al menos uno de gestión de alquileres (dashboard para un familiar) y "trabajos varios de facturación/socios/administración para distintos clientes". Confirmá con Rafa cuáles quiere mostrar y con qué nivel de detalle/nombre. Revisá el repo/carpetas por otros proyectos que valga la pena sumar.
3. **Links y repos.** ¿Qué repos de GitHub son públicos y linkeables? ¿Qué demos vivas hay además de eventito.rafarearte.com? Confirmá antes de linkear algo privado.
4. **Números duros extra.** Para la app de acreditación: cantidad de eventos, años en uso, cualquier métrica adicional más allá de "20.000 asistentes / 70.000 invitados".
5. **Testimonios.** Si hay algún comentario/feedback de clientes (aunque sea informal) que Rafa quiera mostrar, suma mucha credibilidad. Preguntá.
6. **Referencia estética.** Preguntá a Rafa si tiene algún sitio de referencia que le guste, para no improvisar el estilo. Si no, seguí las "Decisiones de diseño" de más abajo.

Con eso recolectado, pasá al rediseño. Nota: los datos que juntes acá son material para la web (público); tratá cualquier dato sensible o privado que aparezca en los chats/archivos con criterio y, ante la duda, preguntá a Rafa antes de publicarlo.

---

## Quién es Rafa (bio base)

- Rafael Rearte — Córdoba, Argentina.
- Fullstack Developer, Técnico Universitario en Programación (UTN).
- Perfil: desarrollo de software a medida de punta a punta (relevamiento → código → producción → mantenimiento), con foco en backend/.NET, y también infraestructura (del código al servidor donde corre).
- Contacto: rafirearte@gmail.com · +54 351 650 7535 · github.com/RafaRearte · linkedin.com/in/rafaelrearte

## Narrativa / posicionamiento (tono del sitio)

Mensaje central: **"Construyo software a medida que organizaciones reales usan todos los días — del relevamiento al servidor en producción."**

No es un junior mostrando ejercicios: son sistemas en producción, con usuarios reales, facturación electrónica fiscal, eventos masivos. El sitio tiene que transmitir solidez y oficio, sin exagerar.

---

## Stack técnico (para sección Skills)

Sacar las barras de porcentaje actuales (se ven poco serias). Reemplazar por tags/chips agrupados:

- **Backend:** C# / .NET 8, ASP.NET Core, Entity Framework Core, APIs REST, JWT
- **Bases de datos:** SQL Server, SQLite
- **Frontend:** JavaScript (vanilla), HTML5, CSS3, Bootstrap
- **Mobile/Desktop:** .NET MAUI (Android), Windows Forms
- **Infra/DevOps:** IIS, Windows Server, Hyper-V, Docker, CI/CD, PWA / Service Workers
- **Integraciones:** AFIP/ARCA (facturación electrónica, SOAP, certificados, CAE), MercadoPago
- **Otros:** Git/GitHub, generación de PDF/Excel (QuestPDF, ClosedXML, iText7), optimización de rendimiento
- Inglés B2

---

## PROYECTOS (este es el corazón del cambio)

Hoy la web muestra solo 2 proyectos (ambos de eventos). Hay que mostrar la parrilla completa. Orden sugerido de más a menos fuerte:

### 1. Sistema de Gestión de Socios y Facturación Electrónica — CA-IHPBA
Cliente: Capítulo Argentino de la IHPBA (Asociación Internacional de Cirugía Hepato-Pancreato-Biliar). Cliente real, en producción.
- Sistema web integral de administración de socios, cuotas, cursos y facturación electrónica.
- Reemplazó la gestión manual en planillas de ~300 socios activos.
- Facturación electrónica ante AFIP/ARCA vía SOAP (certificados .p12, emisión de CAE, homologación y producción): emisión individual y masiva, notas de crédito, saldos históricos, descarga en PDF/ZIP.
- Gestión de cuotas: generación masiva por período, pagos, cálculo de deuda y mora.
- Módulo de cursos (socios y no socios, aranceles diferenciados, pago en cuotas).
- Cuenta corriente por socio, portal del socio, dashboard con estadísticas y reportes para el contador.
- Desarrollo full-stack end-to-end + infraestructura + deploy, en solitario.
- Stack: .NET 8 / ASP.NET Core, EF Core 8, SQL Server, JWT (roles ADMIN/SOCIO), HTML/CSS/JS + Bootstrap 5, VPS Windows + IIS + SSL, reportes CSV/Excel/PDF (QuestPDF, ClosedXML).
- Destacar: integración con organismo fiscal (AFIP/ARCA) con CAE — complejidad real de facturación electrónica argentina. En producción, con mantenimiento mensual contratado.

### 2. Plataforma de Acreditación de Eventos (Choosing / acreditación)
En producción real. Usada en eventos de hasta ~20.000 asistentes; +70.000 invitados acumulados en múltiples eventos. (link: eventito.rafarearte.com)
- Plataforma SaaS multi-evento para el ciclo completo de un evento presencial: inscripción online, acreditación en puerta (QR / código de barras / lectura de PDF417 del DNI), impresión de credenciales, estadísticas en tiempo real, encuestas y certificados.
- Modo offline (PWA): sigue acreditando sin internet (IndexedDB + cola de sincronización).
- Dos modos de acreditación: móvil (cámara a pantalla completa) y puesto fijo en PC (lectora Zebra).
- Certificados en PDF personalizados enviados por email masivo.
- Seguridad: JWT, BCrypt, rate limiting, sanitización HTML.
- Logros técnicos: optimización de rendimiento (migración de localStorage síncrono a IndexedDB asíncrono — eliminó congelamientos y crash a +10.000 invitados); design system propio (paleta índigo, Inter local) aplicado a +15 pantallas.
- Stack: C# / .NET 8, ASP.NET Core Web API, EF Core 9, SQL Server, MailKit, Swagger; frontend JS vanilla + Bootstrap 5, jQuery, DataTables, html5-qrcode, Dexie (IndexedDB), SheetJS, html2pdf; PWA (service worker, manifest); VPS Windows + IIS. API en api.rafarearte.com.
- Nota: eventito.rafarearte.com corresponde a "Choosing", la versión plataforma/SaaS (venta de entradas online, planes de suscripción, marketplace, sorteos, sponsors, dashboard, integración MercadoPago). Se pueden presentar como un mismo producto o dos caras del mismo; criterio del agente, pero sin inflar.

### 3. RPQ — Registro de Prácticas Quirúrgicas
Cliente: Asociación Argentina de Cirugía (AAC), Comisión de Residencia. En producción, con mantenimiento mensual.
- App multiplataforma (Windows y Android) para que médicos residentes de cirugía registren sus prácticas quirúrgicas.
- Núcleo de negocio compartido entre escritorio y mobile.
- Nomenclador oficial de la AAC con 525 procedimientos (nivel de complejidad 1–10 y especialidad), digitalizado desde un PDF a JSON con parser propio (PdfPig), con validación de inconsistencias del origen.
- Estadísticas personales (complejidad, vía de abordaje incl. robótica, especialidad) y exportación a Excel con la marca de la AAC.
- Funciona 100% local, sin servidor ni login (SQLite embebido); instalación = abrir un único .exe autocontenido. Sin costo de hosting para el cliente.
- Stack: .NET 8 / C#, arquitectura en capas + DI, EF Core + SQLite, Windows Forms (escritorio), .NET MAUI (Android), ClosedXML, PdfPig.

### 4. (Opcional, si Rafa quiere) Otros trabajos a medida
Rafa tiene más clientes/sistemas (p.ej. dashboard de gestión de alquileres, trabajos varios de facturación/socios/administración). Si quiere, agregar una card genérica "Software de gestión a medida para distintos clientes" sin dar detalle fino. Confirmar con Rafa.

---

## Experiencia / rol actual (por si se quiere una sección "experiencia")

- **UEPC (Unión de Educadores de la Provincia de Córdoba)** — área de Sistemas. Combina desarrollo de software con infraestructura y soporte: desarrollo y despliegue de apps internas en producción, responsable del pasaje a producción (CI/CD) y del control de calidad (QA) del equipo de desarrollo interno; administración de Windows Server, Hyper-V, bases de datos, AD. (Este es el empleo en relación de dependencia; los proyectos de arriba son freelance / propios.)
- **Freelance / software a medida** — jun. 2024 a hoy. Es el foco del sitio.

---

## Secciones sugeridas del sitio

1. **Hero:** nombre + "Fullstack Developer · Software a medida". Subtítulo con la narrativa. CTA a Proyectos y Contacto.
   - Stats sugeridos (confirmar con Rafa): "Sistemas en producción", "20.000+ asistentes en eventos", "Facturación electrónica AFIP/ARCA". Evitar el "100% dedicación" actual (relleno).
2. **Sobre mí:** bio base de arriba, tono profesional.
3. **Proyectos:** las cards de arriba, con tags de stack e impacto. Esta es la sección principal.
4. **Skills:** chips agrupados (sin barras de %).
5. **Educación:** Tecnicatura en Programación (UTN, 2023–2025); Inglés B2; secundario. (Ingeniería en Sistemas: Rafa la pausó — NO ponerla como "en curso". Omitir o confirmar con Rafa.)
6. **Contacto:** email, teléfono, GitHub, LinkedIn.

## Decisiones de diseño
- Modernizar: buena tipografía, espaciado generoso, jerarquía clara, modo oscuro opcional si es fácil.
- Coherencia visual con un color de acento (podría ser índigo, que ya usa en su design system de acreditación).
- Accesible y rápido. Sin dependencias pesadas innecesarias.
- Mantener el footer actualizado (año 2026, no 2025).

## Cosas a confirmar con Rafa antes de cerrar
1. Nombres reales de clientes (CA-IHPBA y AAC): **Rafa confirmó que SÍ se pueden nombrar en la web.**
2. Capturas/imágenes de cada proyecto (si las tiene).
3. Si incluye la card de "otros clientes" (punto 4).
4. Qué hacer con Ingeniería en Sistemas (pausada).
