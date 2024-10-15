This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). For the styling, I'm using TailwindCSS.

## Getting Started

After cloning the repo, please run `npm i` to install the dependencies.

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the test:

```
npm run test
```

## Code Sample Explanation

I created a form component called `InputForm`, that requests basic user info. Upon submitting the user information, a component called `NameCard` will display the user info below the form. Usually, the user info would be display on another route/page like `settings` or `profile`.

I created a simple test to start in the `__tests__` folder in the `inputForm.test.tsx` file

**please keep in mind that there is no form validation. I wasn't sure if this was going to be an added on iteration, and also didn't want there to be too much code**
