import { api } from "../interceptor/private.interceptor";

export const getAllTypeReportService = async () => {
  return await api.get("/typeReports", {
    withCredentials: true,
  });
};
