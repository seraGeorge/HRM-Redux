import { createContext } from "react";
import { ContextProps } from "../interfaces/interface";

const DataContext = createContext<ContextProps>({
  employees: [],
  departments: [],
  designations: [],
  employment_modes: [],
  skills: [],
  addFilters:() => {}
});

export default DataContext;
