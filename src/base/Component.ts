export default abstract class Component {
  public state: {}

  constructor() {
    this._init()
  }

  public abstract onLoad(): void
  public abstract onReady(): void

  private _init() {
    // 监听文档状态改变
    document.onreadystatechange = () => {
      switch (document.readyState) {
        case 'loading': {
          console.log('loading')
          break
        }
        case 'interactive': {
          console.log('loaded')
          this.onLoad()
          break
        }
        case 'complete': {
          console.log('ready')
          this.onReady()
          break
        }
      }
    }
  }

}
