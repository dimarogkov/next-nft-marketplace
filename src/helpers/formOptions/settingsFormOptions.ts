import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup
    .object({
        name: yup.string().trim().required('Missing name'),
        surname: yup.string().trim().required('Missing surname'),
        email: yup.string().trim().required('Missing email').email('Invalid email format'),
        bio: yup.string().trim().nullable(),
        facebook: yup.string().trim().nullable(),
        twitter: yup.string().trim().nullable(),
        instagram: yup.string().trim().nullable(),
    })
    .required();

export const settingsFormOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        name: '',
        surname: '',
        email: '',
        bio: '',
        facebook: '',
        twitter: '',
        instagram: '',
    },
};
