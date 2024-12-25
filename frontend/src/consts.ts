import LPS from "@/assets/icons/tiles/01-LPS.png";
import Free from "@/assets/icons/tiles/02-free.png";
import PLG from "@/assets/icons/tiles/03-PLG.png";
import Shorten from "@/assets/icons/tiles/04-shorten.png";
import TopPerforming from "@/assets/icons/tiles/05-top-performing.png";
import Performance from "@/assets/icons/tiles/06-performance.png";
import Monetization from "@/assets/icons/tiles/07-monetisation.png";
import CustomerBase from "@/assets/icons/tiles/08-customer-base.png";
import Dynamic from "@/assets/icons/tiles/09-dynamic.png";
import Customer from "@/assets/icons/tiles/10-customer.png";
import TopPerformingSalesReps from "@/assets/icons/tiles/11-top-performing.png";
import Lost from "@/assets/icons/tiles/12-lost.png";
import Funnel from "@/assets/icons/tiles/13-funnel.png";
import Forecst from "@/assets/icons/tiles/14-forecast.png";
import Plus from "@/assets/icons/tiles/15-plus.png";
import googlesheets from "@/assets/icons/connectors/googlesheets.png";
import googleanalytics from "@/assets/icons/connectors/googleanalytics.png";
import plausible from "@/assets/icons/connectors/plausible.png";
import mixpanel from "@/assets/icons/connectors/mixpanel.png";
import amplutide from "@/assets/icons/connectors/amplitude.png";
import stripe from "@/assets/icons/connectors/stripe.png";
import lemonsqueezy from "@/assets/icons/connectors/lemonsqueezy.png";
import hubspot from "@/assets/icons/connectors/hubspot.png";
import pipedrive from "@/assets/icons/connectors/pipedrive.png";
import zoho from "@/assets/icons/connectors/zoho.png";
import salesforce from "@/assets/icons/connectors/salesforce.png";
import snowflake from "@/assets/icons/connectors/snowflake.png";
import bigquery from "@/assets/icons/connectors/bigquery.png";
import azure from "@/assets/icons/connectors/azure.png";
import aws from "@/assets/icons/connectors/aws.png";

export const crmTiles = [
    { title: "Google Sheets", description: "Connect your Google Sheets account", icon: googlesheets.src },
    { title: "Google Analytics", description: "Connect your Google Analytics account", icon: googleanalytics.src },
    { title: "AWS", description: "Connect your AWS account", icon: aws.src },
    { title: "Azure", description: "Connect your Azure account", icon: azure.src },
    { title: "Plausible", description: "Connect your Plausible account", icon: plausible.src },
    { title: "Mixpanel", description: "Connect your Mixpanel account", icon: mixpanel.src },
    { title: "Amplitude", description: "Connect your Amplitude account", icon: amplutide.src },
    { title: "Stripe", description: "Connect your Stripe account", icon: stripe.src },
    { title: "Lemonsqueezy", description: "Connect your Lemonsqueezy account", icon: lemonsqueezy.src },
    { title: "HubSpot", description: "Connect your HubSpot account", icon: hubspot.src },
    { title: "Pipedrive", description: "Connect your Pipedrive account", icon: pipedrive.src },
    { title: "Zoho CRM", description: "Connect your Zoho CRM account", icon: zoho.src },
    { title: "Salesforce", description: "Connect your Salesforce account", icon: salesforce.src },
    { title: "Snowflake", description: "Connect your Snowflake account", icon: snowflake.src },
    { title: "BigQuery", description: "Connect your BigQuery", icon: bigquery.src },
];

export const tiles = [
    {
        id: 'lead-performance-by-source',
        title: 'Analyze Lead Performance by Source and Revenue',
        icon: LPS.src,
        url: 'upload'
    },
    {
        id: 'free-to-paid-conversion',
        title: 'See why your free users don\'t convert to paid',
        icon: Free.src,
        url: 'upload'
    },
    {
        id: 'plg-lead-conversion',
        title: 'PLG Lead Conversion  (analyse won deals to optimise)',
        icon: PLG.src,
        url: 'upload'
    },
    {
        id: 'shorten-sales-cycle',
        title: 'Analyze Sales Cycle length',
        icon: Shorten.src,
        url: 'upload'
    },
    {
        id: 'top-performing-geography',
        title: 'Find top performing geography',
        icon: TopPerforming.src,
        url: 'upload'
    },
    {
        id: 'product-performance',
        title: 'Analyze Product Performance by Revenue',
        icon: Performance.src
    },
    {
        id: 'monetization-strategy',
        title: 'Analyze top features and find Monetization Strategy',
        icon: Monetization.src,
        url: 'upload'
    },
    {
        id: 'customer-base-segmentation',
        title: 'Analyze and Segment you Current customer base to drive expansion',
        icon: CustomerBase.src,
        url: 'upload'
    },
    {
        id: 'dynamic-lead-scoring',
        title: 'Create the best Dynamic lead scoring for your my business',
        icon: Dynamic.src,
        url: 'upload'
    },
    {
        id: 'find-ideal-customer-profile',
        title: 'Find your Ideal Customer Profile and bring more value',
        icon: Customer.src,
        url: 'upload'
    },
    {
        id: 'top-performing-sales-reps',
        title: 'Analyze Top Performing Sales Reps',
        icon: TopPerformingSalesReps.src,
        url: 'upload'
    },
    {
        id: 'lost-deals-analysis',
        title: 'Break down Lost Transactions to avoid mistakes',
        icon: Lost.src,
        url: 'upload'
    },
    {
        id: 'state of sales funnel',
        title: 'Current State of the Sales Funnel',
        icon: Funnel.src,
        url: 'upload'
    },
    {
        id: 'forecast-sales-quota',
        title: 'Forecast Revenue Growth',
        icon: Forecst.src,
        url: 'upload'
    },
    {
        id: 'new-scenario',
        title: 'Add your own scenario',
        icon: Plus.src,
        url: 'upload'
    },
];



export const colors = [
    '#2A9D8F', '#E76F51', '#F4A261', '#264653', '#E9C46A', '#8AB17D', '#A3A9AC', '#BC4749'
];