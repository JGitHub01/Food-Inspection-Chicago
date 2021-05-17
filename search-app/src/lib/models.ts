export interface IResultItem {
  inspection_date: string
  dba_name: string
  address: string
  risk: string
}

export interface ISearchResults {
  keyword?: string
  items: IResultItem[]
  success?: boolean
  msg?: string
}
