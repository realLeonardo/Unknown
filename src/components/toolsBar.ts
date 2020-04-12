import '../less/tools-bar.less'
import NodesDataSevice from '../services/NodesDataSevice'
import brainMap from './brainMap'
import articleList from './articleList'
import editor from './editor'
import { storage } from '../services/StorageService'

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
    genTreeMapBtnEl.addEventListener('click', this.handleShowBrainMapClick.bind(this))
    this.rootEl.append(genTreeMapBtnEl)

    const saveArticleBtnEl = document.createElement('button')
    saveArticleBtnEl.className = 'tool-btn save-data-btn'
    saveArticleBtnEl.innerHTML = 'Save'
    saveArticleBtnEl.addEventListener('click', this.handleSaveArticleBtnClick.bind(this))
    this.rootEl.append(saveArticleBtnEl)

    const createArticleBtnEl = document.createElement('button')
    createArticleBtnEl.className = 'tool-btn create-article-btn'
    createArticleBtnEl.innerHTML = 'New'
    createArticleBtnEl.addEventListener('click', this.handleCreateArticleBtnClick.bind(this))
    this.rootEl.append(createArticleBtnEl)

    const deleteArticleBtnEl = document.createElement('button')
    deleteArticleBtnEl.className = 'tool-btn delete-article-btn'
    deleteArticleBtnEl.innerHTML = 'Delete'
    deleteArticleBtnEl.addEventListener('click', this.handleDeleteArticleBtnClick.bind(this))
    this.rootEl.append(deleteArticleBtnEl)

    const todoBtnEl = document.createElement('button')
    todoBtnEl.className = 'tool-btn save-data-btn'
    todoBtnEl.innerHTML = 'TODO'
    todoBtnEl.addEventListener('click', this.handleCreateArticleBtnClick.bind(this))
    this.rootEl.append(todoBtnEl)
  }

  private handleShowBrainMapClick(e: Event) {
    console.log('是时候生成脑图了~')
    brainMap.init()
  }
  private handleSaveArticleBtnClick(e: Event) {
    editor.saveArticle()
  }
  private handleCreateArticleBtnClick(e: Event) {
    editor.createArticle()
  }
  private handleDeleteArticleBtnClick(e: Event) {
    editor.deleteArticle()
  }
}

export default new TollsBarComponent()
