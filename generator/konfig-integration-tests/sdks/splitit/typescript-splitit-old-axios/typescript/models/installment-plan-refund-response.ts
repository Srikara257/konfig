/*
splitit-web-api-v3

Splitit's Web API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RefundSummary } from './refund-summary';

/**
 * 
 * @export
 * @interface InstallmentPlanRefundResponse
 */
export interface InstallmentPlanRefundResponse {
    /**
     * 
     * @type {string}
     * @memberof InstallmentPlanRefundResponse
     */
    'RefundId'?: string;
    /**
     * 
     * @type {string}
     * @memberof InstallmentPlanRefundResponse
     */
    'InstallmentPlanNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof InstallmentPlanRefundResponse
     */
    'Currency'?: string;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanRefundResponse
     */
    'NonCreditRefundAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof InstallmentPlanRefundResponse
     */
    'CreditRefundAmount'?: number;
    /**
     * 
     * @type {RefundSummary}
     * @memberof InstallmentPlanRefundResponse
     */
    'Summary'?: RefundSummary;
}

