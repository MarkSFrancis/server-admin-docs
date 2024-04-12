import axios from 'axios'
import React, { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import CodeBlock from '@theme/CodeBlock'
import { QueryGuard } from '../QueryGuard/QueryGuard'

export interface RemoteCodeBlockProps {
  readonly url: string
  readonly title?: string
  readonly language?: string
  readonly showLineNumbers?: boolean
}

export const RemoteCodeBlock: FC<RemoteCodeBlockProps> = (props) => {
  const state = useQuery({
    queryKey: ['github-file', props.url],
    queryFn: async () => await axios.get<string>(props.url),
  })

  return (
    <QueryGuard state={state}>
      {(response) => (
        <CodeBlock
          language={props.language}
          showLineNumbers={props.showLineNumbers}
          title={props.title}
        >
          {response.data}
        </CodeBlock>
      )}
    </QueryGuard>
  )
}
