import { Header } from "@/components/ui/Header";
export default async function phLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div className="mx-auto min-h-screen bg-black text-white flex flex-col overflow-auto">
            <Header />
            {children}
        </div>
    );
}