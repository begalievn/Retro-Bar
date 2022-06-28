const token = localStorage.token;

export const config = {
  headers: {
    Authorization: `Bearer ${token && JSON.parse(token).accessToken}`,
  },
};
