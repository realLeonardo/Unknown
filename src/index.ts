import './less/main.less'
import Editor from './components/editor'
import ToolsBar from './components/toolBar'
import ArticleList from './components/articleList'

function init() {
  const bodyEl = document.body
  const mainContainerEl = document.createElement('div')
  mainContainerEl.id = 'main-container'

  ToolsBar.init(mainContainerEl)
  Editor.init(mainContainerEl)
  ArticleList.init()

  bodyEl.append(mainContainerEl)
  /**
   * TODO：全局事件
   * focus 编辑器
   */
}

init()
