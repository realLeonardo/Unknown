import '../less/article-list.less'
import { storage } from '../services/StorageService'

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
  }

  private initEventHandle(){
    this.state.containerEl.querySelectorAll('.article-container').forEach(item=>{
      item.addEventListener('click', this.handleArticleItemClick.bind(this, item))
    })
  }

  private handleArticleItemClick(el: HTMLElement, e: Event){
    this.state.containerEl.querySelectorAll('.article-container').forEach(item=>{
      item.className = 'article-container'
    })
    el.className = 'article-container active'

    // TODO：传数据
  }

  private renderArticlesList(){
    this.state.containerEl.innerHTML = ''

    console.log(this.state.articles)
    for(const item of this.state.articles){
      const tempEl: HTMLElement = document.createElement('div')
      tempEl.className = 'article-container'
      const titleEl: HTMLParagraphElement = document.createElement('p')
      titleEl.className = 'title'
      titleEl.innerText = item.title
      tempEl.append(titleEl)
      this.state.containerEl.append(tempEl)
    }
  }
}

export default new ArticleListComponent()
