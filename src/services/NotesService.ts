/**
 * 服务层：与数据相关联，供给给视图层调用
 * Design Pattern: Single Pattern 单例模式
 */
import { storage } from './StorageService'

const DEFAULT_ARTICLE_CONTENT = '<p contenteditable="true">Edit here</p>'

export default class NotesService {
  public notes: Models.Note[]
  public currentNote: Models.Note

  private observerCb: Function[]
  private static noteService: NotesService

  private hasInited: boolean = false

  private constructor() {
    // do nothing
  }

  /**
   * 获取实例
   */
  public static getNoteService() {
    if (!this.noteService) {
      this.noteService = new NotesService()
    }
    return this.noteService
  }

  public async init() {
    if (this.hasInited) {
      return
    }

    this.notes = await this.getAll()

    if (this.notes.length > 0) {
      this.currentNote = this.notes[0]
    } else {
      await this.create()
    }

    this.hasInited = true
  }

  public async create() {
    const note: Models.Note = {
      id: this.genId(),
      title: 'Untitled',
      content: DEFAULT_ARTICLE_CONTENT,
      createAt: Date.now(),
      updateAt: Date.now()
    }

    this.notes.unshift(note)
    await this.save()
    this.currentNote = note
  }

  public save(): Promise<void> {
    return new Promise((resolve, reject) => {
      const currentIndex = this.notes.indexOf(this.currentNote)

      this.notes[currentIndex] = this.currentNote

      try {
        storage.set({ savedArticleData: this.notes }, () => {
          resolve()
        })
      } catch (error) {
        reject('数据保存失败')
      }
    })
  }

  private getAll(): Promise<Models.Note[]> {
    return new Promise((resolve, reject) => {
      storage.get(['savedArticleData'], ({ savedArticleData }) => {
        if (savedArticleData) {
          resolve(savedArticleData)
        } else {
          resolve([])
        }
      })
    })
  }

  public getNoteById(id: string) {
    for (const item of this.notes) {
      if (item.id === id) {
        return item
      }
    }

    return undefined
  }

  public async deleteCurrentNode() {
    const currentIndex = this.notes.indexOf(this.currentNote)
    this.notes.splice(currentIndex, 1)

    await this.save()
    if (this.notes.length > 0) {
      this.currentNote = this.notes[0]
    } else {
      await this.create()
    }
  }

  public getCurrentNoteIndex(): number {
    return this.notes.indexOf(this.currentNote)
  }

  private genId(): string {
    return Date.now().toString(16)
  }
}
