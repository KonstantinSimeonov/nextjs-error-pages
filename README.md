## Next error pages
Taking a semi-educated stab at custom nextjs error pages for status codes other than 404 (next handles that at least). The premise:
- Allow setting status code in `getServerSideProps` to 400/403/500/etc
- Have default pages for those statuses
  - No redirects (a viable choice unless one needs custom error pages)
  - Support setting a dynamic message from `getServerSideProps` - `Forbidden(context, "You cannot access the calendar of another user")`
- Opt-in custom error pages
  - Can be defined in the same file as the page component
  - Opt-in by doing `MyPageComponent.Forbidden = function Forbidden({ reason }) { return ... }`
  - Require as little boilerplate as possible


### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
