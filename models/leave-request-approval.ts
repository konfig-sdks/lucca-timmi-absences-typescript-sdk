/*
Timmi Absences API

Welcome on the documentation for Timmi Absences API.

The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * ## Fields
 * @export
 * @interface LeaveRequestApproval
 */
export interface LeaveRequestApproval {
    /**
     * Unique identifier for the LeaveRequestApproval
     * @type {number}
     * @memberof LeaveRequestApproval
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof LeaveRequestApproval
     */
    'date'?: string;
    /**
     * Unique identifier for the approver
     * @type {number}
     * @memberof LeaveRequestApproval
     */
    'approverId'?: number;
    /**
     * 0 = PENDING_APPROVAL  2 = APPROVED  3 = DENIED  4 = CANCELLED  5 = CANCELLATION_PENDING 
     * @type {number}
     * @memberof LeaveRequestApproval
     */
    'substitutedApproverId'?: LeaveRequestApprovalSubstitutedApproverIdEnum;
    /**
     * Has the value `true` for approved LeaveRequest or the value `false` for LeaveRequest pending approval
     * @type {boolean}
     * @memberof LeaveRequestApproval
     */
    'approved'?: boolean;
    /**
     * Comments
     * @type {string}
     * @memberof LeaveRequestApproval
     */
    'comment'?: string;
}

type LeaveRequestApprovalSubstitutedApproverIdEnum = 0 | 2 | 3 | 4 | 5


