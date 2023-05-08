import {Card, Icon, Link, Navbar, Page, Tabbar, TabbarLink,} from 'konsta/react';
import {MdDensityMedium, MdEmojiFoodBeverage, MdOutlineFavorite} from "react-icons/md";
import React, {useState} from "react";
import {MobilePanel} from "../../Mobile/MobilePanel";
import {Foods} from "../../../lib/types";

export default function MobileHome({foods}: { foods: Foods }) {
    const [leftFloatingPanelOpened, setLeftFloatingPanelOpened] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState('tab-1');

    return (
        <Page>
            <Navbar title="Popular foods" centerTitle left={<Link navbar iconOnly>
                <Icon
                    material={<MdDensityMedium onClick={() => setLeftFloatingPanelOpened(true)}/>}
                />

            </Link>}
            />
            <MobilePanel isOpen={leftFloatingPanelOpened} onClick={setLeftFloatingPanelOpened}/>

            {foods.map(food => <Card outline>
                <p className={`text-md font-medium py-2`}>{food.name}</p>
                <p className="text-xs font-normal text-slate-500 uppercase">{food.category}</p>
            </Card>)}

            <Tabbar
                labels
                icons
                //labels={isTabbarLabels}
                //icons={isTabbarIcons}
                className="left-0 bottom-0 fixed"
            >
                <TabbarLink
                    active={activeTab === 'tab-1'}
                    onClick={() => setActiveTab('tab-1')}
                    icon={

                        <Icon
                            material={<MdEmojiFoodBeverage className="w-6 h-6"/>}
                        />
                    }
                    label={'Foods'}
                />
                <TabbarLink
                    active={activeTab === 'tab-3'}
                    onClick={() => setActiveTab('tab-3')}
                    icon={

                        <Icon
                            material={<MdOutlineFavorite className="w-6 h-6"/>}
                        />
                    }
                    label={'Nutrition'}
                />
            </Tabbar>
        </Page>
    );
}
