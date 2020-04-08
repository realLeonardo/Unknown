interface StorageData {
  /** 文章数据 */
  savedArticleData: ArticleDataTypes.ArticleData[],
  /** 标题推荐提示文案 */
  titleAssistantBored: string
  /** 缓存在 localStorage 中的文章数据 */
  hasShownTitleAssistantTipFlag: boolean
  /** 是否完成了了解会员功能任务 */
  finishedVipTaskForLearnVipFeatureUserList: { [key: string]: boolean }
}

type StorageKey = keyof StorageData
