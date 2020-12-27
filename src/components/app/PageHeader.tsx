import React, { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'

interface PageHeaderProps {
  children: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }: PageHeaderProps) => {
  return (
    <div style={{ margin: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="h3">Exercise Details</Typography>
          <Typography variant="h5" color="textSecondary">
            This page is the central place to create, edit and delete exercises
          </Typography>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default PageHeader
