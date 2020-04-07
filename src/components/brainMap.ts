import * as echarts from 'echarts'
import '../less/brain-map.less'
import NodesDataService, { NodeItem } from '../services/NodesDataSevice'

interface State {
  containerEl: HTMLDivElement
}

export default class BrainMapComponent {
  private rootEl: HTMLElement
  private state: State = {
    containerEl: undefined,
  }

  constructor(container: HTMLElement = document.body, props ? : {}) {
    const rootEl = document.createElement('div')
    rootEl.className = 'brain-map-cover'
    const containerEl = document.createElement('div')
    containerEl.className = 'brain-map-container'
    rootEl.append(containerEl)

    this.rootEl = rootEl
    this.state.containerEl = containerEl
    container.append(this.rootEl)
    this.init()
  }

  private init() {
    const myEcharts = echarts.init(this.state.containerEl)

    let data: any[] = []
    for(const item of NodesDataService.getData()){
      data.push(this.formatNodesDataToEcharts(item))
    }
    // TODO: title
    data = [{name: 'title', children: data}]

    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [{
        type: 'tree',
        layout: 'orthogonal',
        orient: 'LR',
        symbol: 'circle',
        symbolSize: 4,
        edgeShape: 'polyline',
        roam: true,
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

  private formatNodesDataToEcharts(n: NodeItem){
    if(n.children.length === 0){
      return {
        name: n.node.element.innerText,
      }
    }

    for(let i=0;i<n.children.length;i++){
      n.children[i] = this.formatNodesDataToEcharts(n.children[i]) as any
    }

    return {
      name: n.node.element.innerText,
      children: n.children
    }
  }
}