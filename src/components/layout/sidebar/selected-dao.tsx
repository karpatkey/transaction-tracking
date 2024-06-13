"use client";
import {CustomPaper} from "@/components/custom-paper";
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";
import {DAOs as DAOsConfig, DAOType} from "@/config/app";
import {useUser} from "@auth0/nextjs-auth0/client";
import { useSearchParams } from "next/navigation";
import {useParams} from "next/dist/client/components/navigation";
import Image from "next/image";
import CustomTypography from "@/components/custom-typography";
import React from "react";

type Props = {
    DAO: DAOType
}
export const SelectedDAO =  ({DAO}: Props) => {

    return (
        <CustomPaper sx={{padding: '24px 24px 24px 24px'}}>
            <BoxWrapperColumn gap={2} sx={{ alignItems: 'center'}}>
                    <BoxWrapperColumn
                        sx={{
                            backgroundColor: 'background.default',
                            width: 'fit-content',
                            minWidth: '200px',
                            p: 2,
                            borderColor: 'primary.main',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <Image
                            src={DAO.icon ?? ''}
                            alt={DAO.name}
                            width={DAO.id === 'Safe<>Gnosis' ? 242 : 124}
                            height={124}
                            key={DAO.icon}
                        />
                        <CustomTypography variant="h3" sx={{textAlign: 'center', mt: 2}}>
                            {DAO.name}
                        </CustomTypography>
                    </BoxWrapperColumn>
            </BoxWrapperColumn>
        </CustomPaper>
    )
}
