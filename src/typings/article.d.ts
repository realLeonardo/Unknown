declare namespace ArticleDataTypes {
  interface ArticleData {
    id: string
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
