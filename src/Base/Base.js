import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton,
     ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableRowsIcon from '@mui/icons-material/TableRows';
import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import '../Base/Base.css'



const Base = ({title,description,children}) => {
  
const history = useHistory();
  
    const drawerWidth = 200;
  return (
<div>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Link onClick={()=>history.push("/")}>
          <Typography variant="h6" noWrap component="div">
          <HomeIcon  />  ADMIN DASHBOARD
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer className="Drawer"
    
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar/>
        <Box sx={{ overflow: 'auto' }}>
          <List>
              
              <ListItem  disablePadding>
                <ListItemButton   onClick={()=>history.push("/components")} >
                  <ListItemIcon>
                  <ManageAccountsIcon/>
                  </ListItemIcon >Components
                  <ListItemText/>
                </ListItemButton>
              </ListItem>
              
        
              
              <ListItem  disablePadding>
                <ListItemButton onClick={()=>history.push("/utilities")}>
                  <ListItemIcon>
                  <BuildIcon/>
                  </ListItemIcon>Utilities
                  <ListItemText/>
                </ListItemButton>
              </ListItem>
            
          </List>
          <Divider />
          <List>
          
              <ListItem  disablePadding>
                <ListItemButton onClick={()=>history.push("/pages")}>
                  <ListItemIcon>
                  <FolderIcon/>
                  </ListItemIcon>Pagination
                  <ListItemText/>
                </ListItemButton>
              </ListItem>
              

              
              <ListItem  disablePadding>
                <ListItemButton onClick={()=>history.push("/charts")}>
                  <ListItemIcon>
                  <InsertChartIcon/>
                  </ListItemIcon>Ratings
                  <ListItemText/>
                </ListItemButton>
              </ListItem>
            

              
              <ListItem  disablePadding>
                <ListItemButton onClick={()=>history.push("/tables")}>
                  <ListItemIcon>
                  <TableRowsIcon/>
                  </ListItemIcon>Tables
                  <ListItemText/>
                </ListItemButton>
              </ListItem>
              
          </List>
        </Box>
      </Drawer>
      <Box className='main-comp' component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
     
    <div className="main-component">
            <header>
                <h1 className ="heading">{title}</h1>
            </header>
            <main className="main-segment">
                <h2>{description}</h2>
                <div className="child-segment">
                    {children}
                </div>
            </main>
        </div>
        </Typography>
      </Box>
    </Box>

    </div>
    
  )
}

export default Base
