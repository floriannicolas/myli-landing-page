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

export default function ChatBlock({
  chatInfo
}: {
  chatInfo: ChatInfo;
}) {
  let lastAuthorType: 'client' | 'myli' | null = null;
  const marginLeftClass = 'ml-auto';

  return (
    <div className="relative bg-white rounded-2xl p-6 flex flex-col h-full">
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
              className={`flex max-w-[80%] rounded-2xl py-3 px-4 ${marginClass} ${
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
      <div className="mt-auto pt-8 flex items-center gap-3">
        <img
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
