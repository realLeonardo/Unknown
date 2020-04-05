import '../less/editor.less'
import NodesDataService from '../services/NodesDataSevice'

interface State {
  currentEl: HTMLElement
}

class EditorComponent {
  public el: HTMLElement
  public state: State = {
    currentEl: undefined,
  }

  constructor() {
    const el = document.createElement('div')
    el.className = 'editor-container'

    el.innerHTML = `
      <p contenteditable="true" data-index="0">Edit here</p>
    `
    this.el = el

    NodesDataService.push({element: el, content: el.innerText})

    this.initEventHandle()
  }

  /**
   * Render: render a HTMLElement
   */
  public render(): HTMLElement {
    // TODO
    return this.el
  }

  private handleEditorClick(e: Event) {
    this.state.currentEl = e.srcElement as HTMLElement
  }
  private handleEditorInput(e: KeyboardEvent) {
    console.log(e)
    // 插入
    if (e.key === 'Tab') {
      // Tab
      e.preventDefault()
      console.log(this.state.currentEl.getAttribute('data-index'))
      const span = document.createElement('span')
      span.innerHTML = '->'
      this.state.currentEl.insertBefore(span, this.state.currentEl.firstChild)
    } else if(e.key === 'Enter') {
      // 回车
      e.preventDefault()
      if(this.state.currentEl.nextElementSibling){
        const next = this.state.currentEl.nextElementSibling as HTMLElement
        this.state.currentEl = next
      } else {
        const p = document.createElement('p')
        p.setAttribute('contenteditable', 'true')
        p.setAttribute('data-index', NodesDataService.length + '')
        this.el.append(p)
        this.state.currentEl = p
        // TODO
        NodesDataService.push({element: p, content: p.innerText})
      }
      this.state.currentEl.focus()
    } else if(e.key === 'Backspace') {
      // 删除
      const currentEl = this.state.currentEl
      if(currentEl.innerText === ''){
        if(currentEl.previousElementSibling){
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
  private initEventHandle(){
    this.el.addEventListener('click', this.handleEditorClick.bind(this))
    this.el.addEventListener('keydown', this.handleEditorInput.bind(this))
  }
}

export default new EditorComponent().render()