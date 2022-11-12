## next.config.js

This file is used to custom advanced configuration of yours Next.js project.

The Following configs are most commom used by Next developers:

1. rewrites: Re-defined a route

## Next router

- Index routes: `pages/index.ts` => `/`
- Nested routes: `pages/user/index.ts` => `/user`
- Dynamic route segment: `pages/user/[id].ts` => `/user/:id`
- `pages/user/[...all].ts` => `/user/*`

## Incremnetal Static Regeneration (ISR)

- ISR is faster then SSG because the pages is generated at build, your backend serves only statics files

## React Query

## MUI

CSS Selector

```Typescript
const StyledInput = styled(InputBase)(({ theme }: any) => ({
  width: '70px',
  border: '1px solid',

  '& .MuiInputBase-input': {
    padding: '0 !important'
  }


  '&.class-name' :  both of two classes
  '& .class-name' :  nested class-name

}));
```
