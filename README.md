# Wallet App (React + TypeScript)

Mobile-first wallet demo with two screens: TransactionList and TransactionDetail. Data is loaded from a local JSON file and icons via Font Awesome.

## Features
- React + TypeScript + Vite
- Two screens with routing
  - "/" TransactionList
  - "/transaction/:id" TransactionDetail
- Mobile UI with cards and list
- Daily points computed by meteorological seasons: Mar 1, Jun 1, Sep 1, Dec 1
- Test data in `src/data/transactions.json`
- Font Awesome icons

## Run
```pwsh
# Install deps
npm install

# Start dev server on http://localhost:5173
npm run dev
```

## Build
```pwsh
npm run build
npm run preview
```

 

## Notes & Assumptions
- Card balance is randomized per session; available = 1500 - balance.
- Daily points: day1=2, day2=3, dayN = day(N-2) + 0.6*day(N-1), rounded each day; shown as `Nk` if >= 1000.
- For dates: last 7 days show weekday name; older entries show locale date.
- Icons use a single generic store icon with random dark background per item.

## Project Structure
- `src/components/*` UI components
- `src/routes/*` screens
- `src/utils/*` helpers (formatting, color, points)
- `src/data/transactions.json` data
# testPaymentApp
