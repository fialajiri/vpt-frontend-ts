export const createFileFromUrl = async (url: string) => {
  const response = await fetch(url);
  console.log(response);
  const data = await response.blob();
  const file = new File([data], "test.jpg");
  return file;
};
