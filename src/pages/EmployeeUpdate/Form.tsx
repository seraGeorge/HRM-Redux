import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/Button/Button.tsx";
import ButtonGrpWrapper from "../../components/Button/buttonGrpWrapper.ts";
import Input from "../../components/Input/Input.tsx";
import SelectList from "../../components/Select/SelectList.tsx";
import {
  convertToFormEmployee,
  defaultFormVal,
  getNewEmpId,
  getNewEmployeeDetails,
  getUrlType,
  resetSelects,
} from "../../utils/helper.ts";
import { Fieldset, InputRow } from "./form.ts";
import { useContext } from "react";
import DataContext from "../../core/store/DataContext.tsx";
import {
  Employee,
  FormEmployee,
  TableProps,
} from "../../core/interfaces/interface.ts";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { updateData } from "../../core/api/functions.ts";
import { toast } from "react-toastify";

function Form() {
  const {
    employees,
    tableProps,
    addTableProps,
    addEmployees,
    fetchDataAndSetContext,
  } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  const urlType = getUrlType(location.pathname);

  const defaultValues = defaultFormVal();

  const [searchParams] = useSearchParams();

  let employeeId: string | null,
    employee: Employee | undefined,
    formEmployee: FormEmployee;

  if (urlType === "edit-employee") {
    employeeId = searchParams.get("employeeId");
    employee = employees.find((emp) => emp && emp.id === employeeId);

    formEmployee = employee
      ? convertToFormEmployee(employee)
      : defaultValues;
  } else {
    employeeId = null;
    formEmployee = defaultValues;
  }

  const currentDate = new Date().toISOString().split("T")[0];

  const methods = useForm<FormEmployee>({
    mode: "onChange",
    defaultValues: formEmployee,
  });

  const onReset = () => {
    const resettedTableProps: TableProps = {
      ...resetSelects(),
      sort: tableProps.sort,
    };
    methods.reset(defaultValues);
    addTableProps(resettedTableProps);
  };

  const onSubmit = methods.handleSubmit(async () => {
    const newEmployee = getNewEmployeeDetails(methods.getValues());

    if (!employee) {
      const newEmployeeToAdd = { ...newEmployee, id: getNewEmpId(employees) };
      try {
        const response = await updateData(
          `/employees/${employees.length}.json`,
          newEmployeeToAdd
        );
        console.log("Employee added successfully");

        // Update the state with the new employee
        addEmployees([...employees, response.data]);

        // Display toast for success state
        toast.success(`Added user ${newEmployeeToAdd.emp_name}`, {
          toastId: "add-toast-id",
        });
      } catch (error) {
        toast.error("Error adding new user");
        console.error("Error submitting form:", error);
      } finally {
        navigate(`/`);
        fetchDataAndSetContext();
      }
    } else {
      const employeeEdited = { ...newEmployee, id: employee.id };
      const employeeIndex = employees.findIndex(
        (employee) => employee && employee.id === employeeId
      );

      try {
        const response = await updateData(
          `/employees/${employeeIndex}.json`,
          employeeEdited
        );
        console.log("Employee edited successfully");

        // Update the state with the edited employee
        const updatedEmployees = employees.map((currentEmployee) =>
          currentEmployee && currentEmployee.id === employeeId
            ? response.data
            : currentEmployee
        );
        addEmployees([...updatedEmployees]);

        // Display toast for success state
        toast.success(`Edited user ${employeeEdited.emp_name}`, {
          toastId: "edit-toast-id",
        });
      } catch (error) {
        toast.error("Error editing user");
        console.error("Error submitting form:", error);
      } finally {
        navigate(`/`);
        fetchDataAndSetContext();
      }
    }
  });

  return (
    <main className="main-section global-width">
      <FormProvider {...methods}>
        <form
          className="global-width"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <h2>
            {!employee ? "Add New Employee" : `Edit Employee ${employee.id}`}
          </h2>
          <Fieldset className="form-details ">
            <legend className="subheading">Personal Information</legend>

            <Input
              validation={{
                pattern: {
                  value: RegExp("^[A-Za-z ]*[A-Za-z][A-Za-z ]*$"),
                  message: "This is an invalid value",
                },
                minLength: {
                  value: 2,
                  message: "min 2 characters",
                },
              }}
              label="Name"
              type="text"
              name="emp_name"
            />
            <InputRow className="common-flex">
              <Input
                validation={{
                  pattern: {
                    value: RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
                    message: "This is an invalid value",
                  },
                }}
                label="Email"
                type="email"
                name="email"
              />
              <Input
                validation={{
                  pattern: {
                    value: RegExp("^[0-9]{10}$"),
                    message:
                      "Phone number must be 10 digits with no alphabets.",
                  },
                }}
                label="Phone Number"
                type="tel"
                name="phone"
              />
            </InputRow>
            <Input
              validation={{
                minLength: {
                  value: 2,
                  message: "min 2 characters",
                },
              }}
              label="Address"
              type="textarea"
              name="address"
            />
            <InputRow className="common-flex">
              <Input
                validation={{
                  max: {
                    value: currentDate,
                    message: "This is an invalid value",
                  },
                }}
                label="Date of Birth"
                type="date"
                name="date_of_birth"
              />
              <Input
                validation={{
                  max: {
                    value: currentDate,
                    message: "This is an invalid value",
                  },
                }}
                label="Date of Joining"
                type="date"
                name="date_of_joining"
              />
            </InputRow>
            <Input
              label="Gender"
              type="radio"
              options={["Male", "Female", "Other"]}
              name="gender"
            />
          </Fieldset>
          <Fieldset className="other-details ">
            <legend className="subheading">Other Information</legend>
            <SelectList />
          </Fieldset>
          <ButtonGrpWrapper>
            <Button icon="" onClick={onReset}>
              Clear
            </Button>
            <Button icon="" onClick={onSubmit}>
              Submit
            </Button>
          </ButtonGrpWrapper>
        </form>
      </FormProvider>
    </main>
  );
}
export default Form;
