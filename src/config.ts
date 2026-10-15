export const WHATSAPP_URL = 'https://wa.me/5577998720600'
export const INSTAGRAM_URL = 'https://instagram.com/guistyle_'

// Dados do Google Maps (Gui Style).
export const ADDRESS = 'R. Ten. Amarilio Leite - Ginásio Industrial, Brumado - BA, 46117-090'
export const MAPS_URL =
  'https://www.google.com/maps/place/Gui+Style/@-14.2089003,-41.6700649,17z/data=!4m6!3m5!1s0x7444b57c3064729:0x271ac92235a71c5d!8m2!3d-14.2090537!4d-41.6716692!16s%2Fg%2F11nw3mnd05'
export const HOURS: { day: string; time: string }[] = [
  { day: 'Segunda', time: '08:00 – 19:30' },
  { day: 'Terça', time: '08:00 – 19:00' },
  { day: 'Quarta', time: '08:00 – 18:30' },
  { day: 'Quinta', time: '08:00 – 20:30' },
  { day: 'Sexta', time: '08:00 – 20:30' },
  { day: 'Sábado', time: '08:00 – 17:00' },
  { day: 'Domingo', time: 'Fechado' },
]

// Caminho de uma imagem em public/img (respeita o subcaminho do GitHub Pages).
const img = (file: string) => `${import.meta.env.BASE_URL}img/${file}`

// Imagem do Hero.
export const IMAGES = {
  hero: img('hero.webp') as string | null,
}

// Fotos do espaço (troca automática na seção "O Espaço Gui Style").
export const SPACE_PHOTOS = [
  { src: img('space-1.webp'), alt: 'Cadeira de barbeiro e prateleiras na Gui Style' },
  { src: img('space-2.webp'), alt: 'Espelho com iluminação e cadeira de barbeiro' },
  { src: img('space-3.webp'), alt: 'Prateleiras de madeira e metal no ambiente' },
  { src: img('space-4.webp'), alt: 'Vista do salão com iluminação hexagonal e plantas' },
  { src: img('space-5.webp'), alt: 'Cadeiras de barbeiro atrás da tela metálica' },
]

// Carrossel "Nossa Assinatura": uma entrada por foto. Adicione/remova à vontade.
// Ex.: img('corte-7.webp'). Entradas null aparecem como espaço reservado.
export const SHOWCASE: (string | null)[] = [
  img('corte-1.webp'),
  img('corte-2.webp'),
  img('corte-3.webp'),
  img('corte-4.webp'),
  img('corte-5.webp'),
  img('corte-6.webp'),
]
