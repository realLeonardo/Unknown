import './less/main.less'
import editorEl from './components/editor'
import toolsBarEl from './components/toolsBar'

function init(){
  const bodyEL: HTMLElement = document.body

  // bodyEL.append(toolsBarEl)
  bodyEL.append(editorEl)

  /**
   * TODO：全局事件
   * focus 编辑器
   */
}

init()