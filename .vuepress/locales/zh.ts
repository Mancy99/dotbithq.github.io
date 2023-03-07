import { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = [
  '/zh/',
  '/zh/faq',
  '/zh/terminology',
  {
    text: '注册 .bit',
    children: [
      '/zh/register-das/pricing',
      '/zh/register-das/open-registration-rules',
      '/zh/register-das/charsets',
      {
        text: '保留账户',
        link: 'https://github.com/dotbitHQ/cell-data-generator/blob/master/data/reserved_accounts.txt',
      },
    ],
  },
  {
    text: '生态项目',
    children: [
      '/zh/projects/data.did.id'
    ],
  },
  {
    text: '共同建设',
    children: [
      '/zh/contribute-to-das/build-together',
      '/zh/contribute-to-das/referral',
      '/zh/contribute-to-das/channel',
      '/zh/contribute-to-das/registrar',
      '/zh/contribute-to-das/keeper',
    ],
  },
  {
    text: '开发者',
    children: [
      '/zh/developers/integration-guide',
      '/zh/developers/build-application',
      '/zh/developers/integration-frontend',
      '/zh/developers/integration-backend',
      '/zh/developers/wallet-integration',
      '/zh/developers/dotbit-alias',
      '/zh/developers/records-key-namespace',
      '/zh/developers/dotbit-libraries',
    ],
  },
  {
    text: '招聘',
    children: [
      '/zh/we-are-hiring/position-list',
      '/we-are-hiring/full-stack-engineer',
      '/we-are-hiring/communication-manager.md',
      '/we-are-hiring/digital-marketing-manager.md',
      '/we-are-hiring/bd-manager.md',
      '/we-are-hiring/event-manager.md',
      '/we-are-hiring/community-manager-ambassador-program',
      '/we-are-hiring/social-media-specialist',
      '/we-are-hiring/chief-evangelist',
      '/zh/we-are-hiring/frontend-engineer',
      '/zh/we-are-hiring/backend-engineer-golang',
      '/zh/we-are-hiring/smart-contract-engineer-rust',
      '/zh/we-are-hiring/development-team-leader',
    ],
  },
  {
    text: '其他',
    children: [
      '/zh/others/why-assets-on-ckb-can-be-managed-by-btc-address',
      {
        text: 'Github',
        link: 'https://github.com/dotbitHQ',
      },
      {
        text: 'Website',
        link: 'https://did.id',
      },
    ],
  },
]

export const zh = {
  sidebar,
}
