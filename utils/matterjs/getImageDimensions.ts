export const getImageDimensions = async (
  url: string
): Promise<{ width: number; height: number }> => {
  return await new Promise((resolve) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      resolve({ width: image.width, height: image.height });
    };
    image.onerror = (err) => {
      console.error(err);
      resolve({ width: 0, height: 0 });
    };
  });
};
