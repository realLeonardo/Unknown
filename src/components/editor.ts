import Component from '../base/Component'
import '../less/editor.less'
import NodesDataService from '../services/NodesDataSevice'
import { storage } from '../services/StorageService'
import articleList from './ArticleList'
import ArticleDataService from '../services/ArticleDataService'

const DEFAULT_ARTICLE_CONTENT = '<p contenteditable="true">Edit here</p>'

type STATE_TYPE = 'containerEl' | 'currentEditEl' | 'titleInputEl' | 'id' | 'title'

interface State {
  containerEl: HTMLDivElement
  currentEditEl: HTMLElement
  titleInputEl: HTMLInputElement
  id: string
  title: string
}

class Editor extends Component {
  private rootEl: HTMLElement
  public state: State = {
    containerEl: undefined,
    currentEditEl: undefined,
    titleInputEl: undefined,
    id: undefined,
    title: 'Untitled',
  }

  constructor() {
    super()
    // do nothing
  }
  public onLoad() {
    console.log('onload~')
  }
  public onReady() {
    console.log('onReady~')
  }

  public init(container: HTMLElement = document.body, props?: {}) {
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
  public setArticle(article: ArticleDataTypes.ArticleData) {
    this.state.id = article.id
    this.state.title = article.title
    this.state.titleInputEl.value = article.title
    this.state.containerEl.innerHTML = article.content
  }
  public async saveArticle() {
    const savedArticleData = await ArticleDataService.getAll()

    // TODO
    for (let i = 0; i < savedArticleData.length; i++) {
      if (savedArticleData[i].id === this.state.id) {
        console.log(savedArticleData[i])
        savedArticleData[i].content = this.getContentString()
        savedArticleData[i].title = this.getTitle()
        break
      }
    }

    storage.set({ savedArticleData })
    articleList.refresh()
  }
  public async createArticle() {
    let savedArticleData = await ArticleDataService.getAll()

    const data: ArticleDataTypes.ArticleData = {
      id: Date.now().toString(16),
      title: 'Untitled',
      content: DEFAULT_ARTICLE_CONTENT,
      createAt: Date.now(),
    }
    this.state.id = data.id

    if (savedArticleData) {
      savedArticleData.unshift(data)
    } else {
      savedArticleData = [data]
    }
    storage.set({ savedArticleData })
    articleList.refresh()
  }
  public async deleteArticle() {
    let savedArticleData = await ArticleDataService.getAll()

    savedArticleData = savedArticleData.filter(item => item.id !== this.state.id)
    storage.set({ savedArticleData })
    if (savedArticleData.length === 0) {
      this.createArticle()
    }
    articleList.refresh()
  }

  private initState() {
    const pItem = document.createElement('p')
    pItem.setAttribute('contenteditable', 'true')
    pItem.innerText = 'Edit here'
    this.state.containerEl.append(pItem)

    NodesDataService.push({
      element: pItem,
      content: pItem.innerText,
    })
  }
  private initEventHandle() {
    this.state.containerEl.addEventListener('click', this.handleEditorClick.bind(this))
    this.state.containerEl.addEventListener('keydown', this.handleEditorInput.bind(this))
    this.state.titleInputEl.addEventListener('input', this.handleTitleInputChange.bind(this))

    // this.state.containerEl.addEventListener('change', (e) => {
    //   console.log(e)
    // })
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
        this.state.containerEl.append(p)
        this.state.currentEditEl = p
        // TODO
        NodesDataService.push({
          element: p,
          content: p.innerText,
        })
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
