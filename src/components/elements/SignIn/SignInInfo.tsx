import { USER_DATA } from '@/src/variables';

const SignInInfo = () => {
    const { email, password } = USER_DATA;

    return (
        <span className='flex flex-col gap-1 w-full'>
            <span className='block font-medium'>You Can Use Test Account</span>
            <span className='block'>Email: {email}</span>
            <span className='block'>Password: {password}</span>
        </span>
    );
};

export default SignInInfo;
