import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <BoxWrapperColumn sx={{ backgroundColor: '#eeeded', height: '100%'}}>
            {children}
        </BoxWrapperColumn>
    );
}
