import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import Btn from './Btn';
import { UserPlus } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive?: boolean;
    className?: string;
}

const FollowBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ isActive = false, className = '', ...props }, ref) => {
        return (
            <Btn ref={ref} {...props} icon={UserPlus} className={className}>
                {isActive ? 'Unfollow' : 'Follow'}
            </Btn>
        );
    }
);

FollowBtn.displayName = 'FollowBtn';
export default FollowBtn;
