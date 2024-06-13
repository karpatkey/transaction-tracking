"use client";
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";
import {DAOs, DAOType} from "@/config/app";
import CustomTypography from "@/components/custom-typography";
import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface Props {
    DAO: DAOType
}

export const DAO = ({ DAO }: Props) => {
    const router = useRouter()
    return (
        <BoxWrapperColumn sx={{
                backgroundColor: 'background.default',
                width: 'fit-content',
                minWidth: '200px',
                borderRadius: '10px',
                p: 2,
                border: '1px solid',
                borderColor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }}
            onClick={() => router.push(`/dao/${DAO.name}`)}
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
    )
}
