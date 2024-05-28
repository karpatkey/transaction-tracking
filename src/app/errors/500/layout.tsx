"use client";
import BoxWrapperColumn from "@/components/wrappers/BoxWrapperColumn";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <BoxWrapperColumn>
            {children}
        </BoxWrapperColumn>
    );
}
