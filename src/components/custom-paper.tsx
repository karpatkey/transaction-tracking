"use client";
import { styled } from '@mui/material'
import MuiPaper, { PaperProps } from '@mui/material/Paper'
import { FC } from 'react'

const StyledPaper = styled(MuiPaper)(() => ({
  backgroundColor: 'background.paper',
  border: '0px solid #00000000',
  boxShadow: '0px 0px 0px 0px #00000000'
}))

export const CustomPaper: FC<PaperProps> = (props) => {
  return <StyledPaper {...props} />
}
