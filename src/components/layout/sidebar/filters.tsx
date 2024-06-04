'use client'
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import CustomTypography from "@/components/CustomTypography";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Paper} from "@/components/Paper";
import {useAppStore} from "@/stores/useAppStore";
import {formatEOAAccount} from "@/utils/string";

export const Filters = () => {
    const DAOs = useAppStore((state) => state.DAOs);
    const addresses = useAppStore((state) => state.addresses);

    const handleFilterSubmit = async () => {
        console.log('A')
    };

    return (
        <Paper sx={{padding: '24px 24px 24px 24px'}}>
            <BoxWrapperColumn gap={2}>
                <CustomTypography variant={"h3"}>
                    Filters:
                </CustomTypography>

                <Accordion disableGutters >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <CustomTypography>DAOs</CustomTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            {
                                DAOs.map(((dao: string, index:number) => (
                                    <FormControlLabel
                                        key={index}
                                        control={<Checkbox />}
                                        label={dao}
                                    />
                                )))
                            }
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>

                <Accordion disableGutters >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <CustomTypography>Addresses</CustomTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            {
                                addresses.map(((address: string, index: number) => (
                                    <FormControlLabel
                                        key={index}
                                        control={<Checkbox />}
                                        label={formatEOAAccount(address)}
                                        title={address}
                                    />
                                )))
                            }
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>

                <Button variant="contained" onClick={() => handleFilterSubmit()}>Apply</Button>
            </BoxWrapperColumn>
        </Paper>
    )
}
