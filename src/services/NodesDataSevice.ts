class NodesDataService {
  /**
   * 数据长度
   */
  private nodeData: ArticleDataTypes.ContentItem[] = []

  /**
   * 插入数据
   * @param node 待插入的nodeData
   */
  public getLength(): number {
    return this.nodeData.length
  }
  /**
   * 获取数据
   */
  public getData(): ArticleDataTypes.ContentItem[] {
    return this.nodeData
  }
  /**
   * 插入数据
   * @param node 待插入的nodeData
   */
  public push(node: NodeDataTypes.Node) {
    this.nodeData.push({
      node,
      parent: undefined,
      children: [],
    })
  }

  /**
   * 插入数据
   * @param node 待插入的nodeData
   */
  public turn(el: HTMLElement) {
    const indexArr: string[] = el.getAttribute('data-index').split('-')
    const firstIndex = parseInt(indexArr.shift())
    const lastIndex = parseInt(indexArr[indexArr.length - 1])
    // 通过 indexArr 找到在节点树中该节点的数据
    let n: ArticleDataTypes.ContentItem = this.nodeData[firstIndex]
    for (const i of indexArr) {
      n = n.children[parseInt(i)]
    }

    // 如果父节点不存在
    if ((!n.parent && firstIndex > 0) || (n.parent && lastIndex !== 0)) {
      this.createTab(el)
    } else {
      this.deleteTab(el)
    }
  }

  public createTab(el: HTMLElement) {
    const indexArr: string[] = el.getAttribute('data-index').split('-')
    const firstIndex = parseInt(indexArr.shift())

    // 通过 indexArr 找到在节点树中该节点的数据
    let n: ArticleDataTypes.ContentItem = this.nodeData[firstIndex]
    for (const i of indexArr) {
      n = n.children[parseInt(i)]
    }
    const lastIndex = parseInt(indexArr.pop())

    // 如果父节点不存在
    if (!n.parent && firstIndex > 0) {
      const prevNode = this.nodeData[firstIndex - 1]
      // 如果存在
      if (prevNode.parent) {
        n.parent = prevNode.parent
        prevNode.parent.children.push(n)
      } else {
        n.parent = prevNode
        prevNode.children.push(n)
      }
      this.nodeData.splice(firstIndex, 1)

      const indexStr = `${firstIndex - 1}-${n.parent.children.length - 1}`
      n.node.element.setAttribute('data-index', indexStr)
      const span = document.createElement('span')
      span.innerHTML = '👉'
      el.insertBefore(span, el.firstChild)
    } else if (n.parent && lastIndex !== 0) {
      n.parent.children.splice(lastIndex, 1)
      n.parent = n.parent.children[lastIndex - 1]
      n.parent.children.push(n)

      const indexStr = `${firstIndex}${
        indexArr.join('-') === '' ? '' : '-' + indexArr.join('-')
      }-${lastIndex - 1}-${n.parent.children.length - 1}`
      n.node.element.setAttribute('data-index', indexStr)
      const span = document.createElement('span')
      span.innerHTML = '👉'
      el.insertBefore(span, el.firstChild)
    }
  }

  public deleteTab(el: HTMLElement) {
    const indexArr: string[] = el.getAttribute('data-index').split('-')
    const firstIndex = parseInt(indexArr.shift())

    // 通过 indexArr 找到在节点树中该节点的数据
    let n: ArticleDataTypes.ContentItem = this.nodeData[firstIndex]
    for (const i of indexArr) {
      n = n.children[parseInt(i)]
    }

    let indexStr = `${firstIndex}-`

    // 删除该节点 tab
    for (let i = 0; i < n.parent.children.length; i++) {
      if (n.parent.children[i].node.element === n.node.element) {
        n.parent.children.splice(i, 1)
      }
    }
    n.parent = n.parent.parent
    indexArr.pop()
    indexArr.pop()
    indexStr += indexArr.join('-')

    if (n.parent) {
      indexStr += n.parent.children.length
      n.parent.children.push(n)
    } else {
      indexStr = this.nodeData.length + ''
      this.nodeData.push(n)
    }

    // TODO
    n.node.element.setAttribute('data-index', indexStr)
    n.node.element.querySelector('span').remove()
    console.log(this.nodeData)
  }

  /**
   * 更新数据
   */
  private update() {
    // TODO
  }
}

export default new NodesDataService()
