import './less/main.less'
import Editor from './components/Editor'
import ToolsBar from './components/ToolBar'
import ArticleList from './components/ArticleList'

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
