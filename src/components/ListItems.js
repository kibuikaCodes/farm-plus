import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black'}}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Zones ( Zone1 )" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none', color: 'black'}}>
      <ListItem button >
        <ListItemIcon>
          {/* <ShoppingCartIcon /> */}
        </ListItemIcon>
        <ListItemText primary="MarketPlace" />
      </ListItem>
    </Link>
    
    <ListItem button>
      <ListItemIcon>
        {/* <PeopleIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Partners" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        {/* <LayersIcon /> */}
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
  </div>
);

