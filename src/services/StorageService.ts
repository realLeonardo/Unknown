const STORAGE_KEY_PREFIX = 'unknown'

class Storage {
  public set(data: Partial<StorageData>, callback?: () => void) {
    let key: StorageKey
    for (key in data) {
      try {
        const stringifyValue = JSON.stringify(data[key] || '')
        localStorage.setItem(`${STORAGE_KEY_PREFIX}_${key}`, stringifyValue)
      } catch (error) {
        console.error('设置储存字段失败:', key, data[key])
      }
    }
    if (callback) {
      callback()
    }
  }

  public get<K extends StorageKey>(
    keys: K[],
    callback: (data: Pick<StorageData, K>) => void
  ) {
    const res: Pick<StorageData, K> = {} as any
    for (const key of keys) {
      try {
        const stringifyValue = localStorage.getItem(
          `${STORAGE_KEY_PREFIX}_${key}`
        )
        res[key] = JSON.parse(stringifyValue as string)
      } catch (error) {
        console.error('获取储存字段失败:', key)
      }
    }
    callback(res)
  }
}

export let storage = new Storage()

// 使用示例
// storage.get(['hasShownViolationDetectionTipFlag'], ({ hasShownViolationDetectionTipFlag }) => {
//   if (!hasShownViolationDetectionTipFlag) {
//     this.showViolationDetectionTip = true
//   }
// })
// storage.set({ hasShownDarkModeTipFlag: true })
