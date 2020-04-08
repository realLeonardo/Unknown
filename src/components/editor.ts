import '../less/editor.less'
import NodesDataService from '../services/NodesDataSevice'

interface State {
  containerEl: HTMLDivElement
  currentEditEl: HTMLElement
  titleInputEl: HTMLInputElement
  title: string
}

class EditorComponent {
  private rootEl: HTMLElement
  private state: State = {
    containerEl: undefined,
    currentEditEl: undefined,
    titleInputEl: undefined,
    title: 'Untitled'
  }

  constructor() {
    // do nothing
  }

  public init(container: HTMLElement = document.body, props ? : {}) {
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
  public getTitle(): string{
    return this.state.title
  }
  public getContentString(): string{
    return this.state.containerEl.innerHTML
  }

  private initState(){
    // Just for test
    const pItem = document.createElement('p')
    pItem.setAttribute('contenteditable', 'true')
    pItem.setAttribute('data-index', '0')
    pItem.innerText = 'Edit here'
    this.state.containerEl.append(pItem)

    NodesDataService.push({
      element: pItem,
      content: pItem.innerText
    })
  }
  private initEventHandle() {
    this.state.containerEl.addEventListener('click', this.handleEditorClick.bind(this))
    this.state.containerEl.addEventListener('keydown', this.handleEditorInput.bind(this))
    this.state.titleInputEl.addEventListener('input', this.handleTitleInputChange.bind(this))
  }
  private handleEditorClick(e: Event) {
    this.state.currentEditEl = e.srcElement as HTMLElement
  }
  private handleTitleInputChange(e: InputEvent) {
    this.state.title = (e.target as HTMLInputElement).value
  }
  private handleEditorInput(e: KeyboardEvent) {
    // 插入
    if (e.key === 'Tab') {
      // Tab
      e.preventDefault()
      NodesDataService.turn(this.state.currentEditEl)
    } else if (e.key === 'Enter') {
      // 回车
      e.preventDefault()
      if (this.state.currentEditEl.nextElementSibling) {
        const next = this.state.currentEditEl.nextElementSibling as HTMLElement
        this.state.currentEditEl = next
      } else {
        const p = document.createElement('p')

        p.setAttribute('contenteditable', 'true')
        p.setAttribute('data-index', NodesDataService.getLength() + '')
        this.state.containerEl.append(p)
        this.state.currentEditEl = p
        // TODO
        NodesDataService.push({
          element: p,
          content: p.innerText
        })
      }
      this.state.currentEditEl.focus()
    } else if (e.key === 'Backspace') {
      // 删除
      const currentEditEl = this.state.currentEditEl
      if (currentEditEl.innerText === '') {
        if (currentEditEl.previousElementSibling) {
          const next = this.state.currentEditEl.previousElementSibling as HTMLElement
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

export default new EditorComponent()