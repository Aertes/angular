import { ROUTER_PROVIDERS_COMMON } from './router_providers_common';
import { BrowserPlatformLocation } from 'angular2/src/platform/browser/location/browser_platform_location';
import { PlatformLocation } from 'angular2/platform/common';
export const ROUTER_PROVIDERS = [
    ROUTER_PROVIDERS_COMMON,
    /*@ts2dart_Provider*/ { provide: PlatformLocation, useClass: BrowserPlatformLocation },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtM0E2bnB2VGMudG1wL2FuZ3VsYXIyL3NyYy9hbHRfcm91dGVyL3JvdXRlcl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDJCQUEyQjtPQUMxRCxFQUNMLHVCQUF1QixFQUN4QixNQUFNLGtFQUFrRTtPQUNsRSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEJBQTBCO0FBRXpELE9BQU8sTUFBTSxnQkFBZ0IsR0FBNEI7SUFDdkQsdUJBQXVCO0lBQ3ZCLHFCQUFxQixDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztDQUNyRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtST1VURVJfUFJPVklERVJTX0NPTU1PTn0gZnJvbSAnLi9yb3V0ZXJfcHJvdmlkZXJzX2NvbW1vbic7XG5pbXBvcnQge1xuICBCcm93c2VyUGxhdGZvcm1Mb2NhdGlvblxufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9sb2NhdGlvbi9icm93c2VyX3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IFJPVVRFUl9QUk9WSURFUlM6IGFueVtdID0gLypAdHMyZGFydF9jb25zdCovW1xuICBST1VURVJfUFJPVklERVJTX0NPTU1PTixcbiAgLypAdHMyZGFydF9Qcm92aWRlciovIHtwcm92aWRlOiBQbGF0Zm9ybUxvY2F0aW9uLCB1c2VDbGFzczogQnJvd3NlclBsYXRmb3JtTG9jYXRpb259LFxuXTtcbiJdfQ==