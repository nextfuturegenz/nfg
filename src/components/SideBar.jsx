import { useState } from "react";
import {
    Sidebar, Menu, MenuItem, SubMenu, menuClasses
} from "react-pro-sidebar";
import { Typography, SidebarHeader, Badge, Switch, SidebarFooter } from "./common";
import { Diamond, BarChart, Book, Calendar, Global, InkBottle } from "./icons";
import { Link } from "react-router-dom";


const themes = {
    light: {
        sidebar: {
            backgroundColor: '#ffffff',
            color: '#607489',
        },
        menu: {
            menuContent: '#fbfcfd',
            icon: '#0098e5',
            hover: {
                backgroundColor: '#c5e4ff',
                color: '#44596e',
            },
            disabled: {
                color: '#9fb6cf',
            },
        },
    },
    dark: {
        sidebar: {
            backgroundColor: '#0b2948',
            color: '#8ba1b7',
        },
        menu: {
            menuContent: '#082440',
            icon: '#59d0ff',
            hover: {
                backgroundColor: '#00458b',
                color: '#b6c8d9',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
    cfl: {
        sidebar: {
            backgroundColor: '#fff',
            color: '#000000',
        },
        menu: {
            menuContent: '#fcd307',
            icon: '#000000',
            hover: {
                backgroundColor: '#fcd307',
                color: '#000000',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
};

const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const SideBar = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);
    const [rtl, setRtl] = useState(false);
    const [hasImage, setHasImage] = useState(false);
    const [theme, setTheme] = useState('cfl');

    // handle on RTL change event
    const handleRTLChange = (e) => {
        setRtl(e.target.checked);
    };

    // handle on theme change event
    const handleThemeChange = (e) => {
        setTheme(e.target.checked ? 'cfl' : 'light');
    };

    // handle on image change event
    const handleImageChange = (e) => {
        setHasImage(e.target.checked);
    };

    const menuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: themes[theme].menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
                    : 'transparent',
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
                color: themes[theme].menu.hover.color,
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    };

    return (
        <div style={{ display: 'flex', height: '100%', direction: rtl ? 'rtl' : 'ltr' }}>
            <Sidebar
                collapsed={collapsed}
                toggled={toggled}
                onBackdropClick={() => setToggled(false)}
                onBreakPoint={setBroken}
                rtl={rtl}
                breakPoint="md"
                backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
                rootStyles={{
                    color: themes[theme].sidebar.color,
                }}
            >
                <div style={!collapsed ? { display: 'flex', flexDirection: 'column', height: '100%', position: 'fixed', overflowY: 'scroll' } : { display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <SidebarHeader onClick={() => setCollapsed(!collapsed)} rtl={rtl} style={{ marginBottom: '24px', marginTop: '20px', marginLeft: '16px' }} />
                    <div style={{ flex: 1, marginBottom: '32px' }}>
                        {!collapsed ? <div style={{ padding: '0 24px', marginBottom: '8px' }}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                            >
                                General
                            </Typography>
                        </div>
                            : <></>
                        }
                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem
                                label="Dashboard"
                                icon={<Diamond />}
                                component={<Link to={'/app/dashboard'} />}
                                suffix={
                                    <Badge variant="danger" shape="circle">
                                        6
                                    </Badge>
                                }
                            > Dashboard</MenuItem>
                            <MenuItem
                                label="POS Sales Panel"
                                icon={<Diamond />}
                                component={
                                    <Link to={'/app/pos-sales-panel'} />
                                }
                            > POS Panel</MenuItem>

                            <SubMenu label="Inventory" icon={<Global />} component={<Link to={'/app/inventory'} />}>
                                <MenuItem component={<Link to={'/app/inventory/categories'} />}> Categories</MenuItem>
                                <MenuItem component={<Link to={'/app/inventory/attributes'} />}> Attributes</MenuItem>
                                <MenuItem component={<Link to={'/app/inventory/products'} />}> Products</MenuItem>
                            </SubMenu>
                            <SubMenu label="People" icon={<InkBottle />}>
                                <SubMenu label="Employees">
                                    <MenuItem component={<Link to={'/app/employees/list'} />}> List</MenuItem>
                                    <MenuItem component={<Link to={'/app/employees/attendence'} />}> Attendence</MenuItem>
                                </SubMenu>
                                <MenuItem component={<Link to={'/app/suppliers'} />}> Suppliers</MenuItem>
                                <MenuItem component={<Link to={'/app/customers'} />}> Customers</MenuItem>
                            </SubMenu>
                            <SubMenu label="Orders" icon={<Diamond />}>
                                <MenuItem component={<Link to={'/app/sale-orders'} />}> Sales</MenuItem>
                                <MenuItem component={<Link to={'/app/purchase-orders'} />}> Purchase</MenuItem>
                            </SubMenu>
                            <SubMenu label="Integrations" disabled icon={<InkBottle />}>
                                <MenuItem> Payment</MenuItem>
                                <MenuItem> Apps</MenuItem>
                                <MenuItem> Devices</MenuItem>
                            </SubMenu>
                            <SubMenu label="Payment" disabled icon={<InkBottle />}>
                                <MenuItem> Transactions</MenuItem>
                                <MenuItem> Refunds</MenuItem>
                            </SubMenu>
                            <SubMenu
                                label="Reports"
                                icon={<BarChart />}
                            >
                                <MenuItem
                                    component={<Link to={'/app/report/sales'} />}
                                > Sales</MenuItem>
                                <MenuItem component={<Link to={'/app/report/employees'} />}
                                > Employees</MenuItem>
                            </SubMenu>
                        </Menu>

                        {!collapsed ? <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                            >
                                Extra
                            </Typography>
                        </div>
                            : <></>
                        }

                        <Menu menuItemStyles={menuItemStyles}>
                            <MenuItem
                                label="RABAC"
                                icon={<Calendar />}
                                suffix={<Badge variant="success">New</Badge>}
                                component={<Link to={'/app/access-control'} />}
                            > Access Control</MenuItem>
                            <MenuItem icon={<Book />} component={<Link to={'/app/documentation'} />}>Documentation</MenuItem>
                            <MenuItem disabled icon={<InkBottle />}>
                                IOT $ Hardware
                            </MenuItem>
                            <SubMenu label="Setting" icon={<Global />}>
                                <MenuItem>
                                    <Switch
                                        id="theme"
                                        checked={theme === 'cfl'}
                                        onChange={handleThemeChange}
                                        label="Theme"
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <Switch
                                        id="collapse"
                                        checked={collapsed}
                                        onChange={() => setCollapsed(!collapsed)}
                                        label="Collapse"
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <Switch id="image" checked={hasImage} onChange={handleImageChange} label="Image" />
                                </MenuItem>
                                <MenuItem>
                                    <Switch id="rtl" checked={rtl} onChange={handleRTLChange} label="RTL" />
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>
                    <SidebarFooter collapsed={collapsed} />
                </div>
            </Sidebar>

            <main style={{ backgroundColor: '#f1f0f0', width: '100%' }}>
                <div style={{ margin: '16px' }}>
                    {children}
                </div>
            </main>
        </div>
    );
};


{/* <div style={{ padding: '16px 24px', color: '#44596e' }}>
                    <div style={{ marginBottom: '16px' }}>
                        {broken && (
                            <button className="sb-button" onClick={() => setToggled(!toggled)}>
                                Toggle
                            </button>
                        )}
                    </div>

                    <div style={{ padding: '0 8px' }}>
                        <div style={{ marginBottom: 16 }}>
                            <Switch
                                id="collapse"
                                checked={collapsed}
                                onChange={() => setCollapsed(!collapsed)}
                                label="Collapse"
                            />
                        </div>

                        <div style={{ marginBottom: 16 }}>
                            <Switch id="rtl" checked={rtl} onChange={handleRTLChange} label="RTL" />
                        </div>

                        <div style={{ marginBottom: 16 }}>
                            <Switch
                                id="theme"
                                checked={theme === 'dark'}
                                onChange={handleThemeChange}
                                label="Dark theme"
                            />
                        </div>

                        <div style={{ marginBottom: 16 }}>
                            <Switch id="image" checked={hasImage} onChange={handleImageChange} label="Image" />
                        </div>
                    </div>
                </div> */}