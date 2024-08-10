export async function refreshTokenInterceptor(error, axiosInstance) {
  const originalRequest = error.config;

  if (originalRequest.url.includes("/refresh_token")) {
    console.log(error);
    localStorage.removeItem("token");
    await axiosInstance.delete("/logout");
    window.location.href = "/login";
    return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    return axiosInstance.post("/refresh_token").then(response => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data["token"]);
        return axiosInstance(originalRequest);
      }
    });
  }
  return Promise.reject(error);
}
