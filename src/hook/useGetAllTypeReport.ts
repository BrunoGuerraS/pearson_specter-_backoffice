import { useEffect, useState } from "react";
import { api } from "../interceptor/private.interceptor";
import { TypeReportInterface } from "../types/report.type";
import { ls } from "../utils";

export const useGetAllTypeReport = () => {
  const [listOfTypeReport, setListOfTypeReport] = useState<
    TypeReportInterface[] | null
  >([]);
  const token = ls.getItem("token");
  useEffect(() => {
    const trigger = async () => {
      try {
        const res = await api.get("/typeReports", {
          withCredentials: true,
        });
        console.log("res", res);
        const data = res.data;
        setListOfTypeReport(data);
      } catch (error) {
        console.log(error);
        setListOfTypeReport([]);
      }
    };
    trigger();
  }, [token]);

  return { listOfTypeReport };
};
