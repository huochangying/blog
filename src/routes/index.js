import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import Loadable from 'react-loadable'
import loading from 'component/loading/index.jsx'

const FinanceFundDay = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceFundDay" */ 'page/finance/finance-fund-day/index.jsx'),
        loading,
    }),
    FinanceFundDaySave = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceFundDaySave" */ 'page/finance/finance-fund-day/save.jsx'),
        loading,
    }),
    FinanceMonth = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceMonth" */ 'page/finance/finance-month/index.jsx'),
        loading,
    }),
    FinanceMonthSave = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceMonthSave" */ 'page/finance/finance-month/save.jsx'),
        loading,
    }),
    FinanceMonthDetail = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceMonthDetail" */ 'page/finance/finance-month/detail.jsx'),
        loading,
    }),
    FinanceJinEMonth = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceJinEMonth" */ 'page/finance/finance-jine-month/index.jsx'),
        loading,
    }),
    FinanceJinEMonthSave = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceJinEMonthSave" */ 'page/finance/finance-jine-month/save.jsx'),
        loading,
    }),
    FinanceJinEMonthDetail = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceJinEMonthDetail" */ 'page/finance/finance-jine-month/detail.jsx'),
        loading,
    }),
    FinancePaymentQuery = Loadable({
        loader: () => import( /* webpackChunkName: "FinancePaymentQuery" */ 'page/finance/finance-payment-query/index.jsx'),
        loading,
    }),
    FinancePaymentQuerySave = Loadable({
        loader: () => import( /* webpackChunkName: "FinancePaymentQuerySave" */ 'page/finance/finance-payment-query/save.jsx'),
        loading,
    }),
    FinanceContractPaymentSave = Loadable({
        loader: () => import( /* webpackChunkName: "FinanceContractPaymentSave" */ 'page/finance/finance-contract-payment/index.jsx'),
        loading,
    })
class FinanceRouter extends React.Component {
    render() {
        return ( <
            Switch >
            <
            Route path = "/finance/finance-fund-day/index"
            component = {
                FinanceFundDay
            }
            /> <
            Route path = "/finance/finance-fund-day/save/:reportId?/:type?"
            component = {
                FinanceFundDaySave
            }
            />

            <
            Route path = "/finance/finance-month/index"
            component = {
                FinanceMonth
            }
            /> <
            Route path = "/finance/finance-month/save/:reportId?"
            component = {
                FinanceMonthSave
            }
            /> <
            Route path = "/finance/finance-month/detail/:reportId?"
            component = {
                FinanceMonthDetail
            }
            />

            <
            Route path = "/finance/finance-jine-month/index"
            component = {
                FinanceJinEMonth
            }
            /> <
            Route path = "/finance/finance-jine-month/save/:reportId?"
            component = {
                FinanceJinEMonthSave
            }
            /> <
            Route path = "/finance/finance-jine-month/detail/:reportId?"
            component = {
                FinanceJinEMonthDetail
            }
            />

            <
            Route path = "/finance/finance-payment-query/index"
            component = {
                FinancePaymentQuery
            }
            /> <
            Route path = "/finance/finance-payment-query/save/:reportId?"
            component = {
                FinancePaymentQuerySave
            }
            /> <
            Route path = "/finance/finance-payment-query/detail/:reportId?"
            component = {
                FinancePaymentQuerySave
            }
            />

            <
            Route path = "/finance/finance-contract-payment/index"
            component = {
                FinanceContractPaymentSave
            }
            /> <
            /Switch>
        )
    }
}
export default FinanceRouter