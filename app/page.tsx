"use client";

import { useEffect, useState } from "react";

const media = (name: string) => `${import.meta.env.BASE_URL}midias/${name}`;
const documentUrl = (name: string) => `${import.meta.env.BASE_URL}documentos/${name}`;

type Collection = {
  title: string;
  subtitle: string;
  cover: string;
  images: string[];
};

const sequence = (prefix: string, count: number, suffix = ".jpeg") =>
  Array.from({ length: count }, (_, index) => `${prefix}${index + 1}${suffix}`);

const collections: Collection[] = [
  {
    title: "Oficina de Férias",
    subtitle: "Janeiro de 2026 · 11 fotos",
    cover: "oficina-de-ferias-janeiro.jpeg",
    images: [
      "oficina-de-ferias-janeiro.jpeg",
      ...sequence("", 10).map((name) => name.replace(".jpeg", "-janeiro.jpeg")),
    ],
  },
  {
    title: "Preparação para os 25 anos",
    subtitle: "Fevereiro de 2026 · 6 fotos",
    cover: "1-fevereiro-ensaio-de-preparacao-aniversario.jpeg",
    images: [
      "1-fevereiro-ensaio-de-preparacao-aniversario.jpeg",
      ...sequence("", 6).slice(1).map((name) => name.replace(".jpeg", "-fevereiro.jpeg")),
    ],
  },
  {
    title: "Concerto de 25 anos",
    subtitle: "Março de 2026 · 11 fotos",
    cover: "Foto 5 - Março.jpeg",
    images: [
      "março-concerto-de-25-anos.jpeg",
      "Foto 1 - Coral Infanto Juvenil - Março.jpeg",
      "Foto 2 - Banda Escola - Março.jpeg",
      "Foto 3 - Março.jpeg",
      "Foto 4 - Março.jpeg",
      "Foto 5 - Março.jpeg",
      "Foto 6 - Março.jpeg",
      "Foto 7 - Março.jpeg",
      "Foto 8 - março.jpeg",
      "Foto 9 - Março.jpeg",
      "Foto 10 - Março.jpeg",
    ],
  },
  {
    title: "Encontro de Coros Guaçuanos",
    subtitle: "Abril de 2026 · 5 fotos",
    cover: "ABRIL 2026 CORAL INFANTO-JUVENIL NO ENCONTRO DE COROS GUAÇUANOS.jpeg",
    images: [
      "ABRIL 2026 CORAL INFANTO-JUVENIL NO ENCONTRO DE COROS GUAÇUANOS.jpeg",
      ...sequence("Foto ", 4).map((name) => name.replace(".jpeg", " - Abril.jpeg")),
    ],
  },
  {
    title: "Banda na Escola — Abril",
    subtitle: "28/04/2026 · 5 fotos",
    cover: "abril Projeto Banda na Escola.jpeg",
    images: [
      "abril Projeto Banda na Escola.jpeg",
      "Foto 5 - Abril.jpeg",
      "Foto 6 - Abril.jpeg",
      "Foto 7 - Abril.jpeg",
      "Foto 8 - Abril.jpeg",
    ],
  },
  {
    title: "Banda na Escola — Maio",
    subtitle: "12/05/2026 · 7 fotos",
    cover: "maio banda na escola .jpeg",
    images: [
      "maio banda na escola .jpeg",
      ...sequence("Foto ", 6).map((name) => name.replace(".jpeg", " - Maio.jpeg")),
    ],
  },
  {
    title: "Banda na Escola — Junho",
    subtitle: "23/06/2026 · 7 fotos",
    cover: "junho banda na escola .jpeg",
    images: [
      "junho banda na escola .jpeg",
      ...sequence("Foto ", 6).map((name) => name.replace(".jpeg", " - Junho.jpeg")),
    ],
  },
  {
    title: "Eventos de Julho",
    subtitle: "Julho de 2026 · 1 imagem",
    cover: "julho 2026.jpeg",
    images: ["julho 2026.jpeg"],
  },
  {
    title: "Recital de Flauta Doce",
    subtitle: "Musicalização · 5 fotos",
    cover: "Recital de Musicalização com Flauta doce 1.jpeg",
    images: sequence("Recital de Musicalização com Flauta doce ", 5),
  },
  {
    title: "Recital de Coral",
    subtitle: "Infantojuvenil · 3 fotos",
    cover: "Recital de Coral Infanto-Juvenil 1.jpeg",
    images: sequence("Recital de Coral Infanto-Juvenil ", 3),
  },
  {
    title: "Recital de Flauta Transversal",
    subtitle: "Prática instrumental · 5 fotos",
    cover: "Recital de Flauta Transversal 1.jpeg",
    images: sequence("Recital de Flauta Transversal ", 5),
  },
  {
    title: "Recital de Clarinetes",
    subtitle: "Prática instrumental · 4 fotos",
    cover: "Recital de Clarinetes 1.jpeg",
    images: [
      "Recital de Clarinetes 1.jpeg",
      "Recital de Clarinetes 2.jpeg",
      "Recital de clarinete 1.jpeg",
      "Recital de clarinete 2.jpeg",
    ],
  },
  {
    title: "Recital de Saxofones",
    subtitle: "Prática instrumental · 5 fotos",
    cover: "Recital de Saxofones 1.jpeg",
    images: sequence("Recital de Saxofones ", 5),
  },
  {
    title: "Recital dos Metais",
    subtitle: "Prática instrumental · 8 fotos",
    cover: "Recital dos Metais 1.jpeg",
    images: sequence("Recital dos Metais ", 8),
  },
  {
    title: "Recital de Percussão",
    subtitle: "Prática instrumental · 6 fotos",
    cover: "Recital de Percussão 1.jpeg",
    images: sequence("Recital de Percussão ", 6),
  },
  {
    title: "Banda Escola no CAIC",
    subtitle: "Apresentação no CAIC · 8 fotos",
    cover: "banda-escola-caic-cartaz.png",
    images: [
      "banda-escola-caic-cartaz.png",
      "banda-escola-caic-01.png",
      "banda-escola-caic-02.png",
      "banda-escola-caic-03.png",
      "banda-escola-caic-04.png",
      "banda-escola-caic-05.png",
      "banda-escola-caic-06.png",
      "banda-escola-caic-07.png",
    ],
  },
];

const documents = [
  {
    category: "Estatuto",
    title: "Estatuto Social",
    file: "Estatuto social.pdf",
    meta: "Documento institucional",
  },
  {
    category: "Ata",
    title: "Balanço e posse da nova diretoria",
    file: "ATA - BALANÇO E POSSE NOVA DIRETORIA.pdf",
    meta: "Ata administrativa",
  },
  {
    category: "Diretoria",
    title: "Certidão de Dirigentes OSC",
    file: "15 - CERTIDÃO DIRIGENTES OSC.pdf",
    meta: "Certidão vigente",
  },
  {
    category: "Prestação de Contas",
    title: "Termo de Colaboração 02/2023",
    file: "01 - TERMO DE COLABORAÇÃO 02 2023.pdf",
    meta: "Parceria pública · 2023",
  },
  {
    category: "Prestação de Contas",
    title: "Termo de Aditamento 01/2024",
    file: "02 - TERMO DE ADITAMENTO 01 2024.pdf",
    meta: "Parceria pública · 2024",
  },
  {
    category: "Prestação de Contas",
    title: "Termo de Aditamento 02/2024",
    file: "03 - TERMO DE ADITAMENTO 02 2024.pdf",
    meta: "Parceria pública · 2024",
  },
  {
    category: "Emendas Parlamentares",
    title: "Termo de Aditamento 03/2025",
    file: "04 - TERMO DE ADITAMENTO 03 2025.pdf",
    meta: "Parceria pública · 2025",
  },
  {
    category: "Emendas Parlamentares",
    title: "Termo de Fomento 21/2024",
    file: "TERMO DE FOMENTO 21-2024 13814839-2024061715481446950051Q82W.pdf",
    meta: "Fomento à atividade cultural · 2024",
  },
  {
    category: "Certificados e Selos",
    title: "Certificado Ponto de Cultura",
    file: "CERTIFICADO PONTO DE CULTURA.pdf",
    meta: "Reconhecimento cultural",
  },
  {
    category: "Certificados e Selos",
    title: "Lei de Utilidade Pública",
    file: "16 - LEI DE UTILIDADE PÚBLICA.pdf",
    meta: "Título concedido em 2005",
  },
];

