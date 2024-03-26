import { createBrowserRouter } from "react-router-dom";
import {
    Homepage,
    Blog,
    BlogDetail,
    About,
    Contact,
    FAQ,
    TNC,
    FusionPOS,
    SuperKiosk,
    Login,
    Dashboard,
    Customers,
    Reports,
    PosSalesPanel,
    Inventory,
    Categories,
    Attributes,
    Products,
    AccessControl,
    Documentation,
    Employees,
    Suppliers,
    PurchaseOrder,
    SaleOrder,
    OrganisationONBD,
    VerifyIdentityONBD,
    SelectPlanONBD,
    Register
} from '../pages';
import {
    AppLayout,
    HomeLayout,
    OnboardingLayout
} from '../layout';
import { ProtectedRoute } from "./protectedRoutes";
// import { inventoRoutes, MiniDashboard } from "@nextfuturegenz/invento-client";

const appChildRoutes = [
    {
        path: "dashboard",
        index: true,
        element: <Dashboard />,
    },
    {
        path: "customers",
        element: <Customers />,
    },
    {
        path: "report/:type",
        element: <Reports />,
    },
    {
        path: "pos-sales-panel",
        element: <PosSalesPanel />,
    },
    // {
    //     path: "inventory",
    //     element: <MiniDashboard />,
    //     children : inventoRoutes
    // },
    {
        path: "inventory",
        element: <Inventory />,
        children: [
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "attributes",
                element: <Attributes />,
            },
            {
                path: "products",
                element: <Products />,
            },
        ]
    },
    {
        path: "access-control",
        element: <AccessControl />,
    },
    {
        path: "documentation",
        element: <Documentation />,
    },
    {
        path: "employees/:action",
        element: <Employees />,
    },
    {
        path: "suppliers",
        element: <Suppliers />,
    },
    {
        path: "purchase-orders",
        element: <PurchaseOrder />,
    },
    {
        path: "sale-orders",
        element: <SaleOrder />,
    },
]

const homeChildRoutes = [
    {
        index: true,
        element: <Homepage />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "blogs",
        element: <Blog />,
    },
    {
        path: "blog/:slag",
        element: <BlogDetail />,
    },
    {
        path: "fusionpos",
        element: <FusionPOS />,
    },
    {
        path: "superkiosk",
        element: <SuperKiosk />,
    },
    {
        path: "faq",
        element: <FAQ />,
    },
    {
        path: "tnc",
        element: <TNC />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
]

const onBoardingChildRoutes = [
    {
        path: "organisation",
        element: <OrganisationONBD />,
    },
    {
        path: "verify-identity",
        element: <VerifyIdentityONBD />,
    },
    {
        path: "select-plan",
        element: <SelectPlanONBD />,
    },
]

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: homeChildRoutes
    },
    {
        path: "/app",
        element: <ProtectedRoute children={<AppLayout />} />,
        children: appChildRoutes
    },
    {
        path: "/onboarding",
        element: <ProtectedRoute children={<OnboardingLayout />} />,
        children: onBoardingChildRoutes
    },
]);

export default Router