import React from 'react'
import PageSkeleton, { PageSkeletonProps } from '../app/PageSkeleton'

import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined'

const Test: React.FC = () => <div>fgdjfdhjgfhjdsgfhj</div>

const Calendar: React.FC = () => <PageSkeleton {...calendarMap} />

export const calendarMap: PageSkeletonProps = {
  name: 'calendar',
  label: 'Calendar',
  route: '/calendar',
  SectionIcon: DateRangeOutlinedIcon,
  Component: Calendar,
  routes: [
    {
      name: 'week',
      label: 'Week',
      Component: Test,
      route: '',
    },
    {
      name: 'month',
      label: 'Month',
      route: '/month',
      Component: Test,
    },
  ],
}

export default Calendar
