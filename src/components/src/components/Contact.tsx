import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('moevallq');

  if (state.succeeded) {
    return (
      <section
        id="contacto"
        className="bg-[#042D29] text-white py-24 sm:py-32"
      >
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#A9C8C0] mb-5">
            CONTACTO
          </p>

          <h2 className="text-[36px] sm:text-[48px] font-heading font-bold leading-tight mb-6">
            Gracias por contactarnos.
          </h2>

          <p className="text-[18px] text-white/75 leading-relaxed">
            Hemos recibido tu mensaje y nos pondremos en contacto contigo.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      className="bg-[#042D29] text-white py-24 sm:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-[760px] mb-12">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#A9C8C0] mb-5">
            CONTACTO
          </p>

          <h2 className="text-[36px] sm:text-[48px] font-heading font-bold leading-[1.1] mb-6">
            Hablemos de tu expansión internacional.
          </h2>

          <p className="text-[18px] sm:text-[19px] text-white/75 leading-[1.65]">
            Si estás evaluando nuevos mercados, necesitas estructurar tu
            internacionalización o quieres entender dónde están tus
            principales brechas, cuéntanos brevemente tu situación.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[900px] grid grid-cols-1 sm:grid-cols-2 gap-6"
        >

          <div>
            <label
              htmlFor="nombre"
              className="block text-[13px] font-medium mb-2 text-white/85"
            >
              Nombre
            </label>

            <input
              id="nombre"
              type="text"
              name="nombre"
              required
              className="w-full rounded-[5px] border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#A9C8C0]"
              placeholder="Tu nombre"
            />

            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
              className="mt-1 text-sm text-red-300"
            />
          </div>

          <div>
            <label
              htmlFor="empresa"
              className="block text-[13px] font-medium mb-2 text-white/85"
            >
              Empresa
            </label>

            <input
              id="empresa"
              type="text"
              name="empresa"
              required
              className="w-full rounded-[5px] border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#A9C8C0]"
              placeholder="Nombre de tu empresa"
            />

            <ValidationError
              prefix="Empresa"
              field="empresa"
              errors={state.errors}
              className="mt-1 text-sm text-red-300"
            />
          </div>

          <div>
            <label
              htmlFor="cargo"
              className="block text-[13px] font-medium mb-2 text-white/85"
            >
              Cargo
            </label>

            <input
              id="cargo"
              type="text"
              name="cargo"
              className="w-full rounded-[5px] border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#A9C8C0]"
              placeholder="Tu cargo"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-medium mb-2 text-white/85"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-[5px] border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#A9C8C0]"
              placeholder="tu@email.com"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="mt-1 text-sm text-red-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="mensaje"
              className="block text-[13px] font-medium mb-2 text-white/85"
            >
              ¿En qué podemos ayudarte?
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={6}
              className="w-full rounded-[5px] border border-white/20 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#A9C8C0] resize-none"
              placeholder="Cuéntanos brevemente qué estás buscando."
            />

            <ValidationError
              prefix="Mensaje"
              field="mensaje"
              errors={state.errors}
              className="mt-1 text-sm text-red-300"
            />
          </div>

          {state.errors && !state.errors.fieldErrors && (
            <div className="sm:col-span-2 text-sm text-red-300">
              No pudimos enviar el mensaje. Inténtalo nuevamente.
            </div>
          )}

          <div className="sm:col-span-2 pt-2">
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center justify-center bg-white text-[#042D29] font-heading font-bold text-[13px] uppercase tracking-wider px-7 py-3.5 rounded-[5px] transition-all duration-200 hover:bg-[#A9C8C0] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'ENVIANDO...' : 'SOLICITAR CONVERSACIÓN'}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
