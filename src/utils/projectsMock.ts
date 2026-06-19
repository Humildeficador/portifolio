export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  videoUrl?: string
  isFeatured?: boolean
  repoUrl: string
  liveDemoUrl?: string
  gifUrl?: string
}

export const projectsMock: Project[] = [
  {
    id: 'upa-flow-control',
    title: 'UPA Flow Control (CLI)',
    description: 'Sistema de automação e gerenciamento de fluxo interno para unidades de pronto atendimento, com geração de relatórios e integração via scripts.',
    tags: ['TypeScript', 'Node.js', 'Automation'],
    isFeatured: true,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
    repoUrl: 'https://github.com/Humildeficador/portfolio',
    liveDemoUrl: 'https://github.com/Humildeficador/portfolio',
    gifUrl: 'https://media2.giphy.com/media/13HgwGsXF0aiGY/giphy.gif'
  },
  {
    id: 'humildas-league',
    title: 'Humildas League (Electron V2)',
    description: 'Template minimalista e automatizador de interface utilizando Electron, Vite e React para otimização de rotinas.',
    tags: ['Electron', 'React', 'TypeScript', 'Tailwind'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    repoUrl: 'https://github.com/Humildeficador/portfolio'
  },
  {
    id: 'fastify-prisma-gateway',
    title: 'Fastify/Prisma API Gateway',
    description: 'API escalável para gerenciamento de logística e consultas rápidas, estruturada com banco de dados relacional e paginação eficiente.',
    tags: ['Fastify', 'Prisma', 'PostgreSQL', 'Backend'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    repoUrl: 'https://github.com/Humildeficador/portfolio'
  },
  {
    id: 'hygia-intranet-automation',
    title: 'Hygia Intranet Automation',
    description: 'Extensão de navegador e scripts customizados para otimização de busca, preenchimento de dados e rastreamento de prontuários em sistemas hospitalares.',
    tags: ['JavaScript', 'Extensions', 'Web Scraping', 'UI/UX'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    repoUrl: 'https://github.com/Humildeficador/portfolio'
  }
]