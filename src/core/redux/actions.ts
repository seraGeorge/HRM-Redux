import { toast } from "react-toastify";
import { getData } from "../api/functions.ts";
import {
  Data,
  Employee,
  SelectOptionProps,
  TableProps,
} from "../interfaces/interface";
import * as actionTypes from "./actionTypes.ts";
import { transformArrayToOptionsList, transformArrayToSkillOptionsList } from "../../utils/helper.ts";


export const setLoading = (loading: boolean) => ({
  type: actionTypes.SET_LOADING,
  payload: loading,
});
export const setDataEmployees = (dataEmployees: Employee[]) => ({
  type: actionTypes.SET_DATA_EMPLOYEES,
  payload: dataEmployees,
});
export const setEmployees = (employees: Employee[]) => ({
  type: actionTypes.SET_EMPLOYEES,
  payload: employees,
});
export const setDesignations = (designations: SelectOptionProps[]) => ({
  type: actionTypes.SET_DESIGNATIONS,
  payload: designations,
});
export const setDepartments = (departments: SelectOptionProps[]) => ({
  type: actionTypes.SET_DEPARTMENTS,
  payload: departments,
});
export const setEmploymentModes = (employment_modes: SelectOptionProps[]) => ({
  type: actionTypes.SET_EMP_MODES,
  payload: employment_modes,
});
export const setSkills = (skills: SelectOptionProps[]) => ({
  type: actionTypes.SET_SKILLS,
  payload: skills,
});
export const setTableProps = (tableProps: TableProps) => ({
  type: actionTypes.SET_TABLE_PROPS,
  payload: tableProps,
});
export const fetchEmployeeData = () => {
  return async function (dispatch: (arg0: {
    type: string;
    payload: Employee[] | SelectOptionProps[] | TableProps | boolean;
  }) => void) {
    try {
      const response = await getData("/.json");
      const dataResponse: Data = response.data;
      if (dataResponse) {
        dispatch(setDataEmployees(Object.values(dataResponse.employees)));
        dispatch(setEmployees(Object.values(dataResponse.employees)));
        return dataResponse; // Resolve the promise with the data
      } else {
        toast.error("No data is recieved", { toastId: "no-data" });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  }
}

export const fetchFirebaseData = () => {
  return async function (dispatch: (arg0: {
    type: string;
    payload: Employee[] | SelectOptionProps[] | TableProps | boolean;
  }) => void) {

    try {
      const dataResponse = await fetchEmployeeData()(dispatch);
      if (dataResponse) {
        dispatch(setDesignations(transformArrayToOptionsList(dataResponse.designations)));
        dispatch(setDepartments(transformArrayToOptionsList(dataResponse.departments)));
        dispatch(setEmploymentModes(transformArrayToOptionsList(dataResponse.employment_modes)));
        dispatch(setSkills(transformArrayToSkillOptionsList(dataResponse.skills)));
      }
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
    }
  }
};

