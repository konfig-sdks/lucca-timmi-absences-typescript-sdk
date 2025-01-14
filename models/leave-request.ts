/*
Timmi Absences API

Welcome on the documentation for Timmi Absences API.

The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CancellationRequest } from './cancellation-request';
import { LeavePeriod } from './leave-period';
import { LeaveRequestApproval } from './leave-request-approval';

/**
 * Absences from work, wether they are planned or not, are described in Lucca using three concepts : **LeaveRequests**, **LeavePeriods** and **Leaves**.  A **LeaveRequest** represent the request made by employees when planning time off. This resource is used for workflow purposes.  A **LeavePeriod** is the continuous period of absence requested by the employee or entered by HR. It is linked to a **LeaveRequest** if workflow applies.  A **Leave** is the subdivision of a **LeavePeriod**. There is one **Leave** per half-day of the **LeavePeriod**. Each **Leave** is linked to a **LeaveAccount**, which represent the type of leave (PTO, Sick Leave, Congés payés, RTT, etc).  ![Timmi Absences - UML](../assets/images/ROunRiCm34LtdeB8M206UeCucG9qABfq9aIs5Y9BBKNPGv6xrrOSH4CcKG-F_F-GZTJA621VVFmXfH5Te9pn3n2Fv2xVcahaKmf9yNFm9YjFog8tTWoBjB1UDSqjkZOd1ueygpUJYAP5OF0iwBow80XmItmJckH3VejaWpK-hE1Tr2S-y_BFHbRoCdHT1zTsRRFgLfgZQFLzFgNuvNKKVhfKTIQJwlRZFR9tBfLePtxIOQ9G.png)  **LeaveRequests** status are by default in the `pending_approval` state. **LeaveRequests** status can be `approved`, `denied`, `cancelled` or in the `cancellation_pending` state.  ## Fields
 * @export
 * @interface LeaveRequest
 */
export interface LeaveRequest {
    /**
     * Unique identifier for the LeaveRequest
     * @type {number}
     * @memberof LeaveRequest
     */
    'id'?: number;
    /**
     * Unique identifier for the attached LeavePeriod
     * @type {number}
     * @memberof LeaveRequest
     */
    'leavePeriodId'?: number;
    /**
     * 
     * @type {LeavePeriod}
     * @memberof LeaveRequest
     */
    'leavePeriod'?: LeavePeriod;
    /**
     * Status of the Leave request. Can be :   0 = PENDING_APPROVAL  2 = APPROVED  3 = DENIED  4 = CANCELLED  5 = CANCELLATION_PENDING 
     * @type {number}
     * @memberof LeaveRequest
     */
    'status'?: LeaveRequestStatusEnum;
    /**
     * Time at which the object was created
     * @type {string}
     * @memberof LeaveRequest
     */
    'creationDate'?: string;
    /**
     * Unique identifier for the next approver
     * @type {any}
     * @memberof LeaveRequest
     */
    'nextApproverId'?: any;
    /**
     * Unique identifier for the user that cancelled the Leave Request
     * @type {any}
     * @memberof LeaveRequest
     */
    'cancellationUserId'?: any;
    /**
     * Time at which the object was cancelled
     * @type {any}
     * @memberof LeaveRequest
     */
    'cancellationDate'?: any;
    /**
     * Has the value `true` for acitve Leave Request or the value `false` for cancelled Leave Request
     * @type {boolean}
     * @memberof LeaveRequest
     */
    'isActive'?: boolean;
    /**
     * 
     * @type {Array<LeaveRequestApproval>}
     * @memberof LeaveRequest
     */
    'approvals'?: Array<LeaveRequestApproval>;
    /**
     * 
     * @type {Array<CancellationRequest>}
     * @memberof LeaveRequest
     */
    'cancellationRequests'?: Array<CancellationRequest>;
}

type LeaveRequestStatusEnum = 0 | 2 | 3 | 4 | 5


