import '../less/main.less'
import BasePage from '../base/BasePage'

class AboutPage extends BasePage{
  public title: string = 'Notes'
  public readonly router: string = '/'
  public params: string = ''

  public init(): void {
    const bodyEl = document.body
    const mainContainerEl = document.createElement('div')
    mainContainerEl.id = 'main-container'

    mainContainerEl.innerText = 'Hello, it\'s Lishuang :) '

    bodyEl.append(mainContainerEl)
  }
}

export default new AboutPage()
