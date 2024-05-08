export async function GET() {
  await delay(1000);

  return Response.json([
    { id: 1, name: 'kim' },
    { id: 2, name: 'kang' },
  ]);
}

const delay = async (t: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
};
