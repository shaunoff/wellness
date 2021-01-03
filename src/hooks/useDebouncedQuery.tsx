import React from 'react'
import { DocumentNode, useLazyQuery, QueryTuple, OperationVariables, QueryHookOptions } from '@apollo/client'
import debounce from 'lodash/debounce'

// eslint-disable-next-line
export default function useDebouncedQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
  time = 600,
): QueryTuple<TData, TVariables> {
  const [doQuery, { ...rest }] = useLazyQuery<TData, TVariables>(query, options)
  const debouncedQuery = React.useCallback(debounce(doQuery, time), [])
  return [
    debouncedQuery,
    {
      ...rest,
    },
  ]
}
