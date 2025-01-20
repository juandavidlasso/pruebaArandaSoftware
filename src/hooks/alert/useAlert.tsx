import { toast, TypeOptions } from 'react-toastify';

export const useAlert = () => {
    const showAlert = (message: string, type: TypeOptions) =>
        toast(message, {
            type
        });

    return {
        showAlert
    };
};
