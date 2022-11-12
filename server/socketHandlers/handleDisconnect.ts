export default function handleDisconnect(connected: Set<string>) {
  return (id: string) => {
    connected.delete(id);
    console.log(`User [${id}] disconnected.`);
  };
}
