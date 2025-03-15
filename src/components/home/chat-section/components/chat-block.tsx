import Image from 'next/image';

export type ChatInfo = {
  client: {
    label: string;
    image: string;
    name: string;
    position: string;
  };
  clientColor: string;
  milyColor: string;
  messages: {
    text: string;
    author: 'client' | 'myli';
  }[];
};

export default function ChatBlock({ chatInfo }: { chatInfo: ChatInfo }) {
  let lastAuthorType: 'client' | 'myli' | null = null;
  const marginLeftClass = 'ml-auto';

  return (
    <div className="relative flex h-full flex-col rounded-2xl bg-white p-6">
      <div className="flex flex-col items-start gap-2">
        {chatInfo.messages.map((message, index) => {
          const marginClass =
            lastAuthorType !== null && lastAuthorType !== message.author
              ? 'mt-6'
              : '';
          lastAuthorType = message.author;
          return (
            <div
              key={index}
              className={`flex max-w-[80%] rounded-2xl px-4 py-3 ${marginClass} ${
                message.author === 'myli' ? marginLeftClass : ''
              } ${
                message.author === 'client'
                  ? chatInfo.clientColor
                  : chatInfo.milyColor
              }`}
            >
              {message.text}
            </div>
          );
        })}
      </div>
      <div className="mt-auto flex items-center gap-3 pt-8">
        <Image
          alt={chatInfo.client.label}
          src={chatInfo.client.image}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="flex flex-col text-xs">
          <span>{chatInfo.client.name}</span>
          <span>{chatInfo.client.position}</span>
          <span>{chatInfo.client.label}</span>
        </div>
      </div>
    </div>
  );
}
