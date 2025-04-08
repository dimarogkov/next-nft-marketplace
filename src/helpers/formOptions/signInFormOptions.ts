import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup
    .object({
        email: yup.string().trim().required('Missing email').email('Invalid email format'),
        password: yup.string().trim().required('Missing password').min(6, 'Your password must be minimum 6'),
    })
    .required();

export const signInFormOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        email: '',
        password: '',
    },
};
