import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List
        component="nav"
      >
        <ListItem button onClick={() => console.log('Featured')}>
          Event starts iN
        </ListItem>

        <ListItem button onClick={() => console.log('Venue NFO')}>
          Venue NFO
        </ListItem>

        <ListItem button onClick={() => console.log('Highlights')}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => console.log('Pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log('Location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer
