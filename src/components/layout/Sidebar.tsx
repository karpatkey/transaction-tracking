import {Box, Divider, Drawer, Toolbar} from "@mui/material";
import {Menus} from "@/components/layout/sidebar/menus";
import {Filters} from "@/components/layout/sidebar/filters";

export const DRAWER_WIDTH = 340;

const Sidebar = async () => {
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
                <Menus />
                <Divider/>
                <Filters/>
            </Box>
        </Drawer>
    )
}

export default Sidebar
