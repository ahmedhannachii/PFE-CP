import React from 'react';
import { graphql, Mutation } from 'react-apollo';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GET_CATEGORIES from '../graphql/getCategories';

const ITEM_HEIGHT = 48;

function LongMenu({data}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleSelect(titre) {
    console.log(titre)
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {
          data.categories && data.categories.map(category => (
            <MenuItem key={category.id} onClick={()=>handleSelect(category.titre)}>
              {category.titre}
            </MenuItem>
          ))
        }
      </Menu>
    </div>
  );
}

export default graphql(GET_CATEGORIES)(LongMenu);