const activities = [
  ["01", "Musicalização com Flauta doce", "Oficina coletiva de iniciação musical que desenvolve escuta, ritmo, coordenação, leitura musical, prática de flauta doce e convivência em grupo para crianças e adolescentes."],
  ["02", "Coral infantojuvenil", "Formação vocal, repertório coletivo e apresentações que fortalecem a confiança e o sentimento de pertencimento."],
  ["03", "Prática instrumental", "Orientação teórica e prática em madeiras, metais e percussão, com acompanhamento de educadores musicais."],
  ["04", "Banda Escola", "Etapa de formação para novos instrumentistas, com ensaios quinzenais e preparação para integrar a banda principal."],
  ["05", "Banda Musical", "A prática em grupo tem como objetivo desenvolver a execução musical coletiva, promovendo a integração entre os músicos, o aperfeiçoamento técnico e a interpretação do repertório para banda musical. Durante os ensaios, são trabalhados aspectos como afinação, ritmo, equilíbrio sonoro, leitura musical, percepção auditiva, disciplina, trabalho em equipe e preparação para apresentações públicas. A atividade contribui para a formação artística, cultural e social dos participantes, fortalecendo valores como responsabilidade, cooperação e compromisso com a prática musical."],
  ["06", "Concertos e recitais", "Apresentações em Mogi Guaçu e outras cidades, aproximando a comunidade da música instrumental e coral."],
];

