import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconBell from '../../components/Icon/IconBell';
import IconCode from '../../components/Icon/IconCode';
import IconHome from '../../components/Icon/IconHome';
import IconUser from '../../components/Icon/IconUser';
import IconThumbUp from '../../components/Icon/IconThumbUp';
import IconPhone from '../../components/Icon/IconPhone';
import IconInfoCircle from '../../components/Icon/IconInfoCircle';
import IconSettings from '../../components/Icon/IconSettings';

const General = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('General'));
    });
    const [tabs, setTabs] = useState<string[]>([]);
    const toggleCode = (name: string) => {
        if (tabs.includes(name)) {
            setTabs((value) => value.filter((d) => d !== name));
        } else {
            setTabs([...tabs, name]);
        }
    };

    const [activeTab3, setActiveTab3] = useState<any>(1);

    return (
        <div className="space-y-8 pt-5">
            <div className="grid grid-cols-1">
                {/* Border Top */}
                <div className="panel" id="border">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">General</h5>
                        {/* <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code7')}>
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button> */}
                    </div>
                    <div className="mb-5">
                        <Tab.Group>
                            <Tab.List className="mt-3 flex flex-wrap">
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''}
                                                    ' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                        >
                                            {/* <IconHome className="ltr:mr-2 rtl:ml-2" /> */}
                                            Company information
                                        </button>
                                    )}
                                </Tab>
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`${selected ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]' : ''}
                                                before:inline-block' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                        >
                                            {/* <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" /> */}
                                            General ESG practices
                                        </button>
                                    )}
                                </Tab>
                            </Tab.List>
                            <Tab.Panels>
                                {/* Company information */}
                                <Tab.Panel>
                                    <form className="panel shadow-none">
                                        <div className=" mb-5">
                                            <h5 className="font-semibold text-lg dark:text-white-light">Company information</h5>
                                            {/* <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code4')}>
                                                <span className="flex items-center">
                                                    <IconCode className="me-2" />
                                                    Code
                                                </span>
                                            </button> */}
                                        </div>
                                        <div className="mb-5">
                                            <div className="inline-block w-full">
                                                <div className="relative z-[1]">
                                                    <div
                                                        className={`${activeTab3 === 1 ? 'w-[15%]' : activeTab3 === 2 ? 'w-[48%]' : activeTab3 === 3 ? 'w-[81%]' : ''}
                                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
                                                    ></div>
                                                    <ul className="mb-5 grid grid-cols-3">
                                                        <li className="mx-auto">
                                                            <button
                                                                type="button"
                                                                className={`${activeTab3 === 1 ? '!border-primary !bg-primary text-white' : ''}
                                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                                                onClick={() => setActiveTab3(1)}
                                                            >
                                                                <span className="text-lg font-semibold">1</span>
                                                                {/* <IconHome /> */}
                                                            </button>
                                                        </li>
                                                        <li className="mx-auto">
                                                            <button
                                                                type="button"
                                                                className={`${activeTab3 === 2 ? '!border-primary !bg-primary text-white' : ''}
                                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                                                onClick={() => setActiveTab3(2)}
                                                            >
                                                                <span className="text-lg font-semibold">2</span>
                                                                {/* <IconUser className="w-5 h-5" /> */}
                                                            </button>
                                                        </li>
                                                        <li className="mx-auto">
                                                            <button
                                                                type="button"
                                                                className={`${activeTab3 === 3 ? '!border-primary !bg-primary text-white' : ''}
                                                                bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                                                onClick={() => setActiveTab3(3)}
                                                            >
                                                                <span className="text-lg font-semibold">3</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="flex items-center cursor-pointer">
                                                            <span className="text-white-dark">Or toggle this other custom radio</span>
                                                            <input type="radio" name="custom_radio2" className="form-radio" />
                                                        </label>
                                                    </div>
                                                    <p className="mb-5">{activeTab3 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

                                                    <p className="mb-5">{activeTab3 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

                                                    <p className="mb-5">{activeTab3 === 3 && 'Wonderful transition effects.'}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <button type="button" className={`btn btn-primary ${activeTab3 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab3(activeTab3 === 3 ? 2 : 1)}>
                                                        Back
                                                    </button>
                                                    <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab3(activeTab3 === 1 ? 2 : 3)}>
                                                        {activeTab3 === 3 ? 'Finish' : 'Next'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Tab.Panel>
                                {/* General ESG practices */}
                                <Tab.Panel>
                                    <div>
                                        <div className="flex items-start pt-5">
                                            <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                                                <img src="/assets/images/profile-34.jpeg" alt="img" className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark" />
                                            </div>
                                            <div className="flex-auto">
                                                <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                                                <p className="text-white-dark">
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default General;
