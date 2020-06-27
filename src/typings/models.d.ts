/**
 * 有用声明来自server的api返回值中的数据格式
 */

declare namespace Models {
  interface BaseModel {
    id: string
    createAt: TimestampSec
  }

  interface Note extends BaseModel {
    title: string
    content: HtmlString
    updateAt: TimestampSec
  }
}