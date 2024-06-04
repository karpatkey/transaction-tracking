import {
    Box, Checkbox,
    Drawer, FormControlLabel, FormGroup,
    Toolbar
} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTypography from "@/components/CustomTypography";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {Paper} from "@/components/Paper";
import {getSession} from "@auth0/nextjs-auth0";
import {redirect} from "next/navigation";

export const DRAWER_WIDTH = 240;

const Sidebar = async () => {
    const session = await getSession()
    const user = session?.user
    const error = session?.error

    if (error) redirect('/500')

    const roles = user?.['http://localhost:3000/roles']
        ? (user?.['http://localhost:3000/roles'] as unknown as string[])
        : []

    const DAOs = roles

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
                <Paper sx={{padding: '24px 24px 24px 24px'}}>
                    <BoxWrapperColumn gap={2}>
                        <CustomTypography variant={"body1"}>
                            Filters:
                        </CustomTypography>

                    </BoxWrapperColumn>

                </Paper>
            </Box>
        </Drawer>
    )
}

export default Sidebar
