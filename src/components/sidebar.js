import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import List from '@mui/material/List';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { styled } from '@mui/material/styles';


const StyleListItemButton = styled(ListItemButton)(({theme}) => ({
    marginBottom: '16px',
    borderRadius: '8px'
}))



function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    const drawer = (
        <div>
            <Box sx={{ display: { lg: 'block', sm: 'none' }, margin: '16px 0' }}>
                <img style={{ width: "220px", marginLeft: "14px" }} src={require("../images/3.png")} alt="" />
            </Box>
            <Box sx={{ display: { lg: 'none', sm: 'flex' }, justifyContent: 'center', margin: '16px 0' }}>
                <img style={{ width: "65px" }} src={require("../images/1.png")} alt="" />
            </Box>
            <List sx={{ padding: { lg: '14px', sm: '0' } }} >
                <StyleListItemButton>
                    <ListItemIcon sx={{ justifyContent: 'center' }}>
                        <HomeRoundedIcon sx={{ fontSize: '30px' }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" sx={{ opacity: { sm: 0, lg: 100 } }} />
                </StyleListItemButton>
                <StyleListItemButton>
                    <ListItemIcon sx={{ justifyContent: 'center' }}>
                        <SearchRoundedIcon sx={{ fontSize: '30px' }} />
                    </ListItemIcon>
                    <ListItemText primary="Search" sx={{ opacity: { sm: 0, lg: 100 } }} />
                </StyleListItemButton>
                <StyleListItemButton>
                    <ListItemIcon sx={{ justifyContent: 'center' }}>
                        <MessageOutlinedIcon sx={{ fontSize: '30px' }} />
                    </ListItemIcon>
                    <ListItemText primary="Messages" sx={{ opacity: { sm: 0, lg: 100 } }} />
                </StyleListItemButton>
                <StyleListItemButton>
                    <ListItemIcon sx={{ justifyContent: 'center' }}>
                        <FavoriteBorderRoundedIcon sx={{ fontSize: '30px' }} />
                    </ListItemIcon>
                    <ListItemText primary="Notifications" sx={{ opacity: { sm: 0, lg: 100 } }} />
                </StyleListItemButton >
                <StyleListItemButton>
                    <ListItemIcon sx={{ justifyContent: 'center' }}>
                        <AddCircleOutlineRoundedIcon sx={{ fontSize: '30px' }} />
                    </ListItemIcon>
                    <ListItemText primary="Create" sx={{ opacity: { sm: 0, lg: 100 } }} />
                </StyleListItemButton>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: "green" }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, marginLeft: '16px' }}
            >
                <MenuIcon />

            </IconButton>
            <Box>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 100 },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none', lg: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 350 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Sidebar.propTypes = {
    window: PropTypes.func,
};

export default Sidebar;