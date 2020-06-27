interface StorageData {
  /** 文章数据 */
  savedArticleData: Models.Note[]
}

type StorageKey = keyof StorageData
