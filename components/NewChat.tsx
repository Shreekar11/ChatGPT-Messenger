import { PlusIcon } from "@heroicons/react/24/outline";

export default function NewChat(){
    return (
        <main className=" border-gray-700 border chatRow">
            <PlusIcon className="h-4 w-4"/>
            <p>New Chat</p>
        </main>
    );
}