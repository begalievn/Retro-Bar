export const token = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : "{}";
export const isAdmin = JSON.parse(token!);


export const config = {
  headers: {
    Authorization: `Bearer ${token && JSON.parse(token)}`,
  },
};
