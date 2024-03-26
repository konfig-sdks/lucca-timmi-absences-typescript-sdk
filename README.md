<div align="center">

[![Visit Lucca](./header.png)](https://lucca-hr.com)

# [Lucca](https://lucca-hr.com)<a id="lucca"></a>

Welcome on the documentation for Timmi Absences API.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`luccatimmiabsences.imports.absenceBatchCreate`](#luccatimmiabsencesimportsabsencebatchcreate)
  * [`luccatimmiabsences.imports.createAbsencesBatch`](#luccatimmiabsencesimportscreateabsencesbatch)
  * [`luccatimmiabsences.imports.entitlementsBatchImport`](#luccatimmiabsencesimportsentitlementsbatchimport)
  * [`luccatimmiabsences.imports.getProgress`](#luccatimmiabsencesimportsgetprogress)
  * [`luccatimmiabsences.imports.importLeaveEntitlements`](#luccatimmiabsencesimportsimportleaveentitlements)
  * [`luccatimmiabsences.imports.replaceEntitlements`](#luccatimmiabsencesimportsreplaceentitlements)
  * [`luccatimmiabsences.imports.replaceEntitlements_0`](#luccatimmiabsencesimportsreplaceentitlements_0)
  * [`luccatimmiabsences.leaveRequests.approveDeny`](#luccatimmiabsencesleaverequestsapprovedeny)
  * [`luccatimmiabsences.leaveRequests.cancelRequest`](#luccatimmiabsencesleaverequestscancelrequest)
  * [`luccatimmiabsences.leaveRequests.getById`](#luccatimmiabsencesleaverequestsgetbyid)
  * [`luccatimmiabsences.leaveRequests.list`](#luccatimmiabsencesleaverequestslist)
  * [`luccatimmiabsences.leaves.cancelLeaveById`](#luccatimmiabsencesleavescancelleavebyid)
  * [`luccatimmiabsences.leaves.getApprovedList`](#luccatimmiabsencesleavesgetapprovedlist)
  * [`luccatimmiabsences.leaves.getById`](#luccatimmiabsencesleavesgetbyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Lucca&serviceName=Timmi%20Absences&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { LuccaTimmiAbsences } from "lucca-timmi-absences-typescript-sdk";

const luccatimmiabsences = new LuccaTimmiAbsences({
  // Defining the base path is optional and defaults to https://example.ilucca.net
  // basePath: "https://example.ilucca.net",
  apiKey: "API_KEY",
});

const absenceBatchCreateResponse =
  await luccatimmiabsences.imports.absenceBatchCreate({
    type: "csv",
    create: false,
    originalFileName: "import.csv",
  });

console.log(absenceBatchCreateResponse);
```

## Reference<a id="reference"></a>


### `luccatimmiabsences.imports.absenceBatchCreate`<a id="luccatimmiabsencesimportsabsencebatchcreate"></a>

Create absences in batch from a CSV file.

**Important notice: Absence imports cannot be cancelled.** 

In case of a mistake absences must be deleted manually through the interface or using the API (see Use cases). **Use import with care!**


**File format**

Type: CSV (with semicolon ";")

Encoding: UTF-8


All the following fields must be present with the field name in the header:

- legalEntity : establishment of the employee
- employeeNumber : employee number
- lastName : last name of the employee
- firstName : firstname of the employee
- accountId : absence account id in Timmi Absences (you can find it in the leave accounts admin page)
- startDate : absence start date (DD/MM/YYYY)
- flagStartDate : AM (if the absences starts in the morning) or PM (if the absence starts in the afternoon)
- endDate : absence end date (DD/MM/YYYY)
- flagEndDate : AM (if the absences ends at noon) or PM (if the absences ends in the afternoon)
- isApproved : yes or no. Compulsory if the absence type is subject to approval, optional otherwise.

**History**
Import history is available in the import module, including imports made using the API.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const absenceBatchCreateResponse =
  await luccatimmiabsences.imports.absenceBatchCreate({
    type: "csv",
    create: false,
    originalFileName: "import.csv",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'csv'`<a id="type-csv"></a>

Support CSV files only

##### originalFileName: `string`<a id="originalfilename-string"></a>

Filename

##### create: `boolean`<a id="create-boolean"></a>

Use `false` to simulate the import.

##### recredit: `boolean`<a id="recredit-boolean"></a>

Use `true` if absences should **not** be deducted from the user balance. Use `false` if absences should be deducted from the user balance. Note: if the absence type doesn’t have balance management, absence won’t impact the balance in any case.

##### synchronize: `boolean`<a id="synchronize-boolean"></a>

Use `true` to force synchronization of the absences in the sync webservice (sync to Exchange/0365, Google Calendar, Webhook or ADP GXP, depending on configuration). Use `false` to import absences without synchronizing absences.

##### overrideLeaves: `boolean`<a id="overrideleaves-boolean"></a>

Use `true` to allow replacing existing absences

#### 🔄 Return<a id="🔄-return"></a>

[ImportsAbsenceBatchCreateResponse](./models/imports-absence-batch-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/services/importLeavePeriods` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.imports.createAbsencesBatch`<a id="luccatimmiabsencesimportscreateabsencesbatch"></a>

Create absences in batch from a CSV file.

**Important notice: Absence imports cannot be cancelled.** 

In case of a mistake absences must be deleted manually through the interface or using the API (see Use cases). **Use import with care!**

**File format**

Content-Type: CSV. Column divider is semicolon ";". Line breaks between rows.

Encoding: UTF-8

All the following fields must be present with the field name in the header:

- legalEntity: Name of the establishment the employee belongs to.
- employeeNumber: Employee number.
- lastName: Family (last) name of the employee.
- firstName: Given (first) name of the employee.
- accountId: Identifier of the absence account in Timmi Absences (can be found in the leave accounts admin page).
- startDate: Start date of the absence, formatted as `DD/MM/YYYY`.
- flagStartDate: `"AM"` if the absence starts in the morning or `"PM"` if the absence starts in the afternoon.
- endDate: End date of the absence, formatted as `DD/MM/YYYY`.
- flagEndDate: `"AM"` if the absence ends at noon or `"PM"` if the absence ends in the afternoon.
- isApproved: `true` or `false`. Dictates whether the absence request should be created and already approved. 
  Required if the type of the absence requires approval, optional otherwise.

**History**
Import history is available in the import module. It includes imports made via the API.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAbsencesBatchResponse =
  await luccatimmiabsences.imports.createAbsencesBatch({
    originalFileName: "import.csv",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### create: `boolean`<a id="create-boolean"></a>

Use `false` to simulate the import.

##### recredit: `boolean`<a id="recredit-boolean"></a>

Use `true` if absences should **not** be deducted from the user balance. Use `false` if absences should be deducted from the user balance. Note: if the absence type doesn’t have balance management, absence won’t impact the balance in any case.

##### originalFileName: `string`<a id="originalfilename-string"></a>

Filename

##### synchronize: `boolean`<a id="synchronize-boolean"></a>

Use `true` to force synchronization of the absences in the sync webservice (sync to Exchange/0365, Google Calendar, Webhook or ADP GXP, depending on configuration). Use `false` to import absences without synchronizing absences.

##### async: `boolean`<a id="async-boolean"></a>

Use `true` if you want to import absences with the asynchronous processing (you have to request figgo/api/imports/v1.0/leavePeriods/{summaryId}/progress API to track the status). Use `false` if you want import absences with the synchronous processing (the response is sent when the file is fully imported).

##### files: `string`[]<a id="files-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ImportsCreateAbsencesBatchResponse](./models/imports-create-absences-batch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi-absences/api/imports/v1.0/leavePeriods` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.imports.entitlementsBatchImport`<a id="luccatimmiabsencesimportsentitlementsbatchimport"></a>

**Supported file formats:**
- CSV
  - "UTF-8" encoding
  - separator “;”
- XSLX

**Columns to fill in:**

Column name | Description
--- | ---
LegalEntityCode | Employee legal entity code
EmployeeNumber | Employee payroll number
LastName | Last name
FirstName | First name
Account number or name (one column per account) | Value to import for the account defined in the header.


*Remark:
A template file can be downloaded from the import page (Credit / Debit> A group of collaborators> File import).*

In the event of a malformed (or unrecognized) file, no data will be imported; the problems detected will be specified in the `globalErrors` field.

If successful, the number of imported lines is indicated by the “successLinesCount” field; the lines in error are detailed in the `lineErrors` field.


*Remarks:
Any import made by the API is of course available in the import history.
A simulation returns the same level of information, but does not trigger an import*

**List of errors handled**

Here is the list of fatal errors, which can be returned in the `globalErrors`:
- Unauthorized
- FileEmpty,
- FileExtensionNotSupported,
- ColumnsFormatNotSupported,
- AccountColumnMissing,
- ColumnNamesDistinct,
- LineErrorForbiddenInStrictMode,

The list of line processing errors, which can be restored in the `lineErrors`:
- AccountNotFound,
- AccountsNotFound,
- AccountColumnsProcessing,
- LegalEntityCodesNotFound,
- MissingValuesForAccount,
- AccountNotAvailableForUser,
- LegalEntityCodeRequired,
- EmployeeNumberRequired,
- LoginRequired,
- LoginNotFound,
- AccountNumberRequired,
- LegalEntityNotFound,
- EmployeeNumberNotExist,
- EmployeeNumberNotInLegalEntity,
- FistNameAndLastNameNotMatching,
- FistNameNotMatching,
- LastLameNotMatching,
- FistNameAndLastNameNotMatchingEmployeeNumber,
- FistNameNotMatchingEmployeeNumber,
- LastLameNotMatchingEmployeeNumber,
- FistNameAndLastNameNotMatchingLogin,
- FistNameNotMatchingLogin,
- LastLameNotMatchingLogin,
- DuplicatedLine,
- AmbiguousLegalEntity,
- ColumnNotExists,
- LegalEntityNameNotAvailable,
- AccountNameNotUnique

The list of import generation errors:
- UnableToCreditAccount


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const entitlementsBatchImportResponse =
  await luccatimmiabsences.imports.entitlementsBatchImport({
    strict: false,
    simulate: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### strict: `boolean`<a id="strict-boolean"></a>

In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.

##### simulate: `boolean`<a id="simulate-boolean"></a>

Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.

##### file: `string`<a id="file-string"></a>

##### description: `string`<a id="description-string"></a>

Description of the entries generated by the import (visible to users in the account details).

##### referenceDate: `string`<a id="referencedate-string"></a>

Reference date (text mode). Respect the format: yyyy-MM-ddThh: mm: ss

#### 🔄 Return<a id="🔄-return"></a>

[ImportsEntitlementsBatchImportResponse](./models/imports-entitlements-batch-import-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/figgo/api/public/services/v1.0/leaveEntitlementsImport` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.imports.getProgress`<a id="luccatimmiabsencesimportsgetprogress"></a>

Retrieve the progress of Import leaves API request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProgressResponse = await luccatimmiabsences.imports.getProgress({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### summaryId: `string`<a id="summaryid-string"></a>

Identifier of the import

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi-absences/api/imports/v1.0/leavePeriods/{summaryId}/progress` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.imports.importLeaveEntitlements`<a id="luccatimmiabsencesimportsimportleaveentitlements"></a>

**Supported file formats:**
- CSV
  - "UTF-8" encoding
  - separator “;”
- XSLX

**Columns to fill in:**

Column name | Description
--- | ---
LegalEntityCode | Employee legal entity code
EmployeeNumber | Employee payroll number
LastName | Last name
FirstName | First name
Account number or name (one column per account) | Value to import for the account defined in the header.


*Remark:
A template file can be downloaded from the import page (Credit / Debit> A group of collaborators> File import).*

In the event of a malformed (or unrecognized) file, no data will be imported; the problems detected will be specified in the `globalErrors` field.

If successful, the number of imported lines is indicated by the “successLinesCount” field; the lines in error are detailed in the `lineErrors` field.


*Remarks:
Any import made by the API is of course available in the import history.
A simulation returns the same level of information, but does not trigger an import*

**List of errors handled**

Here is the list of fatal errors, which can be returned in the `globalErrors`:
- Unauthorized
- FileEmpty,
- FileExtensionNotSupported,
- ColumnsFormatNotSupported,
- AccountColumnMissing,
- ColumnNamesDistinct,
- LineErrorForbiddenInStrictMode,

The list of line processing errors, which can be restored in the `lineErrors`:
- AccountNotFound,
- AccountsNotFound,
- AccountColumnsProcessing,
- LegalEntityCodesNotFound,
- MissingValuesForAccount,
- AccountNotAvailableForUser,
- LegalEntityCodeRequired,
- EmployeeNumberRequired,
- LoginRequired,
- LoginNotFound,
- AccountNumberRequired,
- LegalEntityNotFound,
- EmployeeNumberNotExist,
- EmployeeNumberNotInLegalEntity,
- FistNameAndLastNameNotMatching,
- FistNameNotMatching,
- LastLameNotMatching,
- FistNameAndLastNameNotMatchingEmployeeNumber,
- FistNameNotMatchingEmployeeNumber,
- LastLameNotMatchingEmployeeNumber,
- FistNameAndLastNameNotMatchingLogin,
- FistNameNotMatchingLogin,
- LastLameNotMatchingLogin,
- DuplicatedLine,
- AmbiguousLegalEntity,
- ColumnNotExists,
- LegalEntityNameNotAvailable,
- AccountNameNotUnique

The list of import generation errors:
- UnableToCreditAccount


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const importLeaveEntitlementsResponse =
  await luccatimmiabsences.imports.importLeaveEntitlements({
    strict: false,
    simulate: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### strict: `boolean`<a id="strict-boolean"></a>

In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.

##### simulate: `boolean`<a id="simulate-boolean"></a>

Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.

##### file: `string`<a id="file-string"></a>

##### description: `string`<a id="description-string"></a>

Description of the entries generated by the import (visible to users in the account details).

##### referenceDate: `string`<a id="referencedate-string"></a>

Reference date (text mode). Respect the format: yyyy-MM-ddThh: mm: ss

#### 🔄 Return<a id="🔄-return"></a>

[ImportsEntitlementsBatchImportResponse](./models/imports-entitlements-batch-import-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi-absences/api/public/services/v1.0/leaveEntitlementsImport` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.imports.replaceEntitlements`<a id="luccatimmiabsencesimportsreplaceentitlements"></a>

**Supported file formats:**
- CSV
  - "UTF-8" encoding
  - separator “;”
- XSLX

**Columns to fill in:**

Column name | Description
--- | ---
LegalEntityCode | Employee legal entity code
EmployeeNumber | Employee payroll number
LastName | Last name
FirstName | First name
Account number or name (one column per account) | Value to import for the account defined in the header.


*Remark:
A template file can be downloaded from the import page (Credit / Debit> A group of collaborators> File import).*

In the event of a malformed (or unrecognized) file, no data will be imported; the problems detected will be specified in the `globalErrors` field.

If successful, the number of imported lines is indicated by the “successLinesCount” field; the lines in error are detailed in the `lineErrors` field.


*Remarks:
Any import made by the API is of course available in the import history.
A simulation returns the same level of information, but does not trigger an import*

**List of errors handled**

Here is the list of fatal errors, which can be returned in the `globalErrors`:
- Unauthorized
- FileEmpty,
- FileExtensionNotSupported,
- ColumnsFormatNotSupported,
- AccountColumnMissing,
- ColumnNamesDistinct,
- LineErrorForbiddenInStrictMode,

The list of line processing errors, which can be restored in the `lineErrors`:
- AccountNotFound,
- AccountsNotFound,
- AccountColumnsProcessing,
- LegalEntityCodesNotFound,
- MissingValuesForAccount,
- AccountNotAvailableForUser,
- LegalEntityCodeRequired,
- EmployeeNumberRequired,
- LoginRequired,
- LoginNotFound,
- AccountNumberRequired,
- LegalEntityNotFound,
- EmployeeNumberNotExist,
- EmployeeNumberNotInLegalEntity,
- FistNameAndLastNameNotMatching,
- FistNameNotMatching,
- LastLameNotMatching,
- FistNameAndLastNameNotMatchingEmployeeNumber,
- FistNameNotMatchingEmployeeNumber,
- LastLameNotMatchingEmployeeNumber,
- FistNameAndLastNameNotMatchingLogin,
- FistNameNotMatchingLogin,
- LastLameNotMatchingLogin,
- DuplicatedLine,
- AmbiguousLegalEntity,
- ColumnNotExists,
- LegalEntityNameNotAvailable,
- AccountNameNotUnique

The list of import generation errors:
- UnableToCreditAccount


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceEntitlementsResponse =
  await luccatimmiabsences.imports.replaceEntitlements({
    strict: false,
    simulate: false,
    EntryTypes: "AutoAccruals,ManualAccruals,Regularizations",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### strict: `boolean`<a id="strict-boolean"></a>

In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.

##### simulate: `boolean`<a id="simulate-boolean"></a>

Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.

##### file: `string`<a id="file-string"></a>

##### description: `string`<a id="description-string"></a>

Description of the entries generated by the import (visible to users in the account details).

##### referenceDate: `string`<a id="referencedate-string"></a>

Reference date (text mode). Respect the format: yyyy-MM-ddThh: mm: ss

##### entryTypes: `string`<a id="entrytypes-string"></a>

Types of entries to take into account, separated by commas, from the following list: AutoAccruals, ManualAccruals, Regularisations, EntitlementsImport, Seniority, Fractionnement, TimeSavings, Comp  By default: `AutoAccruals, ManualAccruals, Regularizations` which correspond to the main cases of acquisition (automatic acquisition, manual adjustments, regularisations).

#### 🔄 Return<a id="🔄-return"></a>

[ImportsEntitlementsBatchImportResponse](./models/imports-entitlements-batch-import-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/figgo/api/public/services/v1.0/leaveEntitlementsReplace` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.imports.replaceEntitlements_0`<a id="luccatimmiabsencesimportsreplaceentitlements_0"></a>

**Supported file formats:**
- CSV
  - "UTF-8" encoding
  - separator “;”
- XSLX

**Columns to fill in:**

Column name | Description
--- | ---
LegalEntityCode | Employee legal entity code
EmployeeNumber | Employee payroll number
LastName | Last name
FirstName | First name
Account number or name (one column per account) | Value to import for the account defined in the header.


*Remark:
A template file can be downloaded from the import page (Credit / Debit> A group of collaborators> File import).*

In the event of a malformed (or unrecognized) file, no data will be imported; the problems detected will be specified in the `globalErrors` field.

If successful, the number of imported lines is indicated by the “successLinesCount” field; the lines in error are detailed in the `lineErrors` field.


*Remarks:
Any import made by the API is of course available in the import history.
A simulation returns the same level of information, but does not trigger an import*

**List of errors handled**

Here is the list of fatal errors, which can be returned in the `globalErrors`:
- Unauthorized
- FileEmpty,
- FileExtensionNotSupported,
- ColumnsFormatNotSupported,
- AccountColumnMissing,
- ColumnNamesDistinct,
- LineErrorForbiddenInStrictMode,

The list of line processing errors, which can be restored in the `lineErrors`:
- AccountNotFound,
- AccountsNotFound,
- AccountColumnsProcessing,
- LegalEntityCodesNotFound,
- MissingValuesForAccount,
- AccountNotAvailableForUser,
- LegalEntityCodeRequired,
- EmployeeNumberRequired,
- LoginRequired,
- LoginNotFound,
- AccountNumberRequired,
- LegalEntityNotFound,
- EmployeeNumberNotExist,
- EmployeeNumberNotInLegalEntity,
- FistNameAndLastNameNotMatching,
- FistNameNotMatching,
- LastLameNotMatching,
- FistNameAndLastNameNotMatchingEmployeeNumber,
- FistNameNotMatchingEmployeeNumber,
- LastLameNotMatchingEmployeeNumber,
- FistNameAndLastNameNotMatchingLogin,
- FistNameNotMatchingLogin,
- LastLameNotMatchingLogin,
- DuplicatedLine,
- AmbiguousLegalEntity,
- ColumnNotExists,
- LegalEntityNameNotAvailable,
- AccountNameNotUnique

The list of import generation errors:
- UnableToCreditAccount


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceEntitlements_0Response =
  await luccatimmiabsences.imports.replaceEntitlements_0({
    strict: false,
    simulate: false,
    EntryTypes: "AutoAccruals,ManualAccruals,Regularizations",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### strict: `boolean`<a id="strict-boolean"></a>

In strict mode, if the import has errors, nothing is imported. Without strict mode, the lines in error are ignored and those in success are imported.

##### simulate: `boolean`<a id="simulate-boolean"></a>

Allows you to simulate the import. In this case, the response indicates the theoretical result of the import without any data being recorded.

##### file: `string`<a id="file-string"></a>

##### description: `string`<a id="description-string"></a>

Description of the entries generated by the import (visible to users in the account details).

##### referenceDate: `string`<a id="referencedate-string"></a>

Reference date (text mode). Respect the format: yyyy-MM-ddThh: mm: ss

##### entryTypes: `string`<a id="entrytypes-string"></a>

Types of entries to take into account, separated by commas, from the following list: AutoAccruals, ManualAccruals, Regularisations, EntitlementsImport, Seniority, Fractionnement, TimeSavings, Comp  By default: `AutoAccruals, ManualAccruals, Regularizations` which correspond to the main cases of acquisition (automatic acquisition, manual adjustments, regularisations).

#### 🔄 Return<a id="🔄-return"></a>

[ImportsEntitlementsBatchImportResponse](./models/imports-entitlements-batch-import-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timmi-absences/api/public/services/v1.0/leaveEntitlementsReplace` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.leaveRequests.approveDeny`<a id="luccatimmiabsencesleaverequestsapprovedeny"></a>

Approve or deny a single Leave Request by its unique identifier

Only the Leave Requests pending approval can be approved or denied.

A comment is required to deny a Leave Request.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveDenyResponse = await luccatimmiabsences.leaveRequests.approveDeny(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### leaveRequestId: `string`<a id="leaverequestid-string"></a>

##### approved: `boolean`<a id="approved-boolean"></a>

##### comment: `any`<a id="comment-any"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/leaveRequests/{leaveRequestId}/approvals` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.leaveRequests.cancelRequest`<a id="luccatimmiabsencesleaverequestscancelrequest"></a>

Request to cancel a single Leave Request by its unique identifier

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelRequestResponse =
  await luccatimmiabsences.leaveRequests.cancelRequest({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### leaveRequestId: `string`<a id="leaverequestid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/leaveRequests/{leaveRequestId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.leaveRequests.getById`<a id="luccatimmiabsencesleaverequestsgetbyid"></a>

Retrieve a single Leave Request by its unique identifier

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await luccatimmiabsences.leaveRequests.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### leaveRequestId: `string`<a id="leaverequestid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeaveRequestsGetByIdResponse](./models/leave-requests-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/leaveRequests/{leaveRequestId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.leaveRequests.list`<a id="luccatimmiabsencesleaverequestslist"></a>

Retrieve a list of Leave Requests

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await luccatimmiabsences.leaveRequests.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[LeaveRequestsListResponse](./models/leave-requests-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/leaveRequests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.leaves.cancelLeaveById`<a id="luccatimmiabsencesleavescancelleavebyid"></a>

Cancel a single Leave by its unique identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelLeaveByIdResponse = await luccatimmiabsences.leaves.cancelLeaveById(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### leaveId: `string`<a id="leaveid-string"></a>

Identifier of the leave.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/leaves/{leaveId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.leaves.getApprovedList`<a id="luccatimmiabsencesleavesgetapprovedlist"></a>

Retrieve a list of approved leaves for one or several users on a given period.

The `leavePeriod.ownerId` query parameter is required ans is used to: 

- retrieve Leaves of a specific user: `?leavePeriod.ownerId=5`
- retrieve Leaves of several users: `?leavePeriod.ownerId=5,6`
- retrieve Leaves of a specific group of users: `?leavePeriod.owner.departmentId=3`

The `date` query parameter can operate comparisons with a given date-time value:

- `?date=2021-01-01`: strict equality.
- `?date=since,2021-01-01`: greater than or equal.
- `?date=until,2021-01-01`: lower than or equal.
- `?date=between,2021-01-01,2021-01-31`: comprised between two dates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getApprovedListResponse = await luccatimmiabsences.leaves.getApprovedList(
  {
    paging: "100,0",
    leavePeriodOwnerId: [null],
    date: "date_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paging: `string`<a id="paging-string"></a>

{offset},{limit}. Defaults to 0,1000.

##### leavePeriodOwnerId: `any`<a id="leaveperiodownerid-any"></a>
                          `any`[]

Employee\'s identifier

##### date: `string`<a id="date-string"></a>

{comparator},{date-time}

##### leaveAccountId: `string`<a id="leaveaccountid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LeavesGetApprovedListResponse](./models/leaves-get-approved-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/leaves` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `luccatimmiabsences.leaves.getById`<a id="luccatimmiabsencesleavesgetbyid"></a>

Retrieve a single Leave by its unique identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await luccatimmiabsences.leaves.getById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### leaveId: `string`<a id="leaveid-string"></a>

Identifier of the leave.

#### 🔄 Return<a id="🔄-return"></a>

[LeavesGetByIdResponse](./models/leaves-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/v3/leaves/{leaveId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
