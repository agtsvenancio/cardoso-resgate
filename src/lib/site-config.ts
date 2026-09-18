export const siteConfig: { name: string; shortName: string; whatsapp: string; phone: string; email: string; address: string; serviceArea: string } = {
  name: "Auto Resgate Cardoso",
  shortName: "Cardoso",
  whatsapp: "",
  phone: "",
  email: "",
  address: "",
  serviceArea: "São Paulo — SP",
} as const;

export const whatsappMessages = {
  default: "Olá! Preciso de ajuda da Auto Resgate Cardoso.",
  towing: "Olá! Preciso solicitar um guincho.",
  battery: "Olá! Preciso de uma bateria para meu veículo.",
  parts: "Olá! Gostaria de consultar uma peça/acessório para guincho.",
  partner: "Olá! Tenho interesse em ser parceiro da Auto Resgate Cardoso.",
  contact: "Olá! Gostaria de falar com a Auto Resgate Cardoso.",
} as const;

export type WhatsAppMessage = keyof typeof whatsappMessages;

export function getWhatsAppUrl(message: WhatsAppMessage = "default") {
  if (!siteConfig.whatsapp) return null;
  const digits = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(whatsappMessages[message])}`;
}
