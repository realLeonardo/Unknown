import '../less/tools-bar.less'
import NodesDataSevice from '../services/NodesDataSevice'
import brainMap from './brainMap'

interface State {
  // do nothing
}

class TollsBarComponent {
  private rootEl: HTMLElement
  private state: State = {}

  constructor() {
    // do nothing
  }

  public init(container: HTMLElement = document.body, props ? : {}) {
    const rootEl = document.createElement('div')
    rootEl.className = 'tools-bar-container'

    this.rootEl = rootEl
    container.append(this.rootEl)

    this.initBtns()
  }
  private initBtns() {
    const btnEl = document.createElement('div')
    btnEl.className = 'tool-btn'
    btnEl.innerHTML = '生成脑图'

    btnEl.addEventListener('click', this.handleShowBrainMapClick.bind(this))
    this.rootEl.append(btnEl)
  }
  private handleShowBrainMapClick(e: Event) {
    // TODO
    console.log('应该生成脑图了：', NodesDataSevice.getData())
    brainMap.init()
  }
}

export default new TollsBarComponent()