import NewChat from "./NewChat";

export default function Sidebar(){
    return(
        <main className="p-2 flex flex-col min-h-screen">
            <div className="flex-1">
                <div className="">
                    {/* {New Chat} */}
                    <NewChat />
                </div>
            </div>
        </main>
    );
}