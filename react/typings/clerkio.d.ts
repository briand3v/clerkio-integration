interface ClerkOrderAPI {
  sale: string
  products: Array<{
    id: string
    quantity: number
    price: number
  }>
  email: string
}

type ContentParamArgs = Record<string, string | string[] | undefined>

type DataProps = Record<string, string | string[] | undefined>

/**
 * This is the Object returned by Clerk
 * @see https://docs.clerk.io/docs/clerkjs-content#dynamic-changes
 */
type ClerkContentInterfaceObject = {
  /**
   * Load more results
   */
  more: (number?: number) => void
  /**
   * Setter/getter
   * When passed two arguments or an object it will cause a re-render of the content.
   */
  param: (args: string | ContentParamArgs, optionalSetter?: string) => void
  /**
   * The HTML Element of the Content container.
   */
  element: HTMLElement
  /**
   * Id for the Clerk content (e.g. "category-page-popular" )
   */
  id: string
}
