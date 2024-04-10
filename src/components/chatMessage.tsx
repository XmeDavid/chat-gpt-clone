import { ChatEntry, Content } from "@/app/page"


export default function ChatMessage({ chatEntry}: { chatEntry: ChatEntry}) {

    const getComponent = (content: Content):JSX.Element => {
        if(content.contentType === 'image'){
            return (
                <img src={content.content}></img>
            )
        }
        return (
            <span>{content.content}</span>
        )
    }

    if(chatEntry.isBot){
        return (
            <div className="flex items-center justify-end gap-4">
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 p-4 flex-1">
                {
                    chatEntry.contents.map(content => getComponent(content))
                }
              </div>
              <img
                alt="ChatGPT"
                className="rounded-full"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
            </div>
        )
    }
    return (
        <div className="flex items-center gap-4">
        <img
          alt="User"
          className="rounded-full"
          height={40}
          src="/placeholder.svg"
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
          width={40}
        />
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 p-4 flex-1">
          { chatEntry.contents[0].content }
        </div>
      </div>
    )
};

