const isClient = typeof window !== "undefined";

return <div>{isClient ? <ClientComponent /> : <ServerComponent />}</div>;
