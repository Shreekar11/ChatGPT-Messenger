import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/Auth";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { authState: session } = useAuth();

  // useSWR to get model
  const model = "gpt-3.5-turbo";

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    if (!session) return;

    // if somehow no answerType Settings are there, give default value
    const answerStyleRef = doc(
      db,
      "users",
      session?.user?.email!,
      "settings",
      "answerType"
    );

    const answerStyleSnapshot = await getDoc(answerStyleRef);
    const answerStyle = answerStyleSnapshot.data();
    console.log(answerStyle);

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.profilePic ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
        answerStyle,
      }),
    }).then(() => {
      // Toast notification successful
      toast.success("ChatGPT has responded!", {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-3 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />

        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div>{/* ModelSelection */}</div>
    </div>
  );
}

export default ChatInput;
