import { ShimmerButton } from "../ui/shimmer-button";
import { ShineBorder } from "../ui/shine-border";

const CTABanner: React.FC = () => {
  return (
    <section className="my-6 sm:my-8 py-6 sm:py-10 md:py-14 max-w-4xl w-full px-3 sm:px-6 mx-auto">
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-verde-primario-900/80 via-verde-primario-800/60 to-fondo/90 backdrop-blur-sm">
        {/* Animated Shine Border */}
        <ShineBorder
          shineColor={["#84934f", "#EC8328", "#606c38"]}
        />

        <div className="relative z-10 w-full flex flex-col items-center text-center gap-4 sm:gap-6 p-5 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight font-extrabold leading-snug sm:leading-tight text-verde-primario-50 font-nombre px-2">
            ¿Tienes un proyecto en mente? Lo construimos juntos
          </h2>
          <p className="font-medium text-verde-primario-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg px-2">
            Desde la primera idea hasta el deploy. Desarrollo web y móvil hecho a medida para startups y emprendedores en Chile y LATAM.
          </p>

          <a href="#contact" className="mt-2 sm:mt-4 w-full sm:w-auto flex justify-center" aria-label="Contactar a Nicolás Urrea para iniciar un proyecto">
            <ShimmerButton
              shimmerColor="#f6f7ee"
              shimmerSize="0.08em"
              shimmerDuration="2.5s"
              borderRadius="9999px"
              background="linear-gradient(135deg, #606c38 0%, #41492b 100%)"
              className="shadow-2xl px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-verde-primario-50 whitespace-nowrap">
                Contáctame ahora →
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
