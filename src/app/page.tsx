import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-36 max-md:p-10">
      <div className="h-96 flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Meet Prompt</h1>
        <div className="text-zinc-700 dark:text-zinc-300 font-light text-lg max-md:text-sm">프롬프트 엔지니어링은 AI에게 우리가 원하는 대답을 얻기 위해 필요한 기술입니다.<br/>
          이 곳에서는 프롬프트 작성의 노하우를 공유하며, 이를 통해 프롬프트 활용의 효과를 극대화하는 방법을 알아봅니다. 프롬프트 엔지니어링은 AI가 우리의 의도를 이해하고 그에 맞는 응답을 반환하는데 중요한 역할을 합니다.<br/>
          프롬프트를 효과적으로 사용하려면 몇 가지 기본 원칙을 이해해야 합니다. 먼저, 프롬프트는 질문의 형태로 제시되어야하며, AI에게 어떤 응답을 기대하는지 명확하게 알려줘야 합니다. 또한, 프롬프트는 AI가 이해할 수 있는 언어로 작성되어야하며 너무 복잡하지 않아야 합니다.
          이런 원칙들을 기억에 두고 프롬프트를 작성할 때, AI는 우리의 질문에 대해 보다 정확하고 유용한 답변을 제공할 수 있습니다.<br/>
          이 곳에서 프롬프트 작성 노하우를 배우며 AI의 세계를 보다 깊이 있게 탐험해보세요!
        </div>
        <div className="self-end flex flex-row gap-2">
          <button className="rounded-lg bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-500 dark:hover:bg-zinc-600 text-white px-7 py-2 text-lg font-light">
            <Link href="/archive">Archive</Link>
          </button>
          <button className="rounded-lg border border-zinc-800 text-zinc-800 dark:text-zinc-300 dark:border-zinc-300 px-7 py-2 text-lg font-light">Contact</button>
        </div>
      </div>
    </main>
  );
}
