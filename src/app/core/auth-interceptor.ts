import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('👉 API URL:', req.url);
  console.log('👉 Before headers:', req.headers);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImJpcnRoZGF0ZSI6IiIsImNoYXJhY3RlcmlzdGljX3R5cGUiOiLguKvguJnguYjguKfguKLguJvguI_guLTguJrguLHguJXguLTguIHguLLguKMiLCJlbWFpbCI6InRhc3RhLnZlaEBvbmUudGgiLCJleGVjdXRpdmVfZnVsbF9uYW1lX3RoIjoi4LiZ4Liy4Lii4LiX4LiU4Liq4Lit4Lia4LiCIOC5gOC4lOC4n-C4nuC4suC4q-C4meC4sCIsImV4ZWN1dGl2ZV9pZCI6IjNjNGQyNGVlLWMxZTgtNDk3Mi04MDJjLTI0ZjQyNDlkNmY3YyIsImZ1bGxfbmFtZV90aCI6IuC4meC4suC4ouC4l-C4lOC4quC4reC4muC4gSDguYDguJTguJ_guJ7guLLguKvguJnguLAiLCJoZWFsdGhfem9uZSI6IjEzIiwiaWRfbGluZSI6IiIsImlzX2ZpcnN0X3RpbWUiOmZhbHNlLCJuYXRpb25hbF9pZF9leGlzdHMiOnRydWUsIm9wZXJhdGlvbl9pZCI6IjVlOWNjYjJjLTNjZmEtNDM3NC1hOThjLWNkNTM5YjcxMjYyMCIsIm9wZXJhdG9yX2lkIjoiN2Y4ZTU2MTEtYTgwYS00NTYxLTg4OTMtNTI1NzkxZGIxM2NkIiwicGVybWlzc2lvbiI6IuC5gOC4iOC5ieC4suC4q-C4meC5ieC4suC4l-C4teC5iOC4q-C4meC5iOC4p-C4ouC4h-C4suC4mSIsInBob25lX251bWJlciI6IjA2MTExMTExMTEiLCJwb3NpdGlvbiI6IuC5geC4nuC4l-C4ouC5jOC4l-C4seC5iOC4p-C5hOC4myIsInBvc2l0aW9uX290aGVyIjoiIiwicHJvdmluY2UiOiLguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMifSwiZXhwIjoxNzgyMjg3NTQ2LCJvcGVyYXRpb25faWQiOiI1ZTljY2IyYy0zY2ZhLTQzNzQtYTk4Yy1jZDUzOWI3MTI2MjAiLCJvcGVyYXRvcl9pZCI6IjdmOGU1NjExLWE4MGEtNDU2MS04ODkzLTUyNTc5MWRiMTNjZCJ9.Djngfss04SW3WI-1vjv-0nYGDDFjxeLrtDcmFdd0Jfg';

  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log('👉 After headers:', cloned.headers);

  return next(cloned);
};