import {CustomPaper} from "@/components/custom-paper";
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";
import {Link, List, ListItem} from "@mui/material";

export const Menus = () => {
    return (
        <CustomPaper sx={{padding: '24px 24px 24px 24px'}}>
            <BoxWrapperColumn gap={2}>
                <List>
                    <ListItem button key='contacts' sx={{paddingLeft: 0}}>
                        <Link href="/contacts">
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
        </CustomPaper>
    )
}
