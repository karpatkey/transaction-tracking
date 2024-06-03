import CircularProgress from '@mui/material/CircularProgress'
import * as React from 'react'
import BoxContainerWrapper from "@/components/wrappers/BoxContainerWrapper";

const Loading = () => {
  return (
      <BoxContainerWrapper
          sx={{
            backgroundColor: 'palette.background.default',
            height: `calc(100vh - 194px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        <CircularProgress color="primary" />
      </BoxContainerWrapper>
  )
}

export default Loading
