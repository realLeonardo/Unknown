import './less/main.less'
import Editor from './components/editor'
import ToolsBar from './components/toolsBar'

function init(){
  const bodyEl: HTMLElement = document.body

  new ToolsBar(bodyEl, {})
  new Editor(bodyEl, {})

  /**
   * TODO：全局事件
   * focus 编辑器
   */
}

init()