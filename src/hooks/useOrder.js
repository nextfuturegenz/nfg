import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firestore";

export const useOrder = () => {

    // Order functions
    const getOrders = async () => {

    }
    const getOrderDetail = async () => {

    }
    const addOrder = async () => {

    }

    const updateOrder = async () => {

    }

    const removeOrder = async () => {

    }

    return {
        getOrders,
        addOrder,
        getOrderDetail,
        updateOrder,
        removeOrder,
    }
}