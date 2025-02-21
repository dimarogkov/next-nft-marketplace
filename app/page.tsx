import { EnumBtn, EnumText, EnumTitle } from '@/src/types/enums';
import {
    Btn,
    BtnLink,
    Checkbox,
    ErrorMessage,
    Input,
    InputPassword,
    Label,
    Radio,
    Text,
    Title,
} from '@/src/components/ui';
import { User } from 'lucide-react';

const HomePage = () => {
    return (
        <section className='relative w-full mt-10'>
            <Title className='mb-3 last:mb-0'>NFT Marketplace</Title>

            <Title titleType={EnumTitle.h2} className='mb-3 last:mb-0'>
                NFT Marketplace
            </Title>

            <Title titleType={EnumTitle.h3} className='mb-3 last:mb-0'>
                NFT Marketplace
            </Title>

            <Title titleType={EnumTitle.h4} className='mb-3 last:mb-0'>
                NFT Marketplace
            </Title>

            <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat asperiores temporibus facere, sapiente
                est necessitatibus provident id quaerat quod quam ad consectetur saepe at voluptatibus tempore,
                laudantium, in debitis iure!
            </Text>

            <Text className='mb-5 last:mb-0'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat asperiores temporibus facere, sapiente
                est necessitatibus provident id quaerat quod quam ad consectetur saepe at voluptatibus tempore,
                laudantium, in debitis iure!
            </Text>

            <div className='flex flex-col gap-2 w-full mb-5 last:mb-0'>
                <Btn>Get Started</Btn>
                <Btn btnType={EnumBtn.outline}>Get Started</Btn>
                <Btn disabled>Get Started</Btn>

                <Btn icon={User}>Get Started</Btn>
                <Btn btnType={EnumBtn.outline} icon={User}>
                    Get Started
                </Btn>
                <Btn icon={User} disabled>
                    Get Started
                </Btn>
            </div>

            <span className='relative block w-full h-0.5 bg-gray mb-5 last:mb-0' />

            <div className='flex flex-col gap-2 w-full mb-5 last:mb-0'>
                <BtnLink href='/'>Get Started</BtnLink>
                <BtnLink href='/' btnType={EnumBtn.outline}>
                    Get Started
                </BtnLink>

                <BtnLink href='/' icon={User}>
                    Get Started
                </BtnLink>
                <BtnLink href='/' btnType={EnumBtn.outline} icon={User}>
                    Get Started
                </BtnLink>
            </div>

            <form className='flex flex-col gap-5 w-full sm:max-w-xl'>
                <Label className='flex flex-col gap-2'>
                    <Input placeholder='Username' />
                    <ErrorMessage>Some Error</ErrorMessage>
                </Label>

                <Label className='flex flex-col gap-2'>
                    <Input type='number' placeholder='Age' />
                    <ErrorMessage>Some Error</ErrorMessage>
                </Label>

                <Label className='flex flex-col gap-2'>
                    <Input type='email' placeholder='Email' />
                    <ErrorMessage>Some Error</ErrorMessage>
                </Label>

                <Label className='flex flex-col gap-2'>
                    <Input placeholder='Phone' />
                    <ErrorMessage>Some Error</ErrorMessage>
                </Label>

                <Label className='flex flex-col gap-2'>
                    <InputPassword placeholder='Password' autoComplete='Password' />
                    <ErrorMessage>Some Error</ErrorMessage>
                </Label>

                <Label className='flex flex-col gap-2'>
                    <InputPassword placeholder='Confirm Password' autoComplete='Confirm Password' />
                    <ErrorMessage>Some Error</ErrorMessage>
                </Label>

                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex gap-4 w-full'>
                        <Label className='w-full'>
                            <Radio isChecked='' value='type_one' label='Type One' />
                        </Label>

                        <Label className='w-full'>
                            <Radio isChecked='type_two' value='type_two' label='Type Two' />
                        </Label>
                    </div>

                    <ErrorMessage>Some Error</ErrorMessage>
                </div>

                <Label className='flex flex-col gap-2'>
                    <Checkbox isChecked={false} label='Remember me' />
                    <Checkbox isChecked={true} label='Remember me' />
                    <ErrorMessage>Some Error</ErrorMessage>
                </Label>

                <div className='flex flex-wrap gap-2 w-full'>
                    <Btn type='submit'>Send</Btn>
                    <Btn type='button' disabled>
                        Reset
                    </Btn>
                </div>
            </form>
        </section>
    );
};

export default HomePage;
