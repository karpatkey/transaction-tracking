import {Paper} from "@/components/Paper";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {Link, List, ListItem} from "@mui/material";

export const Menus = () => {
    return (
        <Paper sx={{padding: '24px 24px 24px 24px'}}>
            <BoxWrapperColumn gap={2}>
                <List>
                    <ListItem button key='contacts' sx={{paddingLeft: 0}}>
                        <Link href="/src/components/layout/sidebar/menues">
                            Contacts
                        </Link>
                    </ListItem>
                    <ListItem button key='transactions' sx={{paddingLeft: 0}}>
                        <Link href="/transactions">
                            Transactions
                        </Link>
                    </ListItem>
                </List>
            </BoxWrapperColumn>
        </Paper>
    )
}
