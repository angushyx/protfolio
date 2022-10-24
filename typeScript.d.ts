export interface Props {
  techs: {
    name: string
    imgUrl: string
    id: string
  }
  projects: {
    name: string
    imgUrl: string
    id: string
    techs: string[]
    githubUrl: string
    webUrl: string
    isLightMode: boolean
  }
}

// TODO:練習定義陣列
export interface projectsTechs {
  id: string
  name: string
}

export interface BlogCard {
  id: string
  name: string
}

export interface ProcessEnv {
  [key: string]: string | undefined
}
