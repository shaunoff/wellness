import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'
import { PageSkeletonProps } from './PageSkeleton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: '32px',
    },
    item: {
      textDecoration: 'none',
      '&:hover': {
        background: theme.palette.secondary.main,
      },
    },
    text: {
      textDecoration: 'none',
      color: 'rgba(0,0,0,0.26)',
    },
    activeText: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
    activeItem: {
      textDecoration: 'none',
      borderLeft: `3px ${theme.palette.primary.main} solid`,
      '&:hover': {
        background: theme.palette.secondary.main,
      },
    },
  }),
)

interface SidebarProps {
  sections: PageSkeletonProps[]
}

const Sidebar: React.FC<SidebarProps> = ({ sections }: SidebarProps) => {
  const { pathname } = useLocation()
  const classes = useStyles()
  return (
    <Paper
      style={{ margin: '16px 0px 0px 16px', padding: '16px 0px', minHeight: 'calc( 100vh - 130px)' }}
      elevation={1}
    >
      <List component="nav" className={classes.root}>
        {sections.map(({ label, name, route, SectionIcon }) => (
          <NavLink to={`${route}`} className={classes.item} key={name}>
            <ListItem button className={clsx(pathname.includes(route) && classes.activeItem, classes.item)}>
              <ListItemIcon>
                <SectionIcon color={pathname.includes(route) ? 'primary' : 'disabled'} />
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  variant: 'h6',
                  className: pathname.includes(route) ? classes.activeText : classes.text,
                }}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Paper>
  )
}

export default Sidebar
