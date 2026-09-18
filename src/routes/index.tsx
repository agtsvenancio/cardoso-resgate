import { createFileRoute, Link } from "@tanstack/react-router";
import { BatteryCharging, CarFront, Wrench, Truck, PackageSearch, Users, Check, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-guincho.jpg";
import battery from "@/assets/socorro-bateria.jpg";
import { CTASection, SectionHeading, ServiceCard } from "@/components/page-parts";
import { WhatsAppLink } from "@/components/site-shell";

export const Route = createFileRoute("/")({
 head: () => ({ meta: [
  { title: "Guincho 24 Horas em São Paulo | Auto Resgate Cardoso" },
  { name:"description", content:"Guincho 24 horas, socorro mecânico, baterias e peças para guincho em São Paulo. Fale com a Auto Resgate Cardoso." },
  { property:"og:title", content:"Guincho 24 Horas em São Paulo | Auto Resgate Cardoso" },
  { property:"og:description", content:"Assistência automotiva 24 horas, baterias e soluções para guincho em São Paulo." },
  { property:"og:type", content:"website" }, { property:"og:url", content:"/" }, { name:"twitter:card", content:"summary_large_image" }
 ], links:[{rel:"canonical",href:"/"}], scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness",name:"Auto Resgate Cardoso",areaServed:{"@type":"State",name:"São Paulo"},openingHours:"Mo-Su 00:00-23:59"})}] }), component: HomePage
});
const services = [
 [Truck,"Guincho 24h","Remoção e transporte de veículos com atendimento durante 24 horas.","/guincho-24h","Solicitar guincho"],
 [BatteryCharging,"Socorro de bateria","Atendimento quando o veículo fica sem bateria ou não consegue ligar.","/baterias","Pedir socorro"],
 [CarFront,"Venda de baterias","Baterias automotivas para diversos veículos, com consulta de disponibilidade.","/baterias","Comprar bateria"],
 [Wrench,"Socorro mecânico","Orientação e assistência para problemas que impedem o veículo de continuar.","/contato","Solicitar atendimento"],
 [PackageSearch,"Peças para guincho","Peças, componentes e acessórios para equipamentos e operações de remoção.","/pecas-acessorios-guincho","Ver peças"],
 [Users,"Seja nosso parceiro","Uma rede para guincheiros, mecânicos, taxistas e prestadores automotivos.","/seja-nosso-parceiro","Quero ser parceiro"],
] as const;
function HomePage(){return <>
 <section className="home-hero"><img className="home-hero-bg" src={hero} alt="Guincho plataforma prestando atendimento em uma via de São Paulo" width="1920" height="1088" fetchPriority="high"/><div className="shell hero-copy"><span className="eyebrow">Auto Resgate Cardoso</span><h1>Guincho 24 horas em São Paulo</h1><p>Precisa de guincho, socorro de bateria ou assistência para seu veículo? Conte com atendimento direto e suporte especializado.</p><div className="hero-actions"><WhatsAppLink><MessageCircle/> Chamar no WhatsApp</WhatsAppLink><WhatsAppLink message="towing" variant="outline"><Truck/> Solicitar guincho</WhatsAppLink></div><div className="trust-row"><span>Atendimento 24 horas</span><span>São Paulo — SP</span></div></div></section>
 <section className="section"><div className="shell"><SectionHeading eyebrow="Soluções automotivas" title="Ajuda certa para cada situação" text="Da emergência na rua ao equipamento para sua operação, encontre rapidamente o caminho que precisa."/><div className="cards-grid">{services.map(([icon,title,text,to,cta])=><ServiceCard key={title} icon={icon} title={title} text={text} to={to} cta={cta}/>)}</div></div></section>
 <section className="section section-dark"><div className="shell split"><div><SectionHeading light eyebrow="Guincho 24 horas" title="Seu veículo parou? A gente ajuda você a seguir." text="Atendimento em São Paulo para remoção e transporte de veículos em diferentes situações."/><ul className="check-list">{["Pane mecânica ou elétrica","Veículo que não liga","Acidente ou local de risco","Pneu furado sem possibilidade de continuar","Transporte e remoção de veículos"].map(x=><li key={x}><Check/>{x}</li>)}</ul><WhatsAppLink message="towing"><Truck/> Chamar guincho agora</WhatsAppLink></div><div className="stats-strip"><div><strong>24 horas</strong><span>Disponibilidade</span></div><div><strong>São Paulo</strong><span>Área principal</span></div><div><strong>Direto</strong><span>Contato simples</span></div><div><strong>Seguro</strong><span>Orientação no chamado</span></div></div></div></section>
 <section className="section"><div className="shell split"><img src={battery} alt="Profissional realizando socorro de bateria em veículo" loading="lazy" width="1280" height="960" className="feature-image"/><div><SectionHeading eyebrow="Baterias" title="Venda, entrega e socorro de bateria" text="Seu carro ficou sem bateria? Consulte a opção adequada para seu veículo ou solicite atendimento."/><ul className="check-list"><li><Check/>Venda de baterias automotivas</li><li><Check/>Socorro de bateria em São Paulo</li><li><Check/>Entrega conforme disponibilidade</li><li><Check/>Vendas para todo o estado de São Paulo</li></ul><WhatsAppLink message="battery"><BatteryCharging/> Quero minha bateria</WhatsAppLink></div></div></section>
 <section className="section section-alt"><div className="shell split"><div><SectionHeading eyebrow="Para profissionais" title="Peças e acessórios para sua operação" text="Estrutura preparada para receber componentes, reposição, equipamentos de amarração, itens hidráulicos e acessórios para plataforma."/><p>Consulte a equipe para verificar os itens disponíveis. Enviamos para todo o estado de São Paulo.</p><Link to="/pecas-acessorios-guincho" className="action action-primary">Consultar peças</Link></div><div><SectionHeading eyebrow="Rede de atendimento" title="Trabalhe em parceria com a Cardoso" text="Guincheiros, mecânicos, taxistas e outros prestadores podem cadastrar sua região e serviço para oportunidades compatíveis."/><Link to="/seja-nosso-parceiro" className="action action-outline">Quero ser parceiro</Link></div></div></section>
 <CTASection/>
 </>}
