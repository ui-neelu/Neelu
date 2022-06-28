import React from "react";
import { useLocation } from "react-router-dom";
import { ConversationMinor, HomeMajor, OrdersMajor, NotificationMajor,CategoriesMajor, PhoneMajor, CircleAlertMajor, PaymentsMajor, QuestionMarkMajor, EmailMajor, CircleInformationMajor} from '@shopify/polaris-icons';
import { Navigation } from "@shopify/polaris";

function Sidenavigation () {
  const location = useLocation();
    return(
        <>
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url:"/",
            label: 'Integrations',
            icon: HomeMajor,
          },
          {
            url:"/Pages/Dashboard",
            label: 'Dashboard',
            icon: HomeMajor,
          },
          {
            url:"/Pages/Queue",
            label: 'Queue',
            icon: CategoriesMajor,
          },
          {
            url: "/Pages/Login",
            label: 'Notification',
            icon: NotificationMajor,
          },
          {
            url:"/Pages/Tablecomponent",
            label: 'Calling',
            icon: PhoneMajor,
          },
          {
            url:"/Pages/Merchantscomponent",
            label: 'Failed Orders',
            icon: CircleAlertMajor,
          },
          {
            url:"/Pages/Abc",
            label: 'Add FAQ',
            icon: QuestionMarkMajor,
          },
          {
            label: 'Latest Updates',
            icon: OrdersMajor,
          },
          {
            label: 'Error Info New Apps',
            icon: CircleInformationMajor,
          },
          {
            label: 'Error Info Old Apps',
            icon: CircleInformationMajor,
          },
          {
            label: 'Emails',
            icon: EmailMajor,
          },
          {
            label: 'SERVICES',
          },
          {
            label: 'Combo Payment',
            icon: PaymentsMajor,
          },
        ]}
        action={{
          icon: ConversationMinor,
          accessibilityLabel: 'Contact support',
        }}
      />
    </Navigation>
    </>
    )
};

export default Sidenavigation;