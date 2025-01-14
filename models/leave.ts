/*
Timmi Absences API

Welcome on the documentation for Timmi Absences API.

The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LeaveAccount } from './leave-account';
import { LeavePeriod } from './leave-period';

/**
 * Absences from work, wether they are planned or not, are described in Lucca using three concepts : **LeaveRequests**, **LeavePeriods** and **Leaves**.  A **LeaveRequest** represent the request made by employees when planning time off. This resource is used for workflow purposes.  A **LeavePeriod** is the continuous period of absence requested by the employee or entered by HR. It is linked to a **LeaveRequest** if workflow applies.  A **Leave** is the subdivision of a **LeavePeriod**. There is one **Leave** per half-day of the **LeavePeriod**. Each **Leave** is linked to a **LeaveAccount**, which represent the type of leave (PTO, Sick Leave, Congés payés, RTT, etc).  ![Timmi Absences - UML](https://stoplight.io/api/v1/projects/cHJqOjEwNjgxNg/images/6yaK9GNTQ08)  There can only be one **Leave** per half-day. This prevents duplicates. For **Leaves** expressed in hours (as opposed to **Leaves** in days), the duration of the **Leave** is stored in the value field of the **Leave**. The previous constraint implies that there can only be one type of **Leave** per half-day. This issue is solved in the next version of the API.  ## Fields
 * @export
 * @interface Leave
 */
export interface Leave {
    /**
     * Unique identifier for the Leave
     * @type {string}
     * @memberof Leave
     */
    'id': string;
    /**
     * Date of the leave in ISO format `yyyy-mm-dd`
     * @type {string}
     * @memberof Leave
     */
    'date': string;
    /**
     * Has the value `true` for morning or the value `false` for afternoon
     * @type {boolean}
     * @memberof Leave
     */
    'isAm': boolean;
    /**
     * Unique identifier for the attached LeaveAccount
     * @type {number}
     * @memberof Leave
     */
    'leaveAccountId': number;
    /**
     * 
     * @type {LeaveAccount}
     * @memberof Leave
     */
    'leaveAccount'?: LeaveAccount;
    /**
     * Unique identifier for the attached LeavePeriod
     * @type {number}
     * @memberof Leave
     */
    'leavePeriodId': number;
    /**
     * 
     * @type {LeavePeriod}
     * @memberof Leave
     */
    'leavePeriod'?: LeavePeriod;
    /**
     * Leave duration in hours
     * @type {any}
     * @memberof Leave
     */
    'value'?: any;
    /**
     * Time at which the object was created
     * @type {string}
     * @memberof Leave
     */
    'creationDate'?: string;
    /**
     * Has the value `true` when the Leave exists (for pending or confirmed LeavePeriods), or the value `false` when it has been deleted (for canceled or denied LeaveRequests). 
     * @type {boolean}
     * @memberof Leave
     */
    'isActive'?: boolean;
    /**
     * Time at which the request was canceled
     * @type {any}
     * @memberof Leave
     */
    'cancellationDate'?: any;
    /**
     * Unique identifier for the user who canceled the request 
     * @type {any}
     * @memberof Leave
     */
    'cancellationUserId'?: any;
    /**
     * Comments
     * @type {string}
     * @memberof Leave
     */
    'comment'?: string;
}

