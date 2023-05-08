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

export default function MobileHome() {
    const [leftFloatingPanelOpened, setLeftFloatingPanelOpened] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState('tab-1');

    return (
        <Page>
            <Navbar title="MB" centerTitle left={<Link navbar iconOnly>
                <Icon
                    material={<MdDensityMedium onClick={() => setLeftFloatingPanelOpened(true)}/>}
                />

            </Link>}/>
            <Panel
                side="left"
                opened={leftFloatingPanelOpened}
                onBackdropClick={() => setLeftFloatingPanelOpened(false)}
            >
                <Page>
                    <Navbar
                        title="Left Panel"
                        right={
                            <Link navbar
                                  iconOnly

                                  onClick={() => setLeftFloatingPanelOpened(false)}
                            >
                                <Icon material={<MdClose/>}/>
                            </Link>
                        }
                    />
                    <Block className="space-y-4">
                        <p>Here comes left panel.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut
                            leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in
                            lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
                            lacinia venenatis dignissim. Suspendisse non nisl semper tellus
                            malesuada suscipit eu et eros. Nulla eu enim quis quam elementum
                            vulputate. Mauris ornare consequat nunc viverra pellentesque.
                            Aenean semper eu massa sit amet aliquam. Integer et neque sed
                            libero mollis elementum at vitae ligula. Vestibulum pharetra sed
                            libero sed porttitor. Suspendisse a faucibus lectus.
                        </p>
                    </Block>
                </Page>
            </Panel>
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
    )
        ;
}
