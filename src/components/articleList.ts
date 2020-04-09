import '../less/article-list.less'
import { storage } from '../services/StorageService'
import editor from './editor'

interface State{
  articles: ArticleDataTypes.ArticleData[]
  containerEl: HTMLDivElement
}

class ArticleListComponent{
  private rootEl: HTMLElement
  private state: State = {
    articles: [],
    containerEl: undefined
  }

  public init(container: HTMLElement = document.body, options?: {}){
    const rootEl = document.createElement('div')
    rootEl.id = 'sidebar-container'
    this.rootEl = rootEl
    container.append(rootEl)

    this.initElement()
    this.initState()
    this.initEventHandle()
  }

  public refresh(){
    this.initState()
  }

  private initState(){
    storage.get(['savedArticleData'], ({savedArticleData})=>{
      if(savedArticleData){
        this.state.articles = savedArticleData
      }

      this.renderArticlesList()
    })
  }

  private initElement(){
    const titleEl = document.createElement('p')
    titleEl.className = 'title'
    titleEl.innerText = 'My Articles'
    this.rootEl.append(titleEl)

    const containerEl = document.createElement('div')
    containerEl.className = 'articles-list-container'
    this.state.containerEl = containerEl
    this.rootEl.append(containerEl)

    const btnEl = document.createElement('button')
    btnEl.className = 'new-article-btn'
    this.rootEl.append(btnEl)
    btnEl.addEventListener('click', this.handleCreateBtnClick.bind(this))
  }

  private initEventHandle(){
    this.state.containerEl.querySelectorAll('.article-container').forEach(item=>{
      item.addEventListener('click', this.handleArticleItemClick.bind(this, item))
    })
  }

  private handleCreateBtnClick(el: HTMLElement, e: Event){
    // TODO：传数据
    const index = parseInt(el.getAttribute('data-index'))
    editor.setArticle(this.state.articles[index])
  }

  private handleArticleItemClick(el: HTMLElement, e: Event){
    this.state.containerEl.querySelectorAll('.article-container').forEach(item=>{
      item.className = 'article-container'
    })
    el.className = 'article-container active'

    // TODO：传数据
    const index = parseInt(el.getAttribute('data-index'))
    editor.setArticle(this.state.articles[index])
  }

  private renderArticlesList(){
    this.state.containerEl.innerHTML = ''

    this.state.articles.forEach((item, index)=>{
      const tempEl: HTMLElement = document.createElement('div')
      tempEl.className = 'article-container'
      tempEl.setAttribute('data-index', index + '')
      const titleEl: HTMLParagraphElement = document.createElement('p')
      titleEl.className = 'title'
      titleEl.innerText = item.title
      tempEl.append(titleEl)
      this.state.containerEl.append(tempEl)
    })
  }
}

export default new ArticleListComponent()
