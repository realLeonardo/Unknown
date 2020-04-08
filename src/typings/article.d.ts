
declare namespace ArticleDataTypes{

  interface ArticleData {
    title: string
    content: string
    createAt: number
  }
  
  interface ContentItem {
    node: NodeDataTypes.Node
    parent: ContentItem | undefined
    children: ContentItem[]
}
}