import '../less/tools-bar.less'
import NodesDataSevice from '../services/NodesDataSevice'
import brainMap from './brainMap'
import articleList from './articleList'
import { storage } from '../services/StorageService'
import editor from './editor'

// tslint:disable-next-line: no-empty-interface
interface State {
  // do nothing
}

class TollsBarComponent {
  private rootEl: HTMLElement
  private state: State = {}

  constructor() {
    // do nothing
  }

  public init(container: HTMLElement = document.body, props?: {}) {
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
    genTreeMapBtnEl.addEventListener(
      'click',
      this.handleShowBrainMapClick.bind(this)
    )
    this.rootEl.append(genTreeMapBtnEl)

    const saveArticleBtnEl = document.createElement('button')
    saveArticleBtnEl.className = 'tool-btn save-data-btn'
    saveArticleBtnEl.innerHTML = 'Save Article'
    saveArticleBtnEl.addEventListener(
      'click',
      this.handleSaveArticleBtnClick.bind(this)
    )
    this.rootEl.append(saveArticleBtnEl)

    const createArticleBtnEl = document.createElement('button')
    createArticleBtnEl.className = 'tool-btn create-article-btn'
    createArticleBtnEl.innerHTML = 'Create Article'
    createArticleBtnEl.addEventListener(
      'click',
      this.handleCreateArticleBtnClick.bind(this)
    )
    this.rootEl.append(createArticleBtnEl)

    const todoBtnEl = document.createElement('button')
    todoBtnEl.className = 'tool-btn save-data-btn'
    todoBtnEl.innerHTML = 'TODO'
    todoBtnEl.addEventListener(
      'click',
      this.handleCreateArticleBtnClick.bind(this)
    )
    this.rootEl.append(todoBtnEl)
  }

  private handleShowBrainMapClick(e: Event) {
    console.log('应该生成脑图了：', NodesDataSevice.getData())
    brainMap.init()
  }
  private handleSaveArticleBtnClick(e: Event) {
    storage.get(['savedArticleData'], ({ savedArticleData }) => {
      const data: ArticleDataTypes.ArticleData = {
        id: Date.now().toString(16),
        title: editor.getTitle(),
        content: editor.getContentString(),
        createAt: Date.now(),
      }

      if (savedArticleData) {
        savedArticleData.unshift(data)
      } else {
        savedArticleData = [data]
      }
      storage.set({ savedArticleData })
      articleList.refresh()
    })
  }
  private handleCreateArticleBtnClick(e: Event) {
    storage.get(['savedArticleData'], ({ savedArticleData }) => {
      const data: ArticleDataTypes.ArticleData = {
        id: Date.now().toString(16),
        title: 'Untitled',
        content: '',
        createAt: Date.now(),
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
