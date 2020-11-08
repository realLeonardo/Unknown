import '../less/main.less'
import BasePage from '../base/BasePage'
import Editor from '../components/Editor'
import ToolsBar from '../components/ToolBar'
import ArticleList from '../components/ArticleList'

class MainPage extends BasePage{
  public title: string = 'Notes'
  public readonly router: string = '/'
  public params: string = ''

  public async init() {
    const mainContainerEl = document.createElement('div')
    mainContainerEl.id = 'main-container'

    await ToolsBar.init(mainContainerEl)
    await Editor.init(mainContainerEl)
    await ArticleList.init()

    document.body.append(mainContainerEl)
    
    this.initGlobalEventListener()
  }

  private initGlobalEventListener(): void {
    // Cover ctrl/cmd+s event
    document.addEventListener('keydown', (e: KeyboardEvent)=>{
      if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
        e.preventDefault()
        ToolsBar.saveCurrentNote()
      }
    }, false);
  }
}

export default new MainPage()
