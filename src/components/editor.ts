import '../less/editor.less'
import NoteDataService from '../services/NotesService'

type STATE_TYPE = 'containerEl' | 'currentEditEl' | 'titleInputEl' | 'id' | 'title'

// NOTE: 暂时直接存 Dom，后期考虑造个简单的 VDom
interface State {
  containerEl: HTMLDivElement
  currentEditEl: HTMLElement
  titleInputEl: HTMLInputElement
  id: string
  title: string
}

class Editor {
  public state: State = {
    containerEl: undefined,
    currentEditEl: undefined,
    titleInputEl: undefined,
    id: undefined,
    title: 'Untitled',
  }

  private noteService: NoteDataService
  private rootEl: HTMLElement

  constructor() {
    // do nothing
  }

  public async init(container: HTMLElement = document.body, props?: {}) {
    this.noteService = NoteDataService.getNoteService()
    this.noteService.init()
    const rootEl = document.createElement('div')
    rootEl.className = 'editor-root-container'
    this.rootEl = rootEl

    // 标题输入框
    const titleInputEl = document.createElement('input')
    titleInputEl.className = 'editor-title-input'
    titleInputEl.setAttribute('type', 'text')
    titleInputEl.value = this.state.title
    this.state.titleInputEl = titleInputEl
    rootEl.append(titleInputEl)

    // content container
    const containerEl = document.createElement('div')
    containerEl.className = 'editor-content-container'
    this.state.containerEl = containerEl
    rootEl.append(containerEl)

    container.append(this.rootEl)
    this.initState()
    this.initEventHandle()
  }

  public getTitle(): string {
    return this.state.title
  }

  public getContentString(): string {
    return this.state.containerEl.innerHTML
  }

  public setArticle(note: Models.Note) {
    this.state.id = note.id
    this.state.title = note.title
    this.state.titleInputEl.value = note.title
    this.state.containerEl.innerHTML = note.content
  }

  private initState() {
    const pItem = document.createElement('p')
    pItem.setAttribute('contenteditable', 'true')
    pItem.innerText = 'Edit here'
    this.state.containerEl.append(pItem)
  }

  private initEventHandle() {
    this.state.containerEl.addEventListener('click', this.handleEditorClick.bind(this))
    this.state.containerEl.addEventListener('keydown', this.handleEditorInput.bind(this))
    this.state.titleInputEl.addEventListener('input', this.handleTitleInputChange.bind(this))
  }

  private handleEditorClick(e: MouseEvent) {
    this.state.currentEditEl = e.target as HTMLElement
  }

  private handleTitleInputChange(e: InputEvent) {
    this.state.title = (e.target as HTMLInputElement).value
    this.noteService.currentNote.title = this.state.title
  }

  private handleEditorInput(e: KeyboardEvent) {
    // 插入
    if (e.key === 'Tab') {
      // Tab
      e.preventDefault()
    } else if (e.key === 'Enter') {
      // 回车
      e.preventDefault()
      if (this.state.currentEditEl.nextElementSibling) {
        const next = this.state.currentEditEl.nextElementSibling as HTMLElement
        this.state.currentEditEl = next
      } else {
        const p = document.createElement('p')

        p.setAttribute('contenteditable', 'true')
        this.state.containerEl.append(p)
        this.state.currentEditEl = p
      }
      this.state.currentEditEl.focus()
    } else if (e.key === 'Backspace') {
      // 删除
      const currentEditEl = this.state.currentEditEl
      if (currentEditEl.innerText === '') {
        if (currentEditEl.previousElementSibling) {
          const next = this.state.currentEditEl
            .previousElementSibling as HTMLElement
          this.state.currentEditEl = next
          currentEditEl.remove()
          e.preventDefault()
        } else {
          // do nothing
        }
      }
      this.state.currentEditEl.focus()
    }
  }
}

export default new Editor()
