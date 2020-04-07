import '../less/editor.less'
import NodesDataService from '../services/NodesDataSevice'

interface State {
  currentEl: HTMLElement
}

export default class EditorComponent {
  private rootEl: HTMLElement
  private state: State = {
    currentEl: undefined,
  }

  constructor(container: HTMLElement = document.body, props ? : {}) {
    const rootEl = document.createElement('div')
    rootEl.className = 'editor-container'

    const pItem = document.createElement('p')
    pItem.setAttribute('contenteditable', 'true')
    pItem.setAttribute('data-index', '0')
    pItem.innerText = 'Edit here'

    rootEl.append(pItem)
    this.rootEl = rootEl


    NodesDataService.push({
      element: pItem,
      content: pItem.innerText
    })

    container.append(this.rootEl)
    this.init()
  }

  private init() {
    this.initEventHandle()
  }
  private handleEditorClick(e: Event) {
    this.state.currentEl = e.srcElement as HTMLElement
  }
  private handleEditorInput(e: KeyboardEvent) {
    // console.log(e)
    // 插入
    if (e.key === 'Tab') {
      // Tab
      e.preventDefault()
      NodesDataService.turn(this.state.currentEl)
    } else if (e.key === 'Enter') {
      // 回车
      e.preventDefault()
      if (this.state.currentEl.nextElementSibling) {
        const next = this.state.currentEl.nextElementSibling as HTMLElement
        this.state.currentEl = next
      } else {
        const p = document.createElement('p')

        p.setAttribute('contenteditable', 'true')
        p.setAttribute('data-index', NodesDataService.getLength() + '')
        this.rootEl.append(p)
        this.state.currentEl = p
        // TODO
        NodesDataService.push({
          element: p,
          content: p.innerText
        })
      }
      this.state.currentEl.focus()
    } else if (e.key === 'Backspace') {
      // 删除
      const currentEl = this.state.currentEl
      if (currentEl.innerText === '') {
        if (currentEl.previousElementSibling) {
          const next = this.state.currentEl.previousElementSibling as HTMLElement
          this.state.currentEl = next
          currentEl.remove()
          e.preventDefault()
        } else {
          // do nothing
        }
      }
      this.state.currentEl.focus()
    }
  }
  private initEventHandle() {
    this.rootEl.addEventListener('click', this.handleEditorClick.bind(this))
    this.rootEl.addEventListener('keydown', this.handleEditorInput.bind(this))
  }
}