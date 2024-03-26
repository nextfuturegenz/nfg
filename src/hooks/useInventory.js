import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firestore";

export const useInventory = () => {

    // Product functions
    const getProducts = async () => {

    }
    const getProductDetail = async () => {

    }
    const addProduct = async () => {

    }

    const updateProduct = async () => {

    }

    const removeProduct = async () => {

    }


    // Attributes functions
    const getAttributes = async () => {

    }
    const getAttributeDetail = async () => {

    }

    const addAttribute = async () => {

    }

    const updateAttribute = async () => {

    }

    const removeAttribute = async () => {

    }

    // Categorys function
    const getCategories = async () => {

    }
    const getCategoryDetail = async () => {

    }

    const addCategory = async () => {

    }

    const updateCategory = async () => {

    }

    const removeCategory = async () => {

    }

    return {
        getAttributes,
        addAttribute,
        getAttributeDetail,
        updateAttribute,
        removeAttribute,
        getProducts,
        addProduct,
        getProductDetail,
        updateProduct,
        removeProduct,
        getCategories,
        addCategory,
        getCategoryDetail,
        updateCategory,
        removeCategory
    }
}