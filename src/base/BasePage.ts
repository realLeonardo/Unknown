
export default abstract class BasePage{
  public title: string
  // Use for routing
  public router: string
  // Params
  public params: string
  /*
   * Note: initial function
   */
  public abstract init(): void
}
