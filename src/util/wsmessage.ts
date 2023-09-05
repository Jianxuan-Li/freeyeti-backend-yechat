export const wsmessage = (event: string, data: any) => {
  return JSON.stringify({
    event,
    data,
  });
};
