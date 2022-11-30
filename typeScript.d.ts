export interface Props {
  projects: Projects[]
  techs: Techs[]
}

export interface Techs {
  name: string
  imgUrl: string
  id: string
}

export interface Projects {
  name: string
  imgUrl: string
  id: string
  techs: ProjectsTechs[]
  githubUrl: string
  webUrl: string
  isLightMode: boolean
  repName?: string
}

export interface ProjectsTechs {
  techId: string
  name: string
  imgUrl: string
}

export interface ModalToggle {
  isOpen: boolean
  handleToggle(): void
}

export interface ProcessEnv {
  [key: string]: string | undefined
}

// TODO:確定哪幾個不用? canonical_url、slug、url
export interface IBlogs {
  canonical_url?: string
  social_image: string
  created_at: string
  description: string
  id: number
  reading_time_minutes: number
  slug?: string
  title: string
  url: string
  public_reactions_count: number
  handleCurrentId?: () => void
}

// 用 extends 是想說也許可以不用加問號，阿現在還是要加，那有差嗎?
export interface IBlogsList extends IBlogs {
  showModal?: boolean
  handlePop?: () => void
  isList?: boolean
  index?: string | number
}
