/**
 * 工具按钮视图类：实现按钮的样式与点击事件处理（回调给Service层）
 */
import '../less/tools-bar.less'
import NoteDataService from '../services/NotesService'
import Editor from './Editor'
import ArticleList from './ArticleList'

// tslint:disable-next-line: no-empty-interface
interface State {
  // do nothing
}

class ToolBarComponent {
  public state: State = {}

  private rootEl: HTMLElement
  private noteService: NoteDataService

  constructor() {
    // do nothing
  }

  public async init(container: HTMLElement = document.body, props?: {}) {
    this.noteService = NoteDataService.getNoteService()
    await this.noteService.init()

    const rootEl = document.createElement('div')
    rootEl.className = 'tools-bar-container'

    this.rootEl = rootEl
    container.append(this.rootEl)

    this.initBtns()
  }

  private initBtns() {
    // Save
    const saveArticleBtnEl = document.createElement('button')
    saveArticleBtnEl.className = 'tool-btn save-data-btn'
    saveArticleBtnEl.innerHTML = 'Save'
    saveArticleBtnEl.addEventListener('click', this.handleSaveArticleBtnClick.bind(this))
    this.rootEl.append(saveArticleBtnEl)

    // Create a new one
    const createArticleBtnEl = document.createElement('button')
    createArticleBtnEl.className = 'tool-btn create-article-btn'
    createArticleBtnEl.innerHTML = 'New'
    createArticleBtnEl.addEventListener('click', this.handleCreateArticleBtnClick.bind(this))
    this.rootEl.append(createArticleBtnEl)

    // Delete
    const deleteArticleBtnEl = document.createElement('button')
    deleteArticleBtnEl.className = 'tool-btn delete-article-btn'
    deleteArticleBtnEl.innerHTML = 'Delete'
    deleteArticleBtnEl.addEventListener('click', this.handleDeleteArticleBtnClick.bind(this))
    this.rootEl.append(deleteArticleBtnEl)
  }

  private async handleSaveArticleBtnClick(e: Event) {
    this.noteService.currentNote.content = Editor.state.containerEl.innerHTML
    await this.noteService.save()
  }
  private async handleCreateArticleBtnClick(e: Event) {
    await this.noteService.create()
    ArticleList.refresh()
  }
  private async handleDeleteArticleBtnClick(e: Event) {
    await this.noteService.deleteCurrentNode()
    ArticleList.refresh()
  }
}

export default new ToolBarComponent()
