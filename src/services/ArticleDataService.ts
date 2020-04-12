import { storage } from './StorageService'

export default class ArticleDataService {
  public static getById(id: string): Promise<ArticleDataTypes.ArticleData | null> {
    return new Promise((resolve, reject) => {
      storage.get(['savedArticleData'], ({ savedArticleData }) => {
        savedArticleData.forEach((item) => {
          if (item.id === id) {
            resolve(item)
          }
        })
        reject(null)
      })
    })
  }

  public static getAll(): Promise<ArticleDataTypes.ArticleData[]> {
    return new Promise((resolve, reject) => {
      storage.get(['savedArticleData'], ({ savedArticleData }) => {
        if (savedArticleData) {
          resolve(savedArticleData)
        } else {
          reject([])
        }
      })
    })
  }

  public static setById(article: ArticleDataTypes.ArticleData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      storage.get(['savedArticleData'], ({ savedArticleData }) => {
        if (savedArticleData) {
          for (let item of savedArticleData) {
            if (item.id === article.id) {
              item = article
              storage.set({ savedArticleData })
              resolve(true)
            }
          }
        }
        reject(false)
      })
    })
  }
}
