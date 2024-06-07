import BoxWrapperColumn from "@/components/wrappers/box-wrapper-column";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <BoxWrapperColumn>
            {children}
        </BoxWrapperColumn>
    );
}
