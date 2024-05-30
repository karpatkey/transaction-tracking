import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <ErrorBoundary fallback={<Error/>}>
            <BoxWrapperColumn sx={{backgroundColor: '#eeeded', height: '100%'}}>
                {children}
            </BoxWrapperColumn>
        </ErrorBoundary>
    );
}
