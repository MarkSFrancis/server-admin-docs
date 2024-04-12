import { errToString } from '@site/src/lib/errToString'
import React, { type ReactElement, type ReactNode } from 'react'
import { type UseQueryResult } from '@tanstack/react-query'
import Admonition from '@theme/Admonition'

export interface QueryGuardProps<T = unknown> {
  state: UseQueryResult<T>
  children?: ReactNode | ((data: T) => ReactNode)
}

/**
 * Hides the children unless the `state`'s `isSuccess` is `true`. Displays any errors if `state`'s `isError` is `true`
 */
export function QueryGuard<T>(props: QueryGuardProps<T>): ReactElement {
  if (props.state.isLoading) {
    return (
      <Admonition type="info" title="Loading...">
        Please wait...
      </Admonition>
    )
  } else if (props.state.isError) {
    return (
      <Admonition type="danger" title="Error">
        {errToString(props.state.error)}
      </Admonition>
    )
  } else if (props.state.isSuccess) {
    if (typeof props.children === 'function') {
      return <>{props.children(props.state.data)}</>
    } else {
      return <>{props.children}</>
    }
  } else {
    return <>Unknown error</>
  }
}