export default function Home() {
  const isTransparencyPage = window.location.pathname.includes("/transparencia");
  const homeUrl = import.meta.env.BASE_URL;
  const transparencyUrl = `${import.meta.env.BASE_URL}transparencia/`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCollection, setActiveCollection] = useState<Collection | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [expandedDocument, setExpandedDocument] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeCollection ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCollection]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCollection(null);
      }
      if (!activeCollection) return;
      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % activeCollection.images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((current) => (current - 1 + activeCollection.images.length) % activeCollection.images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeCollection]);

  const openCollection = (collection: Collection) => {
    setActiveImage(0);
    setActiveCollection(collection);
  };

  return (
    <main>
      <header className="site-header" id="inicio">
        <a className="brand" href={homeUrl} aria-label="Banda Santa Terezinha — início">
          <img src={media("logo.png")} alt="" />
          <span>
            <b>Banda Santa Terezinha</b>
            <small>Mogi Guaçu · desde 2001</small>
          </span>
        </a>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Navegação principal">
          <a href={`${homeUrl}#historia`} onClick={() => setMenuOpen(false)}>História</a>
          <a href={`${homeUrl}#atividades`} onClick={() => setMenuOpen(false)}>Atividades</a>
          <a href={`${homeUrl}#acervo`} onClick={() => setMenuOpen(false)}>Acervo</a>
          <a href={transparencyUrl} onClick={() => setMenuOpen(false)}>Transparência</a>
          <a className="nav-contact" href={`${homeUrl}#contato`} onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </header>

      {!isTransparencyPage && (<>
      <section className="hero" id="inicio">
        <img className="hero-image" src={media("foto-banner.jpeg")} alt="Músicos da Banda Santa Terezinha em apresentação" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Música que transforma · Mogi Guaçu</p>
          <h1>Há 25 anos,<br />a música encontra<br /><em>novos caminhos.</em></h1>
          <p className="hero-copy">Formação musical gratuita, convivência e cultura para crianças, jovens e toda a comunidade.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#historia">Conheça nossa história <span>↘</span></a>
            <a className="text-link light-link" href="#acervo">Explore o acervo <span>→</span></a>
          </div>
        </div>
        <img className="anniversary-seal" src={media("25-anos.jpeg")} alt="Banda Santa Terezinha — 25 anos" />
        <div className="hero-index"><span>2001</span><i /><span>2026</span></div>
      </section>

      <section className="intro section-shell">
        <div className="intro-kicker">
          <span className="section-number">01</span>
          <p className="eyebrow">Nossa razão de existir</p>
        </div>
        <div className="intro-statement">
          <h2>Mais do que ensinar música, formamos vínculos, ampliamos horizontes e revelamos <em>novos talentos.</em></h2>
          <div className="stats">
            <div><strong>75</strong><span>alunos atendidos/mês</span></div>
            <div><strong>30</strong><span>músicos na banda</span></div>
            <div><strong>25</strong><span>anos de história</span></div>
          </div>
        </div>
      </section>

      <section className="history" id="historia">
        <div className="history-image">
          <img src={media("Foto 5 - Março.jpeg")} alt="Banda Santa Terezinha durante o concerto comemorativo de 25 anos" />
          <span>Concerto de 25 anos · 2026</span>
        </div>
        <div className="history-content">
          <div className="section-heading">
            <span className="section-number">02</span>
            <p className="eyebrow">Nossa história</p>
          </div>
          <h2>Uma ideia feita de música e cuidado.</h2>
          <p className="lead">A Banda Santa Terezinha nasceu em 30 de março de 2001, fundada pelo maestro Sérgio José Manera com o apoio do ex-prefeito Hélio Miachon Bueno (in memoriam) e de Rosely E. R. Pereira de Aguiar, primeira presidente da instituição.</p>
          <p>Desde o início, suas atividades estão centralizadas no CAIC do Jardim Santa Terezinha II, na zona leste de Mogi Guaçu. O projeto surgiu para acolher crianças e adolescentes em situação de vulnerabilidade e oferecer, por meio da música, autoestima, disciplina, bem-estar e socialização.</p>
          <p>Em 4 de outubro de 2005, recebeu o título de Utilidade Pública por sua atuação sociocultural e educacional. Em março de 2011, iniciou parceria com a Prefeitura Municipal de Mogi Guaçu, por intermédio da Secretaria Municipal de Cultura.</p>
          <blockquote>“A Banda Santa Terezinha se tornou referência musical e social na preparação e formação de músicos e novos talentos.”<cite>— Maestro Sérgio Manera</cite></blockquote>
        </div>
      </section>

      <section className="activities section-shell" id="atividades">
        <div className="section-topline">
          <div className="section-heading">
            <span className="section-number">03</span>
            <p className="eyebrow">O que fazemos</p>
          </div>
          <p>Da iniciação musical ao palco, cada atividade é uma oportunidade de aprender, conviver e se expressar.</p>
        </div>
        <h2>Educação musical<br />em <em>movimento.</em></h2>
        <div className="activity-grid">
          {activities.map(([number, title, copy]) => (
            <article className="activity-card" key={title}>
              <span>{number}</span>
              <div className="activity-icon" aria-hidden="true">♪</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="archive" id="acervo">
        <div className="archive-heading section-shell">
          <div>
            <div className="section-heading">
              <span className="section-number">04</span>
              <p className="eyebrow">Memórias em imagens</p>
            </div>
            <h2>Nosso acervo,<br /><em>nossa história.</em></h2>
          </div>
          <p>Entre em uma coleção para navegar pelas fotografias de cada atividade, concerto ou recital.</p>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <button className="collection-card" key={collection.title} onClick={() => openCollection(collection)}>
              <img src={media(collection.cover)} alt="" loading="lazy" />
              <span className="collection-shade" />
              <span className="collection-text">
                <small>{collection.subtitle}</small>
                <strong>{collection.title}</strong>
                <i>Ver coleção <b>↗</b></i>
              </span>
            </button>
          ))}
        </div>
      </section>
      </>)}

      {isTransparencyPage && (<section className="transparency section-shell transparency-page" id="transparencia">
        <div className="section-topline">
          <div>
            <div className="section-heading">
              <span className="section-number">05</span>
              <p className="eyebrow">Compromisso público</p>
            </div>
            <h2>Transparência<br /><em>em cada nota.</em></h2>
          </div>
          <p>Consulte os documentos institucionais, administrativos e de prestação de contas. Todos podem ser visualizados online ou baixados.</p>
        </div>
        <div className="transparency-notice">
          <span>Informativo institucional</span>
          <p>&quot;A Banda Santa Terezinha (CNPJ: 04.404.840/0001-70) informa ao público, aos seus parceiros e à comunidade que encontra-se atualmente em processo de captação de recursos junto ao Ministério da Cultura, viabilizado por meio da Emenda Parlamentar nº 15270007. Essa iniciativa reforça nosso compromisso com a transparência institucional e tem como objetivo fundamental fortalecer nossas atividades culturais e musicais.&quot;</p>
        </div>
        <div className="document-list">
          {documents.map((document, index) => {
            const isExpanded = expandedDocument === document.file;
            return (
              <div className={`document-item${isExpanded ? " expanded" : ""}`} key={document.file}>
                <article className="document-row">
                  <span className="doc-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="doc-main">
                    <small>{document.category}</small>
                    <h3>{document.title}</h3>
                    <p>{document.meta}</p>
                  </div>
                  <div className="doc-actions">
                    <button
                      onClick={() => setExpandedDocument(isExpanded ? null : document.file)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Ocultar" : "Ver na página"} <span>{isExpanded ? "↑" : "↓"}</span>
                    </button>
                    <a href={documentUrl(document.file)} target="_blank" rel="noreferrer">Abrir PDF <span>↗</span></a>
                  </div>
                </article>
                {isExpanded && (
                  <div className="document-inline-preview">
                    <iframe src={documentUrl(document.file)} title={`Visualização de ${document.title}`} />
                    <p>
                      Se o PDF não aparecer neste dispositivo, use
                      {" "}<a href={documentUrl(document.file)} target="_blank" rel="noreferrer">Abrir PDF</a>.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>)}

      {!isTransparencyPage && (<section className="contact" id="contato">
        <div className="contact-copy">
          <div className="section-heading">
            <span className="section-number">06</span>
            <p className="eyebrow light">Fale com a gente</p>
          </div>
          <h2>Vamos fazer a<br />música <em>acontecer?</em></h2>
          <p>Informações sobre aulas, apresentações, parcerias e como apoiar nosso trabalho.</p>
          <a className="button button-gold" href="https://wa.me/5519993507180" target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span>↗</span></a>
        </div>
        <div className="contact-details">
          <div>
            <small>WhatsApp</small>
            <a href="https://wa.me/5519993507180" target="_blank" rel="noreferrer">(19) 99350-7180</a>
          </div>
          <div>
            <small>E-mail</small>
            <a href="mailto:bandamusicalsantaterezinha@gmail.com">bandamusicalsantaterezinha@gmail.com</a>
          </div>
          <div>
            <small>Sede</small>
            <a href="https://maps.google.com/?q=Rua+José+Jaime+de+Campos+30+Mogi+Guaçu+SP" target="_blank" rel="noreferrer">Rua José Jaime de Campos, 30<br />Jardim Santa Terezinha II<br />Mogi Guaçu — SP</a>
          </div>
          <div className="social-links">
            <small>Redes sociais</small>
            <a href="https://www.instagram.com/bandamusicalsantaterezinha" target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
            <a href="https://www.facebook.com/share/1BdbBbjuWu/" target="_blank" rel="noreferrer">Facebook <span>↗</span></a>
          </div>
        </div>
      </section>)}

      <footer>
        <div className="footer-brand">
          <img src={media("logo.png")} alt="" />
          <div><strong>Banda Santa Terezinha</strong><small>Associação Musical · Mogi Guaçu</small></div>
        </div>
        <p>© 2026 Banda Santa Terezinha. Música, educação e transformação social.</p>
        <a className="footer-credit" href="https://bqsystems.com.br" target="_blank" rel="noreferrer" aria-label="Site desenvolvido por BQ Systems">
          <span>Desenvolvido por</span>
          <img src={media("logobq.png")} alt="BQ Systems" />
        </a>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>

      {activeCollection && (
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={activeCollection.title}>
          <button className="modal-close" onClick={() => setActiveCollection(null)} aria-label="Fechar galeria">×</button>
          <div className="gallery-stage">
            <button className="gallery-nav prev" onClick={() => setActiveImage((activeImage - 1 + activeCollection.images.length) % activeCollection.images.length)} aria-label="Foto anterior">←</button>
            <img src={media(activeCollection.images[activeImage])} alt={`${activeCollection.title}, foto ${activeImage + 1}`} />
            <button className="gallery-nav next" onClick={() => setActiveImage((activeImage + 1) % activeCollection.images.length)} aria-label="Próxima foto">→</button>
          </div>
          <div className="gallery-info">
            <div><small>Coleção</small><h3>{activeCollection.title}</h3></div>
            <span>{String(activeImage + 1).padStart(2, "0")} / {String(activeCollection.images.length).padStart(2, "0")}</span>
          </div>
          <div className="thumbnail-strip">
            {activeCollection.images.map((image, index) => (
              <button className={index === activeImage ? "active" : ""} key={`${image}-${index}`} onClick={() => setActiveImage(index)} aria-label={`Ver foto ${index + 1}`}>
                <img src={media(image)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

    </main>
  );
}
