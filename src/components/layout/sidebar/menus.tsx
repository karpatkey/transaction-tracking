"use client";
import {CustomPaper} from "@/components/custom-paper";
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";
import {Link, List, ListItem} from "@mui/material";
import React from "react";

type Props = {
    daoName: string
}

export const Menus = ({daoName}: Props) => {
    const contactUrl = `/contacts/${daoName}`

    return (
        <CustomPaper sx={{padding: '24px 24px 24px 24px'}}>
            <BoxWrapperColumn gap={2}>
                <List>
                    { contactUrl &&
                        <ListItem button key='contacts' sx={{paddingLeft: 0}}>
                            <Link href={contactUrl}>
                                Contacts
                            </Link>
                        </ListItem>
                    }
                    <ListItem button key='daos' sx={{paddingLeft: 0}}>
                        <Link href="/dao">
                            DAOs
                        </Link>
                    </ListItem>
                </List>
            </BoxWrapperColumn>
        </CustomPaper>
    )
}
