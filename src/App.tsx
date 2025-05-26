import { useState, useEffect, useRef } from 'react';
import { Brain, Heart, Dumbbell, ArrowDown, Calendar, Clock } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const manifestoRef = useRef(null);
  const [manifestoVisible, setManifestoVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setManifestoVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (manifestoRef.current) {
      observer.observe(manifestoRef.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (manifestoRef.current) observer.unobserve(manifestoRef.current);
    };
  }, []);

  // Array de valores do DNA
  const dnaValues = [
    {
      title: 'Mente',
      description: 'Clareza, foco e leveza em cada movimento.',
      icon: <Brain className="w-10 h-10 text-primary-500 mb-4" />,
    },
    {
      title: 'Corpo',
      description: 'Movimento com potência e presença.',
      icon: <Dumbbell className="w-10 h-10 text-primary-500 mb-4" />,
    },
    {
      title: 'Emoção',
      description: 'Conexão consigo e com o grupo.',
      icon: <Heart className="w-10 h-10 text-primary-500 mb-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed w-full bg-black/30 backdrop-blur-xl z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo_horizontal_mask.png" alt="Desperta" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#manifesto" className="text-gray-700 hover:text-primary-500">Manifesto</a>
              <a href="#dna" className="text-gray-700 hover:text-primary-500">DNA</a>
              <a href="https://wa.me/+5562994770125" target="_blank" rel="noopener noreferrer"  className="text-gray-700 hover:text-primary-500">Contato</a>
            </nav>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat flex items-center"
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-20 w-full px-4">
            <div className="flex flex-col items-center text-center">
                <img
                  src="/logo_horizontal_mask.png"
                  alt="Símbolo Desperta"
                  className="w-[490px] md:w-[490px] mb-8
                  animate-fade-in
                  drop-shadow-[0_0_30px_#b6ff00]
                  drop-shadow-2xl
                  shadow-white
                  backdrop-blur-sm
                  transition-transform duration-700
                  hover:scale-105
                "
                />
                <img
                  src="/simbolo.png"
                  alt="Símbolo Desperta"
                  className="w-[100px] md:w-[100px] mb-8
                  animate-fade-in
                  drop-shadow-[0_0_30px_#b6ff00]
                  drop-shadow-2xl
                  shadow-white
                  backdrop-blur-sm
                  transition-transform duration-700
                  hover:scale-105
                "
                />
              <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}> 
                <span className="inline-block px-4 py-1.5 mb-4 bg-primary-500 text-primary-900 font-medium rounded-full text-sm">
                  Treinos ao ar livre com propósito
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                  Desperte seu corpo, <br />
                  <span className="text-primary-500">Transforme sua energia</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Mais que treino, uma jornada de conexão onde corpo, mente e emoção se encontram no mesmo movimento. Venha despertar com a gente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/+5562994770125" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-500 text-primary-900 px-8 py-3 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-colors text-lg shadow">
                    Quero Despertar
                  </a>
                  <a href="#agenda" className="inline-block border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors text-lg shadow">
                    Ver Agenda
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#manifesto"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </a>
        </section>

        {/* Galeria horizontal de fotos */}
        <section className="w-full py-12 bg-black flex justify-center relative">
          {/* Overlay esquerda */}
          <div className="pointer-events-none absolute left-[-8px] top-0 h-full w-28 z-10 bg-gradient-to-r from-black/100 via-black/60 blur-sm"></div>
          {/* Overlay direita */}
          <div className="pointer-events-none absolute right-[-8px] top-0 h-full w-28 z-10 bg-gradient-to-l from-black/100 via-black/60 blur-sm"></div>
          <div className="max-w-6xl w-full overflow-x-auto scrollbar-hide relative">
            <div className="flex gap-6 items-center transition-all duration-500">
              {[
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.11.36 AM (1).jpeg",
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.11.36 AM.jpeg",
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.11.44 AM.jpeg",
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.45.28 AM (2).jpeg",
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.45.28 AM (1).jpeg",
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.45.28 AM.jpeg",
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.45.27 AM (1).jpeg",
                "/FOTOS/WhatsApp Image 2025-05-15 at 9.45.27 AM.jpeg",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Foto ${idx + 1}`}
                  className="h-40 w-auto rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:z-10"
                  style={{ minWidth: 160 }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section
          id="manifesto"
          ref={manifestoRef}
          className="py-20 bg-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-manifesto-pattern bg-cover opacity-10"></div>
          <div className="max-w-5xl mx-auto relative z-10 px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-bold text-center uppercase tracking-wide mb-8">
                <span className="inline-block bg-primary-500 rounded-xl px-6 py-2 text-primary-900 shadow">
                  Manifesto
                </span>
              </h2>
              <div className={`space-y-6 transition-all duration-1000 delay-300 ${manifestoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
                <p className="text-2xl md:text-3xl font-display font-semibold text-primary-600 text-center mb-8 italic">
                  "Acordar o corpo é fácil.<br />
                  Despertar o que te move é outra história."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-light text-center">
                  Na Desperta, acreditamos que a transformação real acontece quando corpo, mente e emoção se encontram no mesmo movimento. É sobre se conectar com você, com o agora e com quem está do seu lado.
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-light text-center">
                  A Desperta nasceu da união de duas potências: Bianca e Jana. Mulheres que vivem o movimento, entendem de corpo e sentem de verdade. A missão delas? Criar um espaço onde suar, sorrir e silenciar sejam parte da mesma jornada.
                </p>
                <p className="text-lg text-primary-600 font-medium text-center">
                  Somos mais que treino. Somos presença em estado bruto.
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-light text-center">
                  Cada treino é uma experiência. Cada encontro é uma expansão.<br />
                  Desperta não é só treino. É tribo. É pulso. É transformação real.
                </p>
              </div>
            </div>
            <img
              src="/capa 2 copiar 2.png"
              alt="Capa Desperta"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>

        {/* DNA Section */}
        <section id="dna" className="relative min-h-[20vh] md:min-h-[70vh] bg-black">
          <div className="absolute inset-0 bg-[url('/DD.png')] bg-[length:80%_auto] md:bg-[length:20%_auto] bg-center mb-8 bg-no-repeat opacity-20 animate-pulse"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
            <div className="flex items-center justify-center mt-10 mb-14">
              <img
                src="/simbolo.png"
                alt="Símbolo Desperta"
                className="w-6 md:w-12 mr-3"
              />
              <h2 className="text-2xl md:text-4xl font-bold text-center text-primary-500 tracking-widest m-0">
                <span className="text-primary-500">NOSSO DNA</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {dnaValues.map((value, idx) => (
                <div
                  key={idx}
                  className="w-full bg-white/20 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center text-white shadow-xl hover:scale-105 transition-transform"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 mt-1 tracking-wide uppercase text-primary-500">{value.title}</h3>
                  <p className="text-base text-zinc-200 leading-relaxed font-light">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-24">
              <img
                src="/logo_horizontal.png"
                alt="Logo Desperta"
                className="w-[240px] md:w-[340px] lg:w-[420px] drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section id="agenda" className="py-20 bg-primary-600 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center mb-10">
              <Calendar className="w-10 h-10 mr-4" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">
                Agenda de Treinos & Experiências
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  date: '27/05',
                  time: '07:00',
                  title: 'FUNCIONAL',
                  location: 'Ibirapuera',
                  type: 'funcional',
                },
                {
                  date: '30/05',
                  time: '17:00',
                  title: 'YOGA Sunset',
                  location: 'Praça Pôr do Sol',
                  type: 'yoga',
                },
                {
                  date: '02/06',
                  time: '08:00',
                  title: 'Desperta EXPERIENCE',
                  location: 'Local surpresa',
                  type: 'experience',
                },
                {
                  date: '09/06',
                  time: '06:30',
                  title: 'Trilha Cantareira + Flow',
                  location: 'Parque Estadual da Cantareira',
                  type: 'trilha',
                },
                {
                  date: '14/06',
                  time: '19:00',
                  title: 'Desperta com Mantra ao Vivo',
                  location: 'Morumbi',
                  type: 'mantra',
                },
              ].map((event, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row md:items-center justify-between bg-white/10 rounded-xl p-6 shadow transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <span className="text-2xl font-bold text-primary-200">{event.date}</span>
                    <span className="flex items-center gap-1 text-lg font-medium text-black">
                      <Clock className="w-4 h-4 text-black" />
                      {event.time}
                    </span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="block text-lg font-semibold">{event.title}</span>
                    <span className="block text-sm text-primary-100">{event.location}</span>
                  </div>
                  <span className="mt-2 md:mt-0 text-xs uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full font-bold border border-white shadow">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="#contato"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-700 hover:text-white transition-colors text-lg shadow"
              >
                Garanta seu lugar nos próximos treinos
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Vamos Despertar Juntos?
            </h2>
            <p className="text-gray-700 mb-8">
              Entre em contato para conhecer nossas trilhas e começar sua jornada.
            </p>
            <a 
              href="https://wa.me/5562994770125" 
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-black text-white pt-16 pb-8 mt-10 overflow-hidden">
        {/* Imagem de fundo */}
        <img
          src="/chao.png"
          alt="Chão Desperta"
          className="absolute bottom-0 left-0 w-full object-cover pointer-events-none select-none"
          style={{ zIndex: 1, minHeight: 80, maxHeight: 200 }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">
            Desperta é mais que treino. É movimento com propósito.<br />
            Corpo. Mente. Emoção. Juntos.
          </p>
          <p className="text-sm text-zinc-300 mb-2">
            © 2025 Desperta. Todos os direitos reservados.
          </p>
          <p className="text-sm text-zinc-400">
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/flowoff.mkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-500"
            >
              @flowoff.mkt
            </a>
            {' '}| Instagram:{' '}
            <a
              href="https://www.instagram.com/desperta.sol"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-500"
            >
              @desperta.sol
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;