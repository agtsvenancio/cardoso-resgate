import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, MapPin, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { getWhatsAppUrl, type WhatsAppMessage } from "@/lib/site-config";
import { WhatsAppLink } from "./site-shell";

export function Breadcrumb({ current }: { current: string }) { return <nav aria-label="Breadcrumb" className="breadcrumb"><Link to="/">Início</Link><span>/</span><span aria-current="page">{current}</span></nav>; }

export function PageHero({ eyebrow, title, text, message, cta, image, children }: { eyebrow: string; title: string; text: string; message: WhatsAppMessage; cta: string; image?: string; children?: React.ReactNode }) {
  return <section className={`page-hero ${image ? "page-hero-image" : ""}`} style={image ? { "--hero-image": `url(${image})` } as React.CSSProperties : undefined}><div className="shell page-hero-inner"><Breadcrumb current={eyebrow}/><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p><div className="hero-actions"><WhatsAppLink message={message}><MessageCircle /> {cta}</WhatsAppLink><Link to="/contato" className="action action-outline">Falar com especialista</Link></div><div className="trust-row"><span><Clock3/> Atendimento 24 horas</span><span><MapPin/> São Paulo — SP</span></div>{children}</div></div></section>;
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) { return <div className={`section-heading ${light ? "light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>; }

export function ServiceCard({ icon: Icon, title, text, to, cta }: { icon: React.ElementType; title: string; text: string; to: string; cta: string }) { return <article className="service-card"><div className="card-icon"><Icon /></div><h3>{title}</h3><p>{text}</p><Link to={to} className="text-link">{cta}<ArrowRight /></Link></article>; }

export function CTASection({ title = "Precisa de ajuda? Fale agora com a Auto Resgate Cardoso.", text, message = "default", cta = "Chamar no WhatsApp" }: { title?: string; text?: string; message?: WhatsAppMessage; cta?: string }) { return <section className="cta-band"><div className="shell cta-band-inner"><div><span className="eyebrow">Atendimento direto</span><h2>{title}</h2>{text && <p>{text}</p>}</div><WhatsAppLink message={message}><MessageCircle /> {cta}</WhatsAppLink></div></section>; }

export function FAQ({ items }: { items: [string, string][] }) { return <div className="faq-list">{items.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>; }

export function LeadForm({ kind, fields, message }: { kind: string; fields: { name: string; label: string; type?: string; options?: string[]; required?: boolean; placeholder?: string }[]; message: WhatsAppMessage }) {
  const [status, setStatus] = useState<"idle"|"loading"|"done">("idle");
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setStatus("loading"); const url = getWhatsAppUrl(message); setTimeout(() => { setStatus("done"); if (url) window.open(url, "_blank", "noopener,noreferrer"); }, 500); };
  return <form className="lead-form" onSubmit={submit} aria-label={kind}><div className="form-grid">{fields.map(f => <label key={f.name} className={f.type === "textarea" ? "full" : ""}><span>{f.label}{f.required && " *"}</span>{f.options ? <select name={f.name} required={f.required} defaultValue=""><option value="" disabled>Selecione</option>{f.options.map(o => <option key={o}>{o}</option>)}</select> : f.type === "textarea" ? <textarea name={f.name} required={f.required} placeholder={f.placeholder} rows={4}/> : <input name={f.name} type={f.type || "text"} required={f.required} placeholder={f.placeholder}/>}</label>)}</div><button className="action action-primary" type="submit" disabled={status === "loading"}>{status === "loading" ? "Preparando..." : kind}</button>{status === "done" && <p className="form-status" role="status"><Check /> Informações preenchidas. {getWhatsAppUrl(message) ? "Conclua o contato no WhatsApp." : "O canal de WhatsApp será liberado assim que o número for configurado."}</p>}</form>;
}
