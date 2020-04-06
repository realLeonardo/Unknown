import '../less/tools-bar.less'
import NodesDataSevice from '../services/NodesDataSevice'
import brainMap from './brainMap'

interface State {
  // do nothing
}

export default class TollsBarComponent {
  private rootEl: HTMLElement
  private state: State = {}

  constructor(container: HTMLElement, props ? : {}) {
    const rootEl = document.createElement('div')
    rootEl.className = 'tools-bar-container'

    this.rootEl = rootEl
    container.append(this.rootEl)
    this.init()
  }

  private init() {
    this.initBtns()
  }
  private initBtns() {
    const btnEl = document.createElement('div')
    btnEl.className = 'tool'
    btnEl.innerHTML = '点击生成脑图'

    btnEl.addEventListener('click', this.handleShowBrainMapClick.bind(this))
    this.rootEl.append(btnEl)
  }
  private handleShowBrainMapClick(e: Event) {
    // TODO
    console.log('应该生成脑图了：', NodesDataSevice.getData())
    new brainMap(document.body)
  }
}