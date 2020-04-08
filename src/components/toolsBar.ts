import '../less/tools-bar.less'
import NodesDataSevice from '../services/NodesDataSevice'
import brainMap from './brainMap'
import {
  storage
} from '../services/StorageService'
import editor from './editor'

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
    const genTreeMapBtnEl = document.createElement('button')
    genTreeMapBtnEl.className = 'tool-btn'
    genTreeMapBtnEl.innerHTML = 'Gen Brain-Map'
    genTreeMapBtnEl.addEventListener('click', this.handleShowBrainMapClick.bind(this))
    this.rootEl.append(genTreeMapBtnEl)

    const saveDataBtnEl = document.createElement('button')
    saveDataBtnEl.className = 'tool-btn save-data-btn'
    saveDataBtnEl.innerHTML = 'Save Article'
    saveDataBtnEl.addEventListener('click', this.handleSaveDataBtnClick.bind(this))
    this.rootEl.append(saveDataBtnEl)

    const saveArticleBtnEl = document.createElement('button')
    saveArticleBtnEl.className = 'tool-btn save-data-btn'
    saveArticleBtnEl.innerHTML = 'TODO'
    saveArticleBtnEl.addEventListener('click', this.handleSaveArticleBtnClick.bind(this))
    this.rootEl.append(saveArticleBtnEl)
  }

  private handleShowBrainMapClick(e: Event) {
    console.log('应该生成脑图了：', NodesDataSevice.getData())
    brainMap.init()
  }
  private handleSaveDataBtnClick(e: Event) {
    storage.get(['savedArticleData'], ({ savedArticleData }) => {
      const data: ArticleDataTypes.ArticleData = {
        title: editor.getTitle(),
        content: editor.getContentString(),
        createAt: Date.now()
      }

      if (savedArticleData) {
        savedArticleData.unshift(data)
      } else {
        savedArticleData = [data]
      }
      storage.set({ savedArticleData })
    })
  }
  private handleSaveArticleBtnClick(e: Event) {
    storage.get(['savedArticleData'], ({ savedArticleData }) => {
      const data: ArticleDataTypes.ArticleData = {
        title: editor.getTitle(),
        content: editor.getContentString(),
        createAt: Date.now()
      }

      if (savedArticleData) {
        savedArticleData.unshift(data)
      } else {
        savedArticleData = [data]
      }
      storage.set({ savedArticleData })
    })
  }
}

export default new TollsBarComponent()