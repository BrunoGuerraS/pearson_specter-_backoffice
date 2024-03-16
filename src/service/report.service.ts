import { api } from "../interceptor/private.interceptor";
import { UpdateReportInterface } from "../types/report.type";

export const getAllReportsByStatusService = async (id: string | number) => {
  //type status
  //debe considerarse paginado por fechas
  return await api.get(`/status/${id}`, { withCredentials: true });
};

export const getAllReportsByTypeRerportService = async (
  id: string | number
) => {
  //debe considerarse paginado por fechas
  return await api.get(`/typeReports/${id}`, { withCredentials: true });
};

interface updateRerportService {
  id: string | number;
  data: UpdateReportInterface;
}

export const getReportByIdService = async (id: string | number) => {
  return await api.get(`/reports/${id}`, { withCredentials: true });
}

export const updateRerportService = async ({
  id,
  data,
}: updateRerportService) => {
  return await api.put(`/reports/${id}`, data, { withCredentials: true });
};
