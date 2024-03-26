type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v3/services/importLeavePeriods-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'originalFileName'
            },
            {
                name: 'create'
            },
            {
                name: 'recredit'
            },
            {
                name: 'synchronize'
            },
            {
                name: 'overrideLeaves'
            },
        ]
    },
    '/timmi-absences/api/imports/v1.0/leavePeriods-POST': {
        parameters: [
            {
                name: 'create'
            },
            {
                name: 'recredit'
            },
            {
                name: 'originalFileName'
            },
            {
                name: 'synchronize'
            },
            {
                name: 'async'
            },
            {
                name: 'files'
            },
        ]
    },
    '/figgo/api/public/services/v1.0/leaveEntitlementsImport-POST': {
        parameters: [
            {
                name: 'strict'
            },
            {
                name: 'simulate'
            },
            {
                name: 'File'
            },
            {
                name: 'Description'
            },
            {
                name: 'ReferenceDate'
            },
        ]
    },
    '/timmi-absences/api/imports/v1.0/leavePeriods/{summaryId}/progress-GET': {
        parameters: [
            {
                name: 'summaryId'
            },
        ]
    },
    '/timmi-absences/api/public/services/v1.0/leaveEntitlementsImport-POST': {
        parameters: [
            {
                name: 'strict'
            },
            {
                name: 'simulate'
            },
            {
                name: 'File'
            },
            {
                name: 'Description'
            },
            {
                name: 'ReferenceDate'
            },
        ]
    },
    '/figgo/api/public/services/v1.0/leaveEntitlementsReplace-POST': {
        parameters: [
            {
                name: 'strict'
            },
            {
                name: 'simulate'
            },
            {
                name: 'File'
            },
            {
                name: 'Description'
            },
            {
                name: 'ReferenceDate'
            },
            {
                name: 'EntryTypes'
            },
        ]
    },
    '/timmi-absences/api/public/services/v1.0/leaveEntitlementsReplace-POST': {
        parameters: [
            {
                name: 'strict'
            },
            {
                name: 'simulate'
            },
            {
                name: 'File'
            },
            {
                name: 'Description'
            },
            {
                name: 'ReferenceDate'
            },
            {
                name: 'EntryTypes'
            },
        ]
    },
    '/api/v3/leaveRequests/{leaveRequestId}/approvals-POST': {
        parameters: [
            {
                name: 'leaveRequestId'
            },
            {
                name: 'approved'
            },
            {
                name: 'comment'
            },
        ]
    },
    '/api/v3/leaveRequests/{leaveRequestId}-DELETE': {
        parameters: [
            {
                name: 'leaveRequestId'
            },
        ]
    },
    '/api/v3/leaveRequests/{leaveRequestId}-GET': {
        parameters: [
            {
                name: 'leaveRequestId'
            },
        ]
    },
    '/api/v3/leaveRequests-GET': {
        parameters: [
        ]
    },
    '/api/v3/leaves/{leaveId}-DELETE': {
        parameters: [
            {
                name: 'leaveId'
            },
        ]
    },
    '/api/v3/leaves-GET': {
        parameters: [
            {
                name: 'paging'
            },
            {
                name: 'leavePeriod.ownerId'
            },
            {
                name: 'date'
            },
            {
                name: 'leaveAccountId'
            },
        ]
    },
    '/api/v3/leaves/{leaveId}-GET': {
        parameters: [
            {
                name: 'leaveId'
            },
        ]
    },
}