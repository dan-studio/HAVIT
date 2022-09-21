import { useDispatch } from "react-redux";
import { setLayout } from "@redux/layout";
import { useEffect } from "react";
import { resetLayout } from "../redux/layout";

const MypageEdit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLayout({ showHeader: false }));
        return () => {
            dispatch(resetLayout());
        };
    }, []);

    return <>sdsd</>;
};

export default MypageEdit;
