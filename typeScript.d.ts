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
}

export interface ProjectsTechs {
  techId: string
  name: string
  imgUrl: string
}

export interface ProcessEnv {
  [key: string]: string | undefined
}
