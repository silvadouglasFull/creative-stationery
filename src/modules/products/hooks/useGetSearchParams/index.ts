import type { UseGetSearchParams } from "@modules/products/hooks/useGetSearchParams/types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const useGetSearchParams = (queryParamsKey: string): UseGetSearchParams => {
    const { search } = useLocation()
    const [params, setParams] = useState<string>('')
    useEffect(() => {
        const finCategory = () => {
            if (search) {
                const params = new URLSearchParams(search);
                const queryParams = params.get(queryParamsKey);
                setParams(queryParams ?? '')
            } else {
                setParams('')
            }
        }
        finCategory()
    }, [search])
    return params
}