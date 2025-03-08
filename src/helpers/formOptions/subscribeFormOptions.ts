import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup
    .object({
        email: yup.string().trim().required('Missing email').email('Invalid email format'),
    })
    .required();

export const subscribeFormOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        email: '',
    },
};
