import {Box, Drawer, List, ListItem, ListItemText, Toolbar} from "@mui/material";

export const DRAWER_WIDTH = 240;

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: DRAWER_WIDTH, boxSizing: 'border-box', boxShadow: 'none'},
            }}
        >
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar
