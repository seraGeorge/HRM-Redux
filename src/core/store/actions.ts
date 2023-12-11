import { toast } from "react-toastify";
import { getData } from "../api/functions.ts";
import {
  Data,
  Employee,
  SelectOptionProps,
  TableProps,
} from "../interfaces/interface.ts";
import * as actionTypes from "./actionTypes.ts";
import {
  transformArrayToOptionsList,
  transformArrayToSkillOptionsList,
} from "../../utils/helper.ts";
import { Dispatch } from "redux";
import employmentModes from "../constants/employmentModes.ts";
import apiUrls from "../constants/apiUrls.ts";

//loading
export const setLoading = (loading: boolean) => ({
  type: actionTypes.SET_LOADING,
  payload: loading,
});

//employees
export const setEmployees = (employeesData: {
  employees: Employee[];
  count: number;
}) => ({
  type: actionTypes.SET_EMPLOYEES,
  payload: employeesData,
});

//dropdwon
export const setRoles = (designations: SelectOptionProps[]) => ({
  type: actionTypes.SET_ROLES,
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

//fetch methods
export const fetchEmployeesData = () => {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(setLoading(true));
      const response = await getData(apiUrls.employees);
      dispatch(setEmployees(response.data.data));
      // return dataResponse; // Resolve the promise with the data
    } catch (error) {
      toast.error("No data is recieved", { toastId: "no-data" });
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const fetchDropdownData = () => {
  return function (dispatch: Dispatch) {
    
      getData(apiUrls.departments)
        .then((reponse) => dispatch(setDepartments(reponse.data)))
        .catch((error) => {
          toast.error("Error message to be added");
          console.error("Error fetching dropdown data:", error);
        });
      getData(apiUrls.skills)
        .then((reponse) => dispatch(setSkills(reponse.data.data)))
        .catch((error) => {
          toast.error("Error message to be added");
          console.error("Error fetching dropdown data:", error);
        });
      getData(apiUrls.roles)
        .then((reponse) => dispatch(setRoles(reponse.data)))
        .catch((error) => {
          toast.error("Error message to be added");
          console.error("Error fetching dropdown data:", error);
        });
      dispatch(setEmploymentModes(employmentModes))
      const dataResponse = await fetchEmployeeData()(dispatch);
      if (dataResponse) {
        dispatch(
          setDesignations(
            transformArrayToOptionsList(dataResponse.designations)
          )
        );
        dispatch(
          setDepartments(transformArrayToOptionsList(dataResponse.departments))
        );
        dispatch(
          setEmploymentModes(
            transformArrayToOptionsList(dataResponse.employment_modes)
          )
        );
        dispatch(
          setSkills(transformArrayToSkillOptionsList(dataResponse.skills))
        );
      }
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
    }
  };
};
