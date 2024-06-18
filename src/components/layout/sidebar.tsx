import {Box, Divider, Drawer, Toolbar} from "@mui/material";
import {Menus} from "@/components/layout/sidebar/menus";
import {Filters} from "@/components/layout/sidebar/filters";
import {SelectedDAO} from "@/components/layout/sidebar/selected-dao"
import {DAOType} from "@/config/app";

export const DRAWER_WIDTH = 340;

type Props = {
    withFilters?: boolean;
    DAO: DAOType
}

const Sidebar = ({ withFilters = true, DAO }: Props) => {
    return (
        <Box
            component="nav"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: { sm: 0 },
                '&::-webkit-scrollbar': {
                    width: '5px',
                    padding: '10px',
                    margin: '10px'
                },
                '::-webkit-scrollbar-thumb': {
                    background: '#d3d3d3'
                },
                '::-webkit-scrollbar-track': {
                    background: '#f1f1f1'
                }
            }}
        >
            <Drawer
                variant="permanent"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: DRAWER_WIDTH, boxSizing: 'border-box', boxShadow: 'none'},
                }}
            >
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <SelectedDAO DAO={DAO} />
                    <Divider/>
                    <Menus daoName={DAO.name}/>
                    {withFilters && <Divider/>}
                    {withFilters && <Filters/>}
                </Box>
            </Drawer>
        </Box>
    )
}

export default Sidebar
