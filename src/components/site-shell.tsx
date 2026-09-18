import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X, Clock3, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/cardoso-logo.png.asset.json";
import { getWhatsAppUrl, siteConfig, type WhatsAppMessage } from "@/lib/site-config";

const nav = [
  ["/", "Início"],
  ["/guincho-24h", "Guincho 24h"],
  ["/baterias", "Baterias"],
  ["/pecas-acessorios-guincho", "Peças e Acessórios"],
  ["/seja-nosso-parceiro", "Seja Nosso Parceiro"],
  ["/contato", "Contato"],
] as const;

export function WhatsAppLink({ message = "default", children, variant = "primary", className = "" }: { message?: WhatsAppMessage; children: React.ReactNode; variant?: "primary" | "outline" | "ghost"; className?: string }) {
  const url = getWhatsAppUrl(message);
  const classes = `action action-${variant} ${className}`;
  if (!url) return <Link to="/contato" search={{ canal: "whatsapp" }} className={classes}>{children}</Link>;
  return <a href={url} target="_blank" rel="noreferrer" className={classes}>{children}</a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <header className="site-header">
      <div className="topline"><div className="shell topline-inner"><span><Clock3 /> Atendimento 24 horas</span><span><MapPin /> São Paulo — SP</span></div></div>
      <div className="shell nav-row">
        <Link to="/" aria-label="Auto Resgate Cardoso — Início" className="brand"><img src={logo.url} alt="Auto Resgate Cardoso" width="220" height="86" /></Link>
        <nav aria-label="Navegação principal" className="desktop-nav">{nav.map(([to, label]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "active" }}>{label}</Link>)}</nav>
        <WhatsAppLink className="header-cta"><MessageCircle /> WhatsApp</WhatsAppLink>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav aria-label="Navegação móvel" className="mobile-nav">{nav.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}<WhatsAppLink><MessageCircle /> Chamar no WhatsApp</WhatsAppLink></nav>}
    </header>
  </>;
}

function pathMessage(path: string): WhatsAppMessage {
  if (path.includes("guincho")) return "towing";
  if (path.includes("baterias")) return "battery";
  if (path.includes("pecas")) return "parts";
  if (path.includes("parceiro")) return "partner";
  if (path.includes("contato")) return "contact";
  return "default";
}

export function FloatingWhatsApp() {
  const path = useRouterState({ select: s => s.location.pathname });
  return <WhatsAppLink message={pathMessage(path)} className="floating-whatsapp"><MessageCircle /><span>WhatsApp</span></WhatsAppLink>;
}

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-grid">
    <div><img src={logo.url} alt="Auto Resgate Cardoso" width="220" height="86" className="footer-logo"/><p>Assistência automotiva, guincho, baterias e soluções para profissionais em São Paulo.</p><div className="footer-status"><Clock3 /> Atendimento 24 horas</div></div>
    <div><h2>Serviços</h2><Link to="/guincho-24h">Guincho 24h</Link><Link to="/baterias">Baterias</Link><Link to="/pecas-acessorios-guincho">Peças e acessórios</Link></div>
    <div><h2>Auto Resgate Cardoso</h2><Link to="/seja-nosso-parceiro">Seja nosso parceiro</Link><Link to="/contato">Contato</Link><span>{siteConfig.serviceArea}</span></div>
    <div><h2>Precisa de ajuda?</h2><WhatsAppLink><MessageCircle /> Chamar agora</WhatsAppLink>{siteConfig.phone && <a href={`tel:${siteConfig.phone}`}><Phone /> {siteConfig.phone}</a>}</div>
  </div><div className="shell footer-bottom">© {new Date().getFullYear()} Auto Resgate Cardoso. Todos os direitos reservados.</div></footer>;
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header/><main>{children}</main><Footer/><FloatingWhatsApp/></>; }
