const fakeTime = async (time: number) => {
  return await new Promise<void>((r) => setTimeout(r, time));
};

export default fakeTime;
