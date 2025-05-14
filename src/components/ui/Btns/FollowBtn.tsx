import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import Btn from './Btn';
import { UserMinus, UserPlus } from 'lucide-react';
import { EnumBtn } from '@/src/types/enums';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive?: boolean;
    className?: string;
}

const FollowBtn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ isActive = false, className = '', ...props }, ref) => {
        return (
            <Btn
                ref={ref}
                {...props}
                icon={isActive ? UserMinus : UserPlus}
                btnType={isActive ? EnumBtn.purple : EnumBtn.outline}
                className={className}
            >
                {isActive ? 'Unfollow' : 'Follow'}
            </Btn>
        );
    }
);

FollowBtn.displayName = 'FollowBtn';
export default FollowBtn;
