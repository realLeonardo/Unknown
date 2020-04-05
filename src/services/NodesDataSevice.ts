
export interface Node{
  element: HTMLElement
  content: string
}

interface NodeData{
  node: Node,
  childs: NodeData[]
}

class NodesDataService{
  /**
   * 数据长度
   */
  public length: number = 0
  private nodeData: NodeData[] = []

  /**
   * 插入数据
   * @param node 待插入的nodeData
   */
  public push(node: Node){
    this.nodeData.push({node, childs: []})
    this.length++
  }

  /**
   * 更新数据
   */
  private update(){
    // TODO
  }
}

export default new NodesDataService()