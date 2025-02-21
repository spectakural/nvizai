import ChatContainer from '@/components/chat/ChatContainer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">nViz.ai</h1>
        <ChatContainer />
      </div>
    </main>
  );
}