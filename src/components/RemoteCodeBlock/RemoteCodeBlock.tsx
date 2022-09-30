import axios from 'axios'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import CodeBlock from '@theme/CodeBlock'

export interface RemoteCodeBlockProps {
  readonly url: string
  readonly title?: string
  readonly language?: string
  readonly showLineNumbers?: boolean
}

export const RemoteCodeBlock: FC<RemoteCodeBlockProps> = (props) => {
  const state = useQuery(
    ['github-file', props.url],
    async () => await axios.get<string>(props.url)
  )

  if (state.isLoading) {
    return <>Loading...</>
  } else if (state.isError) {
    return <>{state.error?.toString?.() ?? 'Error'}</>
  } else if (state.isSuccess) {
    return (
      <CodeBlock
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        title={props.title}
      >
        {state.data.data}
      </CodeBlock>
    )
  } else {
    return <>Unknown error</>
  }
}
