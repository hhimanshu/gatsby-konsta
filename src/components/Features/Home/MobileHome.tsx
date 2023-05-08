import {
    Block,
    BlockTitle,
    Button,
    List,
    Link,
    ListItem,
    Navbar,
    Page,
    Icon,
    Panel,
    Toolbar,
    Tabbar, TabbarLink,
} from 'konsta/react';
import {MdClose, MdDensityMedium, MdEmail, MdFileUpload, MdSpaceDashboard, MdToday} from "react-icons/md";
import React, {useState} from "react";
import {MobilePanel} from "../../Mobile/MobilePanel";

export default function MobileHome() {
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

            <Block strong>
                <p>
                    {"Here is your Next.js & Konsta UI app. Let's see what we have here."}
                </p>
            </Block>
            <BlockTitle>Navigation</BlockTitle>
            <List>
                <ListItem href="/about/" title="About"/>
                <ListItem href="/form/" title="Form"/>
            </List>

            <Block strong className="flex space-x-4">
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </Block>
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
                            material={<MdEmail className="w-6 h-6"/>}
                        />
                    }
                    label={'Overview'}
                />
                <TabbarLink
                    active={activeTab === 'tab-3'}
                    onClick={() => setActiveTab('tab-3')}
                    icon={

                        <Icon
                            material={<MdFileUpload className="w-6 h-6"/>}
                        />
                    }
                    label={'Transactions'}
                />
            </Tabbar>
        </Page>
    );
}
