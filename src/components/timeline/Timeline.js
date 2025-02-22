const Timeline = ({ messages }) => {
  return (
    <div className="w-full bg-zinc-300 h-full my-auto flex justify-center items-center">
      <div className="timeline-diagram">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

        {JSON.stringify(messages)}
      </div>
    </div>
  );
};

export default Timeline;
