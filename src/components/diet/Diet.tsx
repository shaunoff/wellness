import React from 'react'
import PageSkeleton, { PageSkeletonProps } from '../app/PageSkeleton'

import FastfoodIcon from '@material-ui/icons/Fastfood'

const Test: React.FC = () => <div>fgdjfdhjgfhjdsgfhj</div>

const Diet: React.FC = () => <PageSkeleton {...dietMap} />

export const dietMap: PageSkeletonProps = {
  name: 'diet',
  label: 'Diet',
  route: '/diet',
  SectionIcon: FastfoodIcon,
  Component: Diet,
  routes: [
    {
      name: 'dashboard',
      label: 'Dashboard',
      Component: Test,
      route: '',
    },
    {
      name: 'logs',
      label: 'Logs',
      route: '/month',
      Component: Test,
    },
  ],
}

export default Diet
