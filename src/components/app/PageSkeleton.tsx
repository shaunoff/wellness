import React, { ElementType } from 'react'
import { Link, useLocation, Route, Switch } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

export interface PageSkeletonProps {
  name: string
  label: string
  route: string
  SectionIcon: ElementType
  Component: ElementType
  routes: SubRoute[]
}

type SubRoute = Omit<PageSkeletonProps, 'SectionIcon' | 'routes'>

const PageSkeleton: React.FC<PageSkeletonProps> = ({ label, route, SectionIcon, routes }: PageSkeletonProps) => {
  const { pathname } = useLocation()
  return (
    <Box margin="16px">
      <Box display="flex" alignItems="center">
        <SectionIcon color="primary" style={{ fontSize: 32, marginRight: '16px' }} />
        <Typography variant="h3">{label}</Typography>
      </Box>

      <Tabs value={pathname} indicatorColor="primary" textColor="primary">
        {routes.map(({ label, route: subRoute, name }: SubRoute) => (
          <Tab key={name} label={label} component={Link} to={`${route}${subRoute}`} value={`${route}${subRoute}`} />
        ))}
      </Tabs>
      <Switch>
        {routes.map(({ name, route: subRoute, Component }: SubRoute) => (
          <Route key={name} path={`${route}${subRoute}`}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Box>
  )
}

export default PageSkeleton
