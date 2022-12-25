export const APIurl = "https://20a4d1385484.ngrok.io/api/2209-ftb-ct-web-pt";
export const PostApiCall = async ({ token }) => {
  const respone = await fetch(`${APIurl}/posts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const apiPost = await respone.json();
  if (!apiPost.success) {
    throw apiPost.error.message;
  }
  console.log(apiPost);
  return apiPost.data;
};
