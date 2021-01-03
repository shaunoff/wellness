import React from 'react'
import PageSkeleton, { PageSkeletonProps } from '../app/PageSkeleton'

import HotelIcon from '@material-ui/icons/Hotel'

const Test: React.FC = () => <div>fgdjfdhjgfhjdsgfhj</div>

const Sleep: React.FC = () => <PageSkeleton {...sleepMap} />

export const sleepMap: PageSkeletonProps = {
  name: 'sleep',
  label: 'Sleep',
  route: '/sleep',
  SectionIcon: HotelIcon,
  Component: Sleep,
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
      route: '/logs',
      Component: Test,
    },
  ],
}

export default Sleep
