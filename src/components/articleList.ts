import '../less/article-list.less'
import { storage } from '../services/StorageService'
import NoteDataService from '../services/NotesService'
import Editor from './editor'

interface State {
  notes: Models.Note[]
  containerEl: HTMLDivElement
}

class ArticleListComponent {
  private state: State = {
    notes: [],
    containerEl: undefined,
  }

  private noteService: NoteDataService
  private rootEl: HTMLElement
  private currentIndex: number

  public async init(container: HTMLElement = document.body, options?: {}) {
    this.noteService = NoteDataService.getNoteService()
    await this.noteService.init()

    const rootEl = document.createElement('div')
    rootEl.id = 'sidebar-container'
    this.rootEl = rootEl
    container.append(rootEl)

    this.initElement()
    this.refresh()
  }

  public refresh() {
    this.initState()

    const first = this.state.containerEl.firstChild as HTMLElement
    if (first) {
      first.click()
    } else {
      this.noteService.create()
    }
  }

  private initState() {
    this.state.notes = this.noteService.notes
    this.renderArticlesList()
  }

  private initElement() {
    const titleEl = document.createElement('p')
    titleEl.className = 'title'
    titleEl.innerText = 'All'
    this.rootEl.append(titleEl)

    const containerEl = document.createElement('div')
    containerEl.className = 'articles-list-container'
    this.state.containerEl = containerEl
    this.rootEl.append(containerEl)
  }

  private handleArticleItemClick(el: HTMLElement, e: Event) {
    this.state.containerEl
      .querySelectorAll('.article-container')
      .forEach((item) => {
        item.className = 'article-container'
      })
    el.className = 'article-container active'

    const index = parseInt(el.getAttribute('data-index'))
    this.currentIndex = index
    this.noteService.currentNote = this.state.notes[index]
    Editor.setArticle(this.noteService.currentNote)
  }

  private renderArticlesList() {
    this.state.containerEl.innerHTML = ''

    this.state.notes.forEach((item, index) => {
      const tempEl: HTMLElement = document.createElement('div')
      tempEl.className = 'article-container'
      tempEl.setAttribute('data-index', index + '')

      const titleEl: HTMLParagraphElement = document.createElement('p')
      titleEl.className = 'title'
      titleEl.innerText = item.title
      tempEl.append(titleEl)

      const timeEl: HTMLParagraphElement = document.createElement('p')
      timeEl.className = 'time'
      timeEl.innerText = new Date(item.createAt).toLocaleDateString()
      tempEl.append(timeEl)

      tempEl.addEventListener('click', this.handleArticleItemClick.bind(this, tempEl))
      this.state.containerEl.append(tempEl)
    })
  }
}

export default new ArticleListComponent()
