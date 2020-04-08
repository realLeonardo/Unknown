import * as echarts from 'echarts'
import '../less/brain-map.less'
import NodesDataService from '../services/NodesDataSevice'
import Editor from './editor'

interface State {
  containerEl: HTMLDivElement,
  closeBtnEl: HTMLElement
}

class BrainMapComponent {
  private rootEl: HTMLElement
  private state: State = {
    containerEl: undefined,
    closeBtnEl: undefined
  }

  constructor() {
    // do nothing
  }

  public init(container: HTMLElement = document.body, props ? : {}) {
    const rootEl = document.createElement('div')
    rootEl.className = 'brain-map-cover'

    const containerEl = document.createElement('div')
    containerEl.className = 'brain-map-container'
    rootEl.append(containerEl)

    // 关闭按钮
    const closeBtnEl = document.createElement('span')
    closeBtnEl.className = 'close-btn'
    closeBtnEl.innerText = '❌'
    rootEl.append(closeBtnEl)

    this.rootEl = rootEl
    this.state.containerEl = containerEl
    this.state.closeBtnEl = closeBtnEl
    container.append(this.rootEl)

    this.initEventHandle()
    const myEcharts = echarts.init(this.state.containerEl)

    let data: any[] = []
    for(const item of NodesDataService.getData()){
      data.push(this.formatNodesDataToEcharts(item))
    }

    data = [{name: Editor.getTitle(), children: data}]

    const option = {
      series: [{
        type: 'tree',
        layout: 'orthogonal',
        orient: 'LR',
        symbol: 'circle',
        symbolSize: 4,
        edgeShape: 'polyline',
        roam: 'move',
        itemStyle: {
          color: '#37352F',
        },
        label: {
          show: true,
          color: '#37352F',
          fontSize: 16,
          position: 'right',
          align: 'left',
          verticalAlign: 'middle',
        },

        data,

        top: '0',
        left: '5%',

        // 叶子节点样式
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },

        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }]
    } as any

    myEcharts.setOption(option)
  }

  private handleCloseBtnClick(){
    this.rootEl.remove()
  }

  private initEventHandle(){
    this.state.closeBtnEl.addEventListener('click', this.handleCloseBtnClick.bind(this))
  }

  private formatNodesDataToEcharts(n: ArticleDataTypes.ContentItem){
    if(n.children.length === 0){
      return {
        name: n.node.element.innerText,
      }
    }

    for(let i=0; i<n.children.length; i++){
      n.children[i] = this.formatNodesDataToEcharts(n.children[i]) as any
    }
    // n.children.forEach((item, i)=>n.children[i] = this.formatNodesDataToEcharts(item) as any)

    return {
      name: n.node.element.innerText,
      children: n.children
    }
  }
}

export default new BrainMapComponent()