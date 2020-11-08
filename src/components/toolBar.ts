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

  public async saveCurrentNote(){
    this.noteService.currentNote.content = Editor.state.containerEl.innerHTML
    await this.noteService.save()
    ArticleList.refresh()
  }

  private initBtns() {
    // Save
    const saveNoteBtnEl = document.createElement('button')
    saveNoteBtnEl.className = 'tool-btn save-data-btn'
    saveNoteBtnEl.innerHTML = 'Save'
    saveNoteBtnEl.addEventListener('click', this.handleSaveNoteBtnClick.bind(this))
    this.rootEl.append(saveNoteBtnEl)

    // Create
    const createNoteBtnEl = document.createElement('button')
    createNoteBtnEl.className = 'tool-btn create-note-btn'
    createNoteBtnEl.innerHTML = 'New'
    createNoteBtnEl.addEventListener('click', this.handleCreateNoteBtnClick.bind(this))
    this.rootEl.append(createNoteBtnEl)

    // Delete
    const deleteNoteBtnEl = document.createElement('button')
    deleteNoteBtnEl.className = 'tool-btn delete-note-btn'
    deleteNoteBtnEl.innerHTML = 'Delete'
    deleteNoteBtnEl.addEventListener('click', this.handleDeleteNoteBtnClick.bind(this))
    this.rootEl.append(deleteNoteBtnEl)
  }

  private async handleSaveNoteBtnClick(e?: Event) {
    await this.saveCurrentNote()
  }

  private async handleCreateNoteBtnClick(e: Event) {
    await this.noteService.create()
    ArticleList.refresh()
  }

  private async handleDeleteNoteBtnClick(e: Event) {
    await this.noteService.deleteCurrentNode()
    ArticleList.refresh()
  }
}

export default new ToolBarComponent()
