'use client'
import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";
import CustomTypography from "@/components/custom-typography";
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
import {CustomPaper} from "@/components/custom-paper";
import {Filter} from "@/stores/use-app-store";
import {formatEOAAccount} from "@/utils/string";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React from "react";
import {useAppStore} from "@/providers/app-provider";
import BoxWrapperRow from "@/components/wrappers/box-wrapper-row";

export const Filters = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const DAOs = useAppStore(state => state.DAOs);
    const addresses = useAppStore(state => state.addresses);

    const [localAddresses, setLocalAddresses] = React.useState<Filter[]>([]);
    const [localDAOs, setLocalDAOs] = React.useState<Filter[]>([]);

    React.useEffect(() => {
        setLocalAddresses(addresses);
        setLocalDAOs(DAOs);
    }, [addresses, DAOs]);

    const handleFilterSubmit = async () => {
        const addresses = localAddresses.filter(address => address.selected).map(address => address.value)
        const DAOs = localDAOs.filter(dao => dao.selected).map(dao => dao.value)

        const params = new URLSearchParams(searchParams);

        if(addresses.length > 0) {
            params.set('addresses', addresses.join(','))
        } else {
            // remove addresses from search params
            params.delete('addresses')
        }
        if(DAOs.length > 0) {
            params.set('daos', DAOs.join(','))
        } else {
            // remove DAOs from search params
            params.delete('daos')
        }

        router.push(`${pathname}?${params.toString()}`)
    };

    const handleCheckboxAddressesChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let newAddresses = [...addresses];
        newAddresses[index].selected = event.target.checked;
        setLocalAddresses(newAddresses);
    };

    const handleCheckboxDAOsChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        let newDAOs = [...DAOs];
        newDAOs[index].selected = event.target.checked;
        setLocalDAOs(newDAOs);
    }

    return (
        <CustomPaper sx={{padding: '24px 24px 24px 24px'}}>
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
                                localDAOs.map((({ value, selected}: Filter, index:number) => (
                                    <FormControlLabel
                                        key={index}
                                        control={<Checkbox checked={selected} onChange={handleCheckboxDAOsChange(index)} />}
                                        label={value}
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
                                localAddresses.map((({ value, selected}: Filter, index: number) => (
                                    <FormControlLabel
                                        key={index}
                                        control={<Checkbox checked={selected} onChange={handleCheckboxAddressesChange(index)} />}
                                        label={formatEOAAccount(value)}
                                        title={value}

                                    />
                                )))
                            }
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <BoxWrapperRow sx={{justifyContent: 'flex-end'}} gap={"20px"}>
                    <Button variant="contained" onClick={() => router.push(pathname)}>Clear</Button>
                    <Button variant="contained" onClick={() => handleFilterSubmit()}>Apply</Button>
                </BoxWrapperRow>

            </BoxWrapperColumn>
        </CustomPaper>
    )
}
