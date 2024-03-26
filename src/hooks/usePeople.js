import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firestore";

export const usePeople = () => {

    // employee functions
    const getEmployees = async () => {

    }
    const getEmployeeDetail = async () => {

    }
    const addEmployee = async () => {

    }

    const updateEmployee = async () => {

    }

    const removeEmployee = async () => {

    }


    // customers functions
    const getCustomers = async () => {

    }
    const getCustomerDetail = async () => {

    }

    const addCustomer = async () => {

    }

    const updateCustomer = async () => {

    }

    const removeCustomer = async () => {

    }

    // suppliers function
    const getSuppliers = async () => {

    }
    const getSupplierDetail = async () => {

    }

    const addSupplier = async () => {

    }

    const updateSupplier = async () => {

    }

    const removeSupplier = async () => {

    }

    return {
        getCustomers,
        addCustomer,
        getCustomerDetail,
        updateCustomer,
        removeCustomer,
        getEmployees,
        addEmployee,
        getEmployeeDetail,
        updateEmployee,
        removeEmployee,
        getSuppliers,
        addSupplier,
        getSupplierDetail,
        updateSupplier,
        removeSupplier
    }
